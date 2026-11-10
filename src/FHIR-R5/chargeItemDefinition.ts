/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { MonetaryComponent } from './monetaryComponent';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export interface ChargeItemDefinition {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the charge item definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the charge item definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this charge item definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
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
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
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
  /** Why this charge item definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
  /** When the charge item definition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the charge item definition was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** Billing code or product type this definition applies to (0..1) */
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
export interface ChargeItemDefinitionApplicability {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Boolean-valued expression (0..1) */
  condition?: Expression;
  /** When the charge item definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Reference to / quotation of the external source of the group of properties (0..1) */
  relatedArtifact?: RelatedArtifact;
}

/**
 * Group of properties which are applicable under the same conditions
 */
export interface ChargeItemDefinitionPropertyGroup {
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
  priceComponent?: Array<MonetaryComponent>;
}
