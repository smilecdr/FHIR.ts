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
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export class ConceptMap extends DomainResource {
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
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'sourceUri', typeCode: 'uri' },
        { jsonKey: 'sourceCanonical', typeCode: 'canonical' },
      ],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'targetUri', typeCode: 'uri' },
        { jsonKey: 'targetCanonical', typeCode: 'canonical' },
      ],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'ConceptMapGroup' }],
    },
  ];

  readonly resourceType = 'ConceptMap';

  /** Canonical identifier for this concept map, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the concept map (0..1) */
  identifier?: Identifier;

  /** Business version of the concept map (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this concept map (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this concept map (human friendly) (0..1) */
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

  /** Name of the publisher (organization or individual) (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the concept map (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for concept map (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this concept map is defined (0..1) */
  purpose?: string;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Use and/or publishing restrictions (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceUri?: string;
  /** Id and extensions of the primitive `sourceUri`. */
  _sourceUri?: Element;
  /** The source value set that contains the concepts that are being mapped (0..1) */
  sourceCanonical?: string;
  /** Id and extensions of the primitive `sourceCanonical`. */
  _sourceCanonical?: Element;

  /** The target value set which provides context for the mappings (0..1) */
  targetUri?: string;
  /** Id and extensions of the primitive `targetUri`. */
  _targetUri?: Element;
  /** The target value set which provides context for the mappings (0..1) */
  targetCanonical?: string;
  /** Id and extensions of the primitive `targetCanonical`. */
  _targetCanonical?: Element;

  /** Same source and target systems (0..*) */
  group?: ConceptMapGroup[];

  override fhirType(): string {
    return 'ConceptMap';
  }

  /** FHIR JSON for this ConceptMap, typed as the plain `ConceptMap` data type. */
  override toJSON(): plainTypes.ConceptMap {
    return this.serialize() as plainTypes.ConceptMap;
  }

  /** Canonical identifier for this concept map, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the concept map (0..1) Created when absent. */
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

  /** Business version of the concept map (0..1) */
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

  /** Name for this concept map (computer friendly) (0..1) */
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

  /** Name for this concept map (human friendly) (0..1) */
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

  /** Natural language description of the concept map (0..1) */
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

  /** Intended jurisdiction for concept map (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this concept map is defined (0..1) */
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

  /** The source value set that contains the concepts that are being mapped (0..1) Whichever type of `source[x]` is set. */
  getSource(): string | undefined {
    return this.getChoiceValue<string>('source');
  }

  /** True when any type of `source[x]` is set. */
  hasSource(): boolean {
    return this.hasChoiceValue('source');
  }

  getSourceUri(): string | undefined {
    return this.sourceUri;
  }

  /** Sets `source[x]` as uri and clears every other type of it. */
  setSourceUri(sourceUri: string | undefined): this {
    return this.setFieldValue('sourceUri', sourceUri);
  }

  hasSourceUri(): boolean {
    return this.hasFieldValue('sourceUri');
  }

  getSourceCanonical(): string | undefined {
    return this.sourceCanonical;
  }

  /** Sets `source[x]` as canonical and clears every other type of it. */
  setSourceCanonical(sourceCanonical: string | undefined): this {
    return this.setFieldValue('sourceCanonical', sourceCanonical);
  }

  hasSourceCanonical(): boolean {
    return this.hasFieldValue('sourceCanonical');
  }

  /** The target value set which provides context for the mappings (0..1) Whichever type of `target[x]` is set. */
  getTarget(): string | undefined {
    return this.getChoiceValue<string>('target');
  }

  /** True when any type of `target[x]` is set. */
  hasTarget(): boolean {
    return this.hasChoiceValue('target');
  }

  getTargetUri(): string | undefined {
    return this.targetUri;
  }

  /** Sets `target[x]` as uri and clears every other type of it. */
  setTargetUri(targetUri: string | undefined): this {
    return this.setFieldValue('targetUri', targetUri);
  }

  hasTargetUri(): boolean {
    return this.hasFieldValue('targetUri');
  }

  getTargetCanonical(): string | undefined {
    return this.targetCanonical;
  }

  /** Sets `target[x]` as canonical and clears every other type of it. */
  setTargetCanonical(targetCanonical: string | undefined): this {
    return this.setFieldValue('targetCanonical', targetCanonical);
  }

  hasTargetCanonical(): boolean {
    return this.hasFieldValue('targetCanonical');
  }

  /** Same source and target systems (0..*) Never undefined; an empty list is created when absent. */
  getGroup(): ConceptMapGroup[] {
    if (this.group === undefined) {
      this.group = [];
    }
    return this.group;
  }

  setGroup(group: ConceptMapGroup[] | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Appends a new, empty ConceptMapGroup to `group` and returns it so it can be filled in. */
  addGroup(): ConceptMapGroup;
  /** Appends the given ConceptMapGroup to `group` and returns this object for chaining. */
  addGroup(conceptMapGroup: ConceptMapGroup): this;
  addGroup(conceptMapGroup?: ConceptMapGroup): ConceptMapGroup | this {
    if (conceptMapGroup !== undefined) {
      return this.addFieldValue('group', conceptMapGroup);
    }
    const createdConceptMapGroup = new ConceptMapGroup();
    this.addFieldValue('group', createdConceptMapGroup);
    return createdConceptMapGroup;
  }

  /** The first ConceptMapGroup of `group`. One is added when the list is empty. */
  getGroupFirstRep(): ConceptMapGroup {
    const firstConceptMapGroup = this.getGroup()[0];
    return firstConceptMapGroup === undefined ? this.addGroup() : firstConceptMapGroup;
  }
}

modelTypeRegistry.register('ConceptMap', ConceptMap, true);

/** True when the value is a ConceptMap model instance. */
export function isConceptMap(candidate: unknown): candidate is ConceptMap {
  return candidate instanceof ConceptMap;
}

/**
 * Same source and target systems
 */
export class ConceptMapGroup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'source', typeCode: 'uri' }],
    },
    {
      elementName: 'sourceVersion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sourceVersion', typeCode: 'string' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'target', typeCode: 'uri' }],
    },
    {
      elementName: 'targetVersion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'targetVersion', typeCode: 'string' }],
    },
    {
      elementName: 'element',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'element', typeCode: 'ConceptMapGroupElement' }],
    },
    {
      elementName: 'unmapped',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unmapped', typeCode: 'ConceptMapGroupUnmapped' }],
    },
  ];

  /** Source system where concepts to be mapped are defined (0..1) */
  source?: string;
  /** Id and extensions of the primitive `source`. */
  _source?: Element;

  /** Specific version of the code system (0..1) */
  sourceVersion?: string;
  /** Id and extensions of the primitive `sourceVersion`. */
  _sourceVersion?: Element;

  /** Target system that the concepts are to be mapped to (0..1) */
  target?: string;
  /** Id and extensions of the primitive `target`. */
  _target?: Element;

  /** Specific version of the code system (0..1) */
  targetVersion?: string;
  /** Id and extensions of the primitive `targetVersion`. */
  _targetVersion?: Element;

  /** Mappings for a concept from the source set (1..*) */
  element?: ConceptMapGroupElement[];

  /** What to do when there is no mapping for the source concept (0..1) */
  unmapped?: ConceptMapGroupUnmapped;

  override fhirType(): string {
    return 'ConceptMap.group';
  }

  /** FHIR JSON for this ConceptMapGroup, typed as the plain `ConceptMapGroup` data type. */
  override toJSON(): plainTypes.ConceptMapGroup {
    return this.serialize() as plainTypes.ConceptMapGroup;
  }

  /** Source system where concepts to be mapped are defined (0..1) */
  getSource(): string | undefined {
    return this.source;
  }

  /** Sets `source`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setSource(source: string | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** The element carrying the id and extensions of `source`. Created when absent. */
  getSourceElement(): Element {
    if (this._source === undefined) {
      this._source = new Element();
    }
    return this._source;
  }

  setSourceElement(sourceElement: Element | undefined): this {
    this._source = sourceElement;
    return this;
  }

  /** Specific version of the code system (0..1) */
  getSourceVersion(): string | undefined {
    return this.sourceVersion;
  }

  /** Sets `sourceVersion`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSourceVersion(sourceVersion: string | undefined): this {
    return this.setFieldValue('sourceVersion', sourceVersion);
  }

  hasSourceVersion(): boolean {
    return this.hasFieldValue('sourceVersion');
  }

  /** The element carrying the id and extensions of `sourceVersion`. Created when absent. */
  getSourceVersionElement(): Element {
    if (this._sourceVersion === undefined) {
      this._sourceVersion = new Element();
    }
    return this._sourceVersion;
  }

  setSourceVersionElement(sourceVersionElement: Element | undefined): this {
    this._sourceVersion = sourceVersionElement;
    return this;
  }

  /** Target system that the concepts are to be mapped to (0..1) */
  getTarget(): string | undefined {
    return this.target;
  }

  /** Sets `target`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setTarget(target: string | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** The element carrying the id and extensions of `target`. Created when absent. */
  getTargetElement(): Element {
    if (this._target === undefined) {
      this._target = new Element();
    }
    return this._target;
  }

  setTargetElement(targetElement: Element | undefined): this {
    this._target = targetElement;
    return this;
  }

  /** Specific version of the code system (0..1) */
  getTargetVersion(): string | undefined {
    return this.targetVersion;
  }

  /** Sets `targetVersion`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTargetVersion(targetVersion: string | undefined): this {
    return this.setFieldValue('targetVersion', targetVersion);
  }

  hasTargetVersion(): boolean {
    return this.hasFieldValue('targetVersion');
  }

  /** The element carrying the id and extensions of `targetVersion`. Created when absent. */
  getTargetVersionElement(): Element {
    if (this._targetVersion === undefined) {
      this._targetVersion = new Element();
    }
    return this._targetVersion;
  }

  setTargetVersionElement(targetVersionElement: Element | undefined): this {
    this._targetVersion = targetVersionElement;
    return this;
  }

  /** Mappings for a concept from the source set (1..*) Never undefined; an empty list is created when absent. */
  getElement(): ConceptMapGroupElement[] {
    if (this.element === undefined) {
      this.element = [];
    }
    return this.element;
  }

  setElement(element: ConceptMapGroupElement[] | undefined): this {
    return this.setFieldValue('element', element);
  }

  hasElement(): boolean {
    return this.hasFieldValue('element');
  }

  /** Appends a new, empty ConceptMapGroupElement to `element` and returns it so it can be filled in. */
  addElement(): ConceptMapGroupElement;
  /** Appends the given ConceptMapGroupElement to `element` and returns this object for chaining. */
  addElement(conceptMapGroupElement: ConceptMapGroupElement): this;
  addElement(conceptMapGroupElement?: ConceptMapGroupElement): ConceptMapGroupElement | this {
    if (conceptMapGroupElement !== undefined) {
      return this.addFieldValue('element', conceptMapGroupElement);
    }
    const createdConceptMapGroupElement = new ConceptMapGroupElement();
    this.addFieldValue('element', createdConceptMapGroupElement);
    return createdConceptMapGroupElement;
  }

  /** The first ConceptMapGroupElement of `element`. One is added when the list is empty. */
  getElementFirstRep(): ConceptMapGroupElement {
    const firstConceptMapGroupElement = this.getElement()[0];
    return firstConceptMapGroupElement === undefined
      ? this.addElement()
      : firstConceptMapGroupElement;
  }

  /** What to do when there is no mapping for the source concept (0..1) Created when absent. */
  getUnmapped(): ConceptMapGroupUnmapped {
    if (this.unmapped === undefined) {
      this.unmapped = new ConceptMapGroupUnmapped();
    }
    return this.unmapped;
  }

  setUnmapped(unmapped: ConceptMapGroupUnmapped | undefined): this {
    return this.setFieldValue('unmapped', unmapped);
  }

  hasUnmapped(): boolean {
    return this.hasFieldValue('unmapped');
  }
}

