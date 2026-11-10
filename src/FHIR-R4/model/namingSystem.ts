/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Period } from './period';
import { UsageContext } from './usageContext';

/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc. Represents a "System" used within the Identifier and Coding data types.
 */
export class NamingSystem extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
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
      elementName: 'kind',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.NamingSystemType }],
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
      elementName: 'responsible',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'responsible', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
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
      elementName: 'usage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usage', typeCode: 'string' }],
    },
    {
      elementName: 'uniqueId',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'uniqueId', typeCode: 'NamingSystemUniqueId' }],
    },
  ];

  readonly resourceType = 'NamingSystem';

  /** Name for this naming system (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** codesystem | identifier | root (1..1) */
  kind?: valueSetCodes.NamingSystemType;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

  /** Date last changed (1..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Who maintains system namespace? (0..1) */
  responsible?: string;
  /** Id and extensions of the primitive `responsible`. */
  _responsible?: Element;

  /** e.g. driver, provider, patient, bank etc. (0..1) */
  type?: CodeableConcept;

  /** Natural language description of the naming system (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for naming system (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** How/where is it used (0..1) */
  usage?: string;
  /** Id and extensions of the primitive `usage`. */
  _usage?: Element;

  /** Unique identifiers used for system (1..*) */
  uniqueId?: NamingSystemUniqueId[];

  override fhirType(): string {
    return 'NamingSystem';
  }

  /** FHIR JSON for this NamingSystem, typed as the plain `NamingSystem` data type. */
  override toJSON(): plainTypes.NamingSystem {
    return this.serialize() as plainTypes.NamingSystem;
  }

  /** Name for this naming system (computer friendly) (1..1) */
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

  /** codesystem | identifier | root (1..1) */
  getKind(): valueSetCodes.NamingSystemType | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.NamingSystemType | undefined): this {
    return this.setFieldValue('kind', kind);
  }

  hasKind(): boolean {
    return this.hasFieldValue('kind');
  }

  /** The element carrying the id and extensions of `kind`. Created when absent. */
  getKindElement(): Element {
    if (this._kind === undefined) {
      this._kind = new Element();
    }
    return this._kind;
  }

  setKindElement(kindElement: Element | undefined): this {
    this._kind = kindElement;
    return this;
  }

  /** Date last changed (1..1) */
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

  /** Who maintains system namespace? (0..1) */
  getResponsible(): string | undefined {
    return this.responsible;
  }

  /** Sets `responsible`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setResponsible(responsible: string | undefined): this {
    return this.setFieldValue('responsible', responsible);
  }

  hasResponsible(): boolean {
    return this.hasFieldValue('responsible');
  }

  /** The element carrying the id and extensions of `responsible`. Created when absent. */
  getResponsibleElement(): Element {
    if (this._responsible === undefined) {
      this._responsible = new Element();
    }
    return this._responsible;
  }

  setResponsibleElement(responsibleElement: Element | undefined): this {
    this._responsible = responsibleElement;
    return this;
  }

  /** e.g. driver, provider, patient, bank etc. (0..1) Created when absent. */
  getType(): CodeableConcept {
    if (this.type === undefined) {
      this.type = new CodeableConcept();
    }
    return this.type;
  }

  setType(type: CodeableConcept | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Natural language description of the naming system (0..1) */
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

  /** The context that the content is intended to support (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended jurisdiction for naming system (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** How/where is it used (0..1) */
  getUsage(): string | undefined {
    return this.usage;
  }

  /** Sets `usage`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setUsage(usage: string | undefined): this {
    return this.setFieldValue('usage', usage);
  }

  hasUsage(): boolean {
    return this.hasFieldValue('usage');
  }

  /** The element carrying the id and extensions of `usage`. Created when absent. */
  getUsageElement(): Element {
    if (this._usage === undefined) {
      this._usage = new Element();
    }
    return this._usage;
  }

  setUsageElement(usageElement: Element | undefined): this {
    this._usage = usageElement;
    return this;
  }

  /** Unique identifiers used for system (1..*) Never undefined; an empty list is created when absent. */
  getUniqueId(): NamingSystemUniqueId[] {
    if (this.uniqueId === undefined) {
      this.uniqueId = [];
    }
    return this.uniqueId;
  }

  setUniqueId(uniqueId: NamingSystemUniqueId[] | undefined): this {
    return this.setFieldValue('uniqueId', uniqueId);
  }

  hasUniqueId(): boolean {
    return this.hasFieldValue('uniqueId');
  }

  /** Appends a new, empty NamingSystemUniqueId to `uniqueId` and returns it so it can be filled in. */
  addUniqueId(): NamingSystemUniqueId;
  /** Appends the given NamingSystemUniqueId to `uniqueId` and returns this object for chaining. */
  addUniqueId(namingSystemUniqueId: NamingSystemUniqueId): this;
  addUniqueId(namingSystemUniqueId?: NamingSystemUniqueId): NamingSystemUniqueId | this {
    if (namingSystemUniqueId !== undefined) {
      return this.addFieldValue('uniqueId', namingSystemUniqueId);
    }
    const createdNamingSystemUniqueId = new NamingSystemUniqueId();
    this.addFieldValue('uniqueId', createdNamingSystemUniqueId);
    return createdNamingSystemUniqueId;
  }

  /** The first NamingSystemUniqueId of `uniqueId`. One is added when the list is empty. */
  getUniqueIdFirstRep(): NamingSystemUniqueId {
    const firstNamingSystemUniqueId = this.getUniqueId()[0];
    return firstNamingSystemUniqueId === undefined ? this.addUniqueId() : firstNamingSystemUniqueId;
  }
}

