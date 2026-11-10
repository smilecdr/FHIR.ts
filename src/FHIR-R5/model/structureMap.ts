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
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export class StructureMap extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 1,
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
      elementName: 'structure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'structure', typeCode: 'StructureMapStructure' }],
    },
    {
      elementName: 'import',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'import', typeCode: 'canonical' }],
    },
    {
      elementName: 'const',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'const', typeCode: 'StructureMapConst' }],
    },
    {
      elementName: 'group',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'StructureMapGroup' }],
    },
  ];

  readonly resourceType = 'StructureMap';

  /** Canonical identifier for this structure map, represented as a URI (globally unique) (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the structure map (0..*) */
  identifier?: Identifier[];

  /** Business version of the structure map (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this structure map (computer friendly) (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this structure map (human friendly) (0..1) */
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

  /** Natural language description of the structure map (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for structure map (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this structure map is defined (0..1) */
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

  /** Structure Definition used by this map (0..*) */
  structure?: StructureMapStructure[];

  /** Other maps used by this map (canonical URLs) (0..*) */
  import?: string[];
  /** Id and extensions of the primitive `import`. */
  _import?: (Element | null)[];

  /** Definition of the constant value used in the map rules (0..*) */
  const?: StructureMapConst[];

  /** Named sections for reader convenience (1..*) */
  group?: StructureMapGroup[];

  override fhirType(): string {
    return 'StructureMap';
  }

  /** FHIR JSON for this StructureMap, typed as the plain `StructureMap` data type. */
  override toJSON(): plainTypes.StructureMap {
    return this.serialize() as plainTypes.StructureMap;
  }

  /** Canonical identifier for this structure map, represented as a URI (globally unique) (1..1) */
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

  /** Additional identifier for the structure map (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the structure map (0..1) */
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

  /** Name for this structure map (computer friendly) (1..1) */
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

  /** Name for this structure map (human friendly) (0..1) */
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

  /** Natural language description of the structure map (0..1) */
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

  /** Intended jurisdiction for structure map (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this structure map is defined (0..1) */
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

  /** Structure Definition used by this map (0..*) Never undefined; an empty list is created when absent. */
  getStructure(): StructureMapStructure[] {
    if (this.structure === undefined) {
      this.structure = [];
    }
    return this.structure;
  }

  setStructure(structure: StructureMapStructure[] | undefined): this {
    return this.setFieldValue('structure', structure);
  }

  hasStructure(): boolean {
    return this.hasFieldValue('structure');
  }

  /** Appends a new, empty StructureMapStructure to `structure` and returns it so it can be filled in. */
  addStructure(): StructureMapStructure;
  /** Appends the given StructureMapStructure to `structure` and returns this object for chaining. */
  addStructure(structureMapStructure: StructureMapStructure): this;
  addStructure(structureMapStructure?: StructureMapStructure): StructureMapStructure | this {
    if (structureMapStructure !== undefined) {
      return this.addFieldValue('structure', structureMapStructure);
    }
    const createdStructureMapStructure = new StructureMapStructure();
    this.addFieldValue('structure', createdStructureMapStructure);
    return createdStructureMapStructure;
  }

  /** The first StructureMapStructure of `structure`. One is added when the list is empty. */
  getStructureFirstRep(): StructureMapStructure {
    const firstStructureMapStructure = this.getStructure()[0];
    return firstStructureMapStructure === undefined
      ? this.addStructure()
      : firstStructureMapStructure;
  }

  /** Other maps used by this map (canonical URLs) (0..*) Never undefined; an empty list is created when absent. */
  getImport(): string[] {
    if (this.import === undefined) {
      this.import = [];
    }
    return this.import;
  }

  setImport(importValue: string[] | undefined): this {
    return this.setFieldValue('import', importValue);
  }

  hasImport(): boolean {
    return this.hasFieldValue('import');
  }

  /** Appends one value to `import`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addImport(importValue: string): this {
    return this.addFieldValue('import', importValue);
  }

  /** Definition of the constant value used in the map rules (0..*) Never undefined; an empty list is created when absent. */
  getConst(): StructureMapConst[] {
    if (this.const === undefined) {
      this.const = [];
    }
    return this.const;
  }

  setConst(constValue: StructureMapConst[] | undefined): this {
    return this.setFieldValue('const', constValue);
  }

  hasConst(): boolean {
    return this.hasFieldValue('const');
  }

  /** Appends a new, empty StructureMapConst to `const` and returns it so it can be filled in. */
  addConst(): StructureMapConst;
  /** Appends the given StructureMapConst to `const` and returns this object for chaining. */
  addConst(structureMapConst: StructureMapConst): this;
  addConst(structureMapConst?: StructureMapConst): StructureMapConst | this {
    if (structureMapConst !== undefined) {
      return this.addFieldValue('const', structureMapConst);
    }
    const createdStructureMapConst = new StructureMapConst();
    this.addFieldValue('const', createdStructureMapConst);
    return createdStructureMapConst;
  }

  /** The first StructureMapConst of `const`. One is added when the list is empty. */
  getConstFirstRep(): StructureMapConst {
    const firstStructureMapConst = this.getConst()[0];
    return firstStructureMapConst === undefined ? this.addConst() : firstStructureMapConst;
  }

  /** Named sections for reader convenience (1..*) Never undefined; an empty list is created when absent. */
  getGroup(): StructureMapGroup[] {
    if (this.group === undefined) {
      this.group = [];
    }
    return this.group;
  }

  setGroup(group: StructureMapGroup[] | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Appends a new, empty StructureMapGroup to `group` and returns it so it can be filled in. */
  addGroup(): StructureMapGroup;
  /** Appends the given StructureMapGroup to `group` and returns this object for chaining. */
  addGroup(structureMapGroup: StructureMapGroup): this;
  addGroup(structureMapGroup?: StructureMapGroup): StructureMapGroup | this {
    if (structureMapGroup !== undefined) {
      return this.addFieldValue('group', structureMapGroup);
    }
    const createdStructureMapGroup = new StructureMapGroup();
    this.addFieldValue('group', createdStructureMapGroup);
    return createdStructureMapGroup;
  }

  /** The first StructureMapGroup of `group`. One is added when the list is empty. */
  getGroupFirstRep(): StructureMapGroup {
    const firstStructureMapGroup = this.getGroup()[0];
    return firstStructureMapGroup === undefined ? this.addGroup() : firstStructureMapGroup;
  }
}

