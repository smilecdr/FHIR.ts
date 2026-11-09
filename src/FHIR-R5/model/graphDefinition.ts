/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { UsageContext } from './usageContext';

/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export class GraphDefinition extends DomainResource {
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
      elementName: 'versionAlgorithm',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'versionAlgorithmString', typeCode: 'string' },
        { jsonKey: 'versionAlgorithmCoding', typeCode: 'Coding' },
      ],
    },
    {
      elementName: 'name',
      minimum: 1,
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
      elementName: 'copyrightLabel',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyrightLabel', typeCode: 'string' }],
    },
    {
      elementName: 'start',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'id' }],
    },
    {
      elementName: 'node',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'node', typeCode: 'GraphDefinitionNode' }],
    },
    {
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'GraphDefinitionLink' }],
    },
  ];

  readonly resourceType = 'GraphDefinition';

  /** Canonical identifier for this graph definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the GraphDefinition (business identifier) (0..*) */
  identifier?: Identifier[];

  /** Business version of the graph definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this graph definition (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this graph definition (human friendly) (0..1) */
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

  /** Date last changed (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Name of the publisher/steward (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the graph definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for graph definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this graph definition is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** Copyright holder and year(s) (0..1) */
  copyrightLabel?: string;
  /** Id and extensions of the primitive `copyrightLabel`. */
  _copyrightLabel?: Element;

  /** Starting Node (0..1) */
  start?: string;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** Potential target for the link (0..*) */
  node?: GraphDefinitionNode[];

  /** Links this graph makes rules about (0..*) */
  link?: GraphDefinitionLink[];

  override fhirType(): string {
    return 'GraphDefinition';
  }

  /** FHIR JSON for this GraphDefinition, typed as the plain `GraphDefinition` data type. */
  override toJSON(): plainTypes.GraphDefinition {
    return this.serialize() as plainTypes.GraphDefinition;
  }

  /** Canonical identifier for this graph definition, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the GraphDefinition (business identifier) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the graph definition (0..1) */
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

  /** How to compare versions (0..1) Whichever type of `versionAlgorithm[x]` is set. */
  getVersionAlgorithm(): string | Coding | undefined {
    return this.getChoiceValue<string | Coding>('versionAlgorithm');
  }

  /** True when any type of `versionAlgorithm[x]` is set. */
  hasVersionAlgorithm(): boolean {
    return this.hasChoiceValue('versionAlgorithm');
  }

  getVersionAlgorithmString(): string | undefined {
    return this.versionAlgorithmString;
  }

  /** Sets `versionAlgorithm[x]` as string and clears every other type of it. */
  setVersionAlgorithmString(versionAlgorithmString: string | undefined): this {
    return this.setFieldValue('versionAlgorithmString', versionAlgorithmString);
  }

  hasVersionAlgorithmString(): boolean {
    return this.hasFieldValue('versionAlgorithmString');
  }

  getVersionAlgorithmCoding(): Coding | undefined {
    return this.versionAlgorithmCoding;
  }

  /** Sets `versionAlgorithm[x]` as Coding and clears every other type of it. */
  setVersionAlgorithmCoding(versionAlgorithmCoding: Coding | undefined): this {
    return this.setFieldValue('versionAlgorithmCoding', versionAlgorithmCoding);
  }

  hasVersionAlgorithmCoding(): boolean {
    return this.hasFieldValue('versionAlgorithmCoding');
  }

  /** Name for this graph definition (computer friendly) (1..1) */
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

  /** Name for this graph definition (human friendly) (0..1) */
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

  /** Name of the publisher/steward (organization or individual) (0..1) */
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

  /** Natural language description of the graph definition (0..1) */
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

  /** Intended jurisdiction for graph definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this graph definition is defined (0..1) */
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

  /** Copyright holder and year(s) (0..1) */
  getCopyrightLabel(): string | undefined {
    return this.copyrightLabel;
  }

  /** Sets `copyrightLabel`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCopyrightLabel(copyrightLabel: string | undefined): this {
    return this.setFieldValue('copyrightLabel', copyrightLabel);
  }

  hasCopyrightLabel(): boolean {
    return this.hasFieldValue('copyrightLabel');
  }

  /** The element carrying the id and extensions of `copyrightLabel`. Created when absent. */
  getCopyrightLabelElement(): Element {
    if (this._copyrightLabel === undefined) {
      this._copyrightLabel = new Element();
    }
    return this._copyrightLabel;
  }

  setCopyrightLabelElement(copyrightLabelElement: Element | undefined): this {
    this._copyrightLabel = copyrightLabelElement;
    return this;
  }

  /** Starting Node (0..1) */
  getStart(): string | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setStart(start: string | undefined): this {
    return this.setFieldValue('start', start);
  }

  hasStart(): boolean {
    return this.hasFieldValue('start');
  }

  /** The element carrying the id and extensions of `start`. Created when absent. */
  getStartElement(): Element {
    if (this._start === undefined) {
      this._start = new Element();
    }
    return this._start;
  }

  setStartElement(startElement: Element | undefined): this {
    this._start = startElement;
    return this;
  }

  /** Potential target for the link (0..*) Never undefined; an empty list is created when absent. */
  getNode(): GraphDefinitionNode[] {
    if (this.node === undefined) {
      this.node = [];
    }
    return this.node;
  }

  setNode(node: GraphDefinitionNode[] | undefined): this {
    return this.setFieldValue('node', node);
  }

  hasNode(): boolean {
    return this.hasFieldValue('node');
  }

  /** Appends a new, empty GraphDefinitionNode to `node` and returns it so it can be filled in. */
  addNode(): GraphDefinitionNode;
  /** Appends the given GraphDefinitionNode to `node` and returns this object for chaining. */
  addNode(graphDefinitionNode: GraphDefinitionNode): this;
  addNode(graphDefinitionNode?: GraphDefinitionNode): GraphDefinitionNode | this {
    if (graphDefinitionNode !== undefined) {
      return this.addFieldValue('node', graphDefinitionNode);
    }
    const createdGraphDefinitionNode = new GraphDefinitionNode();
    this.addFieldValue('node', createdGraphDefinitionNode);
    return createdGraphDefinitionNode;
  }

  /** The first GraphDefinitionNode of `node`. One is added when the list is empty. */
  getNodeFirstRep(): GraphDefinitionNode {
    const firstGraphDefinitionNode = this.getNode()[0];
    return firstGraphDefinitionNode === undefined ? this.addNode() : firstGraphDefinitionNode;
  }

  /** Links this graph makes rules about (0..*) Never undefined; an empty list is created when absent. */
  getLink(): GraphDefinitionLink[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: GraphDefinitionLink[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends a new, empty GraphDefinitionLink to `link` and returns it so it can be filled in. */
  addLink(): GraphDefinitionLink;
  /** Appends the given GraphDefinitionLink to `link` and returns this object for chaining. */
  addLink(graphDefinitionLink: GraphDefinitionLink): this;
  addLink(graphDefinitionLink?: GraphDefinitionLink): GraphDefinitionLink | this {
    if (graphDefinitionLink !== undefined) {
      return this.addFieldValue('link', graphDefinitionLink);
    }
    const createdGraphDefinitionLink = new GraphDefinitionLink();
    this.addFieldValue('link', createdGraphDefinitionLink);
    return createdGraphDefinitionLink;
  }

  /** The first GraphDefinitionLink of `link`. One is added when the list is empty. */
  getLinkFirstRep(): GraphDefinitionLink {
    const firstGraphDefinitionLink = this.getLink()[0];
    return firstGraphDefinitionLink === undefined ? this.addLink() : firstGraphDefinitionLink;
  }
}

modelTypeRegistry.register('GraphDefinition', GraphDefinition, true);

/** True when the value is a GraphDefinition model instance. */
export function isGraphDefinition(candidate: unknown): candidate is GraphDefinition {
  return candidate instanceof GraphDefinition;
}

/**
 * Potential target for the link
 */
export class GraphDefinitionNode extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'nodeId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'nodeId', typeCode: 'id' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'type',
          typeCode: 'code',
          allowedCodes: valueSetCodes.VersionIndependentResourceTypesAll,
        },
      ],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
  ];

  /** Internal ID - target for link references (1..1) */
  nodeId?: string;
  /** Id and extensions of the primitive `nodeId`. */
  _nodeId?: Element;

  /** Why this node is specified (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Type of resource this link refers to (1..1) */
  type?: valueSetCodes.VersionIndependentResourceTypesAll;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Profile for the target resource (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

  override fhirType(): string {
    return 'GraphDefinition.node';
  }

  /** FHIR JSON for this GraphDefinitionNode, typed as the plain `GraphDefinitionNode` data type. */
  override toJSON(): plainTypes.GraphDefinitionNode {
    return this.serialize() as plainTypes.GraphDefinitionNode;
  }

  /** Internal ID - target for link references (1..1) */
  getNodeId(): string | undefined {
    return this.nodeId;
  }

  /** Sets `nodeId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setNodeId(nodeId: string | undefined): this {
    return this.setFieldValue('nodeId', nodeId);
  }

  hasNodeId(): boolean {
    return this.hasFieldValue('nodeId');
  }

  /** The element carrying the id and extensions of `nodeId`. Created when absent. */
  getNodeIdElement(): Element {
    if (this._nodeId === undefined) {
      this._nodeId = new Element();
    }
    return this._nodeId;
  }

  setNodeIdElement(nodeIdElement: Element | undefined): this {
    this._nodeId = nodeIdElement;
    return this;
  }

  /** Why this node is specified (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** Type of resource this link refers to (1..1) */
  getType(): valueSetCodes.VersionIndependentResourceTypesAll | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.VersionIndependentResourceTypesAll | undefined): this {
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

  /** Profile for the target resource (0..1) */
  getProfile(): string | undefined {
    return this.profile;
  }

  /** Sets `profile`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setProfile(profile: string | undefined): this {
    return this.setFieldValue('profile', profile);
  }

  hasProfile(): boolean {
    return this.hasFieldValue('profile');
  }

  /** The element carrying the id and extensions of `profile`. Created when absent. */
  getProfileElement(): Element {
    if (this._profile === undefined) {
      this._profile = new Element();
    }
    return this._profile;
  }

  setProfileElement(profileElement: Element | undefined): this {
    this._profile = profileElement;
    return this;
  }
}

