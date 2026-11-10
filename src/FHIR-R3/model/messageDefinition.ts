/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for MessageDefinition Resource
 */
export class MessageDefinition extends DomainResource {
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
      maximum: 1,
      isList: false,
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
      minimum: 1,
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
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactDetail' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
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
      elementName: 'purpose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'purpose', typeCode: 'markdown' }],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'base',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'base', typeCode: 'Reference', targetResourceTypes: ['MessageDefinition'] },
      ],
    },
    {
      elementName: 'parent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'parent',
          typeCode: 'Reference',
          targetResourceTypes: ['ActivityDefinition', 'PlanDefinition'],
        },
      ],
    },
    {
      elementName: 'replaces',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'replaces', typeCode: 'Reference', targetResourceTypes: ['MessageDefinition'] },
      ],
    },
    {
      elementName: 'event',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'event', typeCode: 'Coding' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'category',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MessageSignificanceCategory,
        },
      ],
    },
    {
      elementName: 'focus',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'focus', typeCode: 'MessageDefinitionFocus' }],
    },
    {
      elementName: 'responseRequired',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'responseRequired', typeCode: 'boolean' }],
    },
    {
      elementName: 'allowedResponse',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'allowedResponse', typeCode: 'MessageDefinitionAllowedResponse' }],
    },
  ];

  readonly resourceType = 'MessageDefinition';

  /** Logical URI to reference this message definition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the message definition (0..1) */
  identifier?: Identifier;

  /** Business version of the message definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this message definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this message definition (human friendly) (0..1) */
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

  /** Date this was last changed (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the message definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Context the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for message definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this message definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Definition this one is based on (0..1) */
  base?: Reference;

  /** Protocol/workflow this is part of (0..*) */
  parent?: Reference[];

  /** Takes the place of (0..*) */
  replaces?: Reference[];

  /** Event type (1..1) */
  event?: Coding;

  /** Consequence | Currency | Notification (0..1) */
  category?: valueSetCodes.MessageSignificanceCategory;
  /** Id and extensions of the primitive `category`. */
  _category?: Element;

  /** Resource(s) that are the subject of the event (0..*) */
  focus?: MessageDefinitionFocus[];

  /** Is a response required? (0..1) */
  responseRequired?: boolean;
  /** Id and extensions of the primitive `responseRequired`. */
  _responseRequired?: Element;

  /** Responses to this message (0..*) */
  allowedResponse?: MessageDefinitionAllowedResponse[];

  override fhirType(): string {
    return 'MessageDefinition';
  }

  /** FHIR JSON for this MessageDefinition, typed as the plain `MessageDefinition` data type. */
  override toJSON(): plainTypes.MessageDefinition {
    return this.serialize() as plainTypes.MessageDefinition;
  }

  /** Logical URI to reference this message definition (globally unique) (0..1) */
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

  /** Additional identifier for the message definition (0..1) Created when absent. */
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

  /** Business version of the message definition (0..1) */
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

  /** Name for this message definition (computer friendly) (0..1) */
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

  /** Name for this message definition (human friendly) (0..1) */
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

  /** Date this was last changed (1..1) */
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

  /** Natural language description of the message definition (0..1) */
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

  /** Intended jurisdiction for message definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this message definition is defined (0..1) */
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

  /** Definition this one is based on (0..1) Created when absent. */
  getBase(): Reference {
    if (this.base === undefined) {
      this.base = new Reference();
    }
    return this.base;
  }

  setBase(base: Reference | undefined): this {
    return this.setFieldValue('base', base);
  }

  hasBase(): boolean {
    return this.hasFieldValue('base');
  }

  /** Protocol/workflow this is part of (0..*) Never undefined; an empty list is created when absent. */
  getParent(): Reference[] {
    if (this.parent === undefined) {
      this.parent = [];
    }
    return this.parent;
  }

  setParent(parent: Reference[] | undefined): this {
    return this.setFieldValue('parent', parent);
  }

  hasParent(): boolean {
    return this.hasFieldValue('parent');
  }

  /** Appends a new, empty Reference to `parent` and returns it so it can be filled in. */
  addParent(): Reference;
  /** Appends the given Reference to `parent` and returns this object for chaining. */
  addParent(reference: Reference): this;
  addParent(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('parent', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('parent', createdReference);
    return createdReference;
  }

  /** The first Reference of `parent`. One is added when the list is empty. */
  getParentFirstRep(): Reference {
    const firstReference = this.getParent()[0];
    return firstReference === undefined ? this.addParent() : firstReference;
  }

  /** Takes the place of (0..*) Never undefined; an empty list is created when absent. */
  getReplaces(): Reference[] {
    if (this.replaces === undefined) {
      this.replaces = [];
    }
    return this.replaces;
  }

  setReplaces(replaces: Reference[] | undefined): this {
    return this.setFieldValue('replaces', replaces);
  }

  hasReplaces(): boolean {
    return this.hasFieldValue('replaces');
  }

  /** Appends a new, empty Reference to `replaces` and returns it so it can be filled in. */
  addReplaces(): Reference;
  /** Appends the given Reference to `replaces` and returns this object for chaining. */
  addReplaces(reference: Reference): this;
  addReplaces(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('replaces', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('replaces', createdReference);
    return createdReference;
  }

  /** The first Reference of `replaces`. One is added when the list is empty. */
  getReplacesFirstRep(): Reference {
    const firstReference = this.getReplaces()[0];
    return firstReference === undefined ? this.addReplaces() : firstReference;
  }

  /** Event type (1..1) Created when absent. */
  getEvent(): Coding {
    if (this.event === undefined) {
      this.event = new Coding();
    }
    return this.event;
  }

  setEvent(event: Coding | undefined): this {
    return this.setFieldValue('event', event);
  }

  hasEvent(): boolean {
    return this.hasFieldValue('event');
  }

  /** Consequence | Currency | Notification (0..1) */
  getCategory(): valueSetCodes.MessageSignificanceCategory | undefined {
    return this.category;
  }

  /** Sets `category`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCategory(category: valueSetCodes.MessageSignificanceCategory | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** The element carrying the id and extensions of `category`. Created when absent. */
  getCategoryElement(): Element {
    if (this._category === undefined) {
      this._category = new Element();
    }
    return this._category;
  }

  setCategoryElement(categoryElement: Element | undefined): this {
    this._category = categoryElement;
    return this;
  }

  /** Resource(s) that are the subject of the event (0..*) Never undefined; an empty list is created when absent. */
  getFocus(): MessageDefinitionFocus[] {
    if (this.focus === undefined) {
      this.focus = [];
    }
    return this.focus;
  }

  setFocus(focus: MessageDefinitionFocus[] | undefined): this {
    return this.setFieldValue('focus', focus);
  }

  hasFocus(): boolean {
    return this.hasFieldValue('focus');
  }

  /** Appends a new, empty MessageDefinitionFocus to `focus` and returns it so it can be filled in. */
  addFocus(): MessageDefinitionFocus;
  /** Appends the given MessageDefinitionFocus to `focus` and returns this object for chaining. */
  addFocus(messageDefinitionFocus: MessageDefinitionFocus): this;
  addFocus(messageDefinitionFocus?: MessageDefinitionFocus): MessageDefinitionFocus | this {
    if (messageDefinitionFocus !== undefined) {
      return this.addFieldValue('focus', messageDefinitionFocus);
    }
    const createdMessageDefinitionFocus = new MessageDefinitionFocus();
    this.addFieldValue('focus', createdMessageDefinitionFocus);
    return createdMessageDefinitionFocus;
  }

  /** The first MessageDefinitionFocus of `focus`. One is added when the list is empty. */
  getFocusFirstRep(): MessageDefinitionFocus {
    const firstMessageDefinitionFocus = this.getFocus()[0];
    return firstMessageDefinitionFocus === undefined
      ? this.addFocus()
      : firstMessageDefinitionFocus;
  }

  /** Is a response required? (0..1) */
  getResponseRequired(): boolean | undefined {
    return this.responseRequired;
  }

  /** Sets `responseRequired`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setResponseRequired(responseRequired: boolean | undefined): this {
    return this.setFieldValue('responseRequired', responseRequired);
  }

  hasResponseRequired(): boolean {
    return this.hasFieldValue('responseRequired');
  }

  /** The element carrying the id and extensions of `responseRequired`. Created when absent. */
  getResponseRequiredElement(): Element {
    if (this._responseRequired === undefined) {
      this._responseRequired = new Element();
    }
    return this._responseRequired;
  }

  setResponseRequiredElement(responseRequiredElement: Element | undefined): this {
    this._responseRequired = responseRequiredElement;
    return this;
  }

  /** Responses to this message (0..*) Never undefined; an empty list is created when absent. */
  getAllowedResponse(): MessageDefinitionAllowedResponse[] {
    if (this.allowedResponse === undefined) {
      this.allowedResponse = [];
    }
    return this.allowedResponse;
  }

  setAllowedResponse(allowedResponse: MessageDefinitionAllowedResponse[] | undefined): this {
    return this.setFieldValue('allowedResponse', allowedResponse);
  }

  hasAllowedResponse(): boolean {
    return this.hasFieldValue('allowedResponse');
  }

  /** Appends a new, empty MessageDefinitionAllowedResponse to `allowedResponse` and returns it so it can be filled in. */
  addAllowedResponse(): MessageDefinitionAllowedResponse;
  /** Appends the given MessageDefinitionAllowedResponse to `allowedResponse` and returns this object for chaining. */
  addAllowedResponse(messageDefinitionAllowedResponse: MessageDefinitionAllowedResponse): this;
  addAllowedResponse(
    messageDefinitionAllowedResponse?: MessageDefinitionAllowedResponse
  ): MessageDefinitionAllowedResponse | this {
    if (messageDefinitionAllowedResponse !== undefined) {
      return this.addFieldValue('allowedResponse', messageDefinitionAllowedResponse);
    }
    const createdMessageDefinitionAllowedResponse = new MessageDefinitionAllowedResponse();
    this.addFieldValue('allowedResponse', createdMessageDefinitionAllowedResponse);
    return createdMessageDefinitionAllowedResponse;
  }

  /** The first MessageDefinitionAllowedResponse of `allowedResponse`. One is added when the list is empty. */
  getAllowedResponseFirstRep(): MessageDefinitionAllowedResponse {
    const firstMessageDefinitionAllowedResponse = this.getAllowedResponse()[0];
    return firstMessageDefinitionAllowedResponse === undefined
      ? this.addAllowedResponse()
      : firstMessageDefinitionAllowedResponse;
  }
}

modelTypeRegistry.register('MessageDefinition', MessageDefinition, true);

/** True when the value is a MessageDefinition model instance. */
export function isMessageDefinition(candidate: unknown): candidate is MessageDefinition {
  return candidate instanceof MessageDefinition;
}

/**
 * Resource(s) that are the subject of the event
 */
export class MessageDefinitionFocus extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'profile', typeCode: 'Reference', targetResourceTypes: ['StructureDefinition'] },
      ],
    },
    {
      elementName: 'min',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'min', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'max',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'max', typeCode: 'string' }],
    },
  ];

  /** Type of resource (1..1) */
  code?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Profile that must be adhered to by focus (0..1) */
  profile?: Reference;

  /** Minimum number of focuses of this type (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Maximum number of focuses of this type (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  override fhirType(): string {
    return 'MessageDefinition.focus';
  }

  /** FHIR JSON for this MessageDefinitionFocus, typed as the plain `MessageDefinitionFocus` data type. */
  override toJSON(): plainTypes.MessageDefinitionFocus {
    return this.serialize() as plainTypes.MessageDefinitionFocus;
  }

  /** Type of resource (1..1) */
  getCode(): valueSetCodes.ResourceType | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.ResourceType | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** The element carrying the id and extensions of `code`. Created when absent. */
  getCodeElement(): Element {
    if (this._code === undefined) {
      this._code = new Element();
    }
    return this._code;
  }

  setCodeElement(codeElement: Element | undefined): this {
    this._code = codeElement;
    return this;
  }

  /** Profile that must be adhered to by focus (0..1) Created when absent. */
  getProfile(): Reference {
    if (this.profile === undefined) {
      this.profile = new Reference();
    }
    return this.profile;
  }

  setProfile(profile: Reference | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** Minimum number of focuses of this type (0..1) */
  getMin(): number | undefined {
    return this.min;
  }

  /** Sets `min`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setMin(min: number | undefined): this {
    return this.setFieldValue('min', min);
  }

  hasMin(): boolean {
    return this.hasFieldValue('min');
  }

  /** The element carrying the id and extensions of `min`. Created when absent. */
  getMinElement(): Element {
    if (this._min === undefined) {
      this._min = new Element();
    }
    return this._min;
  }

  setMinElement(minElement: Element | undefined): this {
    this._min = minElement;
    return this;
  }

  /** Maximum number of focuses of this type (0..1) */
  getMax(): string | undefined {
    return this.max;
  }

  /** Sets `max`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setMax(max: string | undefined): this {
    return this.setFieldValue('max', max);
  }

  hasMax(): boolean {
    return this.hasFieldValue('max');
  }

  /** The element carrying the id and extensions of `max`. Created when absent. */
  getMaxElement(): Element {
    if (this._max === undefined) {
      this._max = new Element();
    }
    return this._max;
  }

  setMaxElement(maxElement: Element | undefined): this {
    this._max = maxElement;
    return this;
  }
}

