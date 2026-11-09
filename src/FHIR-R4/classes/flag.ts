/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export class Flag {
  resourceType: 'Flag';
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
  /** Business identifier (0..*) */
  identifier?: Array<Identifier>;
  /** active | inactive | entered-in-error (1..1) */
  status?: Flag.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Clinical, administrative, etc. (0..*) */
  category?: Array<CodeableConcept>;
  /** Coded or textual message to display to user (1..1) */
  code: CodeableConcept;
  /** Who/What is flag about? (1..1) */
  subject: Reference;
  /** Time period when flag is active (0..1) */
  period?: Period;
  /** Alert relevant during encounter (0..1) */
  encounter?: Reference;
  /** Flag creator (0..1) */
  author?: Reference;
}

export namespace Flag {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/flag-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}