modelTypeRegistry.register('GraphDefinitionNode', GraphDefinitionNode, false);

/**
 * Links this graph makes rules about
 */
export class GraphDefinitionLink extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'min',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'min', typeCode: 'integer' }],
    },
    {
      elementName: 'max',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'max', typeCode: 'string' }],
    },
    {
      elementName: 'sourceId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceId', typeCode: 'id' }],
    },
    {
      elementName: 'path',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'path', typeCode: 'string' }],
    },
    {
      elementName: 'sliceName',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sliceName', typeCode: 'string' }],
    },
    {
      elementName: 'targetId',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetId', typeCode: 'id' }],
    },
    {
      elementName: 'params',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'params', typeCode: 'string' }],
    },
    {
      elementName: 'compartment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'compartment', typeCode: 'GraphDefinitionLinkCompartment' }],
    },
  ];

  /** Why this link is specified (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Minimum occurrences for this link (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Maximum occurrences for this link (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  /** Source Node for this link (1..1) */
  sourceId?: string;
  /** Id and extensions of the primitive `sourceId`. */
  _sourceId?: Element;

  /** Path in the resource that contains the link (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** Which slice (if profiled) (0..1) */
  sliceName?: string;
  /** Id and extensions of the primitive `sliceName`. */
  _sliceName?: Element;

  /** Target Node for this link (1..1) */
  targetId?: string;
  /** Id and extensions of the primitive `targetId`. */
  _targetId?: Element;

  /** Criteria for reverse lookup (0..1) */
  params?: string;
  /** Id and extensions of the primitive `params`. */
  _params?: Element;

  /** Compartment Consistency Rules (0..*) */
  compartment?: GraphDefinitionLinkCompartment[];

  override fhirType(): string {
    return 'GraphDefinition.link';
  }

  /** FHIR JSON for this GraphDefinitionLink, typed as the plain `GraphDefinitionLink` data type. */
  override toJSON(): plainTypes.GraphDefinitionLink {
    return this.serialize() as plainTypes.GraphDefinitionLink;
  }

  /** Why this link is specified (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

  /** Minimum occurrences for this link (0..1) */
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

  /** Maximum occurrences for this link (0..1) */
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

  /** Source Node for this link (1..1) */
  getSourceId(): string | undefined {
    return this.sourceId;
  }

  /** Sets `sourceId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setSourceId(sourceId: string | undefined): this {
    return this.setFieldValue('sourceId', sourceId);
  }

  hasSourceId(): boolean {
    return this.hasFieldValue('sourceId');
  }

  /** The element carrying the id and extensions of `sourceId`. Created when absent. */
  getSourceIdElement(): Element {
    if (this._sourceId === undefined) {
      this._sourceId = new Element();
    }
    return this._sourceId;
  }

  setSourceIdElement(sourceIdElement: Element | undefined): this {
    this._sourceId = sourceIdElement;
    return this;
  }

  /** Path in the resource that contains the link (0..1) */
  getPath(): string | undefined {
    return this.path;
  }

  /** Sets `path`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPath(path: string | undefined): this {
    return this.setFieldValue('path', path);
  }

  hasPath(): boolean {
    return this.hasFieldValue('path');
  }

  /** The element carrying the id and extensions of `path`. Created when absent. */
  getPathElement(): Element {
    if (this._path === undefined) {
      this._path = new Element();
    }
    return this._path;
  }

  setPathElement(pathElement: Element | undefined): this {
    this._path = pathElement;
    return this;
  }

  /** Which slice (if profiled) (0..1) */
  getSliceName(): string | undefined {
    return this.sliceName;
  }

  /** Sets `sliceName`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSliceName(sliceName: string | undefined): this {
    return this.setFieldValue('sliceName', sliceName);
  }

  hasSliceName(): boolean {
    return this.hasFieldValue('sliceName');
  }

  /** The element carrying the id and extensions of `sliceName`. Created when absent. */
  getSliceNameElement(): Element {
    if (this._sliceName === undefined) {
      this._sliceName = new Element();
    }
    return this._sliceName;
  }

  setSliceNameElement(sliceNameElement: Element | undefined): this {
    this._sliceName = sliceNameElement;
    return this;
  }

  /** Target Node for this link (1..1) */
  getTargetId(): string | undefined {
    return this.targetId;
  }

  /** Sets `targetId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setTargetId(targetId: string | undefined): this {
    return this.setFieldValue('targetId', targetId);
  }

  hasTargetId(): boolean {
    return this.hasFieldValue('targetId');
  }

  /** The element carrying the id and extensions of `targetId`. Created when absent. */
  getTargetIdElement(): Element {
    if (this._targetId === undefined) {
      this._targetId = new Element();
    }
    return this._targetId;
  }

  setTargetIdElement(targetIdElement: Element | undefined): this {
    this._targetId = targetIdElement;
    return this;
  }

  /** Criteria for reverse lookup (0..1) */
  getParams(): string | undefined {
    return this.params;
  }

  /** Sets `params`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setParams(params: string | undefined): this {
    return this.setFieldValue('params', params);
  }

  hasParams(): boolean {
    return this.hasFieldValue('params');
  }

  /** The element carrying the id and extensions of `params`. Created when absent. */
  getParamsElement(): Element {
    if (this._params === undefined) {
      this._params = new Element();
    }
    return this._params;
  }

  setParamsElement(paramsElement: Element | undefined): this {
    this._params = paramsElement;
    return this;
  }

  /** Compartment Consistency Rules (0..*) Never undefined; an empty list is created when absent. */
  getCompartment(): GraphDefinitionLinkCompartment[] {
    if (this.compartment === undefined) {
      this.compartment = [];
    }
    return this.compartment;
  }

  setCompartment(compartment: GraphDefinitionLinkCompartment[] | undefined): this {
    return this.setFieldValue('compartment', compartment);
  }

  hasCompartment(): boolean {
    return this.hasFieldValue('compartment');
  }

  /** Appends a new, empty GraphDefinitionLinkCompartment to `compartment` and returns it so it can be filled in. */
  addCompartment(): GraphDefinitionLinkCompartment;
  /** Appends the given GraphDefinitionLinkCompartment to `compartment` and returns this object for chaining. */
  addCompartment(graphDefinitionLinkCompartment: GraphDefinitionLinkCompartment): this;
  addCompartment(
    graphDefinitionLinkCompartment?: GraphDefinitionLinkCompartment
  ): GraphDefinitionLinkCompartment | this {
    if (graphDefinitionLinkCompartment !== undefined) {
      return this.addFieldValue('compartment', graphDefinitionLinkCompartment);
    }
    const createdGraphDefinitionLinkCompartment = new GraphDefinitionLinkCompartment();
    this.addFieldValue('compartment', createdGraphDefinitionLinkCompartment);
    return createdGraphDefinitionLinkCompartment;
  }

  /** The first GraphDefinitionLinkCompartment of `compartment`. One is added when the list is empty. */
  getCompartmentFirstRep(): GraphDefinitionLinkCompartment {
    const firstGraphDefinitionLinkCompartment = this.getCompartment()[0];
    return firstGraphDefinitionLinkCompartment === undefined
      ? this.addCompartment()
      : firstGraphDefinitionLinkCompartment;
  }
}

