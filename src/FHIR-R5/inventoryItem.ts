/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Address } from './address';
import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * functional description of an inventory item used in inventory and supply-related workflows.
 */
export interface InventoryItem {
  resourceType: 'InventoryItem';
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
  /** Business identifier for the inventory item (0..*) */
  identifier?: Array<Identifier>;
  /** active | inactive | entered-in-error | unknown (1..1) */
  status?: InventoryItem.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Category or class of the item (0..*) */
  category?: Array<CodeableConcept>;
  /** Code designating the specific type of item (0..*) */
  code?: Array<CodeableConcept>;
  /** The item name(s) - the brand name, or common name, functional name, generic name or others (0..*) */
  name?: Array<InventoryItemName>;
  /** Organization(s) responsible for the product (0..*) */
  responsibleOrganization?: Array<InventoryItemResponsibleOrganization>;
  /** Descriptive characteristics of the item (0..1) */
  description?: InventoryItemDescription;
  /** The usage status like recalled, in use, discarded (0..*) */
  inventoryStatus?: Array<CodeableConcept>;
  /** The base unit of measure - the unit in which the product is used or counted (0..1) */
  baseUnit?: CodeableConcept;
  /** Net content or amount present in the item (0..1) */
  netContent?: Quantity;
  /** Association with other items or products (0..*) */
  association?: Array<InventoryItemAssociation>;
  /** Characteristic of the item (0..*) */
  characteristic?: Array<InventoryItemCharacteristic>;
  /** Instances or occurrences of the product (0..1) */
  instance?: InventoryItemInstance;
  /** Link to a product resource used in clinical workflows (0..1) */
  productReference?: Reference;
}

export namespace InventoryItem {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/inventoryitem-status */
  export type StatusEnum = 'active' | 'inactive' | 'entered-in-error' | 'unknown';
  export const StatusEnum = {
    Active: 'active' as StatusEnum,
    Inactive: 'inactive' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * The item name(s) - the brand name, or common name, functional name, generic name or others
 */
export interface InventoryItemName {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of name e.g. 'brand-name', 'functional-name', 'common-name' (1..1) */
  nameType: Coding;
  /** The language used to express the item name (1..1) */
  language?: InventoryItemName.LanguageEnum;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** The name or designation of the item (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
}

export namespace InventoryItemName {
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
 * Organization(s) responsible for the product
 */
export interface InventoryItemResponsibleOrganization {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The role of the organization e.g. manufacturer, distributor, or other (1..1) */
  role: CodeableConcept;
  /** An organization that is associated with the item (1..1) */
  organization: Reference;
}

/**
 * Descriptive characteristics of the item
 */
export interface InventoryItemDescription {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The language that is used in the item description (0..1) */
  language?: InventoryItemDescription.LanguageEnum;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Textual description of the item (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
}

export namespace InventoryItemDescription {
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
 * Association with other items or products
 */
export interface InventoryItemAssociation {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of association between the device and the other item (1..1) */
  associationType: CodeableConcept;
  /** The related item or product (1..1) */
  relatedItem: Reference;
  /** The quantity of the product in this product (1..1) */
  quantity: Ratio;
}

/**
 * Characteristic of the item
 */
export interface InventoryItemCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The characteristic that is being defined (1..1) */
  characteristicType: CodeableConcept;
  /** The value of the attribute (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** The value of the attribute (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** The value of the attribute (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** The value of the attribute (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The value of the attribute (1..1) */
  valueUrl?: string;
  /** Id and extensions of the primitive `valueUrl`. */
  _valueUrl?: Element;
  /** The value of the attribute (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The value of the attribute (1..1) */
  valueQuantity?: Quantity;
  /** The value of the attribute (1..1) */
  valueRange?: Range;
  /** The value of the attribute (1..1) */
  valueRatio?: Ratio;
  /** The value of the attribute (1..1) */
  valueAnnotation?: Annotation;
  /** The value of the attribute (1..1) */
  valueAddress?: Address;
  /** The value of the attribute (1..1) */
  valueDuration?: Duration;
  /** The value of the attribute (1..1) */
  valueCodeableConcept?: CodeableConcept;
}

/**
 * Instances or occurrences of the product
 */
export interface InventoryItemInstance {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The identifier for the physical instance, typically a serial number (0..*) */
  identifier?: Array<Identifier>;
  /** The lot or batch number of the item (0..1) */
  lotNumber?: string;
  /** Id and extensions of the primitive `lotNumber`. */
  _lotNumber?: Element;
  /** The expiry date or date and time for the product (0..1) */
  expiry?: string;
  /** Id and extensions of the primitive `expiry`. */
  _expiry?: Element;
  /** The subject that the item is associated with (0..1) */
  subject?: Reference;
  /** The location that the item is associated with (0..1) */
  location?: Reference;
}
