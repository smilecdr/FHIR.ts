/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
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
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 */
export class RiskEvidenceSynthesis {
  resourceType: 'RiskEvidenceSynthesis';
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
  /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the risk evidence synthesis (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the risk evidence synthesis (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this risk evidence synthesis (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this risk evidence synthesis (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: RiskEvidenceSynthesis.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
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
  /** Natural language description of the risk evidence synthesis (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for risk evidence synthesis (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** When the risk evidence synthesis was approved by publisher (0..1) */
  approvalDate?: Date | string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the risk evidence synthesis was last reviewed (0..1) */
  lastReviewDate?: Date | string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the risk evidence synthesis is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. (0..*) */
  topic?: Array<CodeableConcept>;
  /** Who authored the content (0..*) */
  author?: Array<ContactDetail>;
  /** Who edited the content (0..*) */
  editor?: Array<ContactDetail>;
  /** Who reviewed the content (0..*) */
  reviewer?: Array<ContactDetail>;
  /** Who endorsed the content (0..*) */
  endorser?: Array<ContactDetail>;
  /** Additional documentation, citations, etc. (0..*) */
  relatedArtifact?: Array<RelatedArtifact>;
  /** Type of synthesis (0..1) */
  synthesisType?: CodeableConcept;
  /** Type of study (0..1) */
  studyType?: CodeableConcept;
  /** What population? (1..1) */
  population: Reference;
  /** What exposure? (0..1) */
  exposure?: Reference;
  /** What outcome? (1..1) */
  outcome: Reference;
  /** What sample size was involved? (0..1) */
  sampleSize?: RiskEvidenceSynthesisSampleSize;
  /** What was the estimated risk (0..1) */
  riskEstimate?: RiskEvidenceSynthesisRiskEstimate;
  /** How certain is the risk (0..*) */
  certainty?: Array<RiskEvidenceSynthesisCertainty>;
}

export namespace RiskEvidenceSynthesis {
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
 * What sample size was involved?
 */
export class RiskEvidenceSynthesisSampleSize {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of sample size (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** How many studies? (0..1) */
  numberOfStudies?: number;
  /** Id and extensions of the primitive `numberOfStudies`. */
  _numberOfStudies?: Element;
  /** How many participants? (0..1) */
  numberOfParticipants?: number;
  /** Id and extensions of the primitive `numberOfParticipants`. */
  _numberOfParticipants?: Element;
}

/**
 * What was the estimated risk
 */
export class RiskEvidenceSynthesisRiskEstimate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Description of risk estimate (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Type of risk estimate (0..1) */
  type?: CodeableConcept;
  /** Point estimate (0..1) */
  value?: number;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;
  /** What unit is the outcome described in? (0..1) */
  unitOfMeasure?: CodeableConcept;
  /** Sample size for group measured (0..1) */
  denominatorCount?: number;
  /** Id and extensions of the primitive `denominatorCount`. */
  _denominatorCount?: Element;
  /** Number with the outcome (0..1) */
  numeratorCount?: number;
  /** Id and extensions of the primitive `numeratorCount`. */
  _numeratorCount?: Element;
  /** How precise the estimate is (0..*) */
  precisionEstimate?: Array<RiskEvidenceSynthesisPrecisionEstimate>;
}

/**
 * How precise the estimate is
 */
export class RiskEvidenceSynthesisPrecisionEstimate {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of precision estimate (0..1) */
  type?: CodeableConcept;
  /** Level of confidence interval (0..1) */
  level?: number;
  /** Id and extensions of the primitive `level`. */
  _level?: Element;
  /** Lower bound (0..1) */
  from?: number;
  /** Id and extensions of the primitive `from`. */
  _from?: Element;
  /** Upper bound (0..1) */
  to?: number;
  /** Id and extensions of the primitive `to`. */
  _to?: Element;
}

/**
 * How certain is the risk
 */
export class RiskEvidenceSynthesisCertainty {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Certainty rating (0..*) */
  rating?: Array<CodeableConcept>;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** A component that contributes to the overall certainty (0..*) */
  certaintySubcomponent?: Array<RiskEvidenceSynthesisCertaintySubcomponent>;
}

/**
 * A component that contributes to the overall certainty
 */
export class RiskEvidenceSynthesisCertaintySubcomponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of subcomponent of certainty rating (0..1) */
  type?: CodeableConcept;
  /** Subcomponent certainty rating (0..*) */
  rating?: Array<CodeableConcept>;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
}