modelTypeRegistry.register('NamingSystem', NamingSystem, true);

/** True when the value is a NamingSystem model instance. */
export function isNamingSystem(candidate: unknown): candidate is NamingSystem {
  return candidate instanceof NamingSystem;
}

/**
 * Unique identifiers used for system
 */
export class NamingSystemUniqueId extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.NamingSystemIdentifierType,
        },
      ],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'preferred',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preferred', typeCode: 'boolean' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** oid | uuid | uri | other (1..1) */
  type?: valueSetCodes.NamingSystemIdentifierType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The unique identifier (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** Is this the id that should be used for this type (0..1) */
  preferred?: boolean;
  /** Id and extensions of the primitive `preferred`. */
  _preferred?: Element;

  /** Notes about identifier usage (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** When is identifier valid? (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'NamingSystem.uniqueId';
  }

  /** FHIR JSON for this NamingSystemUniqueId, typed as the plain `NamingSystemUniqueId` data type. */
  override toJSON(): plainTypes.NamingSystemUniqueId {
    return this.serialize() as plainTypes.NamingSystemUniqueId;
  }

  /** oid | uuid | uri | other (1..1) */
  getType(): valueSetCodes.NamingSystemIdentifierType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.NamingSystemIdentifierType | undefined): this {
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

  /** The unique identifier (1..1) */
  getValue(): string | undefined {
    return this.value;
  }

  /** Sets `value`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setValue(value: string | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** The element carrying the id and extensions of `value`. Created when absent. */
  getValueElement(): Element {
    if (this._value === undefined) {
      this._value = new Element();
    }
    return this._value;
  }

  setValueElement(valueElement: Element | undefined): this {
    this._value = valueElement;
    return this;
  }

  /** Is this the id that should be used for this type (0..1) */
  getPreferred(): boolean | undefined {
    return this.preferred;
  }

  /** Sets `preferred`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setPreferred(preferred: boolean | undefined): this {
    return this.setFieldValue('preferred', preferred);
  }

  hasPreferred(): boolean {
    return this.hasFieldValue('preferred');
  }

  /** The element carrying the id and extensions of `preferred`. Created when absent. */
  getPreferredElement(): Element {
    if (this._preferred === undefined) {
      this._preferred = new Element();
    }
    return this._preferred;
  }

  setPreferredElement(preferredElement: Element | undefined): this {
    this._preferred = preferredElement;
    return this;
  }

  /** Notes about identifier usage (0..1) */
  getComment(): string | undefined {
    return this.comment;
  }

  /** Sets `comment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setComment(comment: string | undefined): this {
    return this.setFieldValue('comment', comment);
  }

  hasComment(): boolean {
    return this.hasFieldValue('comment');
  }

  /** The element carrying the id and extensions of `comment`. Created when absent. */
  getCommentElement(): Element {
    if (this._comment === undefined) {
      this._comment = new Element();
    }
    return this._comment;
  }

  setCommentElement(commentElement: Element | undefined): this {
    this._comment = commentElement;
    return this;
  }

  /** When is identifier valid? (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register('NamingSystemUniqueId', NamingSystemUniqueId, false);