modelTypeRegistry.register('ConceptMapGroup', ConceptMapGroup, false);

/**
 * Mappings for a concept from the source set
 */
export class ConceptMapGroupElement extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'ConceptMapGroupElementTarget' }],
    },
  ];

  /** Identifies element being mapped (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** Concept in target system for element (0..*) */
  target?: ConceptMapGroupElementTarget[];

  override fhirType(): string {
    return 'ConceptMap.group.element';
  }

  /** FHIR JSON for this ConceptMapGroupElement, typed as the plain `ConceptMapElement` data type. */
  override toJSON(): plainTypes.ConceptMapElement {
    return this.serialize() as plainTypes.ConceptMapElement;
  }

  /** Identifies element being mapped (0..1) */
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

  /** Display for the code (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }

  /** Concept in target system for element (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): ConceptMapGroupElementTarget[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: ConceptMapGroupElementTarget[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty ConceptMapGroupElementTarget to `target` and returns it so it can be filled in. */
  addTarget(): ConceptMapGroupElementTarget;
  /** Appends the given ConceptMapGroupElementTarget to `target` and returns this object for chaining. */
  addTarget(conceptMapGroupElementTarget: ConceptMapGroupElementTarget): this;
  addTarget(
    conceptMapGroupElementTarget?: ConceptMapGroupElementTarget
  ): ConceptMapGroupElementTarget | this {
    if (conceptMapGroupElementTarget !== undefined) {
      return this.addFieldValue('target', conceptMapGroupElementTarget);
    }
    const createdConceptMapGroupElementTarget = new ConceptMapGroupElementTarget();
    this.addFieldValue('target', createdConceptMapGroupElementTarget);
    return createdConceptMapGroupElementTarget;
  }

  /** The first ConceptMapGroupElementTarget of `target`. One is added when the list is empty. */
  getTargetFirstRep(): ConceptMapGroupElementTarget {
    const firstConceptMapGroupElementTarget = this.getTarget()[0];
    return firstConceptMapGroupElementTarget === undefined
      ? this.addTarget()
      : firstConceptMapGroupElementTarget;
  }
}

