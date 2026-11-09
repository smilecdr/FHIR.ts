/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Attachment } from './attachment';
import type { Coding } from './coding';
import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Narrative } from './narrative';
import type { Quantity } from './quantity';
import type { Reference } from './reference';
import type { ResourceList } from './resourceList';

/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export interface QuestionnaireResponse {
  resourceType: 'QuestionnaireResponse';
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
  /** Business identifier for this set of answers (0..*) */
  identifier?: Array<Identifier>;
  /** Request fulfilled by this QuestionnaireResponse (0..*) */
  basedOn?: Array<Reference>;
  /** Part of referenced event (0..*) */
  partOf?: Array<Reference>;
  /** Canonical URL of Questionnaire being answered (1..1) */
  questionnaire?: string;
  /** Id and extensions of the primitive `questionnaire`. */
  _questionnaire?: Element;
  /** in-progress | completed | amended | entered-in-error | stopped (1..1) */
  status?: QuestionnaireResponse.StatusEnum;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The subject of the questions (0..1) */
  subject?: Reference;
  /** Encounter the questionnaire response is part of (0..1) */
  encounter?: Reference;
  /** Date the answers were gathered (0..1) */
  authored?: string;
  /** Id and extensions of the primitive `authored`. */
  _authored?: Element;
  /** The individual or device that received and recorded the answers (0..1) */
  author?: Reference;
  /** The individual or device that answered the questions (0..1) */
  source?: Reference;
  /** Groups and questions (0..*) */
  item?: Array<QuestionnaireResponseItem>;
}

export namespace QuestionnaireResponse {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/questionnaire-answers-status */
  export type StatusEnum = 'in-progress' | 'completed' | 'amended' | 'entered-in-error' | 'stopped';
  export const StatusEnum = {
    InProgress: 'in-progress' as StatusEnum,
    Completed: 'completed' as StatusEnum,
    Amended: 'amended' as StatusEnum,
    EnteredInError: 'entered-in-error' as StatusEnum,
    Stopped: 'stopped' as StatusEnum,
  };
}

/**
 * Groups and questions
 */
export interface QuestionnaireResponseItem {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Pointer to specific item from Questionnaire (1..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;
  /** ElementDefinition - details for the item (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;
  /** Name for group or question text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;
  /** The response(s) to the question (0..*) */
  answer?: Array<QuestionnaireResponseAnswer>;
  /** Child items of group item (0..*) */
  item?: Array<QuestionnaireResponseItem>;
}

/**
 * The response(s) to the question
 */
export interface QuestionnaireResponseAnswer {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Single-valued answer to the question (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Single-valued answer to the question (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Single-valued answer to the question (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Single-valued answer to the question (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Single-valued answer to the question (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Single-valued answer to the question (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Single-valued answer to the question (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Single-valued answer to the question (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Single-valued answer to the question (1..1) */
  valueAttachment?: Attachment;
  /** Single-valued answer to the question (1..1) */
  valueCoding?: Coding;
  /** Single-valued answer to the question (1..1) */
  valueQuantity?: Quantity;
  /** Single-valued answer to the question (1..1) */
  valueReference?: Reference;
  /** Child items of question (0..*) */
  item?: Array<QuestionnaireResponseItem>;
}
