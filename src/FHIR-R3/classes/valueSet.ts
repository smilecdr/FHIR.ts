/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
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
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for ValueSet Resource
 */
export class ValueSet {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Logical URI to reference this value set (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the value set (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the value set (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
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
  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the value set (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
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
  /** Whether this is intended to be used with an extensible binding (0..1) */
  extensible?: boolean;
  /** Id and extensions of the primitive `extensible`. */
  _extensible?: Element;
  /** Definition of the content of the value set (CLD) (0..1) */
  compose?: ValueSetCompose;
  /** Used when the value set is "expanded" (0..1) */
  expansion?: ValueSetExpansion;
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
 * Definition of the content of the value set (CLD)
 */
export class ValueSetCompose {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Fixed date for version-less references (transitive) (0..1) */
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
}

/**
 * Include one or more codes from a code system or other value set(s)
 */
export class ValueSetInclude {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** Select only contents included in this value set (0..*) */
  valueSet?: Array<string>;
  /** Id and extensions of the primitive `valueSet`. */
  _valueSet?: Array<Element | null>;
}

/**
 * A concept defined in the system
 */
export class ValueSetConcept {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
export class ValueSetDesignation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Human language of the designation (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Details how this designation would be used (0..1) */
  use?: Coding;
  /** The text value for this designation (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
}

/**
 * Select codes/concepts by their properties (including relationships)
 */
export class ValueSetFilter {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** A property defined by the code system (1..1) */
  property?: string;
  /** Id and extensions of the primitive `property`. */
  _property?: Element;
  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists (1..1) */
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
    Exists: 'exists' as OpEnum,
  };
}

/**
 * Used when the value set is "expanded"
 */
export class ValueSetExpansion {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Uniquely identifies this expansion (1..1) */
  identifier?: string;
  /** Id and extensions of the primitive `identifier`. */
  _identifier?: Element;
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
  /** Codes in the value set (0..*) */
  contains?: Array<ValueSetContains>;
}

/**
 * Parameter that controlled the expansion process
 */
export class ValueSetParameter {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name as assigned by the server (1..1) */
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
}

/**
 * Codes in the value set
 */
export class ValueSetContains {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  /** Codes contained under this entry (0..*) */
  contains?: Array<ValueSetContains>;
}
