/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSet {
  resourceType: 'ValueSet';
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
  /** Canonical identifier for this value set, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the value set (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the value set (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this value set (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this value set (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ValueSet.StatusEnum;
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
  /** Natural language description of the value set (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for value set (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Indicates whether or not any change to the content logical definition may occur (0..1) */
  immutable?: boolean;
  /** Id and extensions of the primitive `immutable`. */
  _immutable?: Element;
  /** Why this value set is defined (0..1) */
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
  /** When the ValueSet was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the ValueSet was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the ValueSet is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the ValueSet (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the ValueSet (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the ValueSet (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the ValueSet (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Content logical definition of the value set (CLD) (0..1) */
  compose?: ValueSetCompose;
  /** Used when the value set is "expanded" (0..1) */
  expansion?: ValueSetExpansion;
  /** Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description (0..1) */
  scope?: ValueSetScope;
}

export namespace ValueSet {
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
 * Content logical definition of the value set (CLD)
 */
export interface ValueSetCompose {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Fixed date for references with no specified version (transitive) (0..1) */
  lockedDate?: string;
  /** Id and extensions of the primitive `lockedDate`. */
  _lockedDate?: Element;
  /** Whether inactive codes are in the value set (0..1) */
  inactive?: boolean;
  /** Id and extensions of the primitive `inactive`. */
  _inactive?: Element;
  /** Include one or more codes from a code system or other value set(s) (1..*) */
  include: Array<ValueSetInclude>;
  /** Explicitly exclude codes from a code system or other value sets (0..*) */
  exclude?: Array<ValueSetInclude>;
  /** Property to return if client doesn't override (0..*) */
  property?: Array<string>;
  /** Id and extensions of the primitive `property`. */
  _property?: Array<Element | null>;
}

/**
 * Include one or more codes from a code system or other value set(s)
 */
export interface ValueSetInclude {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The system the codes come from (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Specific version of the code system referred to (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** A concept defined in the system (0..*) */
  concept?: Array<ValueSetConcept>;
  /** Select codes/concepts by their properties (including relationships) (0..*) */
  filter?: Array<ValueSetFilter>;
  /** Select the contents included in this value set (0..*) */
  valueSet?: Array<string>;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Array<Element | null>;
  /** A copyright statement for the specific code system included in the value set (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
}

/**
 * A concept defined in the system
 */
export interface ValueSetConcept {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code or expression from system (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Text to display for this code for this value set in this valueset (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Additional representations for this concept (0..*) */
  designation?: Array<ValueSetDesignation>;
}

/**
 * Additional representations for this concept
 */
export interface ValueSetDesignation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Human language of the designation (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Types of uses of designations (0..1) */
  use?: Coding;
  /** Additional ways how this designation would be used (0..*) */
  additionalUse?: Array<Coding>;
  /** The text value for this designation (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Select codes/concepts by their properties (including relationships)
 */
export interface ValueSetFilter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A property/filter defined by the code system (1..1) */
  property?: string;
  /** Id and extensions of the primitive `property`. */
  _property?: Element;
  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists (1..1) */
  op?: ValueSetFilter.OpEnum;
  /** Id and extensions of the primitive `op`. */
  _op?: Element;
  /** Code from the system, or regex criteria, or boolean value for exists (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

export namespace ValueSetFilter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/filter-operator */
  export type OpEnum =
    | '='
    | 'is-a'
    | 'descendent-of'
    | 'is-not-a'
    | 'regex'
    | 'in'
    | 'not-in'
    | 'generalizes'
    | 'child-of'
    | 'descendent-leaf'
    | 'exists';
  export const OpEnum = {
    Equal: '=' as OpEnum,
    IsA: 'is-a' as OpEnum,
    DescendentOf: 'descendent-of' as OpEnum,
    IsNotA: 'is-not-a' as OpEnum,
    Regex: 'regex' as OpEnum,
    In: 'in' as OpEnum,
    NotIn: 'not-in' as OpEnum,
    Generalizes: 'generalizes' as OpEnum,
    ChildOf: 'child-of' as OpEnum,
    DescendentLeaf: 'descendent-leaf' as OpEnum,
    Exists: 'exists' as OpEnum,
  };
}

/**
 * Used when the value set is "expanded"
 */
export interface ValueSetExpansion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifies the value set expansion (business identifier) (0..1) */
  identifier?: string;
  /** Id and extensions of the primitive `identifier`. */
  _identifier?: Element;
  /** Opaque urls for paging through expansion results (0..1) */
  next?: string;
  /** Id and extensions of the primitive `next`. */
  _next?: Element;
  /** Time ValueSet expansion happened (1..1) */
  timestamp?: string;
  /** Id and extensions of the primitive `timestamp`. */
  _timestamp?: Element;
  /** Total number of codes in the expansion (0..1) */
  total?: number;
  /** Id and extensions of the primitive `total`. */
  _total?: Element;
  /** Offset at which this resource starts (0..1) */
  offset?: number;
  /** Id and extensions of the primitive `offset`. */
  _offset?: Element;
  /** Parameter that controlled the expansion process (0..*) */
  parameter?: Array<ValueSetParameter>;
  /** Additional information supplied about each concept (0..*) */
  property?: Array<ValueSetProperty>;
  /** Codes in the value set (0..*) */
  contains?: Array<ValueSetContains>;
}

/**
 * Parameter that controlled the expansion process
 */
export interface ValueSetParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name as assigned by the client or server (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Value of the named parameter (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the named parameter (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the named parameter (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of the named parameter (0..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Value of the named parameter (0..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Value of the named parameter (0..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the named parameter (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
}

/**
 * Additional information supplied about each concept
 */
export interface ValueSetProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifies the property on the concepts, and when referred to in operations (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Formal identifier for the property (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
}

/**
 * Codes in the value set
 */
export interface ValueSetContains {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** System value for the code (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** If user cannot select this entry (0..1) */
  abstract?: boolean;
  /** Id and extensions of the primitive `abstract`. */
  _abstract?: Element;
  /** If concept is inactive in the code system (0..1) */
  inactive?: boolean;
  /** Id and extensions of the primitive `inactive`. */
  _inactive?: Element;
  /** Version in which this code/display is defined (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Code - if blank, this is not a selectable code (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** User display for the concept (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Additional representations for this item (0..*) */
  designation?: Array<ValueSetDesignation>;
  /** Property value for the concept (0..*) */
  property?: Array<ValueSetProperty1>;
  /** Codes contained under this entry (0..*) */
  contains?: Array<ValueSetContains>;
}

/**
 * Property value for the concept
 */
export interface ValueSetProperty1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to ValueSet.expansion.property.code (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Value of the property for this concept (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the property for this concept (1..1) */
  valueCoding?: Coding;
  /** Value of the property for this concept (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the property for this concept (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of the property for this concept (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the property for this concept (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Value of the property for this concept (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** SubProperty value for the concept (0..*) */
  subProperty?: Array<ValueSetSubProperty>;
}

/**
 * SubProperty value for the concept
 */
export interface ValueSetSubProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to ValueSet.expansion.property.code (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueCoding?: Coding;
  /** Value of the subproperty for this concept (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Value of the subproperty for this concept (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
}

/**
 * Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description
 */
export interface ValueSetScope {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Criteria describing which concepts or codes should be included and why (0..1) */
  inclusionCriteria?: string;
  /** Id and extensions of the primitive `inclusionCriteria`. */
  _inclusionCriteria?: Element;
  /** Criteria describing which concepts or codes should be excluded and why (0..1) */
  exclusionCriteria?: string;
  /** Id and extensions of the primitive `exclusionCriteria`. */
  _exclusionCriteria?: Element;
}
