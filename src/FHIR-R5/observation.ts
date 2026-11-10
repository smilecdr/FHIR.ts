/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { Attachment } from './attachment';
import type { CodeableConcept } from './codeableConcept';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Range } from './range';
import type { Ratio } from './ratio';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { SampledData } from './sampledData';
import type { Timing } from './timing';

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export interface Observation {
  resourceType: 'Observation';
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
  /** Business Identifier for observation (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR ObservationDefinition (0..1) */
  instantiatesCanonical?: string;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Element;
  /** Instantiates FHIR ObservationDefinition (0..1) */
  instantiatesReference?: Reference;
  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Array<Reference>;
  /** Triggering observation(s) (0..*) */
  triggeredBy?: Array<ObservationTriggeredBy>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** registered | preliminary | final | amended + (1..1) */
  status?: Observation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classification of type of observation (0..*) */
  category?: Array<CodeableConcept>;
  /** Type of observation (code / type) (1..1) */
  code: CodeableConcept;
  /** Who and/or what the observation is about (0..1) */
  subject?: Reference;
  /** What the observation is about, when it is not about the subject of record (0..*) */
  focus?: Array<Reference>;
  /** Healthcare event during which this observation is made (0..1) */
  encounter?: Reference;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectivePeriod?: Period;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectiveTiming?: Timing;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectiveInstant?: string;
  /** Id and extensions of the primitive `effectiveInstant`. */
  _effectiveInstant?: Element;
  /** Date/Time this version was made available (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;
  /** Who is responsible for the observation (0..*) */
  performer?: Array<Reference>;
  /** Actual result (0..1) */
  valueQuantity?: Quantity;
  /** Actual result (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Actual result (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Actual result (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Actual result (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Actual result (0..1) */
  valueRange?: Range;
  /** Actual result (0..1) */
  valueRatio?: Ratio;
  /** Actual result (0..1) */
  valueSampledData?: SampledData;
  /** Actual result (0..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Actual result (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Actual result (0..1) */
  valuePeriod?: Period;
  /** Actual result (0..1) */
  valueAttachment?: Attachment;
  /** Actual result (0..1) */
  valueReference?: Reference;
  /** Why the result is missing (0..1) */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc (0..*) */
  interpretation?: Array<CodeableConcept>;
  /** Comments about the observation (0..*) */
  note?: Array<Annotation>;
  /** Observed body part (0..1) */
  bodySite?: CodeableConcept;
  /** Observed body structure (0..1) */
  bodyStructure?: Reference;
  /** How it was done (0..1) */
  method?: CodeableConcept;
  /** Specimen used for this observation (0..1) */
  specimen?: Reference;
  /** A reference to the device that generates the measurements or the device settings for the device (0..1) */
  device?: Reference;
  /** Provides guide for interpretation (0..*) */
  referenceRange?: Array<ObservationReferenceRange>;
  /** Related resource that belongs to the Observation group (0..*) */
  hasMember?: Array<Reference>;
  /** Related resource from which the observation is made (0..*) */
  derivedFrom?: Array<Reference>;
  /** Component results (0..*) */
  component?: Array<ObservationComponent>;
}

export namespace Observation {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/observation-status */
  export type StatusEnum =
    | 'registered'
    | 'preliminary'
    | 'final'
    | 'amended'
    | 'corrected'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Registered: 'registered' as StatusEnum,
    Preliminary: 'preliminary' as StatusEnum,
    Final: 'final' as StatusEnum,
    Amended: 'amended' as StatusEnum,
    Corrected: 'corrected' as StatusEnum,
    Cancelled: 'cancelled' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * Triggering observation(s)
 */
export interface ObservationTriggeredBy {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Triggering observation (1..1) */
  observation: Reference;
  /** reflex | repeat | re-run (1..1) */
  type?: ObservationTriggeredBy.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Reason that the observation was triggered (0..1) */
  reason?: string;
  /** Id and extensions of the primitive `reason`. */
  _reason?: Element;
}

export namespace ObservationTriggeredBy {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/observation-triggeredbytype */
  export type TypeEnum = 'reflex' | 'repeat' | 're-run';
  export const TypeEnum = {
    Reflex: 'reflex' as TypeEnum,
    Repeat: 'repeat' as TypeEnum,
    ReRun: 're-run' as TypeEnum,
  };
}

/**
 * Provides guide for interpretation
 */
export interface ObservationReferenceRange {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Low Range, if relevant (0..1) */
  low?: Quantity;
  /** High Range, if relevant (0..1) */
  high?: Quantity;
  /** Normal value, if relevant (0..1) */
  normalValue?: CodeableConcept;
  /** Reference range qualifier (0..1) */
  type?: CodeableConcept;
  /** Reference range population (0..*) */
  appliesTo?: Array<CodeableConcept>;
  /** Applicable age range, if relevant (0..1) */
  age?: Range;
  /** Text based reference range in an observation (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
}

/**
 * Component results
 */
export interface ObservationComponent {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of component observation (code / type) (1..1) */
  code: CodeableConcept;
  /** Actual component result (0..1) */
  valueQuantity?: Quantity;
  /** Actual component result (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Actual component result (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Actual component result (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Actual component result (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Actual component result (0..1) */
  valueRange?: Range;
  /** Actual component result (0..1) */
  valueRatio?: Ratio;
  /** Actual component result (0..1) */
  valueSampledData?: SampledData;
  /** Actual component result (0..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Actual component result (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Actual component result (0..1) */
  valuePeriod?: Period;
  /** Actual component result (0..1) */
  valueAttachment?: Attachment;
  /** Actual component result (0..1) */
  valueReference?: Reference;
  /** Why the component result is missing (0..1) */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc (0..*) */
  interpretation?: Array<CodeableConcept>;
  /** Provides guide for interpretation of component result (0..*) */
  referenceRange?: Array<ObservationReferenceRange>;
}
