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
import { Identifier } from './identifier';
import { UsageContext } from './usageContext';

/**
 * Example of workflow instance.
 */
export class ExampleScenario extends DomainResource {
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
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ContactDetail' }],
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
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
    {
      elementName: 'purpose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'purpose', typeCode: 'markdown' }],
    },
    {
      elementName: 'actor',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'actor', typeCode: 'ExampleScenarioActor' }],
    },
    {
      elementName: 'instance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instance', typeCode: 'ExampleScenarioInstance' }],
    },
    {
      elementName: 'process',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'process', typeCode: 'ExampleScenarioProcess' }],
    },
    {
      elementName: 'workflow',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'workflow', typeCode: 'canonical' }],
    },
  ];

  readonly resourceType = 'ExampleScenario';

  /** Canonical identifier for this example scenario, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the example scenario (0..*) */
  identifier?: Identifier[];

  /** Business version of the example scenario (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this example scenario (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** For testing purposes, not real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for example scenario (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** The purpose of the example, e.g. to illustrate a scenario (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Actor participating in the resource (0..*) */
  actor?: ExampleScenarioActor[];

  /** Each resource and each version that is present in the workflow (0..*) */
  instance?: ExampleScenarioInstance[];

  /** Each major process - a group of operations (0..*) */
  process?: ExampleScenarioProcess[];

  /** Another nested workflow (0..*) */
  workflow?: string[];
  /** Id and extensions of the primitive `workflow`. */
  _workflow?: (Element | null)[];

  override fhirType(): string {
    return 'ExampleScenario';
  }

  /** FHIR JSON for this ExampleScenario, typed as the plain `ExampleScenario` data type. */
  override toJSON(): plainTypes.ExampleScenario {
    return this.serialize() as plainTypes.ExampleScenario;
  }

  /** Canonical identifier for this example scenario, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the example scenario (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the example scenario (0..1) */
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

  /** Name for this example scenario (computer friendly) (0..1) */
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

  /** Date last changed (0..1) */
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

  /** Intended jurisdiction for example scenario (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** The purpose of the example, e.g. to illustrate a scenario (0..1) */
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

  /** Actor participating in the resource (0..*) Never undefined; an empty list is created when absent. */
  getActor(): ExampleScenarioActor[] {
    if (this.actor === undefined) {
      this.actor = [];
    }
    return this.actor;
  }

  setActor(actor: ExampleScenarioActor[] | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }

  /** Appends a new, empty ExampleScenarioActor to `actor` and returns it so it can be filled in. */
  addActor(): ExampleScenarioActor;
  /** Appends the given ExampleScenarioActor to `actor` and returns this object for chaining. */
  addActor(exampleScenarioActor: ExampleScenarioActor): this;
  addActor(exampleScenarioActor?: ExampleScenarioActor): ExampleScenarioActor | this {
    if (exampleScenarioActor !== undefined) {
      return this.addFieldValue('actor', exampleScenarioActor);
    }
    const createdExampleScenarioActor = new ExampleScenarioActor();
    this.addFieldValue('actor', createdExampleScenarioActor);
    return createdExampleScenarioActor;
  }

  /** The first ExampleScenarioActor of `actor`. One is added when the list is empty. */
  getActorFirstRep(): ExampleScenarioActor {
    const firstExampleScenarioActor = this.getActor()[0];
    return firstExampleScenarioActor === undefined ? this.addActor() : firstExampleScenarioActor;
  }

  /** Each resource and each version that is present in the workflow (0..*) Never undefined; an empty list is created when absent. */
  getInstance(): ExampleScenarioInstance[] {
    if (this.instance === undefined) {
      this.instance = [];
    }
    return this.instance;
  }

  setInstance(instance: ExampleScenarioInstance[] | undefined): this {
    return this.setFieldValue('instance', instance);
  }

  hasInstance(): boolean {
    return this.hasFieldValue('instance');
  }

  /** Appends a new, empty ExampleScenarioInstance to `instance` and returns it so it can be filled in. */
  addInstance(): ExampleScenarioInstance;
  /** Appends the given ExampleScenarioInstance to `instance` and returns this object for chaining. */
  addInstance(exampleScenarioInstance: ExampleScenarioInstance): this;
  addInstance(exampleScenarioInstance?: ExampleScenarioInstance): ExampleScenarioInstance | this {
    if (exampleScenarioInstance !== undefined) {
      return this.addFieldValue('instance', exampleScenarioInstance);
    }
    const createdExampleScenarioInstance = new ExampleScenarioInstance();
    this.addFieldValue('instance', createdExampleScenarioInstance);
    return createdExampleScenarioInstance;
  }

  /** The first ExampleScenarioInstance of `instance`. One is added when the list is empty. */
  getInstanceFirstRep(): ExampleScenarioInstance {
    const firstExampleScenarioInstance = this.getInstance()[0];
    return firstExampleScenarioInstance === undefined
      ? this.addInstance()
      : firstExampleScenarioInstance;
  }

  /** Each major process - a group of operations (0..*) Never undefined; an empty list is created when absent. */
  getProcess(): ExampleScenarioProcess[] {
    if (this.process === undefined) {
      this.process = [];
    }
    return this.process;
  }

  setProcess(process: ExampleScenarioProcess[] | undefined): this {
    return this.setFieldValue('process', process);
  }

  hasProcess(): boolean {
    return this.hasFieldValue('process');
  }

  /** Appends a new, empty ExampleScenarioProcess to `process` and returns it so it can be filled in. */
  addProcess(): ExampleScenarioProcess;
  /** Appends the given ExampleScenarioProcess to `process` and returns this object for chaining. */
  addProcess(exampleScenarioProcess: ExampleScenarioProcess): this;
  addProcess(exampleScenarioProcess?: ExampleScenarioProcess): ExampleScenarioProcess | this {
    if (exampleScenarioProcess !== undefined) {
      return this.addFieldValue('process', exampleScenarioProcess);
    }
    const createdExampleScenarioProcess = new ExampleScenarioProcess();
    this.addFieldValue('process', createdExampleScenarioProcess);
    return createdExampleScenarioProcess;
  }

  /** The first ExampleScenarioProcess of `process`. One is added when the list is empty. */
  getProcessFirstRep(): ExampleScenarioProcess {
    const firstExampleScenarioProcess = this.getProcess()[0];
    return firstExampleScenarioProcess === undefined
      ? this.addProcess()
      : firstExampleScenarioProcess;
  }

  /** Another nested workflow (0..*) Never undefined; an empty list is created when absent. */
  getWorkflow(): string[] {
    if (this.workflow === undefined) {
      this.workflow = [];
    }
    return this.workflow;
  }

  setWorkflow(workflow: string[] | undefined): this {
    return this.setFieldValue('workflow', workflow);
  }

  hasWorkflow(): boolean {
    return this.hasFieldValue('workflow');
  }

  /** Appends one value to `workflow`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addWorkflow(workflow: string): this {
    return this.addFieldValue('workflow', workflow);
  }
}

modelTypeRegistry.register('ExampleScenario', ExampleScenario, true);

/** True when the value is a ExampleScenario model instance. */
export function isExampleScenario(candidate: unknown): candidate is ExampleScenario {
  return candidate instanceof ExampleScenario;
}

