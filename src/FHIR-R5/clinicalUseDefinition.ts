/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { CodeableConcept } from './codeableConcept';
import type { CodeableReference } from './codeableReference';
import type { Element } from './element';
import type { Expression } from './expression';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Range } from './range';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 */
export interface ClinicalUseDefinition {
  resourceType: 'ClinicalUseDefinition';
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
  /** Business identifier for this issue (0..*) */
  identifier?: Array<Identifier>;
  /** indication | contraindication | interaction | undesirable-effect | warning (1..1) */
  type?: ClinicalUseDefinition.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose" (0..*) */
  category?: Array<CodeableConcept>;
  /** The medication, product, substance, device, procedure etc. for which this is an indication (0..*) */
  subject?: Array<Reference>;
  /** Whether this is a current issue or one that has been retired etc (0..1) */
  status?: CodeableConcept;
  /** Specifics for when this is a contraindication (0..1) */
  contraindication?: ClinicalUseDefinitionContraindication;
  /** Specifics for when this is an indication (0..1) */
  indication?: ClinicalUseDefinitionIndication;
  /** Specifics for when this is an interaction (0..1) */
  interaction?: ClinicalUseDefinitionInteraction;
  /** The population group to which this applies (0..*) */
  population?: Array<Reference>;
  /** Logic used by the clinical use definition (0..*) */
  library?: Array<string>;
  /** Id and extensions of the primitive `library`. */
  _library?: Array<Element | null>;
  /** A possible negative outcome from the use of this treatment (0..1) */
  undesirableEffect?: ClinicalUseDefinitionUndesirableEffect;
  /** Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness' (0..1) */
  warning?: ClinicalUseDefinitionWarning;
}

export namespace ClinicalUseDefinition {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/clinical-use-definition-type */
  export type TypeEnum =
    'indication' | 'contraindication' | 'interaction' | 'undesirable-effect' | 'warning';
  export const TypeEnum = {
    Indication: 'indication' as TypeEnum,
    Contraindication: 'contraindication' as TypeEnum,
    Interaction: 'interaction' as TypeEnum,
    UndesirableEffect: 'undesirable-effect' as TypeEnum,
    Warning: 'warning' as TypeEnum,
  };
}

/**
 * Specifics for when this is a contraindication
 */
export interface ClinicalUseDefinitionContraindication {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The situation that is being documented as contraindicating against this item (0..1) */
  diseaseSymptomProcedure?: CodeableReference;
  /** The status of the disease or symptom for the contraindication (0..1) */
  diseaseStatus?: CodeableReference;
  /** A comorbidity (concurrent condition) or coinfection (0..*) */
  comorbidity?: Array<CodeableReference>;
  /** The indication which this is a contraidication for (0..*) */
  indication?: Array<Reference>;
  /** An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements (0..1) */
  applicability?: Expression;
  /** Information about use of the product in relation to other therapies described as part of the contraindication (0..*) */
  otherTherapy?: Array<ClinicalUseDefinitionOtherTherapy>;
}

/**
 * Information about use of the product in relation to other therapies described as part of the contraindication
 */
export interface ClinicalUseDefinitionOtherTherapy {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The type of relationship between the product indication/contraindication and another therapy (1..1) */
  relationshipType: CodeableConcept;
  /** Reference to a specific medication, substance etc. as part of an indication or contraindication (1..1) */
  treatment: CodeableReference;
}

/**
 * Specifics for when this is an indication
 */
export interface ClinicalUseDefinitionIndication {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The situation that is being documented as an indicaton for this item (0..1) */
  diseaseSymptomProcedure?: CodeableReference;
  /** The status of the disease or symptom for the indication (0..1) */
  diseaseStatus?: CodeableReference;
  /** A comorbidity or coinfection as part of the indication (0..*) */
  comorbidity?: Array<CodeableReference>;
  /** The intended effect, aim or strategy to be achieved (0..1) */
  intendedEffect?: CodeableReference;
  /** Timing or duration information (0..1) */
  durationRange?: Range;
  /** Timing or duration information (0..1) */
  durationString?: string;
  /** Id and extensions of the primitive `durationString`. */
  _durationString?: Element;
  /** An unwanted side effect or negative outcome of the subject of this resource when being used for this indication (0..*) */
  undesirableEffect?: Array<Reference>;
  /** An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements (0..1) */
  applicability?: Expression;
  /** The use of the medicinal product in relation to other therapies described as part of the indication (0..*) */
  otherTherapy?: Array<ClinicalUseDefinitionOtherTherapy>;
}

/**
 * Specifics for when this is an interaction
 */
export interface ClinicalUseDefinitionInteraction {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specific medication, product, food etc. or laboratory test that interacts (0..*) */
  interactant?: Array<ClinicalUseDefinitionInteractant>;
  /** The type of the interaction e.g. drug-drug interaction, drug-lab test interaction (0..1) */
  type?: CodeableConcept;
  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" (0..1) */
  effect?: CodeableReference;
  /** The incidence of the interaction, e.g. theoretical, observed (0..1) */
  incidence?: CodeableConcept;
  /** Actions for managing the interaction (0..*) */
  management?: Array<CodeableConcept>;
}

/**
 * The specific medication, product, food etc. or laboratory test that interacts
 */
export interface ClinicalUseDefinitionInteractant {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The specific medication, product, food etc. or laboratory test that interacts (1..1) */
  itemReference?: Reference;
  /** The specific medication, product, food etc. or laboratory test that interacts (1..1) */
  itemCodeableConcept?: CodeableConcept;
}

/**
 * A possible negative outcome from the use of this treatment
 */
export interface ClinicalUseDefinitionUndesirableEffect {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** The situation in which the undesirable effect may manifest (0..1) */
  symptomConditionEffect?: CodeableReference;
  /** High level classification of the effect (0..1) */
  classification?: CodeableConcept;
  /** How often the effect is seen (0..1) */
  frequencyOfOccurrence?: CodeableConcept;
}

/**
 * Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'
 */
export interface ClinicalUseDefinitionWarning {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** A textual definition of this warning, with formatting (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;
  /** A coded or unformatted textual definition of this warning (0..1) */
  code?: CodeableConcept;
}
