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
import type { Quantity } from './quantity';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export interface ConceptMap {
  resourceType: 'ConceptMap';
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
  /** Canonical identifier for this concept map, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the concept map (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the concept map (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this concept map (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this concept map (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ConceptMap.StatusEnum;
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
  /** Natural language description of the concept map (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for concept map (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this concept map is defined (0..1) */
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
  /** When the ConceptMap was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the ConceptMap was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the ConceptMap is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the ConceptMap (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the ConceptMap (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the ConceptMap (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the ConceptMap (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Additional properties of the mapping (0..*) */
  property?: Array<ConceptMapProperty>;
  /** Definition of an additional attribute to act as a data source or target (0..*) */
  additionalAttribute?: Array<ConceptMapAdditionalAttribute>;
  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceScopeUri?: string;
  /** Id and extensions of the primitive `sourceScopeUri`. */
  _sourceScopeUri?: Element;
  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceScopeCanonical?: string;
  /** Id and extensions of the primitive `sourceScopeCanonical`. */
  _sourceScopeCanonical?: Element;
  /** The target value set which provides context for the mappings (0..1) */
  targetScopeUri?: string;
  /** Id and extensions of the primitive `targetScopeUri`. */
  _targetScopeUri?: Element;
  /** The target value set which provides context for the mappings (0..1) */
  targetScopeCanonical?: string;
  /** Id and extensions of the primitive `targetScopeCanonical`. */
  _targetScopeCanonical?: Element;
  /** Same source and target systems (0..*) */
  group?: Array<ConceptMapGroup>;
}

