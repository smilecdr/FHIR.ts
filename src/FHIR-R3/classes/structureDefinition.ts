/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { ElementDefinition } from './elementDefinition';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for StructureDefinition Resource
 */
export class StructureDefinition {
  resourceType: 'StructureDefinition';
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
  /** Logical URI to reference this structure definition (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the structure definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the structure definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this structure definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this structure definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: StructureDefinition.StatusEnum;
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
  /** Natural language description of the structure definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for structure definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this structure definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Assist with indexing and finding (0..*) */
  keyword?: Array<Coding>;
  /** FHIR Version this StructureDefinition targets (0..1) */
  fhirVersion?: string;
  /** Id and extensions of the primitive `fhirVersion`. */
  _fhirVersion?: Element;
  /** External specification that the content is mapped to (0..*) */
  mapping?: Array<StructureDefinitionMapping>;
  /** primitive-type | complex-type | resource | logical (1..1) */
  kind?: StructureDefinition.KindEnum;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;
  /** Whether the structure is abstract (1..1) */
  abstract?: boolean;
  /** Id and extensions of the primitive `abstract`. */
  _abstract?: Element;
  /** resource | datatype | extension (0..1) */
  contextType?: StructureDefinition.ContextTypeEnum;
  /** Id and extensions of the primitive `contextType`. */
  _contextType?: Element;
  /** Where the extension can be used in instances (0..*) */
  context?: Array<string>;
  /** Id and extensions of the primitive `context`. */
  _context?: Array<Element | null>;
  /** FHIRPath invariants - when the extension can be used (0..*) */
  contextInvariant?: Array<string>;
  /** Id and extensions of the primitive `contextInvariant`. */
  _contextInvariant?: Array<Element | null>;
  /** Type defined or constrained by this structure (1..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Definition that this type is constrained/specialized from (0..1) */
  baseDefinition?: string;
  /** Id and extensions of the primitive `baseDefinition`. */
  _baseDefinition?: Element;
  /** specialization | constraint - How relates to base definition (0..1) */
  derivation?: StructureDefinition.DerivationEnum;
  /** Id and extensions of the primitive `derivation`. */
  _derivation?: Element;
  /** Snapshot view of the structure (0..1) */
  snapshot?: StructureDefinitionSnapshot;
  /** Differential view of the structure (0..1) */
  differential?: StructureDefinitionDifferential;
}

export namespace StructureDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/structure-definition-kind */
  export type KindEnum = 'primitive-type' | 'complex-type' | 'resource' | 'logical';
  export const KindEnum = {
    PrimitiveType: 'primitive-type' as KindEnum,
    ComplexType: 'complex-type' as KindEnum,
    Resource: 'resource' as KindEnum,
    Logical: 'logical' as KindEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/extension-context */
  export type ContextTypeEnum = 'resource' | 'datatype' | 'extension';
  export const ContextTypeEnum = {
    Resource: 'resource' as ContextTypeEnum,
    Datatype: 'datatype' as ContextTypeEnum,
    Extension: 'extension' as ContextTypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/type-derivation-rule */
  export type DerivationEnum = 'specialization' | 'constraint';
  export const DerivationEnum = {
    Specialization: 'specialization' as DerivationEnum,
    Constraint: 'constraint' as DerivationEnum,
  };
}

/**
 * External specification that the content is mapped to
 */
export class StructureDefinitionMapping {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Internal id when this mapping is used (1..1) */
  identity?: string;
  /** Id and extensions of the primitive `identity`. */
  _identity?: Element;
  /** Identifies what this mapping refers to (0..1) */
  uri?: string;
  /** Id and extensions of the primitive `uri`. */
  _uri?: Element;
  /** Names what this mapping refers to (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Versions, Issues, Scope limitations etc. (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
}

/**
 * Snapshot view of the structure
 */
export class StructureDefinitionSnapshot {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Definition of elements in the resource (if no StructureDefinition) (1..*) */
  element: Array<ElementDefinition>;
}

/**
 * Differential view of the structure
 */
export class StructureDefinitionDifferential {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Definition of elements in the resource (if no StructureDefinition) (1..*) */
  element: Array<ElementDefinition>;
}