modelTypeRegistry.register('ConceptMapGroupElement', ConceptMapGroupElement, false);

/**
 * Concept in target system for element
 */
export class ConceptMapGroupElementTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'equivalence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'equivalence',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConceptMapEquivalence,
        },
      ],
    },
    {
      elementName: 'comment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'comment', typeCode: 'string' }],
    },
    {
      elementName: 'dependsOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dependsOn', typeCode: 'ConceptMapGroupElementTargetDependsOn' }],
    },
    {
      elementName: 'product',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'product', typeCode: 'ConceptMapGroupElementTargetDependsOn' }],
    },
  ];

  /** Code that identifies the target element (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint (1..1) */
  equivalence?: valueSetCodes.ConceptMapEquivalence;
  /** Id and extensions of the primitive `equivalence`. */
  _equivalence?: Element;

  /** Description of status/issues in mapping (0..1) */
  comment?: string;
  /** Id and extensions of the primitive `comment`. */
  _comment?: Element;

  /** Other elements required for this mapping (from context) (0..*) */
  dependsOn?: ConceptMapGroupElementTargetDependsOn[];

  /** Other concepts that this mapping also produces (0..*) */
  product?: ConceptMapGroupElementTargetDependsOn[];

  override fhirType(): string {
    return 'ConceptMap.group.element.target';
  }

  /** FHIR JSON for this ConceptMapGroupElementTarget, typed as the plain `ConceptMapTarget` data type. */
  override toJSON(): plainTypes.ConceptMapTarget {
    return this.serialize() as plainTypes.ConceptMapTarget;
  }

  /** Code that identifies the target element (0..1) */
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

  /** Display for the code (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }

  /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint (1..1) */
  getEquivalence(): valueSetCodes.ConceptMapEquivalence | undefined {
    return this.equivalence;
  }

  /** Sets `equivalence`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setEquivalence(equivalence: valueSetCodes.ConceptMapEquivalence | undefined): this {
    return this.setFieldValue('equivalence', equivalence);
  }

  hasEquivalence(): boolean {
    return this.hasFieldValue('equivalence');
  }

  /** The element carrying the id and extensions of `equivalence`. Created when absent. */
  getEquivalenceElement(): Element {
    if (this._equivalence === undefined) {
      this._equivalence = new Element();
    }
    return this._equivalence;
  }

  setEquivalenceElement(equivalenceElement: Element | undefined): this {
    this._equivalence = equivalenceElement;
    return this;
  }

  /** Description of status/issues in mapping (0..1) */
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

  /** Other elements required for this mapping (from context) (0..*) Never undefined; an empty list is created when absent. */
  getDependsOn(): ConceptMapGroupElementTargetDependsOn[] {
    if (this.dependsOn === undefined) {
      this.dependsOn = [];
    }
    return this.dependsOn;
  }

  setDependsOn(dependsOn: ConceptMapGroupElementTargetDependsOn[] | undefined): this {
    return this.setFieldValue('dependsOn', dependsOn);
  }

  hasDependsOn(): boolean {
    return this.hasFieldValue('dependsOn');
  }

  /** Appends a new, empty ConceptMapGroupElementTargetDependsOn to `dependsOn` and returns it so it can be filled in. */
  addDependsOn(): ConceptMapGroupElementTargetDependsOn;
  /** Appends the given ConceptMapGroupElementTargetDependsOn to `dependsOn` and returns this object for chaining. */
  addDependsOn(conceptMapGroupElementTargetDependsOn: ConceptMapGroupElementTargetDependsOn): this;
  addDependsOn(
    conceptMapGroupElementTargetDependsOn?: ConceptMapGroupElementTargetDependsOn
  ): ConceptMapGroupElementTargetDependsOn | this {
    if (conceptMapGroupElementTargetDependsOn !== undefined) {
      return this.addFieldValue('dependsOn', conceptMapGroupElementTargetDependsOn);
    }
    const createdConceptMapGroupElementTargetDependsOn =
      new ConceptMapGroupElementTargetDependsOn();
    this.addFieldValue('dependsOn', createdConceptMapGroupElementTargetDependsOn);
    return createdConceptMapGroupElementTargetDependsOn;
  }

  /** The first ConceptMapGroupElementTargetDependsOn of `dependsOn`. One is added when the list is empty. */
  getDependsOnFirstRep(): ConceptMapGroupElementTargetDependsOn {
    const firstConceptMapGroupElementTargetDependsOn = this.getDependsOn()[0];
    return firstConceptMapGroupElementTargetDependsOn === undefined
      ? this.addDependsOn()
      : firstConceptMapGroupElementTargetDependsOn;
  }

  /** Other concepts that this mapping also produces (0..*) Never undefined; an empty list is created when absent. */
  getProduct(): ConceptMapGroupElementTargetDependsOn[] {
    if (this.product === undefined) {
      this.product = [];
    }
    return this.product;
  }

  setProduct(product: ConceptMapGroupElementTargetDependsOn[] | undefined): this {
    return this.setFieldValue('product', product);
  }

  hasProduct(): boolean {
    return this.hasFieldValue('product');
  }

  /** Appends a new, empty ConceptMapGroupElementTargetDependsOn to `product` and returns it so it can be filled in. */
  addProduct(): ConceptMapGroupElementTargetDependsOn;
  /** Appends the given ConceptMapGroupElementTargetDependsOn to `product` and returns this object for chaining. */
  addProduct(conceptMapGroupElementTargetDependsOn: ConceptMapGroupElementTargetDependsOn): this;
  addProduct(
    conceptMapGroupElementTargetDependsOn?: ConceptMapGroupElementTargetDependsOn
  ): ConceptMapGroupElementTargetDependsOn | this {
    if (conceptMapGroupElementTargetDependsOn !== undefined) {
      return this.addFieldValue('product', conceptMapGroupElementTargetDependsOn);
    }
    const createdConceptMapGroupElementTargetDependsOn =
      new ConceptMapGroupElementTargetDependsOn();
    this.addFieldValue('product', createdConceptMapGroupElementTargetDependsOn);
    return createdConceptMapGroupElementTargetDependsOn;
  }

  /** The first ConceptMapGroupElementTargetDependsOn of `product`. One is added when the list is empty. */
  getProductFirstRep(): ConceptMapGroupElementTargetDependsOn {
    const firstConceptMapGroupElementTargetDependsOn = this.getProduct()[0];
    return firstConceptMapGroupElementTargetDependsOn === undefined
      ? this.addProduct()
      : firstConceptMapGroupElementTargetDependsOn;
  }
}

