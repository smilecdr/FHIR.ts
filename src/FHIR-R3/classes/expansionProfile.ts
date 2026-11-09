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
 * Base StructureDefinition for ExpansionProfile Resource
 */
export class ExpansionProfile {
  resourceType: 'ExpansionProfile';
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
  /** Logical URI to reference this expansion profile (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the expansion profile (0..1) */
  identifier?: Identifier;
  /** Business version of the expansion profile (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this expansion profile (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ExpansionProfile.StatusEnum;
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
  /** Natural language description of the expansion profile (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for expansion profile (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Fix use of a code system to a particular version (0..*) */
  fixedVersion?: Array<ExpansionProfileFixedVersion>;
  /** Systems/Versions to be exclude (0..1) */
  excludedSystem?: ExpansionProfileExcludedSystem;
  /** Whether the expansion should include concept designations (0..1) */
  includeDesignations?: boolean;
  /** Id and extensions of the primitive `includeDesignations`. */
  _includeDesignations?: Element;
  /** When the expansion profile imposes designation contraints (0..1) */
  designation?: ExpansionProfileDesignation;
  /** Include or exclude the value set definition in the expansion (0..1) */
  includeDefinition?: boolean;
  /** Id and extensions of the primitive `includeDefinition`. */
  _includeDefinition?: Element;
  /** Include or exclude inactive concepts in the expansion (0..1) */
  activeOnly?: boolean;
  /** Id and extensions of the primitive `activeOnly`. */
  _activeOnly?: Element;
  /** Nested codes in the expansion or not (0..1) */
  excludeNested?: boolean;
  /** Id and extensions of the primitive `excludeNested`. */
  _excludeNested?: Element;
  /** Include or exclude codes which cannot be rendered in user interfaces in the value set expansion (0..1) */
  excludeNotForUI?: boolean;
  /** Id and extensions of the primitive `excludeNotForUI`. */
  _excludeNotForUI?: Element;
  /** Include or exclude codes which are post coordinated expressions in the value set expansion (0..1) */
  excludePostCoordinated?: boolean;
  /** Id and extensions of the primitive `excludePostCoordinated`. */
  _excludePostCoordinated?: Element;
  /** Specify the language for the display element of codes in the value set expansion (0..1) */
  displayLanguage?: string;
  /** Id and extensions of the primitive `displayLanguage`. */
  _displayLanguage?: Element;
  /** Controls behaviour of the value set expand operation when value sets are too large to be completely expanded (0..1) */
  limitedExpansion?: boolean;
  /** Id and extensions of the primitive `limitedExpansion`. */
  _limitedExpansion?: Element;
}

export namespace ExpansionProfile {
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
 * Fix use of a code system to a particular version
 */
export class ExpansionProfileFixedVersion {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** System to have its version fixed (1..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Specific version of the code system referred to (1..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** default | check | override (1..1) */
  mode?: ExpansionProfileFixedVersion.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
}

export namespace ExpansionProfileFixedVersion {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/system-version-processing-mode */
  export type ModeEnum = 'default' | 'check' | 'override';
  export const ModeEnum = {
    Default: 'default' as ModeEnum,
    Check: 'check' as ModeEnum,
    Override: 'override' as ModeEnum,
  };
}

/**
 * Systems/Versions to be exclude
 */
export class ExpansionProfileExcludedSystem {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specific code system to be excluded (1..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Specific version of the code system referred to (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
}

/**
 * When the expansion profile imposes designation contraints
 */
export class ExpansionProfileDesignation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Designations to be included (0..1) */
  include?: ExpansionProfileInclude;
  /** Designations to be excluded (0..1) */
  exclude?: ExpansionProfileExclude;
}

/**
 * Designations to be included
 */
export class ExpansionProfileInclude {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The designation to be included (0..*) */
  designation?: Array<ExpansionProfileDesignation1>;
}

/**
 * The designation to be included
 */
export class ExpansionProfileDesignation1 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Human language of the designation to be included (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** What kind of Designation to include (0..1) */
  use?: Coding;
}

/**
 * Designations to be excluded
 */
export class ExpansionProfileExclude {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The designation to be excluded (0..*) */
  designation?: Array<ExpansionProfileDesignation2>;
}

/**
 * The designation to be excluded
 */
export class ExpansionProfileDesignation2 {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Human language of the designation to be excluded (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** What kind of Designation to exclude (0..1) */
  use?: Coding;
}
