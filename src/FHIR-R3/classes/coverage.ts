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
 * Base StructureDefinition for Coverage Resource
 */
export class Coverage {
  resourceType: 'Coverage';
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
  /** The primary coverage ID (0..*) */
  identifier?: Array<Identifier>;
  /** active | cancelled | draft | entered-in-error (0..1) */
  status?: Coverage.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Type of coverage such as medical or accident (0..1) */
  type?: CodeableConcept;
  /** Owner of the policy (0..1) */
  policyHolder?: Reference;
  /** Subscriber to the policy (0..1) */
  subscriber?: Reference;
  /** ID assigned to the Subscriber (0..1) */
  subscriberId?: string;
  /** Id and extensions of the primitive `subscriberId`. */
  _subscriberId?: Element;
  /** Plan Beneficiary (0..1) */
  beneficiary?: Reference;
  /** Beneficiary relationship to the Subscriber (0..1) */
  relationship?: CodeableConcept;
  /** Coverage start and end dates (0..1) */
  period?: Period;
  /** Identifier for the plan or agreement issuer (0..*) */
  payor?: Array<Reference>;
  /** Additional coverage classifications (0..1) */
  grouping?: CoverageGrouping;
  /** Dependent number (0..1) */
  dependent?: string;
  /** Id and extensions of the primitive `dependent`. */
  _dependent?: Element;
  /** The plan instance or sequence counter (0..1) */
  sequence?: string;
  /** Id and extensions of the primitive `sequence`. */
  _sequence?: Element;
  /** Relative order of the coverage (0..1) */
  order?: number;
  /** Id and extensions of the primitive `order`. */
  _order?: Element;
  /** Insurer network (0..1) */
  network?: string;
  /** Id and extensions of the primitive `network`. */
  _network?: Element;
  /** Contract details (0..*) */
  contract?: Array<Reference>;
}

export namespace Coverage {
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
 * Additional coverage classifications
 */
export class CoverageGrouping {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** An identifier for the group (0..1) */
  group?: string;
  /** Id and extensions of the primitive `group`. */
  _group?: Element;
  /** Display text for an identifier for the group (0..1) */
  groupDisplay?: string;
  /** Id and extensions of the primitive `groupDisplay`. */
  _groupDisplay?: Element;
  /** An identifier for the subsection of the group (0..1) */
  subGroup?: string;
  /** Id and extensions of the primitive `subGroup`. */
  _subGroup?: Element;
  /** Display text for the subsection of the group (0..1) */
  subGroupDisplay?: string;
  /** Id and extensions of the primitive `subGroupDisplay`. */
  _subGroupDisplay?: Element;
  /** An identifier for the plan (0..1) */
  plan?: string;
  /** Id and extensions of the primitive `plan`. */
  _plan?: Element;
  /** Display text for the plan (0..1) */
  planDisplay?: string;
  /** Id and extensions of the primitive `planDisplay`. */
  _planDisplay?: Element;
  /** An identifier for the subsection of the plan (0..1) */
  subPlan?: string;
  /** Id and extensions of the primitive `subPlan`. */
  _subPlan?: Element;
  /** Display text for the subsection of the plan (0..1) */
  subPlanDisplay?: string;
  /** Id and extensions of the primitive `subPlanDisplay`. */
  _subPlanDisplay?: Element;
  /** An identifier for the class (0..1) */
  class?: string;
  /** Id and extensions of the primitive `class`. */
  _class?: Element;
  /** Display text for the class (0..1) */
  classDisplay?: string;
  /** Id and extensions of the primitive `classDisplay`. */
  _classDisplay?: Element;
  /** An identifier for the subsection of the class (0..1) */
  subClass?: string;
  /** Id and extensions of the primitive `subClass`. */
  _subClass?: Element;
  /** Display text for the subsection of the subclass (0..1) */
  subClassDisplay?: string;
  /** Id and extensions of the primitive `subClassDisplay`. */
  _subClassDisplay?: Element;
}