modelTypeRegistry.register('ConceptMapGroupElementTarget', ConceptMapGroupElementTarget, false);

/**
 * Other elements required for this mapping (from context)
 */
export class ConceptMapGroupElementTargetDependsOn extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'property',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'property', typeCode: 'uri' }],
    },
    {
      elementName: 'system',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'canonical' }],
    },
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
  ];

  /** Reference to property mapping depends on (1..1) */
  property?: string;
  /** Id and extensions of the primitive `property`. */
  _property?: Element;

  /** Code System (if necessary) (0..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** Value of the referenced element (1..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  /** Display for the code (if value is a code) (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  override fhirType(): string {
    return 'ConceptMap.group.element.target.dependsOn';
  }

  /** FHIR JSON for this ConceptMapGroupElementTargetDependsOn, typed as the plain `ConceptMapDependsOn` data type. */
  override toJSON(): plainTypes.ConceptMapDependsOn {
    return this.serialize() as plainTypes.ConceptMapDependsOn;
  }

  /** Reference to property mapping depends on (1..1) */
  getProperty(): string | undefined {
    return this.property;
  }

  /** Sets `property`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setProperty(property: string | undefined): this {
    return this.setFieldValue('property', property);
  }

  hasProperty(): boolean {
    return this.hasFieldValue('property');
  }

  /** The element carrying the id and extensions of `property`. Created when absent. */
  getPropertyElement(): Element {
    if (this._property === undefined) {
      this._property = new Element();
    }
    return this._property;
  }

  setPropertyElement(propertyElement: Element | undefined): this {
    this._property = propertyElement;
    return this;
  }

  /** Code System (if necessary) (0..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
  setSystem(system: string | undefined): this {
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

  /** Value of the referenced element (1..1) */
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

  /** Display for the code (if value is a code) (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }
}

modelTypeRegistry.register(
  'ConceptMapGroupElementTargetDependsOn',
  ConceptMapGroupElementTargetDependsOn,
  false
);

/**
 * What to do when there is no mapping for the source concept
 */