/**
 * Actor participating in the resource
 */
export class ExampleScenarioActor extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actorId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actorId', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ExampleScenarioActorType },
      ],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
  ];

  /** ID or acronym of the actor (1..1) */
  actorId?: string;
  /** Id and extensions of the primitive `actorId`. */
  _actorId?: Element;

  /** person | entity (1..1) */
  type?: valueSetCodes.ExampleScenarioActorType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The name of the actor as shown in the page (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** The description of the actor (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'ExampleScenario.actor';
  }

  /** FHIR JSON for this ExampleScenarioActor, typed as the plain `ExampleScenarioActor` data type. */
  override toJSON(): plainTypes.ExampleScenarioActor {
    return this.serialize() as plainTypes.ExampleScenarioActor;
  }

  /** ID or acronym of the actor (1..1) */
  getActorId(): string | undefined {
    return this.actorId;
  }

  /** Sets `actorId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setActorId(actorId: string | undefined): this {
    return this.setFieldValue('actorId', actorId);
  }

  hasActorId(): boolean {
    return this.hasFieldValue('actorId');
  }

  /** The element carrying the id and extensions of `actorId`. Created when absent. */
  getActorIdElement(): Element {
    if (this._actorId === undefined) {
      this._actorId = new Element();
    }
    return this._actorId;
  }

  setActorIdElement(actorIdElement: Element | undefined): this {
    this._actorId = actorIdElement;
    return this;
  }

  /** person | entity (1..1) */
  getType(): valueSetCodes.ExampleScenarioActorType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ExampleScenarioActorType | undefined): this {
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

  /** The name of the actor as shown in the page (0..1) */
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

  /** The description of the actor (0..1) */
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
}

modelTypeRegistry.register('ExampleScenarioActor', ExampleScenarioActor, false);

/**
 * Each resource and each version that is present in the workflow
 */