modelTypeRegistry.register('StructureMap', StructureMap, true);

/** True when the value is a StructureMap model instance. */
export function isStructureMap(candidate: unknown): candidate is StructureMap {
  return candidate instanceof StructureMap;
}

/**
 * Structure Definition used by this map
 */
export class StructureMapStructure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'url',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'canonical' }],
    },
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.StructureMapModelMode },
      ],
    },
    {
      elementName: 'alias',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'alias', typeCode: 'string' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'string' }],
    },
  ];

  /** Canonical reference to structure definition (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** source | queried | target | produced (1..1) */
  mode?: valueSetCodes.StructureMapModelMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Name for type in this map (0..1) */
  alias?: string;
  /** Id and extensions of the primitive `alias`. */
  _alias?: Element;

  /** Documentation on use of structure (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'StructureMap.structure';
  }

  /** FHIR JSON for this StructureMapStructure, typed as the plain `StructureMapStructure` data type. */
  override toJSON(): plainTypes.StructureMapStructure {
    return this.serialize() as plainTypes.StructureMapStructure;
  }

  /** Canonical reference to structure definition (1..1) */
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

  /** source | queried | target | produced (1..1) */
  getMode(): valueSetCodes.StructureMapModelMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.StructureMapModelMode | undefined): this {
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

  /** Name for type in this map (0..1) */
  getAlias(): string | undefined {
    return this.alias;
  }

  /** Sets `alias`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAlias(alias: string | undefined): this {
    return this.setFieldValue('alias', alias);
  }

  hasAlias(): boolean {
    return this.hasFieldValue('alias');
  }

  /** The element carrying the id and extensions of `alias`. Created when absent. */
  getAliasElement(): Element {
    if (this._alias === undefined) {
      this._alias = new Element();
    }
    return this._alias;
  }

  setAliasElement(aliasElement: Element | undefined): this {
    this._alias = aliasElement;
    return this;
  }

  /** Documentation on use of structure (0..1) */
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
}

modelTypeRegistry.register('StructureMapStructure', StructureMapStructure, false);

/**
 * Definition of the constant value used in the map rules
 */
export class StructureMapConst extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'id' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'value', typeCode: 'string' }],
    },
  ];

  /** Constant name (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** FHIRPath exression - value of the constant (0..1) */
  value?: string;
  /** Id and extensions of the primitive `value`. */
  _value?: Element;

  override fhirType(): string {
    return 'StructureMap.const';
  }

  /** FHIR JSON for this StructureMapConst, typed as the plain `StructureMapConst` data type. */
  override toJSON(): plainTypes.StructureMapConst {
    return this.serialize() as plainTypes.StructureMapConst;
  }

  /** Constant name (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR id. */
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

  /** FHIRPath exression - value of the constant (0..1) */
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
}

modelTypeRegistry.register('StructureMapConst', StructureMapConst, false);

/**
 * Named sections for reader convenience
 */
