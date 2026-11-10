/**
 * FHIR R4 data types generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

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
import type { UsageContext } from './usageContext';

/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export class ResearchElementDefinition {
  resourceType: 'ResearchElementDefinition';
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
  /** Canonical identifier for this research element definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** Additional identifier for the research element definition (0..*) */
  identifier?: Array<Identifier>;
  /** Business version of the research element definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;
  /** Name for this research element definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;
  /** Name for this research element definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;
  /** Title for use in informal contexts (0..1) */
  shortTitle?: string;
  /** Id and extensions of the primitive `shortTitle`. */
  _shortTitle?: Element;
  /** Subordinate title of the ResearchElementDefinition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;
  /** draft | active | retired | unknown (1..1) */
  status?: ResearchElementDefinition.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device (0..1) */
  subjectReference?: Reference;
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
  /** Natural language description of the research element definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** Used for footnotes or explanatory notes (0..*) */
  comment?: Array<string>;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Array<Element | null>;
  /** The context that the content is intended to support (0..*) */
  useContext?: Array<UsageContext>;
  /** Intended jurisdiction for research element definition (if applicable) (0..*) */
  jurisdiction?: Array<CodeableConcept>;
  /** Why this research element definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;
  /** Describes the clinical usage of the ResearchElementDefinition (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;
  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;
  /** When the research element definition was approved by publisher (0..1) */
  approvalDate?: Date | string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;
  /** When the research element definition was last reviewed (0..1) */
  lastReviewDate?: Date | string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;
  /** When the research element definition is expected to be used (0..1) */
  effectivePeriod?: Period;
  /** The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc. (0..*) */
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
  /** Logic used by the ResearchElementDefinition (0..*) */
  library?: Array<string>;
  /** Id and extensions of the primitive `library`. */
  _library?: Array<Element | null>;
  /** population | exposure | outcome (1..1) */
  type?: ResearchElementDefinition.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** dichotomous | continuous | descriptive (0..1) */
  variableType?: ResearchElementDefinition.VariableTypeEnum;
  /** Id and extensions of the primitive `variableType`. */
  _variableType?: Element;
  /** What defines the members of the research element (1..*) */
  characteristic: Array<ResearchElementDefinitionCharacteristic>;
}

export namespace ResearchElementDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/publication-status */
  export type StatusEnum = 'draft' | 'active' | 'retired' | 'unknown';
  export const StatusEnum = {
    Draft: 'draft' as StatusEnum,
    Active: 'active' as StatusEnum,
    Retired: 'retired' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/research-element-type */
  export type TypeEnum = 'population' | 'exposure' | 'outcome';
  export const TypeEnum = {
    Population: 'population' as TypeEnum,
    Exposure: 'exposure' as TypeEnum,
    Outcome: 'outcome' as TypeEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/variable-type */
  export type VariableTypeEnum = 'dichotomous' | 'continuous' | 'descriptive';
  export const VariableTypeEnum = {
    Dichotomous: 'dichotomous' as VariableTypeEnum,
    Continuous: 'continuous' as VariableTypeEnum,
    Descriptive: 'descriptive' as VariableTypeEnum,
  };
}

/**
 * What defines the members of the research element
 */
export class ResearchElementDefinitionCharacteristic {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** What code or expression defines members? (1..1) */
  definitionCodeableConcept?: CodeableConcept;
  /** What code or expression defines members? (1..1) */
  definitionCanonical?: string;
  /** Id and extensions of the primitive `definitionCanonical`. */
  _definitionCanonical?: Element;
  /** What code or expression defines members? (1..1) */
  definitionExpression?: Expression;
  /** What code or expression defines members? (1..1) */
  definitionDataRequirement?: DataRequirement;
  /** What code/value pairs define members? (0..*) */
  usageContext?: Array<UsageContext>;
  /** Whether the characteristic includes or excludes members (0..1) */
  exclude?: boolean;
  /** Id and extensions of the primitive `exclude`. */
  _exclude?: Element;
  /** What unit is the outcome described in? (0..1) */
  unitOfMeasure?: CodeableConcept;
  /** What time period does the study cover (0..1) */
  studyEffectiveDescription?: string;
  /** Id and extensions of the primitive `studyEffectiveDescription`. */
  _studyEffectiveDescription?: Element;
  /** What time period does the study cover (0..1) */
  studyEffectiveDateTime?: Date | string;
  /** Id and extensions of the primitive `studyEffectiveDateTime`. */
  _studyEffectiveDateTime?: Element;
  /** What time period does the study cover (0..1) */
  studyEffectivePeriod?: Period;
  /** What time period does the study cover (0..1) */
  studyEffectiveDuration?: Duration;
  /** What time period does the study cover (0..1) */
  studyEffectiveTiming?: Timing;
  /** Observation time from study start (0..1) */
  studyEffectiveTimeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median (0..1) */
  studyEffectiveGroupMeasure?: ResearchElementDefinitionCharacteristic.StudyEffectiveGroupMeasureEnum;
  /** Id and extensions of the primitive `studyEffectiveGroupMeasure`. */
  _studyEffectiveGroupMeasure?: Element;
  /** What time period do participants cover (0..1) */
  participantEffectiveDescription?: string;
  /** Id and extensions of the primitive `participantEffectiveDescription`. */
  _participantEffectiveDescription?: Element;
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
  participantEffectiveTimeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median (0..1) */
  participantEffectiveGroupMeasure?: ResearchElementDefinitionCharacteristic.ParticipantEffectiveGroupMeasureEnum;
  /** Id and extensions of the primitive `participantEffectiveGroupMeasure`. */
  _participantEffectiveGroupMeasure?: Element;
}

export namespace ResearchElementDefinitionCharacteristic {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/group-measure */
  export type StudyEffectiveGroupMeasureEnum =
    'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';
  export const StudyEffectiveGroupMeasureEnum = {
    Mean: 'mean' as StudyEffectiveGroupMeasureEnum,
    Median: 'median' as StudyEffectiveGroupMeasureEnum,
    MeanOfMean: 'mean-of-mean' as StudyEffectiveGroupMeasureEnum,
    MeanOfMedian: 'mean-of-median' as StudyEffectiveGroupMeasureEnum,
    MedianOfMean: 'median-of-mean' as StudyEffectiveGroupMeasureEnum,
    MedianOfMedian: 'median-of-median' as StudyEffectiveGroupMeasureEnum,
  };
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/group-measure */
  export type ParticipantEffectiveGroupMeasureEnum =
    'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';
  export const ParticipantEffectiveGroupMeasureEnum = {
    Mean: 'mean' as ParticipantEffectiveGroupMeasureEnum,
    Median: 'median' as ParticipantEffectiveGroupMeasureEnum,
    MeanOfMean: 'mean-of-mean' as ParticipantEffectiveGroupMeasureEnum,
    MeanOfMedian: 'mean-of-median' as ParticipantEffectiveGroupMeasureEnum,
    MedianOfMean: 'median-of-mean' as ParticipantEffectiveGroupMeasureEnum,
    MedianOfMedian: 'median-of-median' as ParticipantEffectiveGroupMeasureEnum,
  };
}