export class ExampleScenarioInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'resourceId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resourceId', typeCode: 'string' }],
    },
    {
      elementName: 'resourceType',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'resourceType', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType },
      ],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'version', typeCode: 'ExampleScenarioInstanceVersion' }],
    },
    {
      elementName: 'containedInstance',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'containedInstance', typeCode: 'ExampleScenarioInstanceContainedInstance' },
      ],
    },
  ];

  /** The id of the resource for referencing (1..1) */
  resourceId?: string;
  /** Id and extensions of the primitive `resourceId`. */
  _resourceId?: Element;

  /** The type of the resource (1..1) */
  resourceType?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `resourceType`. */
  _resourceType?: Element;

  /** A short name for the resource instance (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Human-friendly description of the resource instance (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** A specific version of the resource (0..*) */
  version?: ExampleScenarioInstanceVersion[];

  /** Resources contained in the instance (0..*) */
  containedInstance?: ExampleScenarioInstanceContainedInstance[];

  override fhirType(): string {
    return 'ExampleScenario.instance';
  }

  /** FHIR JSON for this ExampleScenarioInstance, typed as the plain `ExampleScenarioInstance` data type. */
  override toJSON(): plainTypes.ExampleScenarioInstance {
    return this.serialize() as plainTypes.ExampleScenarioInstance;
  }

  /** The id of the resource for referencing (1..1) */
  getResourceId(): string | undefined {
    return this.resourceId;
  }

  /** Sets `resourceId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setResourceId(resourceId: string | undefined): this {
    return this.setFieldValue('resourceId', resourceId);
  }

  hasResourceId(): boolean {
    return this.hasFieldValue('resourceId');
  }

  /** The element carrying the id and extensions of `resourceId`. Created when absent. */
  getResourceIdElement(): Element {
    if (this._resourceId === undefined) {
      this._resourceId = new Element();
    }
    return this._resourceId;
  }

  setResourceIdElement(resourceIdElement: Element | undefined): this {
    this._resourceId = resourceIdElement;
    return this;
  }

  /** The type of the resource (1..1) */
  getResourceType(): valueSetCodes.ResourceType | undefined {
    return this.resourceType;
  }

  /** Sets `resourceType`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setResourceType(resourceType: valueSetCodes.ResourceType | undefined): this {
    return this.setFieldValue('resourceType', resourceType);
  }

  hasResourceType(): boolean {
    return this.hasFieldValue('resourceType');
  }

  /** The element carrying the id and extensions of `resourceType`. Created when absent. */
  getResourceTypeElement(): Element {
    if (this._resourceType === undefined) {
      this._resourceType = new Element();
    }
    return this._resourceType;
  }

  setResourceTypeElement(resourceTypeElement: Element | undefined): this {
    this._resourceType = resourceTypeElement;
    return this;
  }

  /** A short name for the resource instance (0..1) */
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

  /** Human-friendly description of the resource instance (0..1) */
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

  /** A specific version of the resource (0..*) Never undefined; an empty list is created when absent. */
  getVersion(): ExampleScenarioInstanceVersion[] {
    if (this.version === undefined) {
      this.version = [];
    }
    return this.version;
  }

  setVersion(version: ExampleScenarioInstanceVersion[] | undefined): this {
    return this.setFieldValue('version', version);
  }

  hasVersion(): boolean {
    return this.hasFieldValue('version');
  }

  /** Appends a new, empty ExampleScenarioInstanceVersion to `version` and returns it so it can be filled in. */
  addVersion(): ExampleScenarioInstanceVersion;
  /** Appends the given ExampleScenarioInstanceVersion to `version` and returns this object for chaining. */
  addVersion(exampleScenarioInstanceVersion: ExampleScenarioInstanceVersion): this;
  addVersion(
    exampleScenarioInstanceVersion?: ExampleScenarioInstanceVersion
  ): ExampleScenarioInstanceVersion | this {
    if (exampleScenarioInstanceVersion !== undefined) {
      return this.addFieldValue('version', exampleScenarioInstanceVersion);
    }
    const createdExampleScenarioInstanceVersion = new ExampleScenarioInstanceVersion();
    this.addFieldValue('version', createdExampleScenarioInstanceVersion);
    return createdExampleScenarioInstanceVersion;
  }

  /** The first ExampleScenarioInstanceVersion of `version`. One is added when the list is empty. */
  getVersionFirstRep(): ExampleScenarioInstanceVersion {
    const firstExampleScenarioInstanceVersion = this.getVersion()[0];
    return firstExampleScenarioInstanceVersion === undefined
      ? this.addVersion()
      : firstExampleScenarioInstanceVersion;
  }

  /** Resources contained in the instance (0..*) Never undefined; an empty list is created when absent. */
  getContainedInstance(): ExampleScenarioInstanceContainedInstance[] {
    if (this.containedInstance === undefined) {
      this.containedInstance = [];
    }
    return this.containedInstance;
  }

  setContainedInstance(
    containedInstance: ExampleScenarioInstanceContainedInstance[] | undefined
  ): this {
    return this.setFieldValue('containedInstance', containedInstance);
  }

  hasContainedInstance(): boolean {
    return this.hasFieldValue('containedInstance');
  }

  /** Appends a new, empty ExampleScenarioInstanceContainedInstance to `containedInstance` and returns it so it can be filled in. */
  addContainedInstance(): ExampleScenarioInstanceContainedInstance;
  /** Appends the given ExampleScenarioInstanceContainedInstance to `containedInstance` and returns this object for chaining. */
  addContainedInstance(
    exampleScenarioInstanceContainedInstance: ExampleScenarioInstanceContainedInstance
  ): this;
  addContainedInstance(
    exampleScenarioInstanceContainedInstance?: ExampleScenarioInstanceContainedInstance
  ): ExampleScenarioInstanceContainedInstance | this {
    if (exampleScenarioInstanceContainedInstance !== undefined) {
      return this.addFieldValue('containedInstance', exampleScenarioInstanceContainedInstance);
    }
    const createdExampleScenarioInstanceContainedInstance =
      new ExampleScenarioInstanceContainedInstance();
    this.addFieldValue('containedInstance', createdExampleScenarioInstanceContainedInstance);
    return createdExampleScenarioInstanceContainedInstance;
  }

  /** The first ExampleScenarioInstanceContainedInstance of `containedInstance`. One is added when the list is empty. */
  getContainedInstanceFirstRep(): ExampleScenarioInstanceContainedInstance {
    const firstExampleScenarioInstanceContainedInstance = this.getContainedInstance()[0];
    return firstExampleScenarioInstanceContainedInstance === undefined
      ? this.addContainedInstance()
      : firstExampleScenarioInstanceContainedInstance;
  }
}

