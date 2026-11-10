/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export class QuestionnaireResponse extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: ['CarePlan', 'ServiceRequest'],
        },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'partOf',
          typeCode: 'Reference',
          targetResourceTypes: ['Observation', 'Procedure'],
        },
      ],
    },
    {
      elementName: 'questionnaire',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'questionnaire', typeCode: 'canonical' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.QuestionnaireResponseStatus,
        },
      ],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subject', typeCode: 'Reference' }],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'authored',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'authored', typeCode: 'dateTime' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'source',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner', 'PractitionerRole', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'QuestionnaireResponseItem' }],
    },
  ];

  readonly resourceType = 'QuestionnaireResponse';

  /** Unique id for this set of answers (0..1) */
  identifier?: Identifier;

  /** Request fulfilled by this QuestionnaireResponse (0..*) */
  basedOn?: Reference[];

  /** Part of this action (0..*) */
  partOf?: Reference[];

  /** Form being answered (0..1) */
  questionnaire?: string;
  /** Id and extensions of the primitive `questionnaire`. */
  _questionnaire?: Element;

  /** in-progress | completed | amended | entered-in-error | stopped (1..1) */
  status?: valueSetCodes.QuestionnaireResponseStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The subject of the questions (0..1) */
  subject?: Reference;

  /** Encounter created as part of (0..1) */
  encounter?: Reference;

  /** Date the answers were gathered (0..1) */
  authored?: string;
  /** Id and extensions of the primitive `authored`. */
  _authored?: Element;

  /** Person who received and recorded the answers (0..1) */
  author?: Reference;

  /** The person who answered the questions (0..1) */
  source?: Reference;

  /** Groups and questions (0..*) */
  item?: QuestionnaireResponseItem[];

  override fhirType(): string {
    return 'QuestionnaireResponse';
  }

  /** FHIR JSON for this QuestionnaireResponse, typed as the plain `QuestionnaireResponse` data type. */
  override toJSON(): plainTypes.QuestionnaireResponse {
    return this.serialize() as plainTypes.QuestionnaireResponse;
  }

  /** Unique id for this set of answers (0..1) Created when absent. */
  getIdentifier(): Identifier {
    if (this.identifier === undefined) {
      this.identifier = new Identifier();
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Request fulfilled by this QuestionnaireResponse (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
  }

  /** Part of this action (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** Form being answered (0..1) */
  getQuestionnaire(): string | undefined {
    return this.questionnaire;
  }

  /** Sets `questionnaire`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setQuestionnaire(questionnaire: string | undefined): this {
    return this.setFieldValue('questionnaire', questionnaire);
  }

  hasQuestionnaire(): boolean {
    return this.hasFieldValue('questionnaire');
  }

  /** The element carrying the id and extensions of `questionnaire`. Created when absent. */
  getQuestionnaireElement(): Element {
    if (this._questionnaire === undefined) {
      this._questionnaire = new Element();
    }
    return this._questionnaire;
  }

  setQuestionnaireElement(questionnaireElement: Element | undefined): this {
    this._questionnaire = questionnaireElement;
    return this;
  }

  /** in-progress | completed | amended | entered-in-error | stopped (1..1) */
  getStatus(): valueSetCodes.QuestionnaireResponseStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.QuestionnaireResponseStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** The subject of the questions (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Encounter created as part of (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** Date the answers were gathered (0..1) */
  getAuthored(): string | undefined {
    return this.authored;
  }

  /** Sets `authored`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setAuthored(authored: string | undefined): this {
    return this.setFieldValue('authored', authored);
  }

  hasAuthored(): boolean {
    return this.hasFieldValue('authored');
  }

  /** The element carrying the id and extensions of `authored`. Created when absent. */
  getAuthoredElement(): Element {
    if (this._authored === undefined) {
      this._authored = new Element();
    }
    return this._authored;
  }

  setAuthoredElement(authoredElement: Element | undefined): this {
    this._authored = authoredElement;
    return this;
  }

  /** Person who received and recorded the answers (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** The person who answered the questions (0..1) Created when absent. */
  getSource(): Reference {
    if (this.source === undefined) {
      this.source = new Reference();
    }
    return this.source;
  }

  setSource(source: Reference | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Groups and questions (0..*) Never undefined; an empty list is created when absent. */
  getItem(): QuestionnaireResponseItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: QuestionnaireResponseItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty QuestionnaireResponseItem to `item` and returns it so it can be filled in. */
  addItem(): QuestionnaireResponseItem;
  /** Appends the given QuestionnaireResponseItem to `item` and returns this object for chaining. */
  addItem(questionnaireResponseItem: QuestionnaireResponseItem): this;
  addItem(questionnaireResponseItem?: QuestionnaireResponseItem): QuestionnaireResponseItem | this {
    if (questionnaireResponseItem !== undefined) {
      return this.addFieldValue('item', questionnaireResponseItem);
    }
    const createdQuestionnaireResponseItem = new QuestionnaireResponseItem();
    this.addFieldValue('item', createdQuestionnaireResponseItem);
    return createdQuestionnaireResponseItem;
  }

  /** The first QuestionnaireResponseItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): QuestionnaireResponseItem {
    const firstQuestionnaireResponseItem = this.getItem()[0];
    return firstQuestionnaireResponseItem === undefined
      ? this.addItem()
      : firstQuestionnaireResponseItem;
  }
}

modelTypeRegistry.register('QuestionnaireResponse', QuestionnaireResponse, true);

/** True when the value is a QuestionnaireResponse model instance. */
export function isQuestionnaireResponse(candidate: unknown): candidate is QuestionnaireResponse {
  return candidate instanceof QuestionnaireResponse;
}

/**
 * Groups and questions
 */
export class QuestionnaireResponseItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'linkId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'definition', typeCode: 'uri' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'answer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'answer', typeCode: 'QuestionnaireResponseItemAnswer' }],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'QuestionnaireResponseItem' }],
    },
  ];

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
  answer?: QuestionnaireResponseItemAnswer[];

  /** Nested questionnaire response items (0..*) */
  item?: QuestionnaireResponseItem[];

  override fhirType(): string {
    return 'QuestionnaireResponse.item';
  }

  /** FHIR JSON for this QuestionnaireResponseItem, typed as the plain `QuestionnaireResponseItem` data type. */
  override toJSON(): plainTypes.QuestionnaireResponseItem {
    return this.serialize() as plainTypes.QuestionnaireResponseItem;
  }

  /** Pointer to specific item from Questionnaire (1..1) */
  getLinkId(): string | undefined {
    return this.linkId;
  }

  /** Sets `linkId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLinkId(linkId: string | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** The element carrying the id and extensions of `linkId`. Created when absent. */
  getLinkIdElement(): Element {
    if (this._linkId === undefined) {
      this._linkId = new Element();
    }
    return this._linkId;
  }

  setLinkIdElement(linkIdElement: Element | undefined): this {
    this._linkId = linkIdElement;
    return this;
  }

  /** ElementDefinition - details for the item (0..1) */
  getDefinition(): string | undefined {
    return this.definition;
  }

  /** Sets `definition`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setDefinition(definition: string | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** The element carrying the id and extensions of `definition`. Created when absent. */
  getDefinitionElement(): Element {
    if (this._definition === undefined) {
      this._definition = new Element();
    }
    return this._definition;
  }

  setDefinitionElement(definitionElement: Element | undefined): this {
    this._definition = definitionElement;
    return this;
  }

  /** Name for group or question text (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** The response(s) to the question (0..*) Never undefined; an empty list is created when absent. */
  getAnswer(): QuestionnaireResponseItemAnswer[] {
    if (this.answer === undefined) {
      this.answer = [];
    }
    return this.answer;
  }

  setAnswer(answer: QuestionnaireResponseItemAnswer[] | undefined): this {
    return this.setFieldValue('answer', answer);
  }

  hasAnswer(): boolean {
    return this.hasFieldValue('answer');
  }

  /** Appends a new, empty QuestionnaireResponseItemAnswer to `answer` and returns it so it can be filled in. */
  addAnswer(): QuestionnaireResponseItemAnswer;
  /** Appends the given QuestionnaireResponseItemAnswer to `answer` and returns this object for chaining. */
  addAnswer(questionnaireResponseItemAnswer: QuestionnaireResponseItemAnswer): this;
  addAnswer(
    questionnaireResponseItemAnswer?: QuestionnaireResponseItemAnswer
  ): QuestionnaireResponseItemAnswer | this {
    if (questionnaireResponseItemAnswer !== undefined) {
      return this.addFieldValue('answer', questionnaireResponseItemAnswer);
    }
    const createdQuestionnaireResponseItemAnswer = new QuestionnaireResponseItemAnswer();
    this.addFieldValue('answer', createdQuestionnaireResponseItemAnswer);
    return createdQuestionnaireResponseItemAnswer;
  }

  /** The first QuestionnaireResponseItemAnswer of `answer`. One is added when the list is empty. */
  getAnswerFirstRep(): QuestionnaireResponseItemAnswer {
    const firstQuestionnaireResponseItemAnswer = this.getAnswer()[0];
    return firstQuestionnaireResponseItemAnswer === undefined
      ? this.addAnswer()
      : firstQuestionnaireResponseItemAnswer;
  }

  /** Nested questionnaire response items (0..*) Never undefined; an empty list is created when absent. */
  getItem(): QuestionnaireResponseItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: QuestionnaireResponseItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty QuestionnaireResponseItem to `item` and returns it so it can be filled in. */
  addItem(): QuestionnaireResponseItem;
  /** Appends the given QuestionnaireResponseItem to `item` and returns this object for chaining. */
  addItem(questionnaireResponseItem: QuestionnaireResponseItem): this;
  addItem(questionnaireResponseItem?: QuestionnaireResponseItem): QuestionnaireResponseItem | this {
    if (questionnaireResponseItem !== undefined) {
      return this.addFieldValue('item', questionnaireResponseItem);
    }
    const createdQuestionnaireResponseItem = new QuestionnaireResponseItem();
    this.addFieldValue('item', createdQuestionnaireResponseItem);
    return createdQuestionnaireResponseItem;
  }

  /** The first QuestionnaireResponseItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): QuestionnaireResponseItem {
    const firstQuestionnaireResponseItem = this.getItem()[0];
    return firstQuestionnaireResponseItem === undefined
      ? this.addItem()
      : firstQuestionnaireResponseItem;
  }
}

modelTypeRegistry.register('QuestionnaireResponseItem', QuestionnaireResponseItem, false);

/**
 * The response(s) to the question
 */
