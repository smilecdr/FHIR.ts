/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { Timing } from './timing';

/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export class ChargeItem {
  resourceType: 'ChargeItem';
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
  /** Business Identifier for item (0..*) */
  identifier?: Array<Identifier>;
  /** Defining information about the code of this charge item (0..*) */
  definitionUri?: Array<string>;
  /** Id and extensions of the primitive `definitionUri`. */
  _definitionUri?: Array<Element | null>;
  /** Resource defining the code of this ChargeItem (0..*) */
  definitionCanonical?: Array<string>;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Array<Element | null>;
  /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown (1..1) */
  status?: ChargeItem.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Part of referenced ChargeItem (0..*) */
  partOf?: Array<Reference>;
  /** A code that identifies the charge, like a billing code (1..1) */
  code: CodeableConcept;
  /** Individual service was done for/to (1..1) */
  subject: Reference;
  /** Encounter / Episode associated with event (0..1) */
  context?: Reference;
  /** When the charged service was applied (0..1) */
  occurrenceDateTime?: Date | string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When the charged service was applied (0..1) */
  occurrencePeriod?: Period;
  /** When the charged service was applied (0..1) */
  occurrenceTiming?: Timing;
  /** Who performed charged service (0..*) */
  performer?: Array<ChargeItemPerformer>;
  /** Organization providing the charged service (0..1) */
  performingOrganization?: Reference;
  /** Organization requesting the charged service (0..1) */
  requestingOrganization?: Reference;
  /** Organization that has ownership of the (potential, future) revenue (0..1) */
  costCenter?: Reference;
  /** Quantity of which the charge item has been serviced (0..1) */
  quantity?: Quantity;
  /** Anatomical location, if relevant (0..*) */
  bodysite?: Array<CodeableConcept>;
  /** Factor overriding the associated rules (0..1) */
  factorOverride?: number;
  /** Id and extensions of the primitive `factorOverride`. */
  _factorOverride?: Element;
  /** Price overriding the associated rules (0..1) */
  priceOverride?: Money;
  /** Reason for overriding the list price/factor (0..1) */
  overrideReason?: string;
  /** Id and extensions of the primitive `overrideReason`. */
  _overrideReason?: Element;
  /** Individual who was entering (0..1) */
  enterer?: Reference;
  /** Date the charge item was entered (0..1) */
  enteredDate?: Date | string;
  /** Id and extensions of the primitive `enteredDate`. */
  _enteredDate?: Element;
  /** Why was the charged service rendered? (0..*) */
  reason?: Array<CodeableConcept>;
  /** Which rendered service is being charged? (0..*) */
  service?: Array<Reference>;
  /** Product charged (0..1) */
  productReference?: Reference;
  /** Product charged (0..1) */
  productCodeableConcept?: CodeableConcept;
  /** Account to place this charge (0..*) */
  account?: Array<Reference>;
  /** Comments made about the ChargeItem (0..*) */
  note?: Array<Annotation>;
  /** Further information supporting this charge (0..*) */
  supportingInformation?: Array<Reference>;
}

export namespace ChargeItem {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/chargeitem-status */
  export type StatusEnum =
    'planned' | 'billable' | 'not-billable' | 'aborted' | 'billed' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Planned: 'planned' as StatusEnum,
    Billable: 'billable' as StatusEnum,
    NotBillable: 'not-billable' as StatusEnum,
    Aborted: 'aborted' as StatusEnum,
    Billed: 'billed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Who performed charged service
 */
export class ChargeItemPerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What type of performance was done (0..1) */
  function?: CodeableConcept;
  /** Individual who was performing (1..1) */
  actor: Reference;
}
