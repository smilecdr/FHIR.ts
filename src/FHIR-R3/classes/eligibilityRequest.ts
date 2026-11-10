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
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for EligibilityRequest Resource
 */
export class EligibilityRequest {
  resourceType: 'EligibilityRequest';
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
  status?: EligibilityRequest.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Desired processing priority (0..1) */
  priority?: CodeableConcept;
  /** The subject of the Products and Services (0..1) */
  patient?: Reference;
  /** Estimated date or dates of Service (0..1) */
  servicedDate?: string;
  /** Id and extensions of the primitive `servicedDate`. */
  _servicedDate?: Element;
  /** Estimated date or dates of Service (0..1) */
  servicedPeriod?: Period;
  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Author (0..1) */
  enterer?: Reference;
  /** Responsible practitioner (0..1) */
  provider?: Reference;
  /** Responsible organization (0..1) */
  organization?: Reference;
  /** Target (0..1) */
  insurer?: Reference;
  /** Servicing Facility (0..1) */
  facility?: Reference;
  /** Insurance or medical plan (0..1) */
  coverage?: Reference;
  /** Business agreement (0..1) */
  businessArrangement?: string;
  /** Id and extensions of the primitive `businessArrangement`. */
  _businessArrangement?: Element;
  /** Type of services covered (0..1) */
  benefitCategory?: CodeableConcept;
  /** Detailed services covered within the type (0..1) */
  benefitSubCategory?: CodeableConcept;
}

export namespace EligibilityRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/fm-status */
  export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    Draft: 'draft' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
  };
}
