/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export class TerminologyCapabilities {
  resourceType: 'TerminologyCapabilities';
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
  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Business version of the terminology capabilities (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this terminology capabilities (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this terminology capabilities (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: TerminologyCapabilities.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** Date last changed (1..1) */
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Natural language description of the terminology capabilities (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for terminology capabilities (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this terminology capabilities is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** instance | capability | requirements (1..1) */
  kind?: TerminologyCapabilities.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Software that is covered by this terminology capability statement (0..1) */
  software?: TerminologyCapabilitiesSoftware;
  /** If this describes a specific instance (0..1) */
  implementation?: TerminologyCapabilitiesImplementation;
  /** Whether lockedDate is supported (0..1) */
  lockedDate?: boolean;
  /** Id and extensions of the primitive `lockedDate`. */
  _lockedDate?: Element;
  /** A code system supported by the server (0..*) */
  codeSystem?: Array<TerminologyCapabilitiesCodeSystem>;
  /** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation (0..1) */
  expansion?: TerminologyCapabilitiesExpansion;
  /** explicit | all (0..1) */
  codeSearch?: TerminologyCapabilities.CodeSearchEnum;
  /** Id and extensions of the primitive `codeSearch`. */
  _codeSearch?: Element;
  /** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation (0..1) */
  validateCode?: TerminologyCapabilitiesValidateCode;
  /** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation (0..1) */
  translation?: TerminologyCapabilitiesTranslation;
  /** Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation (0..1) */
  closure?: TerminologyCapabilitiesClosure;
}

export namespace TerminologyCapabilities {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/capability-statement-kind */
  export type KindEnum = 'instance' | 'capability' | 'requirements';
  export const KindEnum = {
    Instance: 'instance' as KindEnum,
    Capability: 'capability' as KindEnum,
    Requirements: 'requirements' as KindEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/code-search-support */
  export type CodeSearchEnum = 'explicit' | 'all';
  export const CodeSearchEnum = {
    Explicit: 'explicit' as CodeSearchEnum,
    All: 'all' as CodeSearchEnum,
  };
}

/**
 * Software that is covered by this terminology capability statement
 */
export class TerminologyCapabilitiesSoftware {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A name the software is known by (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Version covered by this statement (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
}

/**
 * If this describes a specific instance
 */
export class TerminologyCapabilitiesImplementation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Describes this specific instance (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Base URL for the implementation (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

/**
 * A code system supported by the server
 */
export class TerminologyCapabilitiesCodeSystem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** URI for the Code System (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
  /** Version of Code System supported (0..*) */
  version?: Array<TerminologyCapabilitiesVersion>;
  /** Whether subsumption is supported (0..1) */
  subsumption?: boolean;
  /** Id and extensions of the primitive `subsumption`. */
  _subsumption?: Element;
}

/**
 * Version of Code System supported
 */
export class TerminologyCapabilitiesVersion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Version identifier for this version (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** If this is the default version for this code system (0..1) */
  isDefault?: boolean;
  /** Id and extensions of the primitive `isDefault`. */
  _isDefault?: Element;
  /** If compositional grammar is supported (0..1) */
  compositional?: boolean;
  /** Id and extensions of the primitive `compositional`. */
  _compositional?: Element;
  /** Language Displays supported (0..*) */
  language?: Array<string>;
  /** Id and extensions of the primitive `language`. */
  _language?: Array<Element | null>;
  /** Filter Properties supported (0..*) */
  filter?: Array<TerminologyCapabilitiesFilter>;
  /** Properties supported for $lookup (0..*) */
  property?: Array<string>;
  /** Id and extensions of the primitive `property`. */
  _property?: Array<Element | null>;
}

/**
 * Filter Properties supported
 */
export class TerminologyCapabilitiesFilter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Code of the property supported (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;
  /** Operations supported for the property (1..*) */
  op?: Array<string>;
  /** Id and extensions of the primitive `op`. */
  _op?: Array<Element | null>;
}

/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
 */
export class TerminologyCapabilitiesExpansion {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether the server can return nested value sets (0..1) */
  hierarchical?: boolean;
  /** Id and extensions of the primitive `hierarchical`. */
  _hierarchical?: Element;
  /** Whether the server supports paging on expansion (0..1) */
  paging?: boolean;
  /** Id and extensions of the primitive `paging`. */
  _paging?: Element;
  /** Allow request for incomplete expansions? (0..1) */
  incomplete?: boolean;
  /** Id and extensions of the primitive `incomplete`. */
  _incomplete?: Element;
  /** Supported expansion parameter (0..*) */
  parameter?: Array<TerminologyCapabilitiesParameter>;
  /** Documentation about text searching works (0..1) */
  textFilter?: string;
  /** Id and extensions of the primitive `textFilter`. */
  _textFilter?: Element;
}

/**
 * Supported expansion parameter
 */
export class TerminologyCapabilitiesParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Expansion Parameter name (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Description of support for parameter (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;
}

/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 */
export class TerminologyCapabilitiesValidateCode {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether translations are validated (1..1) */
  translations?: boolean;
  /** Id and extensions of the primitive `translations`. */
  _translations?: Element;
}

/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 */
export class TerminologyCapabilitiesTranslation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Whether the client must identify the map (1..1) */
  needsMap?: boolean;
  /** Id and extensions of the primitive `needsMap`. */
  _needsMap?: Element;
}

/**
 * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 */
export class TerminologyCapabilitiesClosure {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** If cross-system closure is supported (0..1) */
  translation?: boolean;
  /** Id and extensions of the primitive `translation`. */
  _translation?: Element;
}