modelTypeRegistry.register('GraphDefinitionLink', GraphDefinitionLink, false);

/**
 * Compartment Consistency Rules
 */
export class GraphDefinitionLinkCompartment extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'use',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'use', typeCode: 'code', allowedCodes: valueSetCodes.GraphCompartmentUse },
      ],
    },
    {
      elementName: 'rule',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'rule', typeCode: 'code', allowedCodes: valueSetCodes.GraphCompartmentRule },
      ],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.CompartmentType }],
    },
    {
      elementName: 'expression',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expression', typeCode: 'string' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
  ];

  /** where | requires (1..1) */
  use?: valueSetCodes.GraphCompartmentUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** identical | matching | different | custom (1..1) */
  rule?: valueSetCodes.GraphCompartmentRule;
  /** Id and extensions of the primitive `rule`. */
  _rule?: Element;

  /** Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare (1..1) */
  code?: valueSetCodes.CompartmentType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Custom rule, as a FHIRPath expression (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  /** Documentation for FHIRPath expression (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'GraphDefinition.link.compartment';
  }

  /** FHIR JSON for this GraphDefinitionLinkCompartment, typed as the plain `GraphDefinitionCompartment` data type. */
  override toJSON(): plainTypes.GraphDefinitionCompartment {
    return this.serialize() as plainTypes.GraphDefinitionCompartment;
  }

  /** where | requires (1..1) */
  getUse(): valueSetCodes.GraphCompartmentUse | undefined {
    return this.use;
  }

  /** Sets `use`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setUse(use: valueSetCodes.GraphCompartmentUse | undefined): this {
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

  /** identical | matching | different | custom (1..1) */
  getRule(): valueSetCodes.GraphCompartmentRule | undefined {
    return this.rule;
  }

  /** Sets `rule`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setRule(rule: valueSetCodes.GraphCompartmentRule | undefined): this {
    return this.setFieldValue('rule', rule);
  }

  hasRule(): boolean {
    return this.hasFieldValue('rule');
  }

  /** The element carrying the id and extensions of `rule`. Created when absent. */
  getRuleElement(): Element {
    if (this._rule === undefined) {
      this._rule = new Element();
    }
    return this._rule;
  }

  setRuleElement(ruleElement: Element | undefined): this {
    this._rule = ruleElement;
    return this;
  }

  /** Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare (1..1) */
  getCode(): valueSetCodes.CompartmentType | undefined {
    return this.code;
  }

  /** Sets `code`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setCode(code: valueSetCodes.CompartmentType | undefined): this {
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

  /** Custom rule, as a FHIRPath expression (0..1) */
  getExpression(): string | undefined {
    return this.expression;
  }

  /** Sets `expression`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setExpression(expression: string | undefined): this {
    return this.setFieldValue('expression', expression);
  }

  hasExpression(): boolean {
    return this.hasFieldValue('expression');
  }

  /** The element carrying the id and extensions of `expression`. Created when absent. */
  getExpressionElement(): Element {
    if (this._expression === undefined) {
      this._expression = new Element();
    }
    return this._expression;
  }

  setExpressionElement(expressionElement: Element | undefined): this {
    this._expression = expressionElement;
    return this;
  }

  /** Documentation for FHIRPath expression (0..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
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

modelTypeRegistry.register('GraphDefinitionLinkCompartment', GraphDefinitionLinkCompartment, false);
