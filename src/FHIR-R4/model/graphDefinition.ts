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
      elementName: 'start',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'start', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
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

  /** Business version of the graph definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this graph definition (computer friendly) (1..1) */
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

  /** Type of resource at which the graph starts (1..1) */
  start?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `start`. */
  _start?: Element;

  /** Profile on base resource (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

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

  /** Type of resource at which the graph starts (1..1) */
  getStart(): valueSetCodes.ResourceType | undefined {
    return this.start;
  }

  /** Sets `start`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStart(start: valueSetCodes.ResourceType | undefined): this {
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

  /** Profile on base resource (0..1) */
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
 * Links this graph makes rules about
 */
export class GraphDefinitionLink extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
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
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'GraphDefinitionLinkTarget' }],
    },
  ];

  /** Path in the resource that contains the link (0..1) */
  path?: string;
  /** Id and extensions of the primitive `path`. */
  _path?: Element;

  /** Which slice (if profiled) (0..1) */
  sliceName?: string;
  /** Id and extensions of the primitive `sliceName`. */
  _sliceName?: Element;

  /** Minimum occurrences for this link (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Maximum occurrences for this link (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  /** Why this link is specified (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Potential target for the link (0..*) */
  target?: GraphDefinitionLinkTarget[];

  override fhirType(): string {
    return 'GraphDefinition.link';
  }

  /** FHIR JSON for this GraphDefinitionLink, typed as the plain `GraphDefinitionLink` data type. */
  override toJSON(): plainTypes.GraphDefinitionLink {
    return this.serialize() as plainTypes.GraphDefinitionLink;
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

  /** Potential target for the link (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): GraphDefinitionLinkTarget[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: GraphDefinitionLinkTarget[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty GraphDefinitionLinkTarget to `target` and returns it so it can be filled in. */
  addTarget(): GraphDefinitionLinkTarget;
  /** Appends the given GraphDefinitionLinkTarget to `target` and returns this object for chaining. */
  addTarget(graphDefinitionLinkTarget: GraphDefinitionLinkTarget): this;
  addTarget(
    graphDefinitionLinkTarget?: GraphDefinitionLinkTarget
  ): GraphDefinitionLinkTarget | this {
    if (graphDefinitionLinkTarget !== undefined) {
      return this.addFieldValue('target', graphDefinitionLinkTarget);
    }
    const createdGraphDefinitionLinkTarget = new GraphDefinitionLinkTarget();
    this.addFieldValue('target', createdGraphDefinitionLinkTarget);
    return createdGraphDefinitionLinkTarget;
  }

  /** The first GraphDefinitionLinkTarget of `target`. One is added when the list is empty. */
  getTargetFirstRep(): GraphDefinitionLinkTarget {
    const firstGraphDefinitionLinkTarget = this.getTarget()[0];
    return firstGraphDefinitionLinkTarget === undefined
      ? this.addTarget()
      : firstGraphDefinitionLinkTarget;
  }
}

modelTypeRegistry.register('GraphDefinitionLink', GraphDefinitionLink, false);

/**
 * Potential target for the link
 */