modelTypeRegistry.register('ExampleScenarioInstance', ExampleScenarioInstance, false);

/**
 * A specific version of the resource
 */
export class ExampleScenarioInstanceVersion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'versionId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'versionId', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
  ];

  /** The identifier of a specific version of a resource (1..1) */
  versionId?: string;
  /** Id and extensions of the primitive `versionId`. */
  _versionId?: Element;

  /** The description of the resource version (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'ExampleScenario.instance.version';
  }

  /** FHIR JSON for this ExampleScenarioInstanceVersion, typed as the plain `ExampleScenarioVersion` data type. */
  override toJSON(): plainTypes.ExampleScenarioVersion {
    return this.serialize() as plainTypes.ExampleScenarioVersion;
  }

  /** The identifier of a specific version of a resource (1..1) */
  getVersionId(): string | undefined {
    return this.versionId;
  }

  /** Sets `versionId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersionId(versionId: string | undefined): this {
    return this.setFieldValue('versionId', versionId);
  }

  hasVersionId(): boolean {
    return this.hasFieldValue('versionId');
  }

  /** The element carrying the id and extensions of `versionId`. Created when absent. */
  getVersionIdElement(): Element {
    if (this._versionId === undefined) {
      this._versionId = new Element();
    }
    return this._versionId;
  }

  setVersionIdElement(versionIdElement: Element | undefined): this {
    this._versionId = versionIdElement;
    return this;
  }

  /** The description of the resource version (1..1) */
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
}

modelTypeRegistry.register('ExampleScenarioInstanceVersion', ExampleScenarioInstanceVersion, false);

/**
 * Resources contained in the instance
 */
export class ExampleScenarioInstanceContainedInstance extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'resourceId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resourceId', typeCode: 'string' }],
    },
    {
      elementName: 'versionId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'versionId', typeCode: 'string' }],
    },
  ];

  /** Each resource contained in the instance (1..1) */
  resourceId?: string;
  /** Id and extensions of the primitive `resourceId`. */
  _resourceId?: Element;

  /** A specific version of a resource contained in the instance (0..1) */
  versionId?: string;
  /** Id and extensions of the primitive `versionId`. */
  _versionId?: Element;

  override fhirType(): string {
    return 'ExampleScenario.instance.containedInstance';
  }

  /** FHIR JSON for this ExampleScenarioInstanceContainedInstance, typed as the plain `ExampleScenarioContainedInstance` data type. */
  override toJSON(): plainTypes.ExampleScenarioContainedInstance {
    return this.serialize() as plainTypes.ExampleScenarioContainedInstance;
  }

  /** Each resource contained in the instance (1..1) */
  getResourceId(): string | undefined {
    return this.resourceId;
  }

  /** Sets `resourceId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setResourceId(resourceId: string | undefined): this {
    return this.setFieldValue('resourceId', resourceId);
  }

  hasResourceId(): boolean {
    return this.hasFieldValue('resourceId');
  }

  /** The element carrying the id and extensions of `resourceId`. Created when absent. */
  getResourceIdElement(): Element {
    if (this._resourceId === undefined) {
      this._resourceId = new Element();
    }
    return this._resourceId;
  }

  setResourceIdElement(resourceIdElement: Element | undefined): this {
    this._resourceId = resourceIdElement;
    return this;
  }

  /** A specific version of a resource contained in the instance (0..1) */
  getVersionId(): string | undefined {
    return this.versionId;
  }

  /** Sets `versionId`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setVersionId(versionId: string | undefined): this {
    return this.setFieldValue('versionId', versionId);
  }

  hasVersionId(): boolean {
    return this.hasFieldValue('versionId');
  }

  /** The element carrying the id and extensions of `versionId`. Created when absent. */
  getVersionIdElement(): Element {
    if (this._versionId === undefined) {
      this._versionId = new Element();
    }
    return this._versionId;
  }

  setVersionIdElement(versionIdElement: Element | undefined): this {
    this._versionId = versionIdElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ExampleScenarioInstanceContainedInstance',
  ExampleScenarioInstanceContainedInstance,
  false
);