export namespace ConceptMap {
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
 * Additional properties of the mapping
 */
export interface ConceptMapProperty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifies the property on the mappings, and when referred to in the $translate operation (1..1) */
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
  /** Coding | string | integer | boolean | dateTime | decimal | code (1..1) */
  type?: ConceptMapProperty.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** The CodeSystem from which code values come (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
}

export namespace ConceptMapProperty {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/conceptmap-property-type */
  export type TypeEnum =
    'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal' | 'code';
  export const TypeEnum = {
    Coding: 'Coding' as TypeEnum,
    String: 'string' as TypeEnum,
    Integer: 'integer' as TypeEnum,
    Boolean: 'boolean' as TypeEnum,
    DateTime: 'dateTime' as TypeEnum,
    Decimal: 'decimal' as TypeEnum,
    Code: 'code' as TypeEnum,
  };
}

/**
 * Definition of an additional attribute to act as a data source or target
 */
export interface ConceptMapAdditionalAttribute {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifies this additional attribute through this resource (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Formal identifier for the data element referred to in this attribte (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
  /** Why the additional attribute is defined, and/or what the data element it refers to is (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** code | Coding | string | boolean | Quantity (1..1) */
  type?: ConceptMapAdditionalAttribute.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
}

export namespace ConceptMapAdditionalAttribute {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/conceptmap-attribute-type */
  export type TypeEnum = 'code' | 'Coding' | 'string' | 'boolean' | 'Quantity';
  export const TypeEnum = {
    Code: 'code' as TypeEnum,
    Coding: 'Coding' as TypeEnum,
    String: 'string' as TypeEnum,
    Boolean: 'boolean' as TypeEnum,
    Quantity: 'Quantity' as TypeEnum,
  };
}

/**
 * Same source and target systems
 */
export interface ConceptMapGroup {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Source system where concepts to be mapped are defined (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;
  /** Target system that the concepts are to be mapped to (0..1) */
  target?: string;
  /** Id and extensions of the primitive `target`. */
  _target?: Element;
  /** Mappings for a concept from the source set (1..*) */
  element: Array<ConceptMapElement>;
  /** What to do when there is no mapping target for the source concept and ConceptMap.group.element.noMap is not true (0..1) */
  unmapped?: ConceptMapUnmapped;
}

/**
 * Mappings for a concept from the source set
 */
export interface ConceptMapElement {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifies element being mapped (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Identifies the set of concepts being mapped (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;
  /** No mapping to a target concept for this source concept (0..1) */
  noMap?: boolean;
  /** Id and extensions of the primitive `noMap`. */
  _noMap?: Element;
  /** Concept in target system for element (0..*) */
  target?: Array<ConceptMapTarget>;
}

/**
 * Concept in target system for element
 */
export interface ConceptMapTarget {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code that identifies the target element (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Identifies the set of target concepts (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;
  /** related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to (1..1) */
  relationship?: ConceptMapTarget.RelationshipEnum;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;
  /** Description of status/issues in mapping (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Property value for the source -> target mapping (0..*) */
  property?: Array<ConceptMapProperty1>;
  /** Other properties required for this mapping (0..*) */
  dependsOn?: Array<ConceptMapDependsOn>;
  /** Other data elements that this mapping also produces (0..*) */
  product?: Array<ConceptMapDependsOn>;
}

export namespace ConceptMapTarget {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/concept-map-relationship */
  export type RelationshipEnum =
    | 'related-to'
    | 'equivalent'
    | 'source-is-narrower-than-target'
    | 'source-is-broader-than-target'
    | 'not-related-to';
  export const RelationshipEnum = {
    RelatedTo: 'related-to' as RelationshipEnum,
    Equivalent: 'equivalent' as RelationshipEnum,
    SourceIsNarrowerThanTarget: 'source-is-narrower-than-target' as RelationshipEnum,
    SourceIsBroaderThanTarget: 'source-is-broader-than-target' as RelationshipEnum,
    NotRelatedTo: 'not-related-to' as RelationshipEnum,
  };
}

/**
 * Property value for the source -> target mapping
 */
export interface ConceptMapProperty1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to ConceptMap.property.code (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
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
  /** Value of the property for this concept (1..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
}

/**
 * Other properties required for this mapping
 */
export interface ConceptMapDependsOn {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A reference to a mapping attribute defined in ConceptMap.additionalAttribute (1..1) */
  attribute?: string;
  /** Id and extensions of the primitive `attribute`. */
  _attribute?: Element;
  /** Value of the referenced data element (0..1) */
  valueCode?: string;
  /** Id and extensions of the primitive `valueCode`. */
  _valueCode?: Element;
  /** Value of the referenced data element (0..1) */
  valueCoding?: Coding;
  /** Value of the referenced data element (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Value of the referenced data element (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Value of the referenced data element (0..1) */
  valueQuantity?: Quantity;
  /** The mapping depends on a data element with a value from this value set (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;
}

/**
 * What to do when there is no mapping target for the source concept and ConceptMap.group.element.noMap is not true
 */
export interface ConceptMapUnmapped {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** use-source-code | fixed | other-map (1..1) */
  mode?: ConceptMapUnmapped.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Fixed code when mode = fixed (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
  /** Fixed code set when mode = fixed (0..1) */
  valueSet?: string;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Element;
  /** related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to (0..1) */
  relationship?: ConceptMapUnmapped.RelationshipEnum;
  /** Id and extensions of the primitive `relationship`. */
  _relationship?: Element;
  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped (0..1) */
  otherMap?: string;
  /** Id and extensions of the primitive `otherMap`. */
  _otherMap?: Element;
}

export namespace ConceptMapUnmapped {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode */
  export type ModeEnum = 'use-source-code' | 'fixed' | 'other-map';
  export const ModeEnum = {
    UseSourceCode: 'use-source-code' as ModeEnum,
    Fixed: 'fixed' as ModeEnum,
    OtherMap: 'other-map' as ModeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/concept-map-relationship */
  export type RelationshipEnum =
    | 'related-to'
    | 'equivalent'
    | 'source-is-narrower-than-target'
    | 'source-is-broader-than-target'
    | 'not-related-to';
  export const RelationshipEnum = {
    RelatedTo: 'related-to' as RelationshipEnum,
    Equivalent: 'equivalent' as RelationshipEnum,
    SourceIsNarrowerThanTarget: 'source-is-narrower-than-target' as RelationshipEnum,
    SourceIsBroaderThanTarget: 'source-is-broader-than-target' as RelationshipEnum,
    NotRelatedTo: 'not-related-to' as RelationshipEnum,
  };
}