export class GraphDefinitionLinkTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.ResourceType }],
    },
    {
      elementName: 'params',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'params', typeCode: 'string' }],
    },
    {
      elementName: 'profile',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'profile', typeCode: 'canonical' }],
    },
    {
      elementName: 'compartment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'compartment', typeCode: 'GraphDefinitionLinkTargetCompartment' }],
    },
    {
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'GraphDefinitionLink' }],
    },
  ];

  /** Type of resource this link refers to (1..1) */
  type?: valueSetCodes.ResourceType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Criteria for reverse lookup (0..1) */
  params?: string;
  /** Id and extensions of the primitive `params`. */
  _params?: Element;

  /** Profile for the target resource (0..1) */
  profile?: string;
  /** Id and extensions of the primitive `profile`. */
  _profile?: Element;

  /** Compartment Consistency Rules (0..*) */
  compartment?: GraphDefinitionLinkTargetCompartment[];

  /** Additional links from target resource (0..*) */
  link?: GraphDefinitionLink[];

  override fhirType(): string {
    return 'GraphDefinition.link.target';
  }

  /** FHIR JSON for this GraphDefinitionLinkTarget, typed as the plain `GraphDefinitionTarget` data type. */
  override toJSON(): plainTypes.GraphDefinitionTarget {
    return this.serialize() as plainTypes.GraphDefinitionTarget;
  }

  /** Type of resource this link refers to (1..1) */
  getType(): valueSetCodes.ResourceType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ResourceType | undefined): this {
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

  /** Compartment Consistency Rules (0..*) Never undefined; an empty list is created when absent. */
  getCompartment(): GraphDefinitionLinkTargetCompartment[] {
    if (this.compartment === undefined) {
      this.compartment = [];
    }
    return this.compartment;
  }

  setCompartment(compartment: GraphDefinitionLinkTargetCompartment[] | undefined): this {
    return this.setFieldValue('compartment', compartment);
  }

  hasCompartment(): boolean {
    return this.hasFieldValue('compartment');
  }

  /** Appends a new, empty GraphDefinitionLinkTargetCompartment to `compartment` and returns it so it can be filled in. */
  addCompartment(): GraphDefinitionLinkTargetCompartment;
  /** Appends the given GraphDefinitionLinkTargetCompartment to `compartment` and returns this object for chaining. */
  addCompartment(graphDefinitionLinkTargetCompartment: GraphDefinitionLinkTargetCompartment): this;
  addCompartment(
    graphDefinitionLinkTargetCompartment?: GraphDefinitionLinkTargetCompartment
  ): GraphDefinitionLinkTargetCompartment | this {
    if (graphDefinitionLinkTargetCompartment !== undefined) {
      return this.addFieldValue('compartment', graphDefinitionLinkTargetCompartment);
    }
    const createdGraphDefinitionLinkTargetCompartment = new GraphDefinitionLinkTargetCompartment();
    this.addFieldValue('compartment', createdGraphDefinitionLinkTargetCompartment);
    return createdGraphDefinitionLinkTargetCompartment;
  }

  /** The first GraphDefinitionLinkTargetCompartment of `compartment`. One is added when the list is empty. */
  getCompartmentFirstRep(): GraphDefinitionLinkTargetCompartment {
    const firstGraphDefinitionLinkTargetCompartment = this.getCompartment()[0];
    return firstGraphDefinitionLinkTargetCompartment === undefined
      ? this.addCompartment()
      : firstGraphDefinitionLinkTargetCompartment;
  }

  /** Additional links from target resource (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('GraphDefinitionLinkTarget', GraphDefinitionLinkTarget, false);

/**
 * Compartment Consistency Rules
 */
export class GraphDefinitionLinkTargetCompartment extends BackboneElement {
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
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code', allowedCodes: valueSetCodes.CompartmentType }],
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

  /** condition | requirement (1..1) */
  use?: valueSetCodes.GraphCompartmentUse;
  /** Id and extensions of the primitive `use`. */
  _use?: Element;

  /** Patient | Encounter | RelatedPerson | Practitioner | Device (1..1) */
  code?: valueSetCodes.CompartmentType;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** identical | matching | different | custom (1..1) */
  rule?: valueSetCodes.GraphCompartmentRule;
  /** Id and extensions of the primitive `rule`. */
  _rule?: Element;

  /** Custom rule, as a FHIRPath expression (0..1) */
  expression?: string;
  /** Id and extensions of the primitive `expression`. */
  _expression?: Element;

  /** Documentation for FHIRPath expression (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  override fhirType(): string {
    return 'GraphDefinition.link.target.compartment';
  }

  /** FHIR JSON for this GraphDefinitionLinkTargetCompartment, typed as the plain `GraphDefinitionCompartment` data type. */
  override toJSON(): plainTypes.GraphDefinitionCompartment {
    return this.serialize() as plainTypes.GraphDefinitionCompartment;
  }

  /** condition | requirement (1..1) */
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

  /** Patient | Encounter | RelatedPerson | Practitioner | Device (1..1) */
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

modelTypeRegistry.register(
  'GraphDefinitionLinkTargetCompartment',
  GraphDefinitionLinkTargetCompartment,
  false
);