/**
 * Each major process - a group of operations
 */
export class ExampleScenarioProcess extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'title',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'preConditions',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preConditions', typeCode: 'markdown' }],
    },
    {
      elementName: 'postConditions',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'postConditions', typeCode: 'markdown' }],
    },
    {
      elementName: 'step',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'step', typeCode: 'ExampleScenarioProcessStep' }],
    },
  ];

  /** The diagram title of the group of operations (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** A longer description of the group of operations (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Description of initial status before the process starts (0..1) */
  preConditions?: string;
  /** Id and extensions of the primitive `preConditions`. */
  _preConditions?: Element;

  /** Description of final status after the process ends (0..1) */
  postConditions?: string;
  /** Id and extensions of the primitive `postConditions`. */
  _postConditions?: Element;

  /** Each step of the process (0..*) */
  step?: ExampleScenarioProcessStep[];

  override fhirType(): string {
    return 'ExampleScenario.process';
  }

  /** FHIR JSON for this ExampleScenarioProcess, typed as the plain `ExampleScenarioProcess` data type. */
  override toJSON(): plainTypes.ExampleScenarioProcess {
    return this.serialize() as plainTypes.ExampleScenarioProcess;
  }

  /** The diagram title of the group of operations (1..1) */
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

  /** A longer description of the group of operations (0..1) */
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

  /** Description of initial status before the process starts (0..1) */
  getPreConditions(): string | undefined {
    return this.preConditions;
  }

  /** Sets `preConditions`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPreConditions(preConditions: string | undefined): this {
    return this.setFieldValue('preConditions', preConditions);
  }

  hasPreConditions(): boolean {
    return this.hasFieldValue('preConditions');
  }

  /** The element carrying the id and extensions of `preConditions`. Created when absent. */
  getPreConditionsElement(): Element {
    if (this._preConditions === undefined) {
      this._preConditions = new Element();
    }
    return this._preConditions;
  }

  setPreConditionsElement(preConditionsElement: Element | undefined): this {
    this._preConditions = preConditionsElement;
    return this;
  }

  /** Description of final status after the process ends (0..1) */
  getPostConditions(): string | undefined {
    return this.postConditions;
  }

  /** Sets `postConditions`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPostConditions(postConditions: string | undefined): this {
    return this.setFieldValue('postConditions', postConditions);
  }

  hasPostConditions(): boolean {
    return this.hasFieldValue('postConditions');
  }

  /** The element carrying the id and extensions of `postConditions`. Created when absent. */
  getPostConditionsElement(): Element {
    if (this._postConditions === undefined) {
      this._postConditions = new Element();
    }
    return this._postConditions;
  }

  setPostConditionsElement(postConditionsElement: Element | undefined): this {
    this._postConditions = postConditionsElement;
    return this;
  }

  /** Each step of the process (0..*) Never undefined; an empty list is created when absent. */
  getStep(): ExampleScenarioProcessStep[] {
    if (this.step === undefined) {
      this.step = [];
    }
    return this.step;
  }

  setStep(step: ExampleScenarioProcessStep[] | undefined): this {
    return this.setFieldValue('step', step);
  }

  hasStep(): boolean {
    return this.hasFieldValue('step');
  }

  /** Appends a new, empty ExampleScenarioProcessStep to `step` and returns it so it can be filled in. */
  addStep(): ExampleScenarioProcessStep;
  /** Appends the given ExampleScenarioProcessStep to `step` and returns this object for chaining. */
  addStep(exampleScenarioProcessStep: ExampleScenarioProcessStep): this;
  addStep(
    exampleScenarioProcessStep?: ExampleScenarioProcessStep
  ): ExampleScenarioProcessStep | this {
    if (exampleScenarioProcessStep !== undefined) {
      return this.addFieldValue('step', exampleScenarioProcessStep);
    }
    const createdExampleScenarioProcessStep = new ExampleScenarioProcessStep();
    this.addFieldValue('step', createdExampleScenarioProcessStep);
    return createdExampleScenarioProcessStep;
  }

  /** The first ExampleScenarioProcessStep of `step`. One is added when the list is empty. */
  getStepFirstRep(): ExampleScenarioProcessStep {
    const firstExampleScenarioProcessStep = this.getStep()[0];
    return firstExampleScenarioProcessStep === undefined
      ? this.addStep()
      : firstExampleScenarioProcessStep;
  }
}

modelTypeRegistry.register('ExampleScenarioProcess', ExampleScenarioProcess, false);

/**
 * Each step of the process
 */
