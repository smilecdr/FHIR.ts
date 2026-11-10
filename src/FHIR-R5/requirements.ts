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
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The Requirements resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.
 */
export interface Requirements {
  resourceType: 'Requirements';
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
  /** Canonical identifier for this Requirements, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the Requirements (business identifier) (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the Requirements (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this Requirements (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this Requirements (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: Requirements.StatusEnum;
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
  /** Natural language description of the requirements (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for Requirements (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this Requirements is defined (0..1) */
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
  /** Other set of Requirements this builds on (0..*) */
  derivedFrom?: Array<string>;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Array<Element | null>;
  /** External artifact (rule/document etc. that) created this set of requirements (0..*) */
  reference?: Array<string>;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Array<Element | null>;
  /** Actor for these requirements (0..*) */
  actor?: Array<string>;
  /** Id and extensions of the primitive `actor`. */
  _actor?: Array<Element | null>;
  /** Actual statement as markdown (0..*) */
  statement?: Array<RequirementsStatement>;
}

export namespace Requirements {
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
 * Actual statement as markdown
 */
export interface RequirementsStatement {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Key that identifies this statement (1..1) */
  key?: string;
  /** Id and extensions of the primitive `key`. */
  _key?: Element;
  /** Short Human label for this statement (0..1) */
  label?: string;
  /** Id and extensions of the primitive `label`. */
  _label?: Element;
  /** SHALL | SHOULD | MAY | SHOULD-NOT (0..*) */
  conformance?: Array<RequirementsStatement.ConformanceEnum>;
  /** Id and extensions of the primitive `conformance`. */
  _conformance?: Array<Element | null>;
  /** Set to true if requirements statement is conditional (0..1) */
  conditionality?: boolean;
  /** Id and extensions of the primitive `conditionality`. */
  _conditionality?: Element;
  /** The actual requirement (1..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;
  /** Another statement this clarifies/restricts ([url#]key) (0..1) */
  derivedFrom?: string;
  /** Id and extensions of the primitive `derivedFrom`. */
  _derivedFrom?: Element;
  /** A larger requirement that this requirement helps to refine and enable (0..1) */
  parent?: string;
  /** Id and extensions of the primitive `parent`. */
  _parent?: Element;
  /** Design artifact that satisfies this requirement (0..*) */
  satisfiedBy?: Array<string>;
  /** Id and extensions of the primitive `satisfiedBy`. */
  _satisfiedBy?: Array<Element | null>;
  /** External artifact (rule/document etc. that) created this requirement (0..*) */
  reference?: Array<string>;
  /** Id and extensions of the primitive `reference`. */
  _reference?: Array<Element | null>;
  /** Who asked for this statement (0..*) */
  source?: Array<Reference>;
}

export namespace RequirementsStatement {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/conformance-expectation */
  export type ConformanceEnum = 'SHALL' | 'SHOULD' | 'MAY' | 'SHOULD-NOT';
  export const ConformanceEnum = {
    SHALL: 'SHALL' as ConformanceEnum,
    SHOULD: 'SHOULD' as ConformanceEnum,
    MAY: 'MAY' as ConformanceEnum,
    SHOULDNOT: 'SHOULD-NOT' as ConformanceEnum,
  };
}
