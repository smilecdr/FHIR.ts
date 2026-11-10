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
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for OperationDefinition Resource
 */
export class OperationDefinition extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
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
      types: [{ jsonKey: 'kind', typeCode: 'code', allowedCodes: valueSetCodes.OperationKind }],
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
      elementName: 'idempotent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'idempotent', typeCode: 'boolean' }],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'base',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'base', typeCode: 'Reference', targetResourceTypes: ['OperationDefinition'] },
      ],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'resource', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType }],
    },
    {
      elementName: 'system',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'boolean' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'boolean' }],
    },
    {
      elementName: 'instance',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instance', typeCode: 'boolean' }],
    },
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'OperationDefinitionParameter' }],
    },
    {
      elementName: 'overload',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'overload', typeCode: 'OperationDefinitionOverload' }],
    },
  ];

  readonly resourceType = 'OperationDefinition';

  /** Logical URI to reference this operation definition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business version of the operation definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this operation definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** operation | query (1..1) */
  kind?: valueSetCodes.OperationKind;
  /** Id and extensions of the primitive `kind`. */
  _kind?: Element;

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

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the operation definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Context the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for operation definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this operation definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Whether content is unchanged by the operation (0..1) */
  idempotent?: boolean;
  /** Id and extensions of the primitive `idempotent`. */
  _idempotent?: Element;

  /** Name used to invoke the operation (1..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Additional information about use (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Marks this as a profile of the base (0..1) */
  base?: Reference;

  /** Types this operation applies to (0..*) */
  resource?: valueSetCodes.ResourceType[];
  /** Id and extensions of the primitive `resource`. */
  _resource?: (Element | null)[];

  /** Invoke at the system level? (1..1) */
  system?: boolean;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** Invole at the type level? (1..1) */
  type?: boolean;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Invoke on an instance? (1..1) */
  instance?: boolean;
  /** Id and extensions of the primitive `instance`. */
  _instance?: Element;

  /** Parameters for the operation/query (0..*) */
  parameter?: OperationDefinitionParameter[];

  /** Define overloaded variants for when generating code (0..*) */
  overload?: OperationDefinitionOverload[];

  override fhirType(): string {
    return 'OperationDefinition';
  }

  /** FHIR JSON for this OperationDefinition, typed as the plain `OperationDefinition` data type. */
  override toJSON(): plainTypes.OperationDefinition {
    return this.serialize() as plainTypes.OperationDefinition;
  }

  /** Logical URI to reference this operation definition (globally unique) (0..1) */
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

  /** Business version of the operation definition (0..1) */
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

  /** Name for this operation definition (computer friendly) (1..1) */
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

  /** operation | query (1..1) */
  getKind(): valueSetCodes.OperationKind | undefined {
    return this.kind;
  }

  /** Sets `kind`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setKind(kind: valueSetCodes.OperationKind | undefined): this {
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

  /** Natural language description of the operation definition (0..1) */
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

  /** Intended jurisdiction for operation definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this operation definition is defined (0..1) */
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

  /** Whether content is unchanged by the operation (0..1) */
  getIdempotent(): boolean | undefined {
    return this.idempotent;
  }

  /** Sets `idempotent`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIdempotent(idempotent: boolean | undefined): this {
    return this.setFieldValue('idempotent', idempotent);
  }

  hasIdempotent(): boolean {
    return this.hasFieldValue('idempotent');
  }

  /** The element carrying the id and extensions of `idempotent`. Created when absent. */
  getIdempotentElement(): Element {
    if (this._idempotent === undefined) {
      this._idempotent = new Element();
    }
    return this._idempotent;
  }

  setIdempotentElement(idempotentElement: Element | undefined): this {
    this._idempotent = idempotentElement;
    return this;
  }

  /** Name used to invoke the operation (1..1) */
  getCode(): string | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setCode(code: string | undefined): this {
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

  /** Additional information about use (0..1) */
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

  /** Marks this as a profile of the base (0..1) Created when absent. */
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

  /** Types this operation applies to (0..*) Never undefined; an empty list is created when absent. */
  getResource(): valueSetCodes.ResourceType[] {
    if (this.resource === undefined) {
      this.resource = [];
    }
    return this.resource;
  }

  setResource(resource: valueSetCodes.ResourceType[] | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Appends one value to `resource`. Throws a FhirModelError when it is not a valid FHIR code. */
  addResource(resource: valueSetCodes.ResourceType): this {
    return this.addFieldValue('resource', resource);
  }

  /** Invoke at the system level? (1..1) */
  getSystem(): boolean | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setSystem(system: boolean | undefined): this {
    return this.setFieldValue('system', system);
  }

  hasSystem(): boolean {
    return this.hasFieldValue('system');
  }

  /** The element carrying the id and extensions of `system`. Created when absent. */
  getSystemElement(): Element {
    if (this._system === undefined) {
      this._system = new Element();
    }
    return this._system;
  }

  setSystemElement(systemElement: Element | undefined): this {
    this._system = systemElement;
    return this;
  }

  /** Invole at the type level? (1..1) */
  getType(): boolean | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setType(type: boolean | undefined): this {
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

  /** Invoke on an instance? (1..1) */
  getInstance(): boolean | undefined {
    return this.instance;
  }

  /** Sets `instance`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setInstance(instance: boolean | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** The element carrying the id and extensions of `instance`. Created when absent. */
  getInstanceElement(): Element {
    if (this._instance === undefined) {
      this._instance = new Element();
    }
    return this._instance;
  }

  setInstanceElement(instanceElement: Element | undefined): this {
    this._instance = instanceElement;
    return this;
  }

  /** Parameters for the operation/query (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): OperationDefinitionParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: OperationDefinitionParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty OperationDefinitionParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): OperationDefinitionParameter;
  /** Appends the given OperationDefinitionParameter to `parameter` and returns this object for chaining. */
  addParameter(operationDefinitionParameter: OperationDefinitionParameter): this;
  addParameter(
    operationDefinitionParameter?: OperationDefinitionParameter
  ): OperationDefinitionParameter | this {
    if (operationDefinitionParameter !== undefined) {
      return this.addFieldValue('parameter', operationDefinitionParameter);
    }
    const createdOperationDefinitionParameter = new OperationDefinitionParameter();
    this.addFieldValue('parameter', createdOperationDefinitionParameter);
    return createdOperationDefinitionParameter;
  }

  /** The first OperationDefinitionParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): OperationDefinitionParameter {
    const firstOperationDefinitionParameter = this.getParameter()[0];
    return firstOperationDefinitionParameter === undefined
      ? this.addParameter()
      : firstOperationDefinitionParameter;
  }

  /** Define overloaded variants for when generating code (0..*) Never undefined; an empty list is created when absent. */
  getOverload(): OperationDefinitionOverload[] {
    if (this.overload === undefined) {
      this.overload = [];
    }
    return this.overload;
  }

  setOverload(overload: OperationDefinitionOverload[] | undefined): this {
    return this.setFieldValue('overload', overload);
  }

  hasOverload(): boolean {
    return this.hasFieldValue('overload');
  }

  /** Appends a new, empty OperationDefinitionOverload to `overload` and returns it so it can be filled in. */
  addOverload(): OperationDefinitionOverload;
  /** Appends the given OperationDefinitionOverload to `overload` and returns this object for chaining. */
  addOverload(operationDefinitionOverload: OperationDefinitionOverload): this;
  addOverload(
    operationDefinitionOverload?: OperationDefinitionOverload
  ): OperationDefinitionOverload | this {
    if (operationDefinitionOverload !== undefined) {
      return this.addFieldValue('overload', operationDefinitionOverload);
    }
    const createdOperationDefinitionOverload = new OperationDefinitionOverload();
    this.addFieldValue('overload', createdOperationDefinitionOverload);
    return createdOperationDefinitionOverload;
  }

  /** The first OperationDefinitionOverload of `overload`. One is added when the list is empty. */
  getOverloadFirstRep(): OperationDefinitionOverload {
    const firstOperationDefinitionOverload = this.getOverload()[0];
    return firstOperationDefinitionOverload === undefined
      ? this.addOverload()
      : firstOperationDefinitionOverload;
  }
}

modelTypeRegistry.register('OperationDefinition', OperationDefinition, true);

/** True when the value is a OperationDefinition model instance. */
export function isOperationDefinition(candidate: unknown): candidate is OperationDefinition {
  return candidate instanceof OperationDefinition;
}

/**
 * Parameters for the operation/query
 */
export class OperationDefinitionParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'code' }],
    },
    {
      elementName: 'use',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.OperationParameterUse },
      ],
    },
    {
      elementName: 'min',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'min', typeCode: 'integer' }],
    },
    {
      elementName: 'max',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'max', typeCode: 'string' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.FHIRAllTypes }],
    },
    {
      elementName: 'searchType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'searchType', typeCode: 'code', allowedCodes: valueSetCodes.SearchParamType },
      ],
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
      elementName: 'binding',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'binding', typeCode: 'OperationDefinitionParameterBinding' }],
    },
    {
      elementName: 'part',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'part', typeCode: 'OperationDefinitionParameter' }],
    },
  ];

  /** Name in Parameters.parameter.name or in URL (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** in | out (1..1) */
  use?: valueSetCodes.OperationParameterUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** Minimum Cardinality (1..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Maximum Cardinality (a number or *) (1..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  /** Description of meaning/use (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  /** What type this parameter has (0..1) */
  type?: valueSetCodes.FHIRAllTypes;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** number | date | string | token | reference | composite | quantity | uri (0..1) */
  searchType?: valueSetCodes.SearchParamType;
  /** Id and extensions of the primitive `searchType`. */
  _searchType?: Element;

  /** Profile on the type (0..1) */
  profile?: Reference;

  /** ValueSet details if this is coded (0..1) */
  binding?: OperationDefinitionParameterBinding;

  /** Parts of a nested Parameter (0..*) */
  part?: OperationDefinitionParameter[];

  override fhirType(): string {
    return 'OperationDefinition.parameter';
  }

  /** FHIR JSON for this OperationDefinitionParameter, typed as the plain `OperationDefinitionParameter` data type. */
  override toJSON(): plainTypes.OperationDefinitionParameter {
    return this.serialize() as plainTypes.OperationDefinitionParameter;
  }

  /** Name in Parameters.parameter.name or in URL (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR code. */
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

  /** in | out (1..1) */
  getUse(): valueSetCodes.OperationParameterUse | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.OperationParameterUse | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** The element carrying the id and extensions of `use`. Created when absent. */
  getUseElement(): Element {
    if (this._use === undefined) {
      this._use = new Element();
    }
    return this._use;
  }

  setUseElement(useElement: Element | undefined): this {
    this._use = useElement;
    return this;
  }

  /** Minimum Cardinality (1..1) */
  getMin(): number | undefined {
    return this.min;
  }

  /** Sets `min`. Throws a FhirModelError when the value is not a valid FHIR integer. */
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

  /** Maximum Cardinality (a number or *) (1..1) */
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

  /** Description of meaning/use (0..1) */
  getDocumentation(): string | undefined {
    return this.documentation;
  }

  /** Sets `documentation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDocumentation(documentation: string | undefined): this {
    return this.setFieldValue('documentation', documentation);
  }

  hasDocumentation(): boolean {
    return this.hasFieldValue('documentation');
  }

  /** The element carrying the id and extensions of `documentation`. Created when absent. */
  getDocumentationElement(): Element {
    if (this._documentation === undefined) {
      this._documentation = new Element();
    }
    return this._documentation;
  }

  setDocumentationElement(documentationElement: Element | undefined): this {
    this._documentation = documentationElement;
    return this;
  }

  /** What type this parameter has (0..1) */
  getType(): valueSetCodes.FHIRAllTypes | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.FHIRAllTypes | undefined): this {
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

  /** number | date | string | token | reference | composite | quantity | uri (0..1) */
  getSearchType(): valueSetCodes.SearchParamType | undefined {
    return this.searchType;
  }

  /** Sets `searchType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setSearchType(searchType: valueSetCodes.SearchParamType | undefined): this {
    return this.setFieldValue('searchType', searchType);
  }

  hasSearchType(): boolean {
    return this.hasFieldValue('searchType');
  }

  /** The element carrying the id and extensions of `searchType`. Created when absent. */
  getSearchTypeElement(): Element {
    if (this._searchType === undefined) {
      this._searchType = new Element();
    }
    return this._searchType;
  }

  setSearchTypeElement(searchTypeElement: Element | undefined): this {
    this._searchType = searchTypeElement;
    return this;
  }

  /** Profile on the type (0..1) Created when absent. */
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

  /** ValueSet details if this is coded (0..1) Created when absent. */
  getBinding(): OperationDefinitionParameterBinding {
    if (this.binding === undefined) {
      this.binding = new OperationDefinitionParameterBinding();
    }
    return this.binding;
  }

  setBinding(binding: OperationDefinitionParameterBinding | undefined): this {
    return this.setFieldValue('binding', binding);
  }

  hasBinding(): boolean {
    return this.hasFieldValue('binding');
  }

  /** Parts of a nested Parameter (0..*) Never undefined; an empty list is created when absent. */
  getPart(): OperationDefinitionParameter[] {
    if (this.part === undefined) {
      this.part = [];
    }
    return this.part;
  }

  setPart(part: OperationDefinitionParameter[] | undefined): this {
    return this.setFieldValue('part', part);
  }

  hasPart(): boolean {
    return this.hasFieldValue('part');
  }

  /** Appends a new, empty OperationDefinitionParameter to `part` and returns it so it can be filled in. */
  addPart(): OperationDefinitionParameter;
  /** Appends the given OperationDefinitionParameter to `part` and returns this object for chaining. */
  addPart(operationDefinitionParameter: OperationDefinitionParameter): this;
  addPart(
    operationDefinitionParameter?: OperationDefinitionParameter
  ): OperationDefinitionParameter | this {
    if (operationDefinitionParameter !== undefined) {
      return this.addFieldValue('part', operationDefinitionParameter);
    }
    const createdOperationDefinitionParameter = new OperationDefinitionParameter();
    this.addFieldValue('part', createdOperationDefinitionParameter);
    return createdOperationDefinitionParameter;
  }

  /** The first OperationDefinitionParameter of `part`. One is added when the list is empty. */
  getPartFirstRep(): OperationDefinitionParameter {
    const firstOperationDefinitionParameter = this.getPart()[0];
    return firstOperationDefinitionParameter === undefined
      ? this.addPart()
      : firstOperationDefinitionParameter;
  }
}

modelTypeRegistry.register('OperationDefinitionParameter', OperationDefinitionParameter, false);

/**
 * ValueSet details if this is coded
 */
export class OperationDefinitionParameterBinding extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'strength',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'strength', typeCode: 'code', allowedCodes: valueSetCodes.BindingStrength },
      ],
    },
    {
      elementName: 'valueSet',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueSetUri', typeCode: 'uri' },
        { jsonKey: 'valueSetReference', typeCode: 'Reference', targetResourceTypes: ['ValueSet'] },
      ],
    },
  ];

  /** required | extensible | preferred | example (1..1) */
  strength?: valueSetCodes.BindingStrength;
  /** Id and extensions of the primitive `strength`. */
  _strength?: Element;

  /** Source of value set (1..1) */
  valueSetUri?: string;
  /** Id and extensions of the primitive `valueSetUri`. */
  _valueSetUri?: Element;
  /** Source of value set (1..1) */
  valueSetReference?: Reference;

  override fhirType(): string {
    return 'OperationDefinition.parameter.binding';
  }

  /** FHIR JSON for this OperationDefinitionParameterBinding, typed as the plain `OperationDefinitionBinding` data type. */
  override toJSON(): plainTypes.OperationDefinitionBinding {
    return this.serialize() as plainTypes.OperationDefinitionBinding;
  }

  /** required | extensible | preferred | example (1..1) */
  getStrength(): valueSetCodes.BindingStrength | undefined {
    return this.strength;
  }

  /** Sets `strength`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStrength(strength: valueSetCodes.BindingStrength | undefined): this {
    return this.setFieldValue('strength', strength);
  }

  hasStrength(): boolean {
    return this.hasFieldValue('strength');
  }

  /** The element carrying the id and extensions of `strength`. Created when absent. */
  getStrengthElement(): Element {
    if (this._strength === undefined) {
      this._strength = new Element();
    }
    return this._strength;
  }

  setStrengthElement(strengthElement: Element | undefined): this {
    this._strength = strengthElement;
    return this;
  }

  /** Source of value set (1..1) Whichever type of `valueSet[x]` is set. */
  getValueSet(): string | Reference | undefined {
    return this.getChoiceValue<string | Reference>('valueSet');
  }

  /** True when any type of `valueSet[x]` is set. */
  hasValueSet(): boolean {
    return this.hasChoiceValue('valueSet');
  }

  getValueSetUri(): string | undefined {
    return this.valueSetUri;
  }

  /** Sets `valueSet[x]` as uri and clears every other type of it. */
  setValueSetUri(valueSetUri: string | undefined): this {
    return this.setFieldValue('valueSetUri', valueSetUri);
  }

  hasValueSetUri(): boolean {
    return this.hasFieldValue('valueSetUri');
  }

  getValueSetReference(): Reference | undefined {
    return this.valueSetReference;
  }

  /** Sets `valueSet[x]` as Reference and clears every other type of it. */
  setValueSetReference(valueSetReference: Reference | undefined): this {
    return this.setFieldValue('valueSetReference', valueSetReference);
  }

  hasValueSetReference(): boolean {
    return this.hasFieldValue('valueSetReference');
  }
}