export class QuestionnaireResponseItemAnswer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'QuestionnaireResponseItem' }],
    },
  ];

  /** Single-valued answer to the question (0..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Single-valued answer to the question (0..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Single-valued answer to the question (0..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Single-valued answer to the question (0..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Single-valued answer to the question (0..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** Single-valued answer to the question (0..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Single-valued answer to the question (0..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Single-valued answer to the question (0..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** Single-valued answer to the question (0..1) */
  valueAttachment?: Attachment;
  /** Single-valued answer to the question (0..1) */
  valueCoding?: Coding;
  /** Single-valued answer to the question (0..1) */
  valueQuantity?: Quantity;
  /** Single-valued answer to the question (0..1) */
  valueReference?: Reference;

  /** Nested groups and questions (0..*) */
  item?: QuestionnaireResponseItem[];

  override fhirType(): string {
    return 'QuestionnaireResponse.item.answer';
  }

  /** FHIR JSON for this QuestionnaireResponseItemAnswer, typed as the plain `QuestionnaireResponseAnswer` data type. */
  override toJSON(): plainTypes.QuestionnaireResponseAnswer {
    return this.serialize() as plainTypes.QuestionnaireResponseAnswer;
  }

  /** Single-valued answer to the question (0..1) Whichever type of `value[x]` is set. */
  getValue(): boolean | number | string | Attachment | Coding | Quantity | Reference | undefined {
    return this.getChoiceValue<
      boolean | number | string | Attachment | Coding | Quantity | Reference
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueBoolean(): boolean | undefined {
    return this.valueBoolean;
  }

  /** Sets `value[x]` as boolean and clears every other type of it. */
  setValueBoolean(valueBoolean: boolean | undefined): this {
    return this.setFieldValue('valueBoolean', valueBoolean);
  }

  hasValueBoolean(): boolean {
    return this.hasFieldValue('valueBoolean');
  }

  getValueDecimal(): number | undefined {
    return this.valueDecimal;
  }

  /** Sets `value[x]` as decimal and clears every other type of it. */
  setValueDecimal(valueDecimal: number | undefined): this {
    return this.setFieldValue('valueDecimal', valueDecimal);
  }

  hasValueDecimal(): boolean {
    return this.hasFieldValue('valueDecimal');
  }

  getValueInteger(): number | undefined {
    return this.valueInteger;
  }

  /** Sets `value[x]` as integer and clears every other type of it. */
  setValueInteger(valueInteger: number | undefined): this {
    return this.setFieldValue('valueInteger', valueInteger);
  }

  hasValueInteger(): boolean {
    return this.hasFieldValue('valueInteger');
  }

  getValueDate(): string | undefined {
    return this.valueDate;
  }

  /** Sets `value[x]` as date and clears every other type of it. */
  setValueDate(valueDate: string | undefined): this {
    return this.setFieldValue('valueDate', valueDate);
  }

  hasValueDate(): boolean {
    return this.hasFieldValue('valueDate');
  }

  getValueDateTime(): string | undefined {
    return this.valueDateTime;
  }

  /** Sets `value[x]` as dateTime and clears every other type of it. */
  setValueDateTime(valueDateTime: string | undefined): this {
    return this.setFieldValue('valueDateTime', valueDateTime);
  }

  hasValueDateTime(): boolean {
    return this.hasFieldValue('valueDateTime');
  }

  getValueTime(): string | undefined {
    return this.valueTime;
  }

  /** Sets `value[x]` as time and clears every other type of it. */
  setValueTime(valueTime: string | undefined): this {
    return this.setFieldValue('valueTime', valueTime);
  }

  hasValueTime(): boolean {
    return this.hasFieldValue('valueTime');
  }

  getValueString(): string | undefined {
    return this.valueString;
  }

  /** Sets `value[x]` as string and clears every other type of it. */
  setValueString(valueString: string | undefined): this {
    return this.setFieldValue('valueString', valueString);
  }

  hasValueString(): boolean {
    return this.hasFieldValue('valueString');
  }

  getValueUri(): string | undefined {
    return this.valueUri;
  }

  /** Sets `value[x]` as uri and clears every other type of it. */
  setValueUri(valueUri: string | undefined): this {
    return this.setFieldValue('valueUri', valueUri);
  }

  hasValueUri(): boolean {
    return this.hasFieldValue('valueUri');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }

  /** Nested groups and questions (0..*) Never undefined; an empty list is created when absent. */
  getItem(): QuestionnaireResponseItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: QuestionnaireResponseItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty QuestionnaireResponseItem to `item` and returns it so it can be filled in. */
  addItem(): QuestionnaireResponseItem;
  /** Appends the given QuestionnaireResponseItem to `item` and returns this object for chaining. */
  addItem(questionnaireResponseItem: QuestionnaireResponseItem): this;
  addItem(questionnaireResponseItem?: QuestionnaireResponseItem): QuestionnaireResponseItem | this {
    if (questionnaireResponseItem !== undefined) {
      return this.addFieldValue('item', questionnaireResponseItem);
    }
    const createdQuestionnaireResponseItem = new QuestionnaireResponseItem();
    this.addFieldValue('item', createdQuestionnaireResponseItem);
    return createdQuestionnaireResponseItem;
  }

  /** The first QuestionnaireResponseItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): QuestionnaireResponseItem {
    const firstQuestionnaireResponseItem = this.getItem()[0];
    return firstQuestionnaireResponseItem === undefined
      ? this.addItem()
      : firstQuestionnaireResponseItem;
  }
}

modelTypeRegistry.register(
  'QuestionnaireResponseItemAnswer',
  QuestionnaireResponseItemAnswer,
  false
);
