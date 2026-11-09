/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for Questionnaire Resource
 */
export class Questionnaire extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'title',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.PublicationStatus },
      ],
    },
    {
      elementName: 'experimental',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'experimental', typeCode: 'boolean' }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'publisher',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publisher', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'purpose', typeCode: 'markdown' }],
    },
    {
      elementName: 'approvalDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'approvalDate', typeCode: 'date' }],
    },
    {
      elementName: 'lastReviewDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastReviewDate', typeCode: 'date' }],
    },
    {
      elementName: 'effectivePeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectivePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'useContext',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'useContext', typeCode: 'UsageContext' }],
    },
    {
      elementName: 'jurisdiction',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'jurisdiction', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'subjectType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'subjectType', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType },
      ],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'QuestionnaireItem' }],
    },
  ];

  readonly resourceType = 'Questionnaire';

  /** Logical URI to reference this questionnaire (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the questionnaire (0..*) */
  identifier?: Identifier[];

  /** Business version of the questionnaire (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this questionnaire (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this questionnaire (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Date this was last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Natural language description of the questionnaire (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Why this questionnaire is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** When the questionnaire was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** When the questionnaire was last reviewed (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** When the questionnaire is expected to be used (0..1) */
  effectivePeriod?: Period;

  /** Context the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for questionnaire (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Concept that represents the overall questionnaire (0..*) */
  code?: Coding[];

  /** Resource that can be subject of QuestionnaireResponse (0..*) */
  subjectType?: valueSetCodes.ResourceType[];
  /** Id and extensions of the primitive `subjectType`. */
  _subjectType?: (Element | null)[];

  /** Questions and sections within the Questionnaire (0..*) */
  item?: QuestionnaireItem[];

  override fhirType(): string {
    return 'Questionnaire';
  }

  /** FHIR JSON for this Questionnaire, typed as the plain `Questionnaire` data type. */
  override toJSON(): plainTypes.Questionnaire {
    return this.serialize() as plainTypes.Questionnaire;
  }

  /** Logical URI to reference this questionnaire (globally unique) (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setUrl(url: string | undefined): this {
    return this.setFieldValue('url', url);
  }

  hasUrl(): boolean {
    return this.hasFieldValue('url');
  }

  /** The element carrying the id and extensions of `url`. Created when absent. */
  getUrlElement(): Element {
    if (this._url === undefined) {
      this._url = new Element();
    }
    return this._url;
  }

  setUrlElement(urlElement: Element | undefined): this {
    this._url = urlElement;
    return this;
  }

  /** Additional identifier for the questionnaire (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** Business version of the questionnaire (0..1) */
  getVersion(): string | undefined {
    return this.version;
  }

  /** Sets `version`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersion(version: string | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** The element carrying the id and extensions of `version`. Created when absent. */
  getVersionElement(): Element {
    if (this._version === undefined) {
      this._version = new Element();
    }
    return this._version;
  }

  setVersionElement(versionElement: Element | undefined): this {
    this._version = versionElement;
    return this;
  }

  /** Name for this questionnaire (computer friendly) (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Name for this questionnaire (human friendly) (0..1) */
  getTitle(): string | undefined {
    return this.title;
  }

  /** Sets `title`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTitle(title: string | undefined): this {
    return this.setFieldValue('title', title);
  }

  hasTitle(): boolean {
    return this.hasFieldValue('title');
  }

  /** The element carrying the id and extensions of `title`. Created when absent. */
  getTitleElement(): Element {
    if (this._title === undefined) {
      this._title = new Element();
    }
    return this._title;
  }

  setTitleElement(titleElement: Element | undefined): this {
    this._title = titleElement;
    return this;
  }

  /** draft | active | retired | unknown (1..1) */
  getStatus(): valueSetCodes.PublicationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.PublicationStatus | undefined): this {
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

  /** For testing purposes, not real usage (0..1) */
  getExperimental(): boolean | undefined {
    return this.experimental;
  }

  /** Sets `experimental`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExperimental(experimental: boolean | undefined): this {
    return this.setFieldValue('experimental', experimental);
  }

  hasExperimental(): boolean {
    return this.hasFieldValue('experimental');
  }

  /** The element carrying the id and extensions of `experimental`. Created when absent. */
  getExperimentalElement(): Element {
    if (this._experimental === undefined) {
      this._experimental = new Element();
    }
    return this._experimental;
  }

  setExperimentalElement(experimentalElement: Element | undefined): this {
    this._experimental = experimentalElement;
    return this;
  }

  /** Date this was last changed (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Name of the publisher (organization or individual) (0..1) */
  getPublisher(): string | undefined {
    return this.publisher;
  }

  /** Sets `publisher`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPublisher(publisher: string | undefined): this {
    return this.setFieldValue('publisher', publisher);
  }

  hasPublisher(): boolean {
    return this.hasFieldValue('publisher');
  }

  /** The element carrying the id and extensions of `publisher`. Created when absent. */
  getPublisherElement(): Element {
    if (this._publisher === undefined) {
      this._publisher = new Element();
    }
    return this._publisher;
  }

  setPublisherElement(publisherElement: Element | undefined): this {
    this._publisher = publisherElement;
    return this;
  }

  /** Natural language description of the questionnaire (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Why this questionnaire is defined (0..1) */
  getPurpose(): string | undefined {
    return this.purpose;
  }

  /** Sets `purpose`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPurpose(purpose: string | undefined): this {
    return this.setFieldValue('purpose', purpose);
  }

  hasPurpose(): boolean {
    return this.hasFieldValue('purpose');
  }

  /** The element carrying the id and extensions of `purpose`. Created when absent. */
  getPurposeElement(): Element {
    if (this._purpose === undefined) {
      this._purpose = new Element();
    }
    return this._purpose;
  }

  setPurposeElement(purposeElement: Element | undefined): this {
    this._purpose = purposeElement;
    return this;
  }

  /** When the questionnaire was approved by publisher (0..1) */
  getApprovalDate(): string | undefined {
    return this.approvalDate;
  }

  /** Sets `approvalDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setApprovalDate(approvalDate: string | undefined): this {
    return this.setFieldValue('approvalDate', approvalDate);
  }

  hasApprovalDate(): boolean {
    return this.hasFieldValue('approvalDate');
  }

  /** The element carrying the id and extensions of `approvalDate`. Created when absent. */
  getApprovalDateElement(): Element {
    if (this._approvalDate === undefined) {
      this._approvalDate = new Element();
    }
    return this._approvalDate;
  }

  setApprovalDateElement(approvalDateElement: Element | undefined): this {
    this._approvalDate = approvalDateElement;
    return this;
  }

  /** When the questionnaire was last reviewed (0..1) */
  getLastReviewDate(): string | undefined {
    return this.lastReviewDate;
  }

  /** Sets `lastReviewDate`. Throws a FhirModelError when the value is not a valid FHIR date. */
  setLastReviewDate(lastReviewDate: string | undefined): this {
    return this.setFieldValue('lastReviewDate', lastReviewDate);
  }

  hasLastReviewDate(): boolean {
    return this.hasFieldValue('lastReviewDate');
  }

  /** The element carrying the id and extensions of `lastReviewDate`. Created when absent. */
  getLastReviewDateElement(): Element {
    if (this._lastReviewDate === undefined) {
      this._lastReviewDate = new Element();
    }
    return this._lastReviewDate;
  }

  setLastReviewDateElement(lastReviewDateElement: Element | undefined): this {
    this._lastReviewDate = lastReviewDateElement;
    return this;
  }

  /** When the questionnaire is expected to be used (0..1) Created when absent. */
  getEffectivePeriod(): Period {
    if (this.effectivePeriod === undefined) {
      this.effectivePeriod = new Period();
    }
    return this.effectivePeriod;
  }

  setEffectivePeriod(effectivePeriod: Period | undefined): this {
    return this.setFieldValue('effectivePeriod', effectivePeriod);
  }

  hasEffectivePeriod(): boolean {
    return this.hasFieldValue('effectivePeriod');
  }

  /** Context the content is intended to support (0..*) Never undefined; an empty list is created when absent. */
  getUseContext(): UsageContext[] {
    if (this.useContext === undefined) {
      this.useContext = [];
    }
    return this.useContext;
  }

  setUseContext(useContext: UsageContext[] | undefined): this {
    return this.setFieldValue('useContext', useContext);
  }

  hasUseContext(): boolean {
    return this.hasFieldValue('useContext');
  }

  /** Appends a new, empty UsageContext to `useContext` and returns it so it can be filled in. */
  addUseContext(): UsageContext;
  /** Appends the given UsageContext to `useContext` and returns this object for chaining. */
  addUseContext(usageContext: UsageContext): this;
  addUseContext(usageContext?: UsageContext): UsageContext | this {
    if (usageContext !== undefined) {
      return this.addFieldValue('useContext', usageContext);
    }
    const createdUsageContext = new UsageContext();
    this.addFieldValue('useContext', createdUsageContext);
    return createdUsageContext;
  }

  /** The first UsageContext of `useContext`. One is added when the list is empty. */
  getUseContextFirstRep(): UsageContext {
    const firstUsageContext = this.getUseContext()[0];
    return firstUsageContext === undefined ? this.addUseContext() : firstUsageContext;
  }

  /** Intended jurisdiction for questionnaire (if applicable) (0..*) Never undefined; an empty list is created when absent. */
  getJurisdiction(): CodeableConcept[] {
    if (this.jurisdiction === undefined) {
      this.jurisdiction = [];
    }
    return this.jurisdiction;
  }

  setJurisdiction(jurisdiction: CodeableConcept[] | undefined): this {
    return this.setFieldValue('jurisdiction', jurisdiction);
  }

  hasJurisdiction(): boolean {
    return this.hasFieldValue('jurisdiction');
  }

  /** Appends a new, empty CodeableConcept to `jurisdiction` and returns it so it can be filled in. */
  addJurisdiction(): CodeableConcept;
  /** Appends the given CodeableConcept to `jurisdiction` and returns this object for chaining. */
  addJurisdiction(codeableConcept: CodeableConcept): this;
  addJurisdiction(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('jurisdiction', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('jurisdiction', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `jurisdiction`. One is added when the list is empty. */
  getJurisdictionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getJurisdiction()[0];
    return firstCodeableConcept === undefined ? this.addJurisdiction() : firstCodeableConcept;
  }

  /** Contact details for the publisher (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ContactDetail[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ContactDetail[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ContactDetail to `contact` and returns it so it can be filled in. */
  addContact(): ContactDetail;
  /** Appends the given ContactDetail to `contact` and returns this object for chaining. */
  addContact(contactDetail: ContactDetail): this;
  addContact(contactDetail?: ContactDetail): ContactDetail | this {
    if (contactDetail !== undefined) {
      return this.addFieldValue('contact', contactDetail);
    }
    const createdContactDetail = new ContactDetail();
    this.addFieldValue('contact', createdContactDetail);
    return createdContactDetail;
  }

  /** The first ContactDetail of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ContactDetail {
    const firstContactDetail = this.getContact()[0];
    return firstContactDetail === undefined ? this.addContact() : firstContactDetail;
  }

  /** Use and/or publishing restrictions (0..1) */
  getCopyright(): string | undefined {
    return this.copyright;
  }

  /** Sets `copyright`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setCopyright(copyright: string | undefined): this {
    return this.setFieldValue('copyright', copyright);
  }

  hasCopyright(): boolean {
    return this.hasFieldValue('copyright');
  }

  /** The element carrying the id and extensions of `copyright`. Created when absent. */
  getCopyrightElement(): Element {
    if (this._copyright === undefined) {
      this._copyright = new Element();
    }
    return this._copyright;
  }

  setCopyrightElement(copyrightElement: Element | undefined): this {
    this._copyright = copyrightElement;
    return this;
  }

  /** Concept that represents the overall questionnaire (0..*) Never undefined; an empty list is created when absent. */
  getCode(): Coding[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: Coding[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty Coding to `code` and returns it so it can be filled in. */
  addCode(): Coding;
  /** Appends the given Coding to `code` and returns this object for chaining. */
  addCode(coding: Coding): this;
  addCode(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('code', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('code', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `code`. One is added when the list is empty. */
  getCodeFirstRep(): Coding {
    const firstCoding = this.getCode()[0];
    return firstCoding === undefined ? this.addCode() : firstCoding;
  }

  /** Resource that can be subject of QuestionnaireResponse (0..*) Never undefined; an empty list is created when absent. */
  getSubjectType(): valueSetCodes.ResourceType[] {
    if (this.subjectType === undefined) {
      this.subjectType = [];
    }
    return this.subjectType;
  }

  setSubjectType(subjectType: valueSetCodes.ResourceType[] | undefined): this {
    return this.setFieldValue('subjectType', subjectType);
  }

  hasSubjectType(): boolean {
    return this.hasFieldValue('subjectType');
  }

  /** Appends one value to `subjectType`. Throws a FhirModelError when it is not a valid FHIR code. */
  addSubjectType(subjectType: valueSetCodes.ResourceType): this {
    return this.addFieldValue('subjectType', subjectType);
  }

  /** Questions and sections within the Questionnaire (0..*) Never undefined; an empty list is created when absent. */
  getItem(): QuestionnaireItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: QuestionnaireItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty QuestionnaireItem to `item` and returns it so it can be filled in. */
  addItem(): QuestionnaireItem;
  /** Appends the given QuestionnaireItem to `item` and returns this object for chaining. */
  addItem(questionnaireItem: QuestionnaireItem): this;
  addItem(questionnaireItem?: QuestionnaireItem): QuestionnaireItem | this {
    if (questionnaireItem !== undefined) {
      return this.addFieldValue('item', questionnaireItem);
    }
    const createdQuestionnaireItem = new QuestionnaireItem();
    this.addFieldValue('item', createdQuestionnaireItem);
    return createdQuestionnaireItem;
  }

  /** The first QuestionnaireItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): QuestionnaireItem {
    const firstQuestionnaireItem = this.getItem()[0];
    return firstQuestionnaireItem === undefined ? this.addItem() : firstQuestionnaireItem;
  }
}

modelTypeRegistry.register('Questionnaire', Questionnaire, true);

/** True when the value is a Questionnaire model instance. */
export function isQuestionnaire(candidate: unknown): candidate is Questionnaire {
  return candidate instanceof Questionnaire;
}

/**
 * Questions and sections within the Questionnaire
 */
export class QuestionnaireItem extends BackboneElement {
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
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'Coding' }],
    },
    {
      elementName: 'prefix',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'prefix', typeCode: 'string' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.QuestionnaireItemType },
      ],
    },
    {
      elementName: 'enableWhen',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'enableWhen', typeCode: 'QuestionnaireItemEnableWhen' }],
    },
    {
      elementName: 'required',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'required', typeCode: 'boolean' }],
    },
    {
      elementName: 'repeats',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'repeats', typeCode: 'boolean' }],
    },
    {
      elementName: 'readOnly',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'readOnly', typeCode: 'boolean' }],
    },
    {
      elementName: 'maxLength',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxLength', typeCode: 'integer' }],
    },
    {
      elementName: 'options',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'options', typeCode: 'Reference', targetResourceTypes: ['ValueSet'] }],
    },
    {
      elementName: 'option',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'option', typeCode: 'QuestionnaireItemOption' }],
    },
    {
      elementName: 'initial',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'initialBoolean', typeCode: 'boolean' },
        { jsonKey: 'initialDecimal', typeCode: 'decimal' },
        { jsonKey: 'initialInteger', typeCode: 'integer' },
        { jsonKey: 'initialDate', typeCode: 'date' },
        { jsonKey: 'initialDateTime', typeCode: 'dateTime' },
        { jsonKey: 'initialTime', typeCode: 'time' },
        { jsonKey: 'initialString', typeCode: 'string' },
        { jsonKey: 'initialUri', typeCode: 'uri' },
        { jsonKey: 'initialAttachment', typeCode: 'Attachment' },
        { jsonKey: 'initialCoding', typeCode: 'Coding' },
        { jsonKey: 'initialQuantity', typeCode: 'Quantity' },
        { jsonKey: 'initialReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'item',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'item', typeCode: 'QuestionnaireItem' }],
    },
  ];

  /** Unique id for item in questionnaire (1..1) */
  linkId?: string;
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: Element;

  /** ElementDefinition - details for the item (0..1) */
  definition?: string;
  /** Id and extensions of the primitive `definition`. */
  _definition?: Element;

  /** Corresponding concept for this item in a terminology (0..*) */
  code?: Coding[];

  /** E.g. "1(a)", "2.5.3" (0..1) */
  prefix?: string;
  /** Id and extensions of the primitive `prefix`. */
  _prefix?: Element;

  /** Primary text for the item (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** group | display | boolean | decimal | integer | date | dateTime + (1..1) */
  type?: valueSetCodes.QuestionnaireItemType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Only allow data when (0..*) */
  enableWhen?: QuestionnaireItemEnableWhen[];

  /** Whether the item must be included in data results (0..1) */
  required?: boolean;
  /** Id and extensions of the primitive `required`. */
  _required?: Element;

  /** Whether the item may repeat (0..1) */
  repeats?: boolean;
  /** Id and extensions of the primitive `repeats`. */
  _repeats?: Element;

  /** Don't allow human editing (0..1) */
  readOnly?: boolean;
  /** Id and extensions of the primitive `readOnly`. */
  _readOnly?: Element;

  /** No more than this many characters (0..1) */
  maxLength?: number;
  /** Id and extensions of the primitive `maxLength`. */
  _maxLength?: Element;

  /** Valueset containing permitted answers (0..1) */
  options?: Reference;

  /** Permitted answer (0..*) */
  option?: QuestionnaireItemOption[];

  /** Default value when item is first rendered (0..1) */
  initialBoolean?: boolean;
  /** Id and extensions of the primitive `initialBoolean`. */
  _initialBoolean?: Element;
  /** Default value when item is first rendered (0..1) */
  initialDecimal?: number;
  /** Id and extensions of the primitive `initialDecimal`. */
  _initialDecimal?: Element;
  /** Default value when item is first rendered (0..1) */
  initialInteger?: number;
  /** Id and extensions of the primitive `initialInteger`. */
  _initialInteger?: Element;
  /** Default value when item is first rendered (0..1) */
  initialDate?: string;
  /** Id and extensions of the primitive `initialDate`. */
  _initialDate?: Element;
  /** Default value when item is first rendered (0..1) */
  initialDateTime?: string;
  /** Id and extensions of the primitive `initialDateTime`. */
  _initialDateTime?: Element;
  /** Default value when item is first rendered (0..1) */
  initialTime?: string;
  /** Id and extensions of the primitive `initialTime`. */
  _initialTime?: Element;
  /** Default value when item is first rendered (0..1) */
  initialString?: string;
  /** Id and extensions of the primitive `initialString`. */
  _initialString?: Element;
  /** Default value when item is first rendered (0..1) */
  initialUri?: string;
  /** Id and extensions of the primitive `initialUri`. */
  _initialUri?: Element;
  /** Default value when item is first rendered (0..1) */
  initialAttachment?: Attachment;
  /** Default value when item is first rendered (0..1) */
  initialCoding?: Coding;
  /** Default value when item is first rendered (0..1) */
  initialQuantity?: Quantity;
  /** Default value when item is first rendered (0..1) */
  initialReference?: Reference;

  /** Nested questionnaire items (0..*) */
  item?: QuestionnaireItem[];

  override fhirType(): string {
    return 'Questionnaire.item';
  }

  /** FHIR JSON for this QuestionnaireItem, typed as the plain `QuestionnaireItem` data type. */
  override toJSON(): plainTypes.QuestionnaireItem {
    return this.serialize() as plainTypes.QuestionnaireItem;
  }

  /** Unique id for item in questionnaire (1..1) */
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

  /** Corresponding concept for this item in a terminology (0..*) Never undefined; an empty list is created when absent. */
  getCode(): Coding[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: Coding[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty Coding to `code` and returns it so it can be filled in. */
  addCode(): Coding;
  /** Appends the given Coding to `code` and returns this object for chaining. */
  addCode(coding: Coding): this;
  addCode(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('code', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('code', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `code`. One is added when the list is empty. */
  getCodeFirstRep(): Coding {
    const firstCoding = this.getCode()[0];
    return firstCoding === undefined ? this.addCode() : firstCoding;
  }

  /** E.g. "1(a)", "2.5.3" (0..1) */
  getPrefix(): string | undefined {
    return this.prefix;
  }

  /** Sets `prefix`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPrefix(prefix: string | undefined): this {
    return this.setFieldValue('prefix', prefix);
  }

  hasPrefix(): boolean {
    return this.hasFieldValue('prefix');
  }

  /** The element carrying the id and extensions of `prefix`. Created when absent. */
  getPrefixElement(): Element {
    if (this._prefix === undefined) {
      this._prefix = new Element();
    }
    return this._prefix;
  }

  setPrefixElement(prefixElement: Element | undefined): this {
    this._prefix = prefixElement;
    return this;
  }

  /** Primary text for the item (0..1) */
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

  /** group | display | boolean | decimal | integer | date | dateTime + (1..1) */
  getType(): valueSetCodes.QuestionnaireItemType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.QuestionnaireItemType | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** The element carrying the id and extensions of `type`. Created when absent. */
  getTypeElement(): Element {
    if (this._type === undefined) {
      this._type = new Element();
    }
    return this._type;
  }

  setTypeElement(typeElement: Element | undefined): this {
    this._type = typeElement;
    return this;
  }

  /** Only allow data when (0..*) Never undefined; an empty list is created when absent. */
  getEnableWhen(): QuestionnaireItemEnableWhen[] {
    if (this.enableWhen === undefined) {
      this.enableWhen = [];
    }
    return this.enableWhen;
  }

  setEnableWhen(enableWhen: QuestionnaireItemEnableWhen[] | undefined): this {
    return this.setFieldValue('enableWhen', enableWhen);
  }

  hasEnableWhen(): boolean {
    return this.hasFieldValue('enableWhen');
  }

  /** Appends a new, empty QuestionnaireItemEnableWhen to `enableWhen` and returns it so it can be filled in. */
  addEnableWhen(): QuestionnaireItemEnableWhen;
  /** Appends the given QuestionnaireItemEnableWhen to `enableWhen` and returns this object for chaining. */
  addEnableWhen(questionnaireItemEnableWhen: QuestionnaireItemEnableWhen): this;
  addEnableWhen(
    questionnaireItemEnableWhen?: QuestionnaireItemEnableWhen
  ): QuestionnaireItemEnableWhen | this {
    if (questionnaireItemEnableWhen !== undefined) {
      return this.addFieldValue('enableWhen', questionnaireItemEnableWhen);
    }
    const createdQuestionnaireItemEnableWhen = new QuestionnaireItemEnableWhen();
    this.addFieldValue('enableWhen', createdQuestionnaireItemEnableWhen);
    return createdQuestionnaireItemEnableWhen;
  }

  /** The first QuestionnaireItemEnableWhen of `enableWhen`. One is added when the list is empty. */
  getEnableWhenFirstRep(): QuestionnaireItemEnableWhen {
    const firstQuestionnaireItemEnableWhen = this.getEnableWhen()[0];
    return firstQuestionnaireItemEnableWhen === undefined
      ? this.addEnableWhen()
      : firstQuestionnaireItemEnableWhen;
  }

  /** Whether the item must be included in data results (0..1) */
  getRequired(): boolean | undefined {
    return this.required;
  }

  /** Sets `required`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRequired(required: boolean | undefined): this {
    return this.setFieldValue('required', required);
  }

  hasRequired(): boolean {
    return this.hasFieldValue('required');
  }

  /** The element carrying the id and extensions of `required`. Created when absent. */
  getRequiredElement(): Element {
    if (this._required === undefined) {
      this._required = new Element();
    }
    return this._required;
  }

  setRequiredElement(requiredElement: Element | undefined): this {
    this._required = requiredElement;
    return this;
  }

  /** Whether the item may repeat (0..1) */
  getRepeats(): boolean | undefined {
    return this.repeats;
  }

  /** Sets `repeats`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setRepeats(repeats: boolean | undefined): this {
    return this.setFieldValue('repeats', repeats);
  }

  hasRepeats(): boolean {
    return this.hasFieldValue('repeats');
  }

  /** The element carrying the id and extensions of `repeats`. Created when absent. */
  getRepeatsElement(): Element {
    if (this._repeats === undefined) {
      this._repeats = new Element();
    }
    return this._repeats;
  }

  setRepeatsElement(repeatsElement: Element | undefined): this {
    this._repeats = repeatsElement;
    return this;
  }

  /** Don't allow human editing (0..1) */
  getReadOnly(): boolean | undefined {
    return this.readOnly;
  }

  /** Sets `readOnly`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setReadOnly(readOnly: boolean | undefined): this {
    return this.setFieldValue('readOnly', readOnly);
  }

  hasReadOnly(): boolean {
    return this.hasFieldValue('readOnly');
  }

  /** The element carrying the id and extensions of `readOnly`. Created when absent. */
  getReadOnlyElement(): Element {
    if (this._readOnly === undefined) {
      this._readOnly = new Element();
    }
    return this._readOnly;
  }

  setReadOnlyElement(readOnlyElement: Element | undefined): this {
    this._readOnly = readOnlyElement;
    return this;
  }

  /** No more than this many characters (0..1) */
  getMaxLength(): number | undefined {
    return this.maxLength;
  }

  /** Sets `maxLength`. Throws a FhirModelError when the value is not a valid FHIR integer. */
  setMaxLength(maxLength: number | undefined): this {
    return this.setFieldValue('maxLength', maxLength);
  }

  hasMaxLength(): boolean {
    return this.hasFieldValue('maxLength');
  }

  /** The element carrying the id and extensions of `maxLength`. Created when absent. */
  getMaxLengthElement(): Element {
    if (this._maxLength === undefined) {
      this._maxLength = new Element();
    }
    return this._maxLength;
  }

  setMaxLengthElement(maxLengthElement: Element | undefined): this {
    this._maxLength = maxLengthElement;
    return this;
  }

  /** Valueset containing permitted answers (0..1) Created when absent. */
  getOptions(): Reference {
    if (this.options === undefined) {
      this.options = new Reference();
    }
    return this.options;
  }

  setOptions(options: Reference | undefined): this {
    return this.setFieldValue('options', options);
  }

  hasOptions(): boolean {
    return this.hasFieldValue('options');
  }

  /** Permitted answer (0..*) Never undefined; an empty list is created when absent. */
  getOption(): QuestionnaireItemOption[] {
    if (this.option === undefined) {
      this.option = [];
    }
    return this.option;
  }

  setOption(option: QuestionnaireItemOption[] | undefined): this {
    return this.setFieldValue('option', option);
  }

  hasOption(): boolean {
    return this.hasFieldValue('option');
  }

  /** Appends a new, empty QuestionnaireItemOption to `option` and returns it so it can be filled in. */
  addOption(): QuestionnaireItemOption;
  /** Appends the given QuestionnaireItemOption to `option` and returns this object for chaining. */
  addOption(questionnaireItemOption: QuestionnaireItemOption): this;
  addOption(questionnaireItemOption?: QuestionnaireItemOption): QuestionnaireItemOption | this {
    if (questionnaireItemOption !== undefined) {
      return this.addFieldValue('option', questionnaireItemOption);
    }
    const createdQuestionnaireItemOption = new QuestionnaireItemOption();
    this.addFieldValue('option', createdQuestionnaireItemOption);
    return createdQuestionnaireItemOption;
  }

  /** The first QuestionnaireItemOption of `option`. One is added when the list is empty. */
  getOptionFirstRep(): QuestionnaireItemOption {
    const firstQuestionnaireItemOption = this.getOption()[0];
    return firstQuestionnaireItemOption === undefined
      ? this.addOption()
      : firstQuestionnaireItemOption;
  }

  /** Default value when item is first rendered (0..1) Whichever type of `initial[x]` is set. */
  getInitial(): boolean | number | string | Attachment | Coding | Quantity | Reference | undefined {
    return this.getChoiceValue<
      boolean | number | string | Attachment | Coding | Quantity | Reference
    >('initial');
  }

  /** True when any type of `initial[x]` is set. */
  hasInitial(): boolean {
    return this.hasChoiceValue('initial');
  }

  getInitialBoolean(): boolean | undefined {
    return this.initialBoolean;
  }

  /** Sets `initial[x]` as boolean and clears every other type of it. */
  setInitialBoolean(initialBoolean: boolean | undefined): this {
    return this.setFieldValue('initialBoolean', initialBoolean);
  }

  hasInitialBoolean(): boolean {
    return this.hasFieldValue('initialBoolean');
  }

  getInitialDecimal(): number | undefined {
    return this.initialDecimal;
  }

  /** Sets `initial[x]` as decimal and clears every other type of it. */
  setInitialDecimal(initialDecimal: number | undefined): this {
    return this.setFieldValue('initialDecimal', initialDecimal);
  }

  hasInitialDecimal(): boolean {
    return this.hasFieldValue('initialDecimal');
  }

  getInitialInteger(): number | undefined {
    return this.initialInteger;
  }

  /** Sets `initial[x]` as integer and clears every other type of it. */
  setInitialInteger(initialInteger: number | undefined): this {
    return this.setFieldValue('initialInteger', initialInteger);
  }

  hasInitialInteger(): boolean {
    return this.hasFieldValue('initialInteger');
  }

  getInitialDate(): string | undefined {
    return this.initialDate;
  }

  /** Sets `initial[x]` as date and clears every other type of it. */
  setInitialDate(initialDate: string | undefined): this {
    return this.setFieldValue('initialDate', initialDate);
  }

  hasInitialDate(): boolean {
    return this.hasFieldValue('initialDate');
  }

  getInitialDateTime(): string | undefined {
    return this.initialDateTime;
  }

  /** Sets `initial[x]` as dateTime and clears every other type of it. */
  setInitialDateTime(initialDateTime: string | undefined): this {
    return this.setFieldValue('initialDateTime', initialDateTime);
  }

  hasInitialDateTime(): boolean {
    return this.hasFieldValue('initialDateTime');
  }

  getInitialTime(): string | undefined {
    return this.initialTime;
  }

  /** Sets `initial[x]` as time and clears every other type of it. */
  setInitialTime(initialTime: string | undefined): this {
    return this.setFieldValue('initialTime', initialTime);
  }

  hasInitialTime(): boolean {
    return this.hasFieldValue('initialTime');
  }

  getInitialString(): string | undefined {
    return this.initialString;
  }

  /** Sets `initial[x]` as string and clears every other type of it. */
  setInitialString(initialString: string | undefined): this {
    return this.setFieldValue('initialString', initialString);
  }

  hasInitialString(): boolean {
    return this.hasFieldValue('initialString');
  }

  getInitialUri(): string | undefined {
    return this.initialUri;
  }

  /** Sets `initial[x]` as uri and clears every other type of it. */
  setInitialUri(initialUri: string | undefined): this {
    return this.setFieldValue('initialUri', initialUri);
  }

  hasInitialUri(): boolean {
    return this.hasFieldValue('initialUri');
  }

  getInitialAttachment(): Attachment | undefined {
    return this.initialAttachment;
  }

  /** Sets `initial[x]` as Attachment and clears every other type of it. */
  setInitialAttachment(initialAttachment: Attachment | undefined): this {
    return this.setFieldValue('initialAttachment', initialAttachment);
  }

  hasInitialAttachment(): boolean {
    return this.hasFieldValue('initialAttachment');
  }

  getInitialCoding(): Coding | undefined {
    return this.initialCoding;
  }

  /** Sets `initial[x]` as Coding and clears every other type of it. */
  setInitialCoding(initialCoding: Coding | undefined): this {
    return this.setFieldValue('initialCoding', initialCoding);
  }

  hasInitialCoding(): boolean {
    return this.hasFieldValue('initialCoding');
  }

  getInitialQuantity(): Quantity | undefined {
    return this.initialQuantity;
  }

  /** Sets `initial[x]` as Quantity and clears every other type of it. */
  setInitialQuantity(initialQuantity: Quantity | undefined): this {
    return this.setFieldValue('initialQuantity', initialQuantity);
  }

  hasInitialQuantity(): boolean {
    return this.hasFieldValue('initialQuantity');
  }

  getInitialReference(): Reference | undefined {
    return this.initialReference;
  }

  /** Sets `initial[x]` as Reference and clears every other type of it. */
  setInitialReference(initialReference: Reference | undefined): this {
    return this.setFieldValue('initialReference', initialReference);
  }

  hasInitialReference(): boolean {
    return this.hasFieldValue('initialReference');
  }

  /** Nested questionnaire items (0..*) Never undefined; an empty list is created when absent. */
  getItem(): QuestionnaireItem[] {
    if (this.item === undefined) {
      this.item = [];
    }
    return this.item;
  }

  setItem(item: QuestionnaireItem[] | undefined): this {
    return this.setFieldValue('item', item);
  }

  hasItem(): boolean {
    return this.hasFieldValue('item');
  }

  /** Appends a new, empty QuestionnaireItem to `item` and returns it so it can be filled in. */
  addItem(): QuestionnaireItem;
  /** Appends the given QuestionnaireItem to `item` and returns this object for chaining. */
  addItem(questionnaireItem: QuestionnaireItem): this;
  addItem(questionnaireItem?: QuestionnaireItem): QuestionnaireItem | this {
    if (questionnaireItem !== undefined) {
      return this.addFieldValue('item', questionnaireItem);
    }
    const createdQuestionnaireItem = new QuestionnaireItem();
    this.addFieldValue('item', createdQuestionnaireItem);
    return createdQuestionnaireItem;
  }

  /** The first QuestionnaireItem of `item`. One is added when the list is empty. */
  getItemFirstRep(): QuestionnaireItem {
    const firstQuestionnaireItem = this.getItem()[0];
    return firstQuestionnaireItem === undefined ? this.addItem() : firstQuestionnaireItem;
  }
}

modelTypeRegistry.register('QuestionnaireItem', QuestionnaireItem, false);

/**
 * Only allow data when
 */
export class QuestionnaireItemEnableWhen extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'question',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'question', typeCode: 'string' }],
    },
    {
      elementName: 'hasAnswer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hasAnswer', typeCode: 'boolean' }],
    },
    {
      elementName: 'answer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'answerBoolean', typeCode: 'boolean' },
        { jsonKey: 'answerDecimal', typeCode: 'decimal' },
        { jsonKey: 'answerInteger', typeCode: 'integer' },
        { jsonKey: 'answerDate', typeCode: 'date' },
        { jsonKey: 'answerDateTime', typeCode: 'dateTime' },
        { jsonKey: 'answerTime', typeCode: 'time' },
        { jsonKey: 'answerString', typeCode: 'string' },
        { jsonKey: 'answerUri', typeCode: 'uri' },
        { jsonKey: 'answerAttachment', typeCode: 'Attachment' },
        { jsonKey: 'answerCoding', typeCode: 'Coding' },
        { jsonKey: 'answerQuantity', typeCode: 'Quantity' },
        { jsonKey: 'answerReference', typeCode: 'Reference' },
      ],
    },
  ];

  /** Question that determines whether item is enabled (1..1) */
  question?: string;
  /** Id and extensions of the primitive `question`. */
  _question?: Element;

  /** Enable when answered or not (0..1) */
  hasAnswer?: boolean;
  /** Id and extensions of the primitive `hasAnswer`. */
  _hasAnswer?: Element;

  /** Value question must have (0..1) */
  answerBoolean?: boolean;
  /** Id and extensions of the primitive `answerBoolean`. */
  _answerBoolean?: Element;
  /** Value question must have (0..1) */
  answerDecimal?: number;
  /** Id and extensions of the primitive `answerDecimal`. */
  _answerDecimal?: Element;
  /** Value question must have (0..1) */
  answerInteger?: number;
  /** Id and extensions of the primitive `answerInteger`. */
  _answerInteger?: Element;
  /** Value question must have (0..1) */
  answerDate?: string;
  /** Id and extensions of the primitive `answerDate`. */
  _answerDate?: Element;
  /** Value question must have (0..1) */
  answerDateTime?: string;
  /** Id and extensions of the primitive `answerDateTime`. */
  _answerDateTime?: Element;
  /** Value question must have (0..1) */
  answerTime?: string;
  /** Id and extensions of the primitive `answerTime`. */
  _answerTime?: Element;
  /** Value question must have (0..1) */
  answerString?: string;
  /** Id and extensions of the primitive `answerString`. */
  _answerString?: Element;
  /** Value question must have (0..1) */
  answerUri?: string;
  /** Id and extensions of the primitive `answerUri`. */
  _answerUri?: Element;
  /** Value question must have (0..1) */
  answerAttachment?: Attachment;
  /** Value question must have (0..1) */
  answerCoding?: Coding;
  /** Value question must have (0..1) */
  answerQuantity?: Quantity;
  /** Value question must have (0..1) */
  answerReference?: Reference;

  override fhirType(): string {
    return 'Questionnaire.item.enableWhen';
  }

  /** FHIR JSON for this QuestionnaireItemEnableWhen, typed as the plain `QuestionnaireEnableWhen` data type. */
  override toJSON(): plainTypes.QuestionnaireEnableWhen {
    return this.serialize() as plainTypes.QuestionnaireEnableWhen;
  }

  /** Question that determines whether item is enabled (1..1) */
  getQuestion(): string | undefined {
    return this.question;
  }

  /** Sets `question`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setQuestion(question: string | undefined): this {
    return this.setFieldValue('question', question);
  }

  hasQuestion(): boolean {
    return this.hasFieldValue('question');
  }

  /** The element carrying the id and extensions of `question`. Created when absent. */
  getQuestionElement(): Element {
    if (this._question === undefined) {
      this._question = new Element();
    }
    return this._question;
  }

  setQuestionElement(questionElement: Element | undefined): this {
    this._question = questionElement;
    return this;
  }

  /** Enable when answered or not (0..1) */
  getHasAnswer(): boolean | undefined {
    return this.hasAnswer;
  }

  /** Sets `hasAnswer`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setHasAnswer(hasAnswer: boolean | undefined): this {
    return this.setFieldValue('hasAnswer', hasAnswer);
  }

  hasHasAnswer(): boolean {
    return this.hasFieldValue('hasAnswer');
  }

  /** The element carrying the id and extensions of `hasAnswer`. Created when absent. */
  getHasAnswerElement(): Element {
    if (this._hasAnswer === undefined) {
      this._hasAnswer = new Element();
    }
    return this._hasAnswer;
  }

  setHasAnswerElement(hasAnswerElement: Element | undefined): this {
    this._hasAnswer = hasAnswerElement;
    return this;
  }

  /** Value question must have (0..1) Whichever type of `answer[x]` is set. */
  getAnswer(): boolean | number | string | Attachment | Coding | Quantity | Reference | undefined {
    return this.getChoiceValue<
      boolean | number | string | Attachment | Coding | Quantity | Reference
    >('answer');
  }

  /** True when any type of `answer[x]` is set. */
  hasAnswerValue(): boolean {
    return this.hasChoiceValue('answer');
  }

  getAnswerBoolean(): boolean | undefined {
    return this.answerBoolean;
  }

  /** Sets `answer[x]` as boolean and clears every other type of it. */
  setAnswerBoolean(answerBoolean: boolean | undefined): this {
    return this.setFieldValue('answerBoolean', answerBoolean);
  }

  hasAnswerBoolean(): boolean {
    return this.hasFieldValue('answerBoolean');
  }

  getAnswerDecimal(): number | undefined {
    return this.answerDecimal;
  }

  /** Sets `answer[x]` as decimal and clears every other type of it. */
  setAnswerDecimal(answerDecimal: number | undefined): this {
    return this.setFieldValue('answerDecimal', answerDecimal);
  }

  hasAnswerDecimal(): boolean {
    return this.hasFieldValue('answerDecimal');
  }

  getAnswerInteger(): number | undefined {
    return this.answerInteger;
  }

  /** Sets `answer[x]` as integer and clears every other type of it. */
  setAnswerInteger(answerInteger: number | undefined): this {
    return this.setFieldValue('answerInteger', answerInteger);
  }

  hasAnswerInteger(): boolean {
    return this.hasFieldValue('answerInteger');
  }

  getAnswerDate(): string | undefined {
    return this.answerDate;
  }

  /** Sets `answer[x]` as date and clears every other type of it. */
  setAnswerDate(answerDate: string | undefined): this {
    return this.setFieldValue('answerDate', answerDate);
  }

  hasAnswerDate(): boolean {
    return this.hasFieldValue('answerDate');
  }

  getAnswerDateTime(): string | undefined {
    return this.answerDateTime;
  }

  /** Sets `answer[x]` as dateTime and clears every other type of it. */
  setAnswerDateTime(answerDateTime: string | undefined): this {
    return this.setFieldValue('answerDateTime', answerDateTime);
  }

  hasAnswerDateTime(): boolean {
    return this.hasFieldValue('answerDateTime');
  }

  getAnswerTime(): string | undefined {
    return this.answerTime;
  }

  /** Sets `answer[x]` as time and clears every other type of it. */
  setAnswerTime(answerTime: string | undefined): this {
    return this.setFieldValue('answerTime', answerTime);
  }

  hasAnswerTime(): boolean {
    return this.hasFieldValue('answerTime');
  }

  getAnswerString(): string | undefined {
    return this.answerString;
  }

  /** Sets `answer[x]` as string and clears every other type of it. */
  setAnswerString(answerString: string | undefined): this {
    return this.setFieldValue('answerString', answerString);
  }

  hasAnswerString(): boolean {
    return this.hasFieldValue('answerString');
  }

  getAnswerUri(): string | undefined {
    return this.answerUri;
  }

  /** Sets `answer[x]` as uri and clears every other type of it. */
  setAnswerUri(answerUri: string | undefined): this {
    return this.setFieldValue('answerUri', answerUri);
  }

  hasAnswerUri(): boolean {
    return this.hasFieldValue('answerUri');
  }

  getAnswerAttachment(): Attachment | undefined {
    return this.answerAttachment;
  }

  /** Sets `answer[x]` as Attachment and clears every other type of it. */
  setAnswerAttachment(answerAttachment: Attachment | undefined): this {
    return this.setFieldValue('answerAttachment', answerAttachment);
  }

  hasAnswerAttachment(): boolean {
    return this.hasFieldValue('answerAttachment');
  }

  getAnswerCoding(): Coding | undefined {
    return this.answerCoding;
  }

  /** Sets `answer[x]` as Coding and clears every other type of it. */
  setAnswerCoding(answerCoding: Coding | undefined): this {
    return this.setFieldValue('answerCoding', answerCoding);
  }

  hasAnswerCoding(): boolean {
    return this.hasFieldValue('answerCoding');
  }

  getAnswerQuantity(): Quantity | undefined {
    return this.answerQuantity;
  }

  /** Sets `answer[x]` as Quantity and clears every other type of it. */
  setAnswerQuantity(answerQuantity: Quantity | undefined): this {
    return this.setFieldValue('answerQuantity', answerQuantity);
  }

  hasAnswerQuantity(): boolean {
    return this.hasFieldValue('answerQuantity');
  }

  getAnswerReference(): Reference | undefined {
    return this.answerReference;
  }

  /** Sets `answer[x]` as Reference and clears every other type of it. */
  setAnswerReference(answerReference: Reference | undefined): this {
    return this.setFieldValue('answerReference', answerReference);
  }

  hasAnswerReference(): boolean {
    return this.hasFieldValue('answerReference');
  }
}

modelTypeRegistry.register('QuestionnaireItemEnableWhen', QuestionnaireItemEnableWhen, false);

/**
 * Permitted answer
 */
export class QuestionnaireItemOption extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
      ],
    },
  ];

  /** Answer value (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Answer value (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Answer value (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Answer value (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Answer value (1..1) */
  valueCoding?: Coding;

  override fhirType(): string {
    return 'Questionnaire.item.option';
  }

  /** FHIR JSON for this QuestionnaireItemOption, typed as the plain `QuestionnaireOption` data type. */
  override toJSON(): plainTypes.QuestionnaireOption {
    return this.serialize() as plainTypes.QuestionnaireOption;
  }

  /** Answer value (1..1) Whichever type of `value[x]` is set. */
  getValue(): number | string | Coding | undefined {
    return this.getChoiceValue<number | string | Coding>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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
}

modelTypeRegistry.register('QuestionnaireItemOption', QuestionnaireItemOption, false);