modelTypeRegistry.register(
  'OperationDefinitionParameterBinding',
  OperationDefinitionParameterBinding,
  false
);

/**
 * Define overloaded variants for when generating code
 */
export class OperationDefinitionOverload extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'parameterName',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameterName', typeCode: 'string' }],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
  ];

  /** Name of parameter to include in overload (0..*) */
  parameterName?: string[];
  /** Id and extensions of the primitive `parameterName`. */
  _parameterName?: (Element | null)[];

  /** Comments to go on overload (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  override fhirType(): string {
    return 'OperationDefinition.overload';
  }

  /** FHIR JSON for this OperationDefinitionOverload, typed as the plain `OperationDefinitionOverload` data type. */
  override toJSON(): plainTypes.OperationDefinitionOverload {
    return this.serialize() as plainTypes.OperationDefinitionOverload;
  }

  /** Name of parameter to include in overload (0..*) Never undefined; an empty list is created when absent. */
  getParameterName(): string[] {
    if (this.parameterName === undefined) {
      this.parameterName = [];
    }
    return this.parameterName;
  }

  setParameterName(parameterName: string[] | undefined): this {
    return this.setFieldValue('parameterName', parameterName);
  }

  hasParameterName(): boolean {
    return this.hasFieldValue('parameterName');
  }

  /** Appends one value to `parameterName`. Throws a FhirModelError when it is not a valid FHIR string. */
  addParameterName(parameterName: string): this {
    return this.addFieldValue('parameterName', parameterName);
  }

  /** Comments to go on overload (0..1) */
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
}

modelTypeRegistry.register('OperationDefinitionOverload', OperationDefinitionOverload, false);
