/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { Coding } from './coding';
import type { ContactDetail } from './contactDetail';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { ResourceList } from './resourceList';
import type { UsageContext } from './usageContext';

/**
 * The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 */
export interface Evidence {
  resourceType: 'Evidence';
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
  /** Canonical identifier for this evidence, represented as a globally unique URI (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the summary (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of this summary (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;
  /** Name for this summary (machine friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this summary (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Citation for this evidence (0..1) */
  citeAsReference?: Reference;
  /** Citation for this evidence (0..1) */
  citeAsMarkdown?: string;
  /** Id and extensions of the primitive `citeAsMarkdown`. */
  _citeAsMarkdown?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: Evidence.StatusEnum;
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
  /** When the summary was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the summary was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;
  /** Contact details for the publisher (0..*) */
  contact?: Array<ContactDetail>;
  /** Who authored the content (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the content (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the content (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the content (0..*) */
  endorser?: Array<ContactDetail>;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Why this Evidence is defined (0..1) */
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
  /** Link or citation to artifact associated with the summary (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Description of the particular summary (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Declarative description of the Evidence (0..1) */
  assertion?: string;
  /** Id and extensions of the primitive `assertion`. */
  _assertion?: Element;
  /** Footnotes and/or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** Evidence variable such as population, exposure, or outcome (1..*) */
  variableDefinition: Array<EvidenceVariableDefinition>;
  /** The method to combine studies (0..1) */
  synthesisType?: CodeableConcept;
  /** The design of the study that produced this evidence (0..*) */
  studyDesign?: Array<CodeableConcept>;
  /** Values and parameters for a single statistic (0..*) */
  statistic?: Array<EvidenceStatistic>;
  /** Certainty or quality of the evidence (0..*) */
  certainty?: Array<EvidenceCertainty>;
}

export namespace Evidence {
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
 * Evidence variable such as population, exposure, or outcome
 */
export interface EvidenceVariableDefinition {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A text description or summary of the variable (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Footnotes and/or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** population | subpopulation | exposure | referenceExposure | measuredVariable | confounder (1..1) */
  variableRole: CodeableConcept;
  /** Definition of the actual variable related to the statistic(s) (0..1) */
  observed?: Reference;
  /** Definition of the intended variable related to the Evidence (0..1) */
  intended?: Reference;
  /** low | moderate | high | exact (0..1) */
  directnessMatch?: CodeableConcept;
}

/**
 * Values and parameters for a single statistic
 */
export interface EvidenceStatistic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of content (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Footnotes and/or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** Type of statistic, e.g., relative risk (0..1) */
  statisticType?: CodeableConcept;
  /** Associated category for categorical variable (0..1) */
  category?: CodeableConcept;
  /** Statistic value (0..1) */
  quantity?: Quantity;
  /** The number of events associated with the statistic (0..1) */
  numberOfEvents?: number;
  /** Id and extensions of the primitive `numberOfEvents`. */
  _numberOfEvents?: Element;
  /** The number of participants affected (0..1) */
  numberAffected?: number;
  /** Id and extensions of the primitive `numberAffected`. */
  _numberAffected?: Element;
  /** Number of samples in the statistic (0..1) */
  sampleSize?: EvidenceSampleSize;
  /** An attribute of the Statistic (0..*) */
  attributeEstimate?: Array<EvidenceAttributeEstimate>;
  /** An aspect of the statistical model (0..*) */
  modelCharacteristic?: Array<EvidenceModelCharacteristic>;
}

/**
 * Number of samples in the statistic
 */
export interface EvidenceSampleSize {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Textual description of sample size for statistic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Footnote or explanatory note about the sample size (0..*) */
  note?: Array<Annotation>;
  /** Number of contributing studies (0..1) */
  numberOfStudies?: number;
  /** Id and extensions of the primitive `numberOfStudies`. */
  _numberOfStudies?: Element;
  /** Cumulative number of participants (0..1) */
  numberOfParticipants?: number;
  /** Id and extensions of the primitive `numberOfParticipants`. */
  _numberOfParticipants?: Element;
  /** Number of participants with known results for measured variables (0..1) */
  knownDataCount?: number;
  /** Id and extensions of the primitive `knownDataCount`. */
  _knownDataCount?: Element;
}

/**
 * An attribute of the Statistic
 */
export interface EvidenceAttributeEstimate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Textual description of the attribute estimate (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Footnote or explanatory note about the estimate (0..*) */
  note?: Array<Annotation>;
  /** The type of attribute estimate, e.g., confidence interval or p value (0..1) */
  type?: CodeableConcept;
  /** The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure (0..1) */
  quantity?: Quantity;
  /** Level of confidence interval, e.g., 0.95 for 95% confidence interval (0..1) */
  level?: number;
  /** Id and extensions of the primitive `level`. */
  _level?: Element;
  /** Lower and upper bound values of the attribute estimate (0..1) */
  range?: Range;
  /** A nested attribute estimate; which is the attribute estimate of an attribute estimate (0..*) */
  attributeEstimate?: Array<EvidenceAttributeEstimate>;
}

/**
 * An aspect of the statistical model
 */
export interface EvidenceModelCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Model specification (1..1) */
  code: CodeableConcept;
  /** Numerical value to complete model specification (0..1) */
  value?: Quantity;
  /** A variable adjusted for in the adjusted analysis (0..*) */
  variable?: Array<EvidenceVariable1>;
  /** An attribute of the statistic used as a model characteristic (0..*) */
  attributeEstimate?: Array<EvidenceAttributeEstimate>;
}

/**
 * A variable adjusted for in the adjusted analysis
 */
export interface EvidenceVariable1 {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of the variable (1..1) */
  variableDefinition: Reference;
  /** continuous | dichotomous | ordinal | polychotomous (0..1) */
  handling?: EvidenceVariable1.HandlingEnum;
  /** Id and extensions of the primitive `handling`. */
  _handling?: Element;
  /** Description for grouping of ordinal or polychotomous variables (0..*) */
  valueCategory?: Array<CodeableConcept>;
  /** Discrete value for grouping of ordinal or polychotomous variables (0..*) */
  valueQuantity?: Array<Quantity>;
  /** Range of values for grouping of ordinal or polychotomous variables (0..*) */
  valueRange?: Array<Range>;
}

export namespace EvidenceVariable1 {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/variable-handling */
  export type HandlingEnum = 'continuous' | 'dichotomous' | 'ordinal' | 'polychotomous';
  export const HandlingEnum = {
    Continuous: 'continuous' as HandlingEnum,
    Dichotomous: 'dichotomous' as HandlingEnum,
    Ordinal: 'ordinal' as HandlingEnum,
    Polychotomous: 'polychotomous' as HandlingEnum,
  };
}

/**
 * Certainty or quality of the evidence
 */
export interface EvidenceCertainty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Textual description of certainty (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Footnotes and/or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** Aspect of certainty being rated (0..1) */
  type?: CodeableConcept;
  /** Assessment or judgement of the aspect (0..1) */
  rating?: CodeableConcept;
  /** Individual or group who did the rating (0..1) */
  rater?: string;
  /** Id and extensions of the primitive `rater`. */
  _rater?: Element;
  /** A domain or subdomain of certainty (0..*) */
  subcomponent?: Array<EvidenceCertainty>;
}
