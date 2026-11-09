/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Money } from './money';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export class ChargeItemDefinition {
  resourceType: 'ChargeItemDefinition';
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
  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the charge item definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the charge item definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this charge item definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Underlying externally-defined charge item definition (0..*) */
  derivedFromUri?: Array<string>;
  /** Id and extensions of the primitive `derivedFromUri`. */
  _derivedFromUri?: Array<Element | null>;
  /** A larger definition of which this particular definition is a component or step (0..*) */
  partOf?: Array<string>;
  /** Id and extensions of the primitive `partOf`. */
  _partOf?: Array<Element | null>;
  /** Completed or terminated request(s) whose function is taken by this new request (0..*) */
  replaces?: Array<string>;
  /** Id and extensions of the primitive `replaces`. */
  _replaces?: Array<Element | null>;
  /** draft | active | retired | unknown (1..1) */
  status?: ChargeItemDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (0..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the charge item definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for charge item definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** When the charge item definition was approved by publisher (0..1) */
  approvalDate?: Date | string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the charge item definition was last reviewed (0..1) */
  lastReviewDate?: Date | string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the charge item definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Billing codes or product types this definition applies to (0..1) */
  code?: CodeableConcept;
  /** Instances this definition applies to (0..*) */
  instance?: Array<Reference>;
  /** Whether or not the billing code is applicable (0..*) */
  applicability?: Array<ChargeItemDefinitionApplicability>;
  /** Group of properties which are applicable under the same conditions (0..*) */
  propertyGroup?: Array<ChargeItemDefinitionPropertyGroup>;
}

export namespace ChargeItemDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Whether or not the billing code is applicable
 */
export class ChargeItemDefinitionApplicability {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Natural language description of the condition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Language of the expression (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Boolean-valued expression (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;
}

/**
 * Group of properties which are applicable under the same conditions
 */
export class ChargeItemDefinitionPropertyGroup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Conditions under which the priceComponent is applicable (0..*) */
  applicability?: Array<ChargeItemDefinitionApplicability>;
  /** Components of total line item price (0..*) */
  priceComponent?: Array<ChargeItemDefinitionPriceComponent>;
}

/**
 * Components of total line item price
 */
export class ChargeItemDefinitionPriceComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** base | surcharge | deduction | discount | tax | informational (1..1) */
  type?: ChargeItemDefinitionPriceComponent.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Code identifying the specific component (0..1) */
  code?: CodeableConcept;
  /** Factor used for calculating this component (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;
  /** Monetary amount associated with this component (0..1) */
  amount?: Money;
}

export namespace ChargeItemDefinitionPriceComponent {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/invoice-priceComponentType */
  export type TypeEnum = 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';
  export const TypeEnum = {
    Base: 'base' as TypeEnum,
    Surcharge: 'surcharge' as TypeEnum,
    Deduction: 'deduction' as TypeEnum,
    Discount: 'discount' as TypeEnum,
    Tax: 'tax' as TypeEnum,
    Informational: 'informational' as TypeEnum,
  };
}