export class StructureMapGroup extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'id' }],
    },
    {
      elementName: 'extends',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'extends', typeCode: 'id' }],
    },
    {
      elementName: 'typeMode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'typeMode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.StructureMapGroupTypeMode,
        },
      ],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'string' }],
    },
    {
      elementName: 'input',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'input', typeCode: 'StructureMapGroupInput' }],
    },
    {
      elementName: 'rule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rule', typeCode: 'StructureMapGroupRule' }],
    },
  ];

  /** Human-readable label (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Another group that this group adds rules to (0..1) */
  extends?: string;
  /** Id and extensions of the primitive `extends`. */
  _extends?: Element;

  /** types | type-and-types (0..1) */
  typeMode?: valueSetCodes.StructureMapGroupTypeMode;
  /** Id and extensions of the primitive `typeMode`. */
  _typeMode?: Element;

  /** Additional description/explanation for group (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  /** Named instance provided when invoking the map (1..*) */
  input?: StructureMapGroupInput[];

  /** Transform Rule from source to target (0..*) */
  rule?: StructureMapGroupRule[];

  override fhirType(): string {
    return 'StructureMap.group';
  }

  /** FHIR JSON for this StructureMapGroup, typed as the plain `StructureMapGroup` data type. */
  override toJSON(): plainTypes.StructureMapGroup {
    return this.serialize() as plainTypes.StructureMapGroup;
  }

  /** Human-readable label (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR id. */
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

  /** Another group that this group adds rules to (0..1) */
  getExtends(): string | undefined {
    return this.extends;
  }

  /** Sets `extends`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setExtends(extendsValue: string | undefined): this {
    return this.setFieldValue('extends', extendsValue);
  }

  hasExtends(): boolean {
    return this.hasFieldValue('extends');
  }

  /** The element carrying the id and extensions of `extends`. Created when absent. */
  getExtendsElement(): Element {
    if (this._extends === undefined) {
      this._extends = new Element();
    }
    return this._extends;
  }

  setExtendsElement(extendsElement: Element | undefined): this {
    this._extends = extendsElement;
    return this;
  }

  /** types | type-and-types (0..1) */
  getTypeMode(): valueSetCodes.StructureMapGroupTypeMode | undefined {
    return this.typeMode;
  }

  /** Sets `typeMode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setTypeMode(typeMode: valueSetCodes.StructureMapGroupTypeMode | undefined): this {
    return this.setFieldValue('typeMode', typeMode);
  }

  hasTypeMode(): boolean {
    return this.hasFieldValue('typeMode');
  }

  /** The element carrying the id and extensions of `typeMode`. Created when absent. */
  getTypeModeElement(): Element {
    if (this._typeMode === undefined) {
      this._typeMode = new Element();
    }
    return this._typeMode;
  }

  setTypeModeElement(typeModeElement: Element | undefined): this {
    this._typeMode = typeModeElement;
    return this;
  }

  /** Additional description/explanation for group (0..1) */
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

  /** Named instance provided when invoking the map (1..*) Never undefined; an empty list is created when absent. */
  getInput(): StructureMapGroupInput[] {
    if (this.input === undefined) {
      this.input = [];
    }
    return this.input;
  }

  setInput(input: StructureMapGroupInput[] | undefined): this {
    return this.setFieldValue('input', input);
  }

  hasInput(): boolean {
    return this.hasFieldValue('input');
  }

  /** Appends a new, empty StructureMapGroupInput to `input` and returns it so it can be filled in. */
  addInput(): StructureMapGroupInput;
  /** Appends the given StructureMapGroupInput to `input` and returns this object for chaining. */
  addInput(structureMapGroupInput: StructureMapGroupInput): this;
  addInput(structureMapGroupInput?: StructureMapGroupInput): StructureMapGroupInput | this {
    if (structureMapGroupInput !== undefined) {
      return this.addFieldValue('input', structureMapGroupInput);
    }
    const createdStructureMapGroupInput = new StructureMapGroupInput();
    this.addFieldValue('input', createdStructureMapGroupInput);
    return createdStructureMapGroupInput;
  }

  /** The first StructureMapGroupInput of `input`. One is added when the list is empty. */
  getInputFirstRep(): StructureMapGroupInput {
    const firstStructureMapGroupInput = this.getInput()[0];
    return firstStructureMapGroupInput === undefined
      ? this.addInput()
      : firstStructureMapGroupInput;
  }

  /** Transform Rule from source to target (0..*) Never undefined; an empty list is created when absent. */
  getRule(): StructureMapGroupRule[] {
    if (this.rule === undefined) {
      this.rule = [];
    }
    return this.rule;
  }

  setRule(rule: StructureMapGroupRule[] | undefined): this {
    return this.setFieldValue('rule', rule);
  }

  hasRule(): boolean {
    return this.hasFieldValue('rule');
  }

  /** Appends a new, empty StructureMapGroupRule to `rule` and returns it so it can be filled in. */
  addRule(): StructureMapGroupRule;
  /** Appends the given StructureMapGroupRule to `rule` and returns this object for chaining. */
  addRule(structureMapGroupRule: StructureMapGroupRule): this;
  addRule(structureMapGroupRule?: StructureMapGroupRule): StructureMapGroupRule | this {
    if (structureMapGroupRule !== undefined) {
      return this.addFieldValue('rule', structureMapGroupRule);
    }
    const createdStructureMapGroupRule = new StructureMapGroupRule();
    this.addFieldValue('rule', createdStructureMapGroupRule);
    return createdStructureMapGroupRule;
  }

  /** The first StructureMapGroupRule of `rule`. One is added when the list is empty. */
  getRuleFirstRep(): StructureMapGroupRule {
    const firstStructureMapGroupRule = this.getRule()[0];
    return firstStructureMapGroupRule === undefined ? this.addRule() : firstStructureMapGroupRule;
  }
}

modelTypeRegistry.register('StructureMapGroup', StructureMapGroup, false);

/**
 * Named instance provided when invoking the map
 */
export class StructureMapGroupInput extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'id' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'string' }],
    },
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.StructureMapInputMode },
      ],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'string' }],
    },
  ];

  /** Name for this instance of data (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Type for this instance of data (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** source | target (1..1) */
  mode?: valueSetCodes.StructureMapInputMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Documentation for this instance of data (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'StructureMap.group.input';
  }

  /** FHIR JSON for this StructureMapGroupInput, typed as the plain `StructureMapInput` data type. */
  override toJSON(): plainTypes.StructureMapInput {
    return this.serialize() as plainTypes.StructureMapInput;
  }

  /** Name for this instance of data (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR id. */
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

  /** Type for this instance of data (0..1) */
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

  /** source | target (1..1) */
  getMode(): valueSetCodes.StructureMapInputMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.StructureMapInputMode | undefined): this {
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

  /** Documentation for this instance of data (0..1) */
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
}

modelTypeRegistry.register('StructureMapGroupInput', StructureMapGroupInput, false);

/**
 * Transform Rule from source to target
 */
