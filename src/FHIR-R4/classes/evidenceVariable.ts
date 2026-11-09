/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { ContactDetail } from './contactDetail';
import type { DataRequirement } from './dataRequirement';
import type { Duration } from './duration';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Reference } from './reference';
import type { RelatedArtifact } from './relatedArtifact';
import type { Resource } from './resourceList';
import type { Timing } from './timing';
import type { TriggerDefinition } from './triggerDefinition';
import type { UsageContext } from './usageContext';

/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export class EvidenceVariable {
  resourceType: 'EvidenceVariable';
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
  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the evidence variable (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the evidence variable (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this evidence variable (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this evidence variable (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Title for use in informal contexts (0..1) */
  shortTitle?: string;
  /** Id and extensions of the primitive `shortTitle`. */
  _shortTitle?: Element;
  /** Subordinate title of the EvidenceVariable (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: EvidenceVariable.StatusEnum;
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
  /** Natural language description of the evidence variable (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Used for footnotes or explanatory notes (0..*) */
  note?: Array<Annotation>;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for evidence variable (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** When the evidence variable was approved by publisher (0..1) */
  approvalDate?: Date | string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the evidence variable was last reviewed (0..1) */
  lastReviewDate?: Date | string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the evidence variable is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. (0..*) */
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
  /** dichotomous | continuous | descriptive (0..1) */
  type?: EvidenceVariable.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** What defines the members of the evidence element (1..*) */
  characteristic: Array<EvidenceVariableCharacteristic>;
}

export namespace EvidenceVariable {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/variable-type */
  export type TypeEnum = 'dichotomous' | 'continuous' | 'descriptive';
  export const TypeEnum = {
    Dichotomous: 'dichotomous' as TypeEnum,
    Continuous: 'continuous' as TypeEnum,
    Descriptive: 'descriptive' as TypeEnum,
  };
}

/**
 * What defines the members of the evidence element
 */
export class EvidenceVariableCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Natural language description of the characteristic (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** What code or expression defines members? (1..1) */
  definitionReference?: Reference;
  /** What code or expression defines members? (1..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;
  /** What code or expression defines members? (1..1) */
  definitionCodeableConcept?: CodeableConcept;
  /** What code or expression defines members? (1..1) */
  definitionExpression?: Expression;
  /** What code or expression defines members? (1..1) */
  definitionDataRequirement?: DataRequirement;
  /** What code or expression defines members? (1..1) */
  definitionTriggerDefinition?: TriggerDefinition;
  /** What code/value pairs define members? (0..*) */
  usageContext?: Array<UsageContext>;
  /** Whether the characteristic includes or excludes members (0..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;
  /** What time period do participants cover (0..1) */
  participantEffectiveDateTime?: Date | string;
  /** Id and extensions of the primitive `participantEffectiveDateTime`. */
  _participantEffectiveDateTime?: Element;
  /** What time period do participants cover (0..1) */
  participantEffectivePeriod?: Period;
  /** What time period do participants cover (0..1) */
  participantEffectiveDuration?: Duration;
  /** What time period do participants cover (0..1) */
  participantEffectiveTiming?: Timing;
  /** Observation time from study start (0..1) */
  timeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median (0..1) */
  groupMeasure?: EvidenceVariableCharacteristic.GroupMeasureEnum;
  /** Id and extensions of the primitive `groupMeasure`. */
  _groupMeasure?: Element;
}

export namespace EvidenceVariableCharacteristic {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/group-measure */
  export type GroupMeasureEnum =
    'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';
  export const GroupMeasureEnum = {
    Mean: 'mean' as GroupMeasureEnum,
    Median: 'median' as GroupMeasureEnum,
    MeanOfMean: 'mean-of-mean' as GroupMeasureEnum,
    MeanOfMedian: 'mean-of-median' as GroupMeasureEnum,
    MedianOfMean: 'median-of-mean' as GroupMeasureEnum,
    MedianOfMedian: 'median-of-median' as GroupMeasureEnum,
  };
}