export class ExampleScenarioProcessStep extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'process',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'process', typeCode: 'ExampleScenarioProcess' }],
    },
    {
      elementName: 'pause',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'pause', typeCode: 'boolean' }],
    },
    {
      elementName: 'operation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'operation', typeCode: 'ExampleScenarioProcessStepOperation' }],
    },
    {
      elementName: 'alternative',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alternative', typeCode: 'ExampleScenarioProcessStepAlternative' }],
    },
  ];

  /** Nested process (0..*) */
  process?: ExampleScenarioProcess[];

  /** If there is a pause in the flow (0..1) */
  pause?: boolean;
  /** Id and extensions of the primitive `pause`. */
  _pause?: Element;

  /** Each interaction or action (0..1) */
  operation?: ExampleScenarioProcessStepOperation;

  /** Alternate non-typical step action (0..*) */
  alternative?: ExampleScenarioProcessStepAlternative[];

  override fhirType(): string {
    return 'ExampleScenario.process.step';
  }

  /** FHIR JSON for this ExampleScenarioProcessStep, typed as the plain `ExampleScenarioStep` data type. */
  override toJSON(): plainTypes.ExampleScenarioStep {
    return this.serialize() as plainTypes.ExampleScenarioStep;
  }

  /** Nested process (0..*) Never undefined; an empty list is created when absent. */
  getProcess(): ExampleScenarioProcess[] {
    if (this.process === undefined) {
      this.process = [];
    }
    return this.process;
  }

  setProcess(process: ExampleScenarioProcess[] | undefined): this {
    return this.setFieldValue('process', process);
  }

  hasProcess(): boolean {
    return this.hasFieldValue('process');
  }

  /** Appends a new, empty ExampleScenarioProcess to `process` and returns it so it can be filled in. */
  addProcess(): ExampleScenarioProcess;
  /** Appends the given ExampleScenarioProcess to `process` and returns this object for chaining. */
  addProcess(exampleScenarioProcess: ExampleScenarioProcess): this;
  addProcess(exampleScenarioProcess?: ExampleScenarioProcess): ExampleScenarioProcess | this {
    if (exampleScenarioProcess !== undefined) {
      return this.addFieldValue('process', exampleScenarioProcess);
    }
    const createdExampleScenarioProcess = new ExampleScenarioProcess();
    this.addFieldValue('process', createdExampleScenarioProcess);
    return createdExampleScenarioProcess;
  }

  /** The first ExampleScenarioProcess of `process`. One is added when the list is empty. */
  getProcessFirstRep(): ExampleScenarioProcess {
    const firstExampleScenarioProcess = this.getProcess()[0];
    return firstExampleScenarioProcess === undefined
      ? this.addProcess()
      : firstExampleScenarioProcess;
  }

  /** If there is a pause in the flow (0..1) */
  getPause(): boolean | undefined {
    return this.pause;
  }

  /** Sets `pause`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setPause(pause: boolean | undefined): this {
    return this.setFieldValue('pause', pause);
  }

  hasPause(): boolean {
    return this.hasFieldValue('pause');
  }

  /** The element carrying the id and extensions of `pause`. Created when absent. */
  getPauseElement(): Element {
    if (this._pause === undefined) {
      this._pause = new Element();
    }
    return this._pause;
  }

  setPauseElement(pauseElement: Element | undefined): this {
    this._pause = pauseElement;
    return this;
  }

  /** Each interaction or action (0..1) Created when absent. */
  getOperation(): ExampleScenarioProcessStepOperation {
    if (this.operation === undefined) {
      this.operation = new ExampleScenarioProcessStepOperation();
    }
    return this.operation;
  }

  setOperation(operation: ExampleScenarioProcessStepOperation | undefined): this {
    return this.setFieldValue('operation', operation);
  }

  hasOperation(): boolean {
    return this.hasFieldValue('operation');
  }

  /** Alternate non-typical step action (0..*) Never undefined; an empty list is created when absent. */
  getAlternative(): ExampleScenarioProcessStepAlternative[] {
    if (this.alternative === undefined) {
      this.alternative = [];
    }
    return this.alternative;
  }

  setAlternative(alternative: ExampleScenarioProcessStepAlternative[] | undefined): this {
    return this.setFieldValue('alternative', alternative);
  }

  hasAlternative(): boolean {
    return this.hasFieldValue('alternative');
  }

  /** Appends a new, empty ExampleScenarioProcessStepAlternative to `alternative` and returns it so it can be filled in. */
  addAlternative(): ExampleScenarioProcessStepAlternative;
  /** Appends the given ExampleScenarioProcessStepAlternative to `alternative` and returns this object for chaining. */
  addAlternative(
    exampleScenarioProcessStepAlternative: ExampleScenarioProcessStepAlternative
  ): this;
  addAlternative(
    exampleScenarioProcessStepAlternative?: ExampleScenarioProcessStepAlternative
  ): ExampleScenarioProcessStepAlternative | this {
    if (exampleScenarioProcessStepAlternative !== undefined) {
      return this.addFieldValue('alternative', exampleScenarioProcessStepAlternative);
    }
    const createdExampleScenarioProcessStepAlternative =
      new ExampleScenarioProcessStepAlternative();
    this.addFieldValue('alternative', createdExampleScenarioProcessStepAlternative);
    return createdExampleScenarioProcessStepAlternative;
  }

  /** The first ExampleScenarioProcessStepAlternative of `alternative`. One is added when the list is empty. */
  getAlternativeFirstRep(): ExampleScenarioProcessStepAlternative {
    const firstExampleScenarioProcessStepAlternative = this.getAlternative()[0];
    return firstExampleScenarioProcessStepAlternative === undefined
      ? this.addAlternative()
      : firstExampleScenarioProcessStepAlternative;
  }
}