export class StructureMapGroupRule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'id' }],
    },
    {
      elementName: 'source',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'source', typeCode: 'StructureMapGroupRuleSource' }],
    },
    {
      elementName: 'target',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'target', typeCode: 'StructureMapGroupRuleTarget' }],
    },
    {
      elementName: 'rule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rule', typeCode: 'StructureMapGroupRule' }],
    },
    {
      elementName: 'dependent',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dependent', typeCode: 'StructureMapGroupRuleDependent' }],
    },
    {
      elementName: 'documentation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'documentation', typeCode: 'string' }],
    },
  ];

  /** Name of the rule for internal references (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Source inputs to the mapping (1..*) */
  source?: StructureMapGroupRuleSource[];

  /** Content to create because of this mapping rule (0..*) */
  target?: StructureMapGroupRuleTarget[];

  /** Rules contained in this rule (0..*) */
  rule?: StructureMapGroupRule[];

  /** Which other rules to apply in the context of this rule (0..*) */
  dependent?: StructureMapGroupRuleDependent[];

  /** Documentation for this instance of data (0..1) */
  documentation?: string;
  /** Id and extensions of the primitive `documentation`. */
  _documentation?: Element;

  override fhirType(): string {
    return 'StructureMap.group.rule';
  }

  /** FHIR JSON for this StructureMapGroupRule, typed as the plain `StructureMapRule` data type. */
  override toJSON(): plainTypes.StructureMapRule {
    return this.serialize() as plainTypes.StructureMapRule;
  }

  /** Name of the rule for internal references (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR id. */
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

  /** Source inputs to the mapping (1..*) Never undefined; an empty list is created when absent. */
  getSource(): StructureMapGroupRuleSource[] {
    if (this.source === undefined) {
      this.source = [];
    }
    return this.source;
  }

  setSource(source: StructureMapGroupRuleSource[] | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Appends a new, empty StructureMapGroupRuleSource to `source` and returns it so it can be filled in. */
  addSource(): StructureMapGroupRuleSource;
  /** Appends the given StructureMapGroupRuleSource to `source` and returns this object for chaining. */
  addSource(structureMapGroupRuleSource: StructureMapGroupRuleSource): this;
  addSource(
    structureMapGroupRuleSource?: StructureMapGroupRuleSource
  ): StructureMapGroupRuleSource | this {
    if (structureMapGroupRuleSource !== undefined) {
      return this.addFieldValue('source', structureMapGroupRuleSource);
    }
    const createdStructureMapGroupRuleSource = new StructureMapGroupRuleSource();
    this.addFieldValue('source', createdStructureMapGroupRuleSource);
    return createdStructureMapGroupRuleSource;
  }

  /** The first StructureMapGroupRuleSource of `source`. One is added when the list is empty. */
  getSourceFirstRep(): StructureMapGroupRuleSource {
    const firstStructureMapGroupRuleSource = this.getSource()[0];
    return firstStructureMapGroupRuleSource === undefined
      ? this.addSource()
      : firstStructureMapGroupRuleSource;
  }

  /** Content to create because of this mapping rule (0..*) Never undefined; an empty list is created when absent. */
  getTarget(): StructureMapGroupRuleTarget[] {
    if (this.target === undefined) {
      this.target = [];
    }
    return this.target;
  }

  setTarget(target: StructureMapGroupRuleTarget[] | undefined): this {
    return this.setFieldValue('target', target);
  }

  hasTarget(): boolean {
    return this.hasFieldValue('target');
  }

  /** Appends a new, empty StructureMapGroupRuleTarget to `target` and returns it so it can be filled in. */
  addTarget(): StructureMapGroupRuleTarget;
  /** Appends the given StructureMapGroupRuleTarget to `target` and returns this object for chaining. */
  addTarget(structureMapGroupRuleTarget: StructureMapGroupRuleTarget): this;
  addTarget(
    structureMapGroupRuleTarget?: StructureMapGroupRuleTarget
  ): StructureMapGroupRuleTarget | this {
    if (structureMapGroupRuleTarget !== undefined) {
      return this.addFieldValue('target', structureMapGroupRuleTarget);
    }
    const createdStructureMapGroupRuleTarget = new StructureMapGroupRuleTarget();
    this.addFieldValue('target', createdStructureMapGroupRuleTarget);
    return createdStructureMapGroupRuleTarget;
  }

  /** The first StructureMapGroupRuleTarget of `target`. One is added when the list is empty. */
  getTargetFirstRep(): StructureMapGroupRuleTarget {
    const firstStructureMapGroupRuleTarget = this.getTarget()[0];
    return firstStructureMapGroupRuleTarget === undefined
      ? this.addTarget()
      : firstStructureMapGroupRuleTarget;
  }

  /** Rules contained in this rule (0..*) Never undefined; an empty list is created when absent. */
  getRule(): StructureMapGroupRule[] {
    if (this.rule === undefined) {
      this.rule = [];
    }
    return this.rule;
  }

  setRule(rule: StructureMapGroupRule[] | undefined): this {
    return this.setFieldValue('rule', rule);
  }

  hasRule(): boolean {
    return this.hasFieldValue('rule');
  }

  /** Appends a new, empty StructureMapGroupRule to `rule` and returns it so it can be filled in. */
  addRule(): StructureMapGroupRule;
  /** Appends the given StructureMapGroupRule to `rule` and returns this object for chaining. */
  addRule(structureMapGroupRule: StructureMapGroupRule): this;
  addRule(structureMapGroupRule?: StructureMapGroupRule): StructureMapGroupRule | this {
    if (structureMapGroupRule !== undefined) {
      return this.addFieldValue('rule', structureMapGroupRule);
    }
    const createdStructureMapGroupRule = new StructureMapGroupRule();
    this.addFieldValue('rule', createdStructureMapGroupRule);
    return createdStructureMapGroupRule;
  }

  /** The first StructureMapGroupRule of `rule`. One is added when the list is empty. */
  getRuleFirstRep(): StructureMapGroupRule {
    const firstStructureMapGroupRule = this.getRule()[0];
    return firstStructureMapGroupRule === undefined ? this.addRule() : firstStructureMapGroupRule;
  }

  /** Which other rules to apply in the context of this rule (0..*) Never undefined; an empty list is created when absent. */
  getDependent(): StructureMapGroupRuleDependent[] {
    if (this.dependent === undefined) {
      this.dependent = [];
    }
    return this.dependent;
  }

  setDependent(dependent: StructureMapGroupRuleDependent[] | undefined): this {
    return this.setFieldValue('dependent', dependent);
  }

  hasDependent(): boolean {
    return this.hasFieldValue('dependent');
  }

  /** Appends a new, empty StructureMapGroupRuleDependent to `dependent` and returns it so it can be filled in. */
  addDependent(): StructureMapGroupRuleDependent;
  /** Appends the given StructureMapGroupRuleDependent to `dependent` and returns this object for chaining. */
  addDependent(structureMapGroupRuleDependent: StructureMapGroupRuleDependent): this;
  addDependent(
    structureMapGroupRuleDependent?: StructureMapGroupRuleDependent
  ): StructureMapGroupRuleDependent | this {
    if (structureMapGroupRuleDependent !== undefined) {
      return this.addFieldValue('dependent', structureMapGroupRuleDependent);
    }
    const createdStructureMapGroupRuleDependent = new StructureMapGroupRuleDependent();
    this.addFieldValue('dependent', createdStructureMapGroupRuleDependent);
    return createdStructureMapGroupRuleDependent;
  }

  /** The first StructureMapGroupRuleDependent of `dependent`. One is added when the list is empty. */
  getDependentFirstRep(): StructureMapGroupRuleDependent {
    const firstStructureMapGroupRuleDependent = this.getDependent()[0];
    return firstStructureMapGroupRuleDependent === undefined
      ? this.addDependent()
      : firstStructureMapGroupRuleDependent;
  }

  /** Documentation for this instance of data (0..1) */
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
}