export class ConceptMapGroupUnmapped extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'mode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConceptMapGroupUnmappedMode,
        },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'code' }],
    },
    {
      elementName: 'display',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'display', typeCode: 'string' }],
    },
    {
      elementName: 'url',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'canonical' }],
    },
  ];

  /** provided | fixed | other-map (1..1) */
  mode?: valueSetCodes.ConceptMapGroupUnmappedMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Fixed code when mode = fixed (0..1) */
  code?: string;
  /** Id and extensions of the primitive `code`. */
  _code?: Element;

  /** Display for the code (0..1) */
  display?: string;
  /** Id and extensions of the primitive `display`. */
  _display?: Element;

  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'ConceptMap.group.unmapped';
  }

  /** FHIR JSON for this ConceptMapGroupUnmapped, typed as the plain `ConceptMapUnmapped` data type. */
  override toJSON(): plainTypes.ConceptMapUnmapped {
    return this.serialize() as plainTypes.ConceptMapUnmapped;
  }

  /** provided | fixed | other-map (1..1) */
  getMode(): valueSetCodes.ConceptMapGroupUnmappedMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.ConceptMapGroupUnmappedMode | undefined): this {
    return this.setFieldValue('mode', mode);
  }

  hasMode(): boolean {
    return this.hasFieldValue('mode');
  }

  /** The element carrying the id and extensions of `mode`. Created when absent. */
  getModeElement(): Element {
    if (this._mode === undefined) {
      this._mode = new Element();
    }
    return this._mode;
  }

  setModeElement(modeElement: Element | undefined): this {
    this._mode = modeElement;
    return this;
  }

  /** Fixed code when mode = fixed (0..1) */
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

  /** Display for the code (0..1) */
  getDisplay(): string | undefined {
    return this.display;
  }

  /** Sets `display`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDisplay(display: string | undefined): this {
    return this.setFieldValue('display', display);
  }

  hasDisplay(): boolean {
    return this.hasFieldValue('display');
  }

  /** The element carrying the id and extensions of `display`. Created when absent. */
  getDisplayElement(): Element {
    if (this._display === undefined) {
      this._display = new Element();
    }
    return this._display;
  }

  setDisplayElement(displayElement: Element | undefined): this {
    this._display = displayElement;
    return this;
  }

  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped (0..1) */
  getUrl(): string | undefined {
    return this.url;
  }

  /** Sets `url`. Throws a FhirModelError when the value is not a valid FHIR canonical. */
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
}

modelTypeRegistry.register('ConceptMapGroupUnmapped', ConceptMapGroupUnmapped, false);
