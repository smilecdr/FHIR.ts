/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { Contributor } from './contributor';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for Measure Resource
 */
export class Measure {
  resourceType: 'Measure';
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
  /** Logical URI to reference this measure (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the measure (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the measure (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this measure (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this measure (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: Measure.StatusEnum;
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
  /** Natural language description of the measure (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Why this measure is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the measure (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** When the measure was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the measure was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the measure is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** Context the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for measure (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** E.g. Education, Treatment, Assessment, etc (0..*) */
  topic?: Array<CodeableConcept>;
  /** A content contributor (0..*) */
  contributor?: Array<Contributor>;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** Additional documentation, citations, etc (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Logic used by the measure (0..*) */
  library?: Array<Reference>;
  /** Disclaimer for use of the measure or its referenced content (0..1) */
  disclaimer?: string;
  /** Id and extensions of the primitive `disclaimer`. */
  _disclaimer?: Element;
  /** proportion | ratio | continuous-variable | cohort (0..1) */
  scoring?: CodeableConcept;
  /** opportunity | all-or-nothing | linear | weighted (0..1) */
  compositeScoring?: CodeableConcept;
  /** process | outcome | structure | patient-reported-outcome | composite (0..*) */
  type?: Array<CodeableConcept>;
  /** How is risk adjustment applied for this measure (0..1) */
  riskAdjustment?: string;
  /** Id and extensions of the primitive `riskAdjustment`. */
  _riskAdjustment?: Element;
  /** How is rate aggregation performed for this measure (0..1) */
  rateAggregation?: string;
  /** Id and extensions of the primitive `rateAggregation`. */
  _rateAggregation?: Element;
  /** Why does this measure exist (0..1) */
  rationale?: string;
  /** Id and extensions of the primitive `rationale`. */
  _rationale?: Element;
  /** Summary of clinical guidelines (0..1) */
  clinicalRecommendationStatement?: string;
  /** Id and extensions of the primitive `clinicalRecommendationStatement`. */
  _clinicalRecommendationStatement?: Element;
  /** Improvement notation for the measure, e.g. higher score indicates better quality (0..1) */
  improvementNotation?: string;
  /** Id and extensions of the primitive `improvementNotation`. */
  _improvementNotation?: Element;
  /** Defined terms used in the measure documentation (0..*) */
  definition?: Array<string>;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Array<Element | null>;
  /** Additional guidance for implementers (0..1) */
  guidance?: string;
  /** Id and extensions of the primitive `guidance`. */
  _guidance?: Element;
  /** The measure set, e.g. Preventive Care and Screening (0..1) */
  set?: string;
  /** Id and extensions of the primitive `set`. */
  _set?: Element;
  /** Population criteria group (0..*) */
  group?: Array<MeasureGroup>;
  /** What other data should be reported with the measure (0..*) */
  supplementalData?: Array<MeasureSupplementalData>;
}

export namespace Measure {
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
 * Population criteria group
 */
export class MeasureGroup {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique identifier (1..1) */
  identifier: Identifier;
  /** Short name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Summary description (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Population criteria (0..*) */
  population?: Array<MeasurePopulation>;
  /** Stratifier criteria for the measure (0..*) */
  stratifier?: Array<MeasureStratifier>;
}

/**
 * Population criteria
 */
export class MeasurePopulation {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Unique identifier (0..1) */
  identifier?: Identifier;
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation (0..1) */
  code?: CodeableConcept;
  /** Short name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** The human readable description of this population criteria (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria (1..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;
}

/**
 * Stratifier criteria for the measure
 */
export class MeasureStratifier {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** The identifier for the stratifier used to coordinate the reported data back to this stratifier (0..1) */
  identifier?: Identifier;
  /** How the measure should be stratified (0..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;
  /** Path to the stratifier (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
}

/**
 * What other data should be reported with the measure
 */
export class MeasureSupplementalData {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Identifier, unique within the measure (0..1) */
  identifier?: Identifier;
  /** supplemental-data | risk-adjustment-factor (0..*) */
  usage?: Array<CodeableConcept>;
  /** Expression describing additional data to be reported (0..1) */
  criteria?: string;
  /** Id and extensions of the primitive `criteria`. */
  _criteria?: Element;
  /** Path to the supplemental data element (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;
}