modelTypeRegistry.register('StructureMapGroupRule', StructureMapGroupRule, false);

/**
 * Source inputs to the mapping
 */
export class StructureMapGroupRuleSource extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'context',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'context', typeCode: 'id' }],
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
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'string' }],
    },
    {
      elementName: 'defaultValue',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'defaultValue', typeCode: 'string' }],
    },
    {
      elementName: 'element',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'element', typeCode: 'string' }],
    },
    {
      elementName: 'listMode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'listMode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.StructureMapSourceListMode,
        },
      ],
    },
    {
      elementName: 'variable',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'variable', typeCode: 'id' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'string' }],
    },
    {
      elementName: 'check',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'check', typeCode: 'string' }],
    },
    {
      elementName: 'logMessage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'logMessage', typeCode: 'string' }],
    },
  ];

  /** Type or variable this rule applies to (1..1) */
  context?: string;
  /** Id and extensions of the primitive `context`. */
  _context?: Element;

  /** Specified minimum cardinality (0..1) */
  min?: number;
  /** Id and extensions of the primitive `min`. */
  _min?: Element;

  /** Specified maximum cardinality (number or *) (0..1) */
  max?: string;
  /** Id and extensions of the primitive `max`. */
  _max?: Element;

  /** Rule only applies if source has this type (0..1) */
  type?: string;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Default value if no value exists (0..1) */
  defaultValue?: string;
  /** Id and extensions of the primitive `defaultValue`. */
  _defaultValue?: Element;

  /** Optional field for this source (0..1) */
  element?: string;
  /** Id and extensions of the primitive `element`. */
  _element?: Element;

  /** first | not_first | last | not_last | only_one (0..1) */
  listMode?: valueSetCodes.StructureMapSourceListMode;
  /** Id and extensions of the primitive `listMode`. */
  _listMode?: Element;

  /** Named context for field, if a field is specified (0..1) */
  variable?: string;
  /** Id and extensions of the primitive `variable`. */
  _variable?: Element;

  /** FHIRPath expression - must be true or the rule does not apply (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;

  /** FHIRPath expression - must be true or the mapping engine throws an error instead of completing (0..1) */
  check?: string;
  /** Id and extensions of the primitive `check`. */
  _check?: Element;

  /** Message to put in log if source exists (FHIRPath) (0..1) */
  logMessage?: string;
  /** Id and extensions of the primitive `logMessage`. */
  _logMessage?: Element;

  override fhirType(): string {
    return 'StructureMap.group.rule.source';
  }

  /** FHIR JSON for this StructureMapGroupRuleSource, typed as the plain `StructureMapSource` data type. */
  override toJSON(): plainTypes.StructureMapSource {
    return this.serialize() as plainTypes.StructureMapSource;
  }

  /** Type or variable this rule applies to (1..1) */
  getContext(): string | undefined {
    return this.context;
  }

  /** Sets `context`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setContext(context: string | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** The element carrying the id and extensions of `context`. Created when absent. */
  getContextElement(): Element {
    if (this._context === undefined) {
      this._context = new Element();
    }
    return this._context;
  }

  setContextElement(contextElement: Element | undefined): this {
    this._context = contextElement;
    return this;
  }

  /** Specified minimum cardinality (0..1) */
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

  /** Specified maximum cardinality (number or *) (0..1) */
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

  /** Rule only applies if source has this type (0..1) */
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

  /** Default value if no value exists (0..1) */
  getDefaultValue(): string | undefined {
    return this.defaultValue;
  }

  /** Sets `defaultValue`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDefaultValue(defaultValue: string | undefined): this {
    return this.setFieldValue('defaultValue', defaultValue);
  }

  hasDefaultValue(): boolean {
    return this.hasFieldValue('defaultValue');
  }

  /** The element carrying the id and extensions of `defaultValue`. Created when absent. */
  getDefaultValueElement(): Element {
    if (this._defaultValue === undefined) {
      this._defaultValue = new Element();
    }
    return this._defaultValue;
  }

  setDefaultValueElement(defaultValueElement: Element | undefined): this {
    this._defaultValue = defaultValueElement;
    return this;
  }

  /** Optional field for this source (0..1) */
  getElement(): string | undefined {
    return this.element;
  }

  /** Sets `element`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setElement(element: string | undefined): this {
    return this.setFieldValue('element', element);
  }

  hasElement(): boolean {
    return this.hasFieldValue('element');
  }

  /** The element carrying the id and extensions of `element`. Created when absent. */
  getElementElement(): Element {
    if (this._element === undefined) {
      this._element = new Element();
    }
    return this._element;
  }

  setElementElement(elementElement: Element | undefined): this {
    this._element = elementElement;
    return this;
  }

  /** first | not_first | last | not_last | only_one (0..1) */
  getListMode(): valueSetCodes.StructureMapSourceListMode | undefined {
    return this.listMode;
  }

  /** Sets `listMode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setListMode(listMode: valueSetCodes.StructureMapSourceListMode | undefined): this {
    return this.setFieldValue('listMode', listMode);
  }

  hasListMode(): boolean {
    return this.hasFieldValue('listMode');
  }

  /** The element carrying the id and extensions of `listMode`. Created when absent. */
  getListModeElement(): Element {
    if (this._listMode === undefined) {
      this._listMode = new Element();
    }
    return this._listMode;
  }

  setListModeElement(listModeElement: Element | undefined): this {
    this._listMode = listModeElement;
    return this;
  }

  /** Named context for field, if a field is specified (0..1) */
  getVariable(): string | undefined {
    return this.variable;
  }

  /** Sets `variable`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setVariable(variable: string | undefined): this {
    return this.setFieldValue('variable', variable);
  }

  hasVariable(): boolean {
    return this.hasFieldValue('variable');
  }

  /** The element carrying the id and extensions of `variable`. Created when absent. */
  getVariableElement(): Element {
    if (this._variable === undefined) {
      this._variable = new Element();
    }
    return this._variable;
  }

  setVariableElement(variableElement: Element | undefined): this {
    this._variable = variableElement;
    return this;
  }

  /** FHIRPath expression - must be true or the rule does not apply (0..1) */
  getCondition(): string | undefined {
    return this.condition;
  }

  /** Sets `condition`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCondition(condition: string | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** The element carrying the id and extensions of `condition`. Created when absent. */
  getConditionElement(): Element {
    if (this._condition === undefined) {
      this._condition = new Element();
    }
    return this._condition;
  }

  setConditionElement(conditionElement: Element | undefined): this {
    this._condition = conditionElement;
    return this;
  }

  /** FHIRPath expression - must be true or the mapping engine throws an error instead of completing (0..1) */
  getCheck(): string | undefined {
    return this.check;
  }

  /** Sets `check`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setCheck(check: string | undefined): this {
    return this.setFieldValue('check', check);
  }

  hasCheck(): boolean {
    return this.hasFieldValue('check');
  }

  /** The element carrying the id and extensions of `check`. Created when absent. */
  getCheckElement(): Element {
    if (this._check === undefined) {
      this._check = new Element();
    }
    return this._check;
  }

  setCheckElement(checkElement: Element | undefined): this {
    this._check = checkElement;
    return this;
  }

  /** Message to put in log if source exists (FHIRPath) (0..1) */
  getLogMessage(): string | undefined {
    return this.logMessage;
  }

  /** Sets `logMessage`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setLogMessage(logMessage: string | undefined): this {
    return this.setFieldValue('logMessage', logMessage);
  }

  hasLogMessage(): boolean {
    return this.hasFieldValue('logMessage');
  }

  /** The element carrying the id and extensions of `logMessage`. Created when absent. */
  getLogMessageElement(): Element {
    if (this._logMessage === undefined) {
      this._logMessage = new Element();
    }
    return this._logMessage;
  }

  setLogMessageElement(logMessageElement: Element | undefined): this {
    this._logMessage = logMessageElement;
    return this;
  }
}

