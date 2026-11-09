/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
 */
export interface EvidenceVariable {
  resourceType: 'EvidenceVariable';
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
  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the evidence variable (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the evidence variable (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this evidence variable (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this evidence variable (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Title for use in informal contexts (0..1) */
  shortTitle?: string;
  /** Id and extensions of the primitive `shortTitle`. */
  _shortTitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: EvidenceVariable.StatusEnum;
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
  /** Natural language description of the evidence variable (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Why this EvidenceVariable is defined (0..1) */
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
  /** When the resource was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the resource was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the resource is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Who authored the content (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the content (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the content (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the content (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Actual or conceptual (0..1) */
  actual?: boolean;
  /** Id and extensions of the primitive `actual`. */
  _actual?: Element;
  /** A defining factor of the EvidenceVariable (0..*) */
  characteristic?: Array<EvidenceVariableCharacteristic>;
  /** continuous | dichotomous | ordinal | polychotomous (0..1) */
  handling?: EvidenceVariable.HandlingEnum;
  /** Id and extensions of the primitive `handling`. */
  _handling?: Element;
  /** A grouping for ordinal or polychotomous variables (0..*) */
  category?: Array<EvidenceVariableCategory>;
}

export namespace EvidenceVariable {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/variable-handling */
  export type HandlingEnum = 'continuous' | 'dichotomous' | 'ordinal' | 'polychotomous';
  export const HandlingEnum = {
    Continuous: 'continuous' as HandlingEnum,
    Dichotomous: 'dichotomous' as HandlingEnum,
    Ordinal: 'ordinal' as HandlingEnum,
    Polychotomous: 'polychotomous' as HandlingEnum,
  };
}

/**
 * A defining factor of the EvidenceVariable
 */
export interface EvidenceVariableCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Label for internal linking (0..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** Natural language description of the characteristic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** Whether the characteristic is an inclusion criterion or exclusion criterion (0..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;
  /** Defines the characteristic (without using type and value) by a Reference (0..1) */
  definitionReference?: Reference;
  /** Defines the characteristic (without using type and value) by a Canonical (0..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;
  /** Defines the characteristic (without using type and value) by a CodeableConcept (0..1) */
  definitionCodeableConcept?: CodeableConcept;
  /** Defines the characteristic (without using type and value) by an expression (0..1) */
  definitionExpression?: Expression;
  /** Defines the characteristic (without using type and value) by an id (0..1) */
  definitionId?: string;
  /** Id and extensions of the primitive `definitionId`. */
  _definitionId?: Element;
  /** Defines the characteristic using type and value (0..1) */
  definitionByTypeAndValue?: EvidenceVariableDefinitionByTypeAndValue;
  /** Used to specify how two or more characteristics are combined (0..1) */
  definitionByCombination?: EvidenceVariableDefinitionByCombination;
  /** Number of occurrences meeting the characteristic (0..1) */
  instancesQuantity?: Quantity;
  /** Number of occurrences meeting the characteristic (0..1) */
  instancesRange?: Range;
  /** Length of time in which the characteristic is met (0..1) */
  durationQuantity?: Quantity;
  /** Length of time in which the characteristic is met (0..1) */
  durationRange?: Range;
  /** Timing in which the characteristic is determined (0..*) */
  timeFromEvent?: Array<EvidenceVariableTimeFromEvent>;
}

/**
 * Defines the characteristic using type and value
 */
export interface EvidenceVariableDefinitionByTypeAndValue {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Expresses the type of characteristic (1..1) */
  type: CodeableConcept;
  /** Method for how the characteristic value was determined (0..*) */
  method?: Array<CodeableConcept>;
  /** Device used for determining characteristic (0..1) */
  device?: Reference;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueQuantity?: Quantity;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueRange?: Range;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueReference?: Reference;
  /** Defines the characteristic when coupled with characteristic.type (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Reference point for valueQuantity or valueRange (0..1) */
  offset?: CodeableConcept;
}

/**
 * Used to specify how two or more characteristics are combined
 */
export interface EvidenceVariableDefinitionByCombination {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** all-of | any-of | at-least | at-most | statistical | net-effect | dataset (1..1) */
  code?: EvidenceVariableDefinitionByCombination.CodeEnum;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Provides the value of "n" when "at-least" or "at-most" codes are used (0..1) */
  threshold?: number;
  /** Id and extensions of the primitive `threshold`. */
  _threshold?: Element;
  /** A defining factor of the characteristic (1..*) */
  characteristic: Array<EvidenceVariableCharacteristic>;
}

export namespace EvidenceVariableDefinitionByCombination {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/characteristic-combination */
  export type CodeEnum =
    'all-of' | 'any-of' | 'at-least' | 'at-most' | 'statistical' | 'net-effect' | 'dataset';
  export const CodeEnum = {
    AllOf: 'all-of' as CodeEnum,
    AnyOf: 'any-of' as CodeEnum,
    AtLeast: 'at-least' as CodeEnum,
    AtMost: 'at-most' as CodeEnum,
    Statistical: 'statistical' as CodeEnum,
    NetEffect: 'net-effect' as CodeEnum,
    Dataset: 'dataset' as CodeEnum,
  };
}

/**
 * Timing in which the characteristic is determined
 */
export interface EvidenceVariableTimeFromEvent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Human readable description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** The event used as a base point (reference point) in time (0..1) */
  eventCodeableConcept?: CodeableConcept;
  /** The event used as a base point (reference point) in time (0..1) */
  eventReference?: Reference;
  /** The event used as a base point (reference point) in time (0..1) */
  eventDateTime?: string;
  /** Id and extensions of the primitive `eventDateTime`. */
  _eventDateTime?: Element;
  /** The event used as a base point (reference point) in time (0..1) */
  eventId?: string;
  /** Id and extensions of the primitive `eventId`. */
  _eventId?: Element;
  /** Used to express the observation at a defined amount of time before or after the event (0..1) */
  quantity?: Quantity;
  /** Used to express the observation within a period before and/or after the event (0..1) */
  range?: Range;
}

/**
 * A grouping for ordinal or polychotomous variables
 */
export interface EvidenceVariableCategory {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of the grouping (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Definition of the grouping (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Definition of the grouping (0..1) */
  valueQuantity?: Quantity;
  /** Definition of the grouping (0..1) */
  valueRange?: Range;
}
