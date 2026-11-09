/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';

/**
 * Base StructureDefinition for PaymentReconciliation Resource
 */
export class PaymentReconciliation {
  resourceType: 'PaymentReconciliation';
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
  status?: PaymentReconciliation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Period covered (0..1) */
  period?: Period;
  /** Creation date (0..1) */
  created?: string;
  /** Id and extensions of the primitive `created`. */
  _created?: Element;
  /** Insurer (0..1) */
  organization?: Reference;
  /** Claim reference (0..1) */
  request?: Reference;
  /** complete | error | partial (0..1) */
  outcome?: CodeableConcept;
  /** Disposition Message (0..1) */
  disposition?: string;
  /** Id and extensions of the primitive `disposition`. */
  _disposition?: Element;
  /** Responsible practitioner (0..1) */
  requestProvider?: Reference;
  /** Responsible organization (0..1) */
  requestOrganization?: Reference;
  /** List of settlements (0..*) */
  detail?: Array<PaymentReconciliationDetail>;
  /** Printed Form Identifier (0..1) */
  form?: CodeableConcept;
  /** Total amount of Payment (0..1) */
  total?: Money;
  /** Processing comments (0..*) */
  processNote?: Array<PaymentReconciliationProcessNote>;
}

export namespace PaymentReconciliation {
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
 * List of settlements
 */
export class PaymentReconciliationDetail {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type code (1..1) */
  type: CodeableConcept;
  /** Claim (0..1) */
  request?: Reference;
  /** Claim Response (0..1) */
  response?: Reference;
  /** Organization which submitted the claim (0..1) */
  submitter?: Reference;
  /** Organization which is receiving the payment (0..1) */
  payee?: Reference;
  /** Invoice date (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Amount being paid (0..1) */
  amount?: Money;
}

/**
 * Processing comments
 */
export class PaymentReconciliationProcessNote {
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