modelTypeRegistry.register('StructureMapGroupRuleSource', StructureMapGroupRuleSource, false);

/**
 * Content to create because of this mapping rule
 */
export class StructureMapGroupRuleTarget extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'context', typeCode: 'string' }],
    },
    {
      elementName: 'element',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'element', typeCode: 'string' }],
    },
    {
      elementName: 'variable',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'variable', typeCode: 'id' }],
    },
    {
      elementName: 'listMode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'listMode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.StructureMapTargetListMode,
        },
      ],
    },
    {
      elementName: 'listRuleId',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'listRuleId', typeCode: 'id' }],
    },
    {
      elementName: 'transform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'transform',
          typeCode: 'code',
          allowedCodes: valueSetCodes.StructureMapTransform,
        },
      ],
    },
    {
      elementName: 'parameter',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'StructureMapGroupRuleTargetParameter' }],
    },
  ];

  /** Variable this rule applies to (0..1) */
  context?: string;
  /** Id and extensions of the primitive `context`. */
  _context?: Element;

  /** Field to create in the context (0..1) */
  element?: string;
  /** Id and extensions of the primitive `element`. */
  _element?: Element;

  /** Named context for field, if desired, and a field is specified (0..1) */
  variable?: string;
  /** Id and extensions of the primitive `variable`. */
  _variable?: Element;

  /** first | share | last | single (0..*) */
  listMode?: valueSetCodes.StructureMapTargetListMode[];
  /** Id and extensions of the primitive `listMode`. */
  _listMode?: (Element | null)[];

  /** Internal rule reference for shared list items (0..1) */
  listRuleId?: string;
  /** Id and extensions of the primitive `listRuleId`. */
  _listRuleId?: Element;

  /** create | copy + (0..1) */
  transform?: valueSetCodes.StructureMapTransform;
  /** Id and extensions of the primitive `transform`. */
  _transform?: Element;

  /** Parameters to the transform (0..*) */
  parameter?: StructureMapGroupRuleTargetParameter[];

  override fhirType(): string {
    return 'StructureMap.group.rule.target';
  }

  /** FHIR JSON for this StructureMapGroupRuleTarget, typed as the plain `StructureMapTarget` data type. */
  override toJSON(): plainTypes.StructureMapTarget {
    return this.serialize() as plainTypes.StructureMapTarget;
  }

  /** Variable this rule applies to (0..1) */
  getContext(): string | undefined {
    return this.context;
  }

  /** Sets `context`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setContext(context: string | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** The element carrying the id and extensions of `context`. Created when absent. */
  getContextElement(): Element {
    if (this._context === undefined) {
      this._context = new Element();
    }
    return this._context;
  }

  setContextElement(contextElement: Element | undefined): this {
    this._context = contextElement;
    return this;
  }

  /** Field to create in the context (0..1) */
  getElement(): string | undefined {
    return this.element;
  }

  /** Sets `element`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setElement(element: string | undefined): this {
    return this.setFieldValue('element', element);
  }

  hasElement(): boolean {
    return this.hasFieldValue('element');
  }

  /** The element carrying the id and extensions of `element`. Created when absent. */
  getElementElement(): Element {
    if (this._element === undefined) {
      this._element = new Element();
    }
    return this._element;
  }

  setElementElement(elementElement: Element | undefined): this {
    this._element = elementElement;
    return this;
  }

  /** Named context for field, if desired, and a field is specified (0..1) */
  getVariable(): string | undefined {
    return this.variable;
  }

  /** Sets `variable`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setVariable(variable: string | undefined): this {
    return this.setFieldValue('variable', variable);
  }

  hasVariable(): boolean {
    return this.hasFieldValue('variable');
  }

  /** The element carrying the id and extensions of `variable`. Created when absent. */
  getVariableElement(): Element {
    if (this._variable === undefined) {
      this._variable = new Element();
    }
    return this._variable;
  }

  setVariableElement(variableElement: Element | undefined): this {
    this._variable = variableElement;
    return this;
  }

  /** first | share | last | single (0..*) Never undefined; an empty list is created when absent. */
  getListMode(): valueSetCodes.StructureMapTargetListMode[] {
    if (this.listMode === undefined) {
      this.listMode = [];
    }
    return this.listMode;
  }

  setListMode(listMode: valueSetCodes.StructureMapTargetListMode[] | undefined): this {
    return this.setFieldValue('listMode', listMode);
  }

  hasListMode(): boolean {
    return this.hasFieldValue('listMode');
  }

  /** Appends one value to `listMode`. Throws a FhirModelError when it is not a valid FHIR code. */
  addListMode(listMode: valueSetCodes.StructureMapTargetListMode): this {
    return this.addFieldValue('listMode', listMode);
  }

  /** Internal rule reference for shared list items (0..1) */
  getListRuleId(): string | undefined {
    return this.listRuleId;
  }

  /** Sets `listRuleId`. Throws a FhirModelError when the value is not a valid FHIR id. */
  setListRuleId(listRuleId: string | undefined): this {
    return this.setFieldValue('listRuleId', listRuleId);
  }

  hasListRuleId(): boolean {
    return this.hasFieldValue('listRuleId');
  }

  /** The element carrying the id and extensions of `listRuleId`. Created when absent. */
  getListRuleIdElement(): Element {
    if (this._listRuleId === undefined) {
      this._listRuleId = new Element();
    }
    return this._listRuleId;
  }

  setListRuleIdElement(listRuleIdElement: Element | undefined): this {
    this._listRuleId = listRuleIdElement;
    return this;
  }

  /** create | copy + (0..1) */
  getTransform(): valueSetCodes.StructureMapTransform | undefined {
    return this.transform;
  }

  /** Sets `transform`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setTransform(transform: valueSetCodes.StructureMapTransform | undefined): this {
    return this.setFieldValue('transform', transform);
  }

  hasTransform(): boolean {
    return this.hasFieldValue('transform');
  }

  /** The element carrying the id and extensions of `transform`. Created when absent. */
  getTransformElement(): Element {
    if (this._transform === undefined) {
      this._transform = new Element();
    }
    return this._transform;
  }

  setTransformElement(transformElement: Element | undefined): this {
    this._transform = transformElement;
    return this;
  }

  /** Parameters to the transform (0..*) Never undefined; an empty list is created when absent. */
  getParameter(): StructureMapGroupRuleTargetParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: StructureMapGroupRuleTargetParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty StructureMapGroupRuleTargetParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): StructureMapGroupRuleTargetParameter;
  /** Appends the given StructureMapGroupRuleTargetParameter to `parameter` and returns this object for chaining. */
  addParameter(structureMapGroupRuleTargetParameter: StructureMapGroupRuleTargetParameter): this;
  addParameter(
    structureMapGroupRuleTargetParameter?: StructureMapGroupRuleTargetParameter
  ): StructureMapGroupRuleTargetParameter | this {
    if (structureMapGroupRuleTargetParameter !== undefined) {
      return this.addFieldValue('parameter', structureMapGroupRuleTargetParameter);
    }
    const createdStructureMapGroupRuleTargetParameter = new StructureMapGroupRuleTargetParameter();
    this.addFieldValue('parameter', createdStructureMapGroupRuleTargetParameter);
    return createdStructureMapGroupRuleTargetParameter;
  }

  /** The first StructureMapGroupRuleTargetParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): StructureMapGroupRuleTargetParameter {
    const firstStructureMapGroupRuleTargetParameter = this.getParameter()[0];
    return firstStructureMapGroupRuleTargetParameter === undefined
      ? this.addParameter()
      : firstStructureMapGroupRuleTargetParameter;
  }
}

modelTypeRegistry.register('StructureMapGroupRuleTarget', StructureMapGroupRuleTarget, false);

/**
 * Parameters to the transform
 */