modelTypeRegistry.register('MessageDefinitionFocus', MessageDefinitionFocus, false);

/**
 * Responses to this message
 */
export class MessageDefinitionAllowedResponse extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'message',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'message', typeCode: 'Reference', targetResourceTypes: ['MessageDefinition'] },
      ],
    },
    {
      elementName: 'situation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'situation', typeCode: 'markdown' }],
    },
  ];

  /** Reference to allowed message definition response (1..1) */
  message?: Reference;

  /** When should this response be used (0..1) */
  situation?: string;
  /** Id and extensions of the primitive `situation`. */
  _situation?: Element;

  override fhirType(): string {
    return 'MessageDefinition.allowedResponse';
  }

  /** FHIR JSON for this MessageDefinitionAllowedResponse, typed as the plain `MessageDefinitionAllowedResponse` data type. */
  override toJSON(): plainTypes.MessageDefinitionAllowedResponse {
    return this.serialize() as plainTypes.MessageDefinitionAllowedResponse;
  }

  /** Reference to allowed message definition response (1..1) Created when absent. */
  getMessage(): Reference {
    if (this.message === undefined) {
      this.message = new Reference();
    }
    return this.message;
  }

  setMessage(message: Reference | undefined): this {
    return this.setFieldValue('message', message);
  }

  hasMessage(): boolean {
    return this.hasFieldValue('message');
  }

  /** When should this response be used (0..1) */
  getSituation(): string | undefined {
    return this.situation;
  }

  /** Sets `situation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setSituation(situation: string | undefined): this {
    return this.setFieldValue('situation', situation);
  }

  hasSituation(): boolean {
    return this.hasFieldValue('situation');
  }

  /** The element carrying the id and extensions of `situation`. Created when absent. */
  getSituationElement(): Element {
    if (this._situation === undefined) {
      this._situation = new Element();
    }
    return this._situation;
  }

  setSituationElement(situationElement: Element | undefined): this {
    this._situation = situationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'MessageDefinitionAllowedResponse',
  MessageDefinitionAllowedResponse,
  false
);