modelTypeRegistry.register('ExampleScenarioProcessStep', ExampleScenarioProcessStep, false);

/**
 * Each interaction or action
 */
export class ExampleScenarioProcessStepOperation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'number',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'number', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'string' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'initiator',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'initiator', typeCode: 'string' }],
    },
    {
      elementName: 'receiver',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'receiver', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'initiatorActive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'initiatorActive', typeCode: 'boolean' }],
    },
    {
      elementName: 'receiverActive',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'receiverActive', typeCode: 'boolean' }],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'request', typeCode: 'ExampleScenarioInstanceContainedInstance' }],
    },
    {
      elementName: 'response',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'response', typeCode: 'ExampleScenarioInstanceContainedInstance' }],
    },
  ];

  /** The sequential number of the interaction (1..1) */
  number?: string;
  /** Id and extensions of the primitive `number`. */
  _number?: Element;

  /** The type of operation - CRUD (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** The human-friendly name of the interaction (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Who starts the transaction (0..1) */
  initiator?: string;
  /** Id and extensions of the primitive `initiator`. */
  _initiator?: Element;

  /** Who receives the transaction (0..1) */
  receiver?: string;
  /** Id and extensions of the primitive `receiver`. */
  _receiver?: Element;

  /** A comment to be inserted in the diagram (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Whether the initiator is deactivated right after the transaction (0..1) */
  initiatorActive?: boolean;
  /** Id and extensions of the primitive `initiatorActive`. */
  _initiatorActive?: Element;

  /** Whether the receiver is deactivated right after the transaction (0..1) */
  receiverActive?: boolean;
  /** Id and extensions of the primitive `receiverActive`. */
  _receiverActive?: Element;

  /** Each resource instance used by the initiator (0..1) */
  request?: ExampleScenarioInstanceContainedInstance;

  /** Each resource instance used by the responder (0..1) */
  response?: ExampleScenarioInstanceContainedInstance;

  override fhirType(): string {
    return 'ExampleScenario.process.step.operation';
  }

  /** FHIR JSON for this ExampleScenarioProcessStepOperation, typed as the plain `ExampleScenarioOperation` data type. */
  override toJSON(): plainTypes.ExampleScenarioOperation {
    return this.serialize() as plainTypes.ExampleScenarioOperation;
  }

  /** The sequential number of the interaction (1..1) */
  getNumber(): string | undefined {
    return this.number;
  }

  /** Sets `number`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setNumber(number: string | undefined): this {
    return this.setFieldValue('number', number);
  }

  hasNumber(): boolean {
    return this.hasFieldValue('number');
  }

  /** The element carrying the id and extensions of `number`. Created when absent. */
  getNumberElement(): Element {
    if (this._number === undefined) {
      this._number = new Element();
    }
    return this._number;
  }

  setNumberElement(numberElement: Element | undefined): this {
    this._number = numberElement;
    return this;
  }

  /** The type of operation - CRUD (0..1) */
  getType(): string | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setType(type: string | undefined): this {
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

  /** The human-friendly name of the interaction (0..1) */
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

  /** Who starts the transaction (0..1) */
  getInitiator(): string | undefined {
    return this.initiator;
  }

  /** Sets `initiator`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setInitiator(initiator: string | undefined): this {
    return this.setFieldValue('initiator', initiator);
  }

  hasInitiator(): boolean {
    return this.hasFieldValue('initiator');
  }

  /** The element carrying the id and extensions of `initiator`. Created when absent. */
  getInitiatorElement(): Element {
    if (this._initiator === undefined) {
      this._initiator = new Element();
    }
    return this._initiator;
  }

  setInitiatorElement(initiatorElement: Element | undefined): this {
    this._initiator = initiatorElement;
    return this;
  }

  /** Who receives the transaction (0..1) */
  getReceiver(): string | undefined {
    return this.receiver;
  }

  /** Sets `receiver`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setReceiver(receiver: string | undefined): this {
    return this.setFieldValue('receiver', receiver);
  }

  hasReceiver(): boolean {
    return this.hasFieldValue('receiver');
  }

  /** The element carrying the id and extensions of `receiver`. Created when absent. */
  getReceiverElement(): Element {
    if (this._receiver === undefined) {
      this._receiver = new Element();
    }
    return this._receiver;
  }

  setReceiverElement(receiverElement: Element | undefined): this {
    this._receiver = receiverElement;
    return this;
  }

  /** A comment to be inserted in the diagram (0..1) */
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

  /** Whether the initiator is deactivated right after the transaction (0..1) */
  getInitiatorActive(): boolean | undefined {
    return this.initiatorActive;
  }

  /** Sets `initiatorActive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setInitiatorActive(initiatorActive: boolean | undefined): this {
    return this.setFieldValue('initiatorActive', initiatorActive);
  }

  hasInitiatorActive(): boolean {
    return this.hasFieldValue('initiatorActive');
  }

  /** The element carrying the id and extensions of `initiatorActive`. Created when absent. */
  getInitiatorActiveElement(): Element {
    if (this._initiatorActive === undefined) {
      this._initiatorActive = new Element();
    }
    return this._initiatorActive;
  }

  setInitiatorActiveElement(initiatorActiveElement: Element | undefined): this {
    this._initiatorActive = initiatorActiveElement;
    return this;
  }

  /** Whether the receiver is deactivated right after the transaction (0..1) */
  getReceiverActive(): boolean | undefined {
    return this.receiverActive;
  }

  /** Sets `receiverActive`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setReceiverActive(receiverActive: boolean | undefined): this {
    return this.setFieldValue('receiverActive', receiverActive);
  }

  hasReceiverActive(): boolean {
    return this.hasFieldValue('receiverActive');
  }

  /** The element carrying the id and extensions of `receiverActive`. Created when absent. */
  getReceiverActiveElement(): Element {
    if (this._receiverActive === undefined) {
      this._receiverActive = new Element();
    }
    return this._receiverActive;
  }

  setReceiverActiveElement(receiverActiveElement: Element | undefined): this {
    this._receiverActive = receiverActiveElement;
    return this;
  }

  /** Each resource instance used by the initiator (0..1) Created when absent. */
  getRequest(): ExampleScenarioInstanceContainedInstance {
    if (this.request === undefined) {
      this.request = new ExampleScenarioInstanceContainedInstance();
    }
    return this.request;
  }

  setRequest(request: ExampleScenarioInstanceContainedInstance | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Each resource instance used by the responder (0..1) Created when absent. */
  getResponse(): ExampleScenarioInstanceContainedInstance {
    if (this.response === undefined) {
      this.response = new ExampleScenarioInstanceContainedInstance();
    }
    return this.response;
  }

  setResponse(response: ExampleScenarioInstanceContainedInstance | undefined): this {
    return this.setFieldValue('response', response);
  }

  hasResponse(): boolean {
    return this.hasFieldValue('response');
  }
}

modelTypeRegistry.register(
  'ExampleScenarioProcessStepOperation',
  ExampleScenarioProcessStepOperation,
  false
);

/**
 * Alternate non-typical step action
 */
export class ExampleScenarioProcessStepAlternative extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'title',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'title', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'step',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'step', typeCode: 'ExampleScenarioProcessStep' }],
    },
  ];

  /** Label for alternative (1..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** A human-readable description of each option (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** What happens in each alternative option (0..*) */
  step?: ExampleScenarioProcessStep[];

  override fhirType(): string {
    return 'ExampleScenario.process.step.alternative';
  }

  /** FHIR JSON for this ExampleScenarioProcessStepAlternative, typed as the plain `ExampleScenarioAlternative` data type. */
  override toJSON(): plainTypes.ExampleScenarioAlternative {
    return this.serialize() as plainTypes.ExampleScenarioAlternative;
  }

  /** Label for alternative (1..1) */
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

  /** A human-readable description of each option (0..1) */
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

  /** What happens in each alternative option (0..*) Never undefined; an empty list is created when absent. */
  getStep(): ExampleScenarioProcessStep[] {
    if (this.step === undefined) {
      this.step = [];
    }
    return this.step;
  }

  setStep(step: ExampleScenarioProcessStep[] | undefined): this {
    return this.setFieldValue('step', step);
  }

  hasStep(): boolean {
    return this.hasFieldValue('step');
  }

  /** Appends a new, empty ExampleScenarioProcessStep to `step` and returns it so it can be filled in. */
  addStep(): ExampleScenarioProcessStep;
  /** Appends the given ExampleScenarioProcessStep to `step` and returns this object for chaining. */
  addStep(exampleScenarioProcessStep: ExampleScenarioProcessStep): this;
  addStep(
    exampleScenarioProcessStep?: ExampleScenarioProcessStep
  ): ExampleScenarioProcessStep | this {
    if (exampleScenarioProcessStep !== undefined) {
      return this.addFieldValue('step', exampleScenarioProcessStep);
    }
    const createdExampleScenarioProcessStep = new ExampleScenarioProcessStep();
    this.addFieldValue('step', createdExampleScenarioProcessStep);
    return createdExampleScenarioProcessStep;
  }

  /** The first ExampleScenarioProcessStep of `step`. One is added when the list is empty. */
  getStepFirstRep(): ExampleScenarioProcessStep {
    const firstExampleScenarioProcessStep = this.getStep()[0];
    return firstExampleScenarioProcessStep === undefined
      ? this.addStep()
      : firstExampleScenarioProcessStep;
  }
}

modelTypeRegistry.register(
  'ExampleScenarioProcessStepAlternative',
  ExampleScenarioProcessStepAlternative,
  false
);
