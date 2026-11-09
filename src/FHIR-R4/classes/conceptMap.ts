/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export class ConceptMap {
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
  contained?: Array<Resource>;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Canonical identifier for this concept map, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the concept map (0..1) */
  identifier?: Identifier;
  /** Business version of the concept map (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
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
  date?: Date | string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;
  /** Name of the publisher (organization or individual) (0..1) */
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
  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceUri?: string;
  /** Id and extensions of the primitive `sourceUri`. */
  _sourceUri?: Element;
  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceCanonical?: string;
  /** Id and extensions of the primitive `sourceCanonical`. */
  _sourceCanonical?: Element;
  /** The target value set which provides context for the mappings (0..1) */
  targetUri?: string;
  /** Id and extensions of the primitive `targetUri`. */
  _targetUri?: Element;
  /** The target value set which provides context for the mappings (0..1) */
  targetCanonical?: string;
  /** Id and extensions of the primitive `targetCanonical`. */
  _targetCanonical?: Element;
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
 * Same source and target systems
 */
export class ConceptMapGroup {
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
  /** Specific version of the code system (0..1) */
  sourceVersion?: string;
  /** Id and extensions of the primitive `sourceVersion`. */
  _sourceVersion?: Element;
  /** Target system that the concepts are to be mapped to (0..1) */
  target?: string;
  /** Id and extensions of the primitive `target`. */
  _target?: Element;
  /** Specific version of the code system (0..1) */
  targetVersion?: string;
  /** Id and extensions of the primitive `targetVersion`. */
  _targetVersion?: Element;
  /** Mappings for a concept from the source set (1..*) */
  element: Array<ConceptMapElement>;
  /** What to do when there is no mapping for the source concept (0..1) */
  unmapped?: ConceptMapUnmapped;
}

/**
 * Mappings for a concept from the source set
 */
export class ConceptMapElement {
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
  /** Concept in target system for element (0..*) */
  target?: Array<ConceptMapTarget>;
}

/**
 * Concept in target system for element
 */
export class ConceptMapTarget {
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
  /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint (1..1) */
  equivalence?: ConceptMapTarget.EquivalenceEnum;
  /** Id and extensions of the primitive `equivalence`. */
  _equivalence?: Element;
  /** Description of status/issues in mapping (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Other elements required for this mapping (from context) (0..*) */
  dependsOn?: Array<ConceptMapDependsOn>;
  /** Other concepts that this mapping also produces (0..*) */
  product?: Array<ConceptMapDependsOn>;
}

export namespace ConceptMapTarget {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/concept-map-equivalence */
  export type EquivalenceEnum =
    | 'relatedto'
    | 'equivalent'
    | 'equal'
    | 'wider'
    | 'subsumes'
    | 'narrower'
    | 'specializes'
    | 'inexact'
    | 'unmatched'
    | 'disjoint';
  export const EquivalenceEnum = {
    Relatedto: 'relatedto' as EquivalenceEnum,
    Equivalent: 'equivalent' as EquivalenceEnum,
    Equal: 'equal' as EquivalenceEnum,
    Wider: 'wider' as EquivalenceEnum,
    Subsumes: 'subsumes' as EquivalenceEnum,
    Narrower: 'narrower' as EquivalenceEnum,
    Specializes: 'specializes' as EquivalenceEnum,
    Inexact: 'inexact' as EquivalenceEnum,
    Unmatched: 'unmatched' as EquivalenceEnum,
    Disjoint: 'disjoint' as EquivalenceEnum,
  };
}

/**
 * Other elements required for this mapping (from context)
 */
export class ConceptMapDependsOn {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Reference to property mapping depends on (1..1) */
  property?: string;
  /** Id and extensions of the primitive `property`. */
  _property?: Element;
  /** Code System (if necessary) (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;
  /** Value of the referenced element (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** Display for the code (if value is a code) (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;
}

/**
 * What to do when there is no mapping for the source concept
 */
export class ConceptMapUnmapped {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** provided | fixed | other-map (1..1) */
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
  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

export namespace ConceptMapUnmapped {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode */
  export type ModeEnum = 'provided' | 'fixed' | 'other-map';
  export const ModeEnum = {
    Provided: 'provided' as ModeEnum,
    Fixed: 'fixed' as ModeEnum,
    OtherMap: 'other-map' as ModeEnum,
  };
}
