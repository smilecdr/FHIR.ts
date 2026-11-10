/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Annotation } from './annotation';
import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Period } from './period';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';
import type { Timing } from './timing';

/**
 * A record of food or fluid that is being consumed by a patient. A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past. The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician. A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed. The consumption information may come from sources such as the patient's memory, from a nutrition label, or from a clinician documenting observed intake.
 */
export interface NutritionIntake {
  resourceType: 'NutritionIntake';
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
  /** External identifier (0..*) */
  identifier?: Array<Identifier>;
  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: Array<string>;
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: Array<Element | null>;
  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: Array<string>;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Array<Element | null>;
  /** Fulfils plan, proposal or order (0..*) */
  basedOn?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown (1..1) */
  status?: NutritionIntake.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** Reason for current status (0..*) */
  statusReason?: Array<CodeableConcept>;
  /** Code representing an overall type of nutrition intake (0..1) */
  code?: CodeableConcept;
  /** Who is/was consuming the food or fluid (1..1) */
  subject: Reference;
  /** Encounter associated with NutritionIntake (0..1) */
  encounter?: Reference;
  /** The date/time or interval when the food or fluid is/was consumed (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** The date/time or interval when the food or fluid is/was consumed (0..1) */
  occurrencePeriod?: Period;
  /** When the intake was recorded (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;
  /** Person or organization that provided the information about the consumption of this food or fluid (0..1) */
  reportedBoolean?: boolean;
  /** Id and extensions of the primitive `reportedBoolean`. */
  _reportedBoolean?: Element;
  /** Person or organization that provided the information about the consumption of this food or fluid (0..1) */
  reportedReference?: Reference;
  /** What food or fluid product or item was consumed (1..*) */
  consumedItem: Array<NutritionIntakeConsumedItem>;
  /** Total nutrient for the whole meal, product, serving (0..*) */
  ingredientLabel?: Array<NutritionIntakeIngredientLabel>;
  /** Who was performed in the intake (0..*) */
  performer?: Array<NutritionIntakePerformer>;
  /** Where the intake occurred (0..1) */
  location?: Reference;
  /** Additional supporting information (0..*) */
  derivedFrom?: Array<Reference>;
  /** Reason for why the food or fluid is /was consumed (0..*) */
  reason?: Array<CodeableReference>;
  /** Further information about the consumption (0..*) */
  note?: Array<Annotation>;
}

export namespace NutritionIntake {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/event-status */
  export type StatusEnum =
    | 'preparation'
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'stopped'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';
  export const StatusEnum = {
    Preparation: 'preparation' as StatusEnum,
    InProgress: 'in-progress' as StatusEnum,
    NotDone: 'not-done' as StatusEnum,
    OnHold: 'on-hold' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Unknown: 'unknown' as StatusEnum,
  };
}

/**
 * What food or fluid product or item was consumed
 */
export interface NutritionIntakeConsumedItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of food or fluid product (1..1) */
  type: CodeableConcept;
  /** Code that identifies the food or fluid product that was consumed (1..1) */
  nutritionProduct: CodeableReference;
  /** Scheduled frequency of consumption (0..1) */
  schedule?: Timing;
  /** Quantity of the specified food (0..1) */
  amount?: Quantity;
  /** Rate at which enteral feeding was administered (0..1) */
  rate?: Quantity;
  /** Flag to indicate if the food or fluid item was refused or otherwise not consumed (0..1) */
  notConsumed?: boolean;
  /** Id and extensions of the primitive `notConsumed`. */
  _notConsumed?: Element;
  /** Reason food or fluid was not consumed (0..1) */
  notConsumedReason?: CodeableConcept;
}

/**
 * Total nutrient for the whole meal, product, serving
 */
export interface NutritionIntakeIngredientLabel {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Total nutrient consumed (1..1) */
  nutrient: CodeableReference;
  /** Total amount of nutrient consumed (1..1) */
  amount: Quantity;
}

/**
 * Who was performed in the intake
 */
export interface NutritionIntakePerformer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Type of performer (0..1) */
  function?: CodeableConcept;
  /** Who performed the intake (1..1) */
  actor: Reference;
}
