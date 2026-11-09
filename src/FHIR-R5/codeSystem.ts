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
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
export interface CodeSystem {
  resourceType: 'CodeSystem';
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
  /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the code system (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the code system (Coding.version) (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this code system (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this code system (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: CodeSystem.StatusEnum;
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
  /** Natural language description of the code system (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for code system (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this code system is defined (0..1) */
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
  /** When the CodeSystem was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the CodeSystem was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the CodeSystem is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the CodeSystem (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the CodeSystem (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the CodeSystem (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the CodeSystem (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** If code comparison is case sensitive (0..1) */
  caseSensitive?: boolean;
  /** Id and extensions of the primitive `caseSensitive`. */
  _caseSensitive?: Element;
  /** Canonical reference to the value set with entire code system (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;
  /** grouped-by | is-a | part-of | classified-with (0..1) */
  hierarchyMeaning?: CodeSystem.HierarchyMeaningEnum;
  /** Id and extensions of the primitive `hierarchyMeaning`. */
  _hierarchyMeaning?: Element;
  /** If code system defines a compositional grammar (0..1) */
  compositional?: boolean;
  /** Id and extensions of the primitive `compositional`. */
  _compositional?: Element;
  /** If definitions are not stable (0..1) */
  versionNeeded?: boolean;
  /** Id and extensions of the primitive `versionNeeded`. */
  _versionNeeded?: Element;
  /** not-present | example | fragment | complete | supplement (1..1) */
  content?: CodeSystem.ContentEnum;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;
  /** Canonical URL of Code System this adds designations and properties to (0..1) */
  supplements?: string;
  /** Id and extensions of the primitive `supplements`. */
  _supplements?: Element;
  /** Total concepts in the code system (0..1) */
  count?: number;
  /** Id and extensions of the primitive `count`. */
  _count?: Element;
  /** Filter that can be used in a value set (0..*) */
  filter?: Array<CodeSystemFilter>;
  /** Additional information supplied about each concept (0..*) */
  property?: Array<CodeSystemProperty>;
  /** Concepts in the code system (0..*) */
  concept?: Array<CodeSystemConcept>;
}

export namespace CodeSystem {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning */
  export type HierarchyMeaningEnum = 'grouped-by' | 'is-a' | 'part-of' | 'classified-with';
  export const HierarchyMeaningEnum = {
    GroupedBy: 'grouped-by' as HierarchyMeaningEnum,
    IsA: 'is-a' as HierarchyMeaningEnum,
    PartOf: 'part-of' as HierarchyMeaningEnum,
    ClassifiedWith: 'classified-with' as HierarchyMeaningEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/codesystem-content-mode */
  export type ContentEnum = 'not-present' | 'example' | 'fragment' | 'complete' | 'supplement';
  export const ContentEnum = {
    NotPresent: 'not-present' as ContentEnum,
    Example: 'example' as ContentEnum,
    Fragment: 'fragment' as ContentEnum,
    Complete: 'complete' as ContentEnum,
    Supplement: 'supplement' as ContentEnum,
  };
}

/**
 * Filter that can be used in a value set
 */
export interface CodeSystemFilter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that identifies the filter (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** How or why the filter is used (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists (1..*) */
  operator?: Array<CodeSystemFilter.OperatorEnum>;
  /** Id and extensions of the primitive `operator`. */
  _operator?: Array<Element | null>;
  /** What to use for the value (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

export namespace CodeSystemFilter {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/filter-operator */
  export type OperatorEnum =
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
  export const OperatorEnum = {
    Equal: '=' as OperatorEnum,
    IsA: 'is-a' as OperatorEnum,
    DescendentOf: 'descendent-of' as OperatorEnum,
    IsNotA: 'is-not-a' as OperatorEnum,
    Regex: 'regex' as OperatorEnum,
    In: 'in' as OperatorEnum,
    NotIn: 'not-in' as OperatorEnum,
    Generalizes: 'generalizes' as OperatorEnum,
    ChildOf: 'child-of' as OperatorEnum,
    DescendentLeaf: 'descendent-leaf' as OperatorEnum,
    Exists: 'exists' as OperatorEnum,
  };
}

/**
 * Additional information supplied about each concept
 */
export interface CodeSystemProperty {
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
  /** Why the property is defined, and/or what it conveys (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** code | Coding | string | integer | boolean | dateTime | decimal (1..1) */
  type?: CodeSystemProperty.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
}

export namespace CodeSystemProperty {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/concept-property-type */
  export type TypeEnum =
    'code' | 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal';
  export const TypeEnum = {
    Code: 'code' as TypeEnum,
    Coding: 'Coding' as TypeEnum,
    String: 'string' as TypeEnum,
    Integer: 'integer' as TypeEnum,
    Boolean: 'boolean' as TypeEnum,
    DateTime: 'dateTime' as TypeEnum,
    Decimal: 'decimal' as TypeEnum,
  };
}

/**
 * Concepts in the code system
 */
export interface CodeSystemConcept {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that identifies concept (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Text to display to the user (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Formal definition (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** Additional representations for the concept (0..*) */
  designation?: Array<CodeSystemDesignation>;
  /** Property value for the concept (0..*) */
  property?: Array<CodeSystemProperty1>;
  /** Child Concepts (is-a/contains/categorizes) (0..*) */
  concept?: Array<CodeSystemConcept>;
}

/**
 * Additional representations for the concept
 */
export interface CodeSystemDesignation {
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
  /** Details how this designation would be used (0..1) */
  use?: Coding;
  /** Additional ways how this designation would be used (0..*) */
  additionalUse?: Array<Coding>;
  /** The text value for this designation (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Property value for the concept
 */
export interface CodeSystemProperty1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to CodeSystem.property.code (1..1) */
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
}
