/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

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
import type { Resource } from './resourceList';
import type { SampledData } from './sampledData';

/**
 * Base StructureDefinition for Observation Resource
 */
export class Observation {
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
  contained?: Array<Resource>;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Business Identifier for observation (0..*) */
  identifier?: Array<Identifier>;
  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Array<Reference>;
  /** registered | preliminary | final | amended + (1..1) */
  status?: Observation.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Classification of type of observation (0..*) */
  category?: Array<CodeableConcept>;
  /** Type of observation (code / type) (1..1) */
  code: CodeableConcept;
  /** Who and/or what this is about (0..1) */
  subject?: Reference;
  /** Healthcare event during which this observation is made (0..1) */
  context?: Reference;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for observation (0..1) */
  effectivePeriod?: Period;
  /** Date/Time this was made available (0..1) */
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
  valueRange?: Range;
  /** Actual result (0..1) */
  valueRatio?: Ratio;
  /** Actual result (0..1) */
  valueSampledData?: SampledData;
  /** Actual result (0..1) */
  valueAttachment?: Attachment;
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
  /** Why the result is missing (0..1) */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. (0..1) */
  interpretation?: CodeableConcept;
  /** Comments about result (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;
  /** Observed body part (0..1) */
  bodySite?: CodeableConcept;
  /** How it was done (0..1) */
  method?: CodeableConcept;
  /** Specimen used for this observation (0..1) */
  specimen?: Reference;
  /** (Measurement) Device (0..1) */
  device?: Reference;
  /** Provides guide for interpretation (0..*) */
  referenceRange?: Array<ObservationReferenceRange>;
  /** Resource related to this observation (0..*) */
  related?: Array<ObservationRelated>;
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
 * Provides guide for interpretation
 */
export class ObservationReferenceRange {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Low Range, if relevant (0..1) */
  low?: Quantity;
  /** High Range, if relevant (0..1) */
  high?: Quantity;
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
 * Resource related to this observation
 */
export class ObservationRelated {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by (0..1) */
  type?: ObservationRelated.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** Resource that is related to this one (1..1) */
  target: Reference;
}

export namespace ObservationRelated {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/observation-relationshiptypes */
  export type TypeEnum =
    'has-member' | 'derived-from' | 'sequel-to' | 'replaces' | 'qualified-by' | 'interfered-by';
  export const TypeEnum = {
    HasMember: 'has-member' as TypeEnum,
    DerivedFrom: 'derived-from' as TypeEnum,
    SequelTo: 'sequel-to' as TypeEnum,
    Replaces: 'replaces' as TypeEnum,
    QualifiedBy: 'qualified-by' as TypeEnum,
    InterferedBy: 'interfered-by' as TypeEnum,
  };
}

/**
 * Component results
 */
export class ObservationComponent {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
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
  valueRange?: Range;
  /** Actual component result (0..1) */
  valueRatio?: Ratio;
  /** Actual component result (0..1) */
  valueSampledData?: SampledData;
  /** Actual component result (0..1) */
  valueAttachment?: Attachment;
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
  /** Why the component result is missing (0..1) */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. (0..1) */
  interpretation?: CodeableConcept;
  /** Provides guide for interpretation of component result (0..*) */
  referenceRange?: Array<ObservationReferenceRange>;
}