export class StructureMapGroupRuleTargetParameter extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueId', typeCode: 'id' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
      ],
    },
  ];

  /** Parameter value - variable or literal (1..1) */
  valueId?: string;
  /** Id and extensions of the primitive `valueId`. */
  _valueId?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** Parameter value - variable or literal (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;

  override fhirType(): string {
    return 'StructureMap.group.rule.target.parameter';
  }

  /** FHIR JSON for this StructureMapGroupRuleTargetParameter, typed as the plain `StructureMapParameter` data type. */
  override toJSON(): plainTypes.StructureMapParameter {
    return this.serialize() as plainTypes.StructureMapParameter;
  }

  /** Parameter value - variable or literal (1..1) Whichever type of `value[x]` is set. */
  getValue(): string | boolean | number | undefined {
    return this.getChoiceValue<string | boolean | number>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueId(): string | undefined {
    return this.valueId;
  }

  /** Sets `value[x]` as id and clears every other type of it. */
  setValueId(valueId: string | undefined): this {
    return this.setFieldValue('valueId', valueId);
  }

  hasValueId(): boolean {
    return this.hasFieldValue('valueId');
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
}

modelTypeRegistry.register(
  'StructureMapGroupRuleTargetParameter',
  StructureMapGroupRuleTargetParameter,
  false
);

/**
 * Which other rules to apply in the context of this rule
 */
export class StructureMapGroupRuleDependent extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'name',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'id' }],
    },
    {
      elementName: 'parameter',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'parameter', typeCode: 'StructureMapGroupRuleTargetParameter' }],
    },
  ];

  /** Name of a rule or group to apply (1..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Parameter to pass to the rule or group (1..*) */
  parameter?: StructureMapGroupRuleTargetParameter[];

  override fhirType(): string {
    return 'StructureMap.group.rule.dependent';
  }

  /** FHIR JSON for this StructureMapGroupRuleDependent, typed as the plain `StructureMapDependent` data type. */
  override toJSON(): plainTypes.StructureMapDependent {
    return this.serialize() as plainTypes.StructureMapDependent;
  }

  /** Name of a rule or group to apply (1..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR id. */
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

  /** Parameter to pass to the rule or group (1..*) Never undefined; an empty list is created when absent. */
  getParameter(): StructureMapGroupRuleTargetParameter[] {
    if (this.parameter === undefined) {
      this.parameter = [];
    }
    return this.parameter;
  }

  setParameter(parameter: StructureMapGroupRuleTargetParameter[] | undefined): this {
    return this.setFieldValue('parameter', parameter);
  }

  hasParameter(): boolean {
    return this.hasFieldValue('parameter');
  }

  /** Appends a new, empty StructureMapGroupRuleTargetParameter to `parameter` and returns it so it can be filled in. */
  addParameter(): StructureMapGroupRuleTargetParameter;
  /** Appends the given StructureMapGroupRuleTargetParameter to `parameter` and returns this object for chaining. */
  addParameter(structureMapGroupRuleTargetParameter: StructureMapGroupRuleTargetParameter): this;
  addParameter(
    structureMapGroupRuleTargetParameter?: StructureMapGroupRuleTargetParameter
  ): StructureMapGroupRuleTargetParameter | this {
    if (structureMapGroupRuleTargetParameter !== undefined) {
      return this.addFieldValue('parameter', structureMapGroupRuleTargetParameter);
    }
    const createdStructureMapGroupRuleTargetParameter = new StructureMapGroupRuleTargetParameter();
    this.addFieldValue('parameter', createdStructureMapGroupRuleTargetParameter);
    return createdStructureMapGroupRuleTargetParameter;
  }

  /** The first StructureMapGroupRuleTargetParameter of `parameter`. One is added when the list is empty. */
  getParameterFirstRep(): StructureMapGroupRuleTargetParameter {
    const firstStructureMapGroupRuleTargetParameter = this.getParameter()[0];
    return firstStructureMapGroupRuleTargetParameter === undefined
      ? this.addParameter()
      : firstStructureMapGroupRuleTargetParameter;
  }
}

modelTypeRegistry.register('StructureMapGroupRuleDependent', StructureMapGroupRuleDependent, false);
