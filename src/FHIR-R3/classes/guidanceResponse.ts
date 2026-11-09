/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { DataRequirement } from './dataRequirement';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for GuidanceResponse Resource
 */
export class GuidanceResponse {
  resourceType: 'GuidanceResponse';
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
  /** The id of the request associated with this response, if any (0..1) */
  requestId?: string;
  /** Id and extensions of the primitive `requestId`. */
  _requestId?: Element;
  /** Business identifier (0..1) */
  identifier?: Identifier;
  /** A reference to a knowledge module (1..1) */
  module: Reference;
  /** success | data-requested | data-required | in-progress | failure | entered-in-error (1..1) */
  status?: GuidanceResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Patient the request was performed for (0..1) */
  subject?: Reference;
  /** Encounter or Episode during which the response was returned (0..1) */
  context?: Reference;
  /** When the guidance response was processed (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** Device returning the guidance (0..1) */
  performer?: Reference;
  /** Reason for the response (0..1) */
  reasonCodeableConcept?: CodeableConcept;
  /** Reason for the response (0..1) */
  reasonReference?: Reference;
  /** Additional notes about the response (0..*) */
  note?: Array<Annotation>;
  /** Messages resulting from the evaluation of the artifact or artifacts (0..*) */
  evaluationMessage?: Array<Reference>;
  /** The output parameters of the evaluation, if any (0..1) */
  outputParameters?: Reference;
  /** Proposed actions, if any (0..1) */
  result?: Reference;
  /** Additional required data (0..*) */
  dataRequirement?: Array<DataRequirement>;
}

export namespace GuidanceResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/guidance-response-status */
  export type StatusEnum =
    'success' | 'data-requested' | 'data-required' | 'in-progress' | 'failure' | 'entered-in-error';
  export const StatusEnum = {
    Success: 'success' as StatusEnum,
    DataRequested: 'data-requested' as StatusEnum,
    DataRequired: 'data-required' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    Failure: 'failure' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}
