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
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface TerminologyCapabilities {
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
  contained?: Array<ResourceList>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the terminology capabilities (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the terminology capabilities (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
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
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
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
  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;
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
  /** in-compose | in-expansion | in-compose-or-expansion (0..1) */
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
  export type CodeSearchEnum = 'in-compose' | 'in-expansion' | 'in-compose-or-expansion';
  export const CodeSearchEnum = {
    InCompose: 'in-compose' as CodeSearchEnum,
    InExpansion: 'in-expansion' as CodeSearchEnum,
    InComposeOrExpansion: 'in-compose-or-expansion' as CodeSearchEnum,
  };
}

/**
 * Software that is covered by this terminology capability statement
 */
export interface TerminologyCapabilitiesSoftware {
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
export interface TerminologyCapabilitiesImplementation {
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
export interface TerminologyCapabilitiesCodeSystem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for the code system, represented as a URI (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
  /** Version of Code System supported (0..*) */
  version?: Array<TerminologyCapabilitiesVersion>;
  /** not-present | example | fragment | complete | supplement (1..1) */
  content?: TerminologyCapabilitiesCodeSystem.ContentEnum;
  /** Id and extensions of the primitive `content`. */
  _content?: Element;
  /** Whether subsumption is supported (0..1) */
  subsumption?: boolean;
  /** Id and extensions of the primitive `subsumption`. */
  _subsumption?: Element;
}

export namespace TerminologyCapabilitiesCodeSystem {
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
 * Version of Code System supported
 */
export interface TerminologyCapabilitiesVersion {
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
  language?: Array<TerminologyCapabilitiesVersion.LanguageEnum>;
  /** Id and extensions of the primitive `language`. */
  _language?: Array<Element | null>;
  /** Filter Properties supported (0..*) */
  filter?: Array<TerminologyCapabilitiesFilter>;
  /** Properties supported for $lookup (0..*) */
  property?: Array<string>;
  /** Id and extensions of the primitive `property`. */
  _property?: Array<Element | null>;
}

export namespace TerminologyCapabilitiesVersion {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/languages */
  export type LanguageEnum =
    | 'ar'
    | 'bg'
    | 'bg-BG'
    | 'bn'
    | 'cs'
    | 'cs-CZ'
    | 'bs'
    | 'bs-BA'
    | 'da'
    | 'da-DK'
    | 'de'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'el'
    | 'el-GR'
    | 'en'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-IN'
    | 'en-NZ'
    | 'en-SG'
    | 'en-US'
    | 'es'
    | 'es-AR'
    | 'es-ES'
    | 'es-UY'
    | 'et'
    | 'et-EE'
    | 'fi'
    | 'fr'
    | 'fr-BE'
    | 'fr-CH'
    | 'fr-FR'
    | 'fi-FI'
    | 'fr-CA'
    | 'fy'
    | 'fy-NL'
    | 'hi'
    | 'hr'
    | 'hr-HR'
    | 'is'
    | 'is-IS'
    | 'it'
    | 'it-CH'
    | 'it-IT'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'lt-LT'
    | 'lv'
    | 'lv-LV'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'no'
    | 'no-NO'
    | 'pa'
    | 'pl'
    | 'pl-PL'
    | 'pt'
    | 'pt-PT'
    | 'pt-BR'
    | 'ro'
    | 'ro-RO'
    | 'ru'
    | 'ru-RU'
    | 'sk'
    | 'sk-SK'
    | 'sl'
    | 'sl-SI'
    | 'sr'
    | 'sr-RS'
    | 'sv'
    | 'sv-SE'
    | 'te'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-SG'
    | 'zh-TW';
  export const LanguageEnum = {
    Ar: 'ar' as LanguageEnum,
    Bg: 'bg' as LanguageEnum,
    BgBG: 'bg-BG' as LanguageEnum,
    Bn: 'bn' as LanguageEnum,
    Cs: 'cs' as LanguageEnum,
    CsCZ: 'cs-CZ' as LanguageEnum,
    Bs: 'bs' as LanguageEnum,
    BsBA: 'bs-BA' as LanguageEnum,
    Da: 'da' as LanguageEnum,
    DaDK: 'da-DK' as LanguageEnum,
    De: 'de' as LanguageEnum,
    DeAT: 'de-AT' as LanguageEnum,
    DeCH: 'de-CH' as LanguageEnum,
    DeDE: 'de-DE' as LanguageEnum,
    El: 'el' as LanguageEnum,
    ElGR: 'el-GR' as LanguageEnum,
    En: 'en' as LanguageEnum,
    EnAU: 'en-AU' as LanguageEnum,
    EnCA: 'en-CA' as LanguageEnum,
    EnGB: 'en-GB' as LanguageEnum,
    EnIN: 'en-IN' as LanguageEnum,
    EnNZ: 'en-NZ' as LanguageEnum,
    EnSG: 'en-SG' as LanguageEnum,
    EnUS: 'en-US' as LanguageEnum,
    Es: 'es' as LanguageEnum,
    EsAR: 'es-AR' as LanguageEnum,
    EsES: 'es-ES' as LanguageEnum,
    EsUY: 'es-UY' as LanguageEnum,
    Et: 'et' as LanguageEnum,
    EtEE: 'et-EE' as LanguageEnum,
    Fi: 'fi' as LanguageEnum,
    Fr: 'fr' as LanguageEnum,
    FrBE: 'fr-BE' as LanguageEnum,
    FrCH: 'fr-CH' as LanguageEnum,
    FrFR: 'fr-FR' as LanguageEnum,
    FiFI: 'fi-FI' as LanguageEnum,
    FrCA: 'fr-CA' as LanguageEnum,
    Fy: 'fy' as LanguageEnum,
    FyNL: 'fy-NL' as LanguageEnum,
    Hi: 'hi' as LanguageEnum,
    Hr: 'hr' as LanguageEnum,
    HrHR: 'hr-HR' as LanguageEnum,
    Is: 'is' as LanguageEnum,
    IsIS: 'is-IS' as LanguageEnum,
    It: 'it' as LanguageEnum,
    ItCH: 'it-CH' as LanguageEnum,
    ItIT: 'it-IT' as LanguageEnum,
    Ja: 'ja' as LanguageEnum,
    Ko: 'ko' as LanguageEnum,
    Lt: 'lt' as LanguageEnum,
    LtLT: 'lt-LT' as LanguageEnum,
    Lv: 'lv' as LanguageEnum,
    LvLV: 'lv-LV' as LanguageEnum,
    Nl: 'nl' as LanguageEnum,
    NlBE: 'nl-BE' as LanguageEnum,
    NlNL: 'nl-NL' as LanguageEnum,
    No: 'no' as LanguageEnum,
    NoNO: 'no-NO' as LanguageEnum,
    Pa: 'pa' as LanguageEnum,
    Pl: 'pl' as LanguageEnum,
    PlPL: 'pl-PL' as LanguageEnum,
    Pt: 'pt' as LanguageEnum,
    PtPT: 'pt-PT' as LanguageEnum,
    PtBR: 'pt-BR' as LanguageEnum,
    Ro: 'ro' as LanguageEnum,
    RoRO: 'ro-RO' as LanguageEnum,
    Ru: 'ru' as LanguageEnum,
    RuRU: 'ru-RU' as LanguageEnum,
    Sk: 'sk' as LanguageEnum,
    SkSK: 'sk-SK' as LanguageEnum,
    Sl: 'sl' as LanguageEnum,
    SlSI: 'sl-SI' as LanguageEnum,
    Sr: 'sr' as LanguageEnum,
    SrRS: 'sr-RS' as LanguageEnum,
    Sv: 'sv' as LanguageEnum,
    SvSE: 'sv-SE' as LanguageEnum,
    Te: 'te' as LanguageEnum,
    Zh: 'zh' as LanguageEnum,
    ZhCN: 'zh-CN' as LanguageEnum,
    ZhHK: 'zh-HK' as LanguageEnum,
    ZhSG: 'zh-SG' as LanguageEnum,
    ZhTW: 'zh-TW' as LanguageEnum,
  };
}

/**
 * Filter Properties supported
 */
export interface TerminologyCapabilitiesFilter {
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
export interface TerminologyCapabilitiesExpansion {
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
export interface TerminologyCapabilitiesParameter {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Name of the supported expansion parameter (1..1) */
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
export interface TerminologyCapabilitiesValidateCode {
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
export interface TerminologyCapabilitiesTranslation {
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
export interface TerminologyCapabilitiesClosure {
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
