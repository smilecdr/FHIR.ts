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
import { UsageContext } from './usageContext';

/**
 * Base StructureDefinition for ExpansionProfile Resource
 */
export class ExpansionProfile extends DomainResource {
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
      elementName: 'fixedVersion',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'fixedVersion', typeCode: 'ExpansionProfileFixedVersion' }],
    },
    {
      elementName: 'excludedSystem',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'excludedSystem', typeCode: 'ExpansionProfileExcludedSystem' }],
    },
    {
      elementName: 'includeDesignations',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'includeDesignations', typeCode: 'boolean' }],
    },
    {
      elementName: 'designation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'designation', typeCode: 'ExpansionProfileDesignation' }],
    },
    {
      elementName: 'includeDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'includeDefinition', typeCode: 'boolean' }],
    },
    {
      elementName: 'activeOnly',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'activeOnly', typeCode: 'boolean' }],
    },
    {
      elementName: 'excludeNested',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'excludeNested', typeCode: 'boolean' }],
    },
    {
      elementName: 'excludeNotForUI',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'excludeNotForUI', typeCode: 'boolean' }],
    },
    {
      elementName: 'excludePostCoordinated',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'excludePostCoordinated', typeCode: 'boolean' }],
    },
    {
      elementName: 'displayLanguage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'displayLanguage', typeCode: 'code' }],
    },
    {
      elementName: 'limitedExpansion',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'limitedExpansion', typeCode: 'boolean' }],
    },
  ];

  readonly resourceType = 'ExpansionProfile';

  /** Logical URI to reference this expansion profile (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the expansion profile (0..1) */
  identifier?: Identifier;

  /** Business version of the expansion profile (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** Name for this expansion profile (computer friendly) (0..1) */
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

  /** Natural language description of the expansion profile (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Context the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for expansion profile (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Fix use of a code system to a particular version (0..*) */
  fixedVersion?: ExpansionProfileFixedVersion[];

  /** Systems/Versions to be exclude (0..1) */
  excludedSystem?: ExpansionProfileExcludedSystem;

  /** Whether the expansion should include concept designations (0..1) */
  includeDesignations?: boolean;
  /** Id and extensions of the primitive `includeDesignations`. */
  _includeDesignations?: Element;

  /** When the expansion profile imposes designation contraints (0..1) */
  designation?: ExpansionProfileDesignation;

  /** Include or exclude the value set definition in the expansion (0..1) */
  includeDefinition?: boolean;
  /** Id and extensions of the primitive `includeDefinition`. */
  _includeDefinition?: Element;

  /** Include or exclude inactive concepts in the expansion (0..1) */
  activeOnly?: boolean;
  /** Id and extensions of the primitive `activeOnly`. */
  _activeOnly?: Element;

  /** Nested codes in the expansion or not (0..1) */
  excludeNested?: boolean;
  /** Id and extensions of the primitive `excludeNested`. */
  _excludeNested?: Element;

  /** Include or exclude codes which cannot be rendered in user interfaces in the value set expansion (0..1) */
  excludeNotForUI?: boolean;
  /** Id and extensions of the primitive `excludeNotForUI`. */
  _excludeNotForUI?: Element;

  /** Include or exclude codes which are post coordinated expressions in the value set expansion (0..1) */
  excludePostCoordinated?: boolean;
  /** Id and extensions of the primitive `excludePostCoordinated`. */
  _excludePostCoordinated?: Element;

  /** Specify the language for the display element of codes in the value set expansion (0..1) */
  displayLanguage?: string;
  /** Id and extensions of the primitive `displayLanguage`. */
  _displayLanguage?: Element;

  /** Controls behaviour of the value set expand operation when value sets are too large to be completely expanded (0..1) */
  limitedExpansion?: boolean;
  /** Id and extensions of the primitive `limitedExpansion`. */
  _limitedExpansion?: Element;

  override fhirType(): string {
    return 'ExpansionProfile';
  }

  /** FHIR JSON for this ExpansionProfile, typed as the plain `ExpansionProfile` data type. */
  override toJSON(): plainTypes.ExpansionProfile {
    return this.serialize() as plainTypes.ExpansionProfile;
  }

  /** Logical URI to reference this expansion profile (globally unique) (0..1) */
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

  /** Additional identifier for the expansion profile (0..1) Created when absent. */
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

  /** Business version of the expansion profile (0..1) */
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

  /** Name for this expansion profile (computer friendly) (0..1) */
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

  /** Natural language description of the expansion profile (0..1) */
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

  /** Intended jurisdiction for expansion profile (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Fix use of a code system to a particular version (0..*) Never undefined; an empty list is created when absent. */
  getFixedVersion(): ExpansionProfileFixedVersion[] {
    if (this.fixedVersion === undefined) {
      this.fixedVersion = [];
    }
    return this.fixedVersion;
  }

  setFixedVersion(fixedVersion: ExpansionProfileFixedVersion[] | undefined): this {
    return this.setFieldValue('fixedVersion', fixedVersion);
  }

  hasFixedVersion(): boolean {
    return this.hasFieldValue('fixedVersion');
  }

  /** Appends a new, empty ExpansionProfileFixedVersion to `fixedVersion` and returns it so it can be filled in. */
  addFixedVersion(): ExpansionProfileFixedVersion;
  /** Appends the given ExpansionProfileFixedVersion to `fixedVersion` and returns this object for chaining. */
  addFixedVersion(expansionProfileFixedVersion: ExpansionProfileFixedVersion): this;
  addFixedVersion(
    expansionProfileFixedVersion?: ExpansionProfileFixedVersion
  ): ExpansionProfileFixedVersion | this {
    if (expansionProfileFixedVersion !== undefined) {
      return this.addFieldValue('fixedVersion', expansionProfileFixedVersion);
    }
    const createdExpansionProfileFixedVersion = new ExpansionProfileFixedVersion();
    this.addFieldValue('fixedVersion', createdExpansionProfileFixedVersion);
    return createdExpansionProfileFixedVersion;
  }

  /** The first ExpansionProfileFixedVersion of `fixedVersion`. One is added when the list is empty. */
  getFixedVersionFirstRep(): ExpansionProfileFixedVersion {
    const firstExpansionProfileFixedVersion = this.getFixedVersion()[0];
    return firstExpansionProfileFixedVersion === undefined
      ? this.addFixedVersion()
      : firstExpansionProfileFixedVersion;
  }

  /** Systems/Versions to be exclude (0..1) Created when absent. */
  getExcludedSystem(): ExpansionProfileExcludedSystem {
    if (this.excludedSystem === undefined) {
      this.excludedSystem = new ExpansionProfileExcludedSystem();
    }
    return this.excludedSystem;
  }

  setExcludedSystem(excludedSystem: ExpansionProfileExcludedSystem | undefined): this {
    return this.setFieldValue('excludedSystem', excludedSystem);
  }

  hasExcludedSystem(): boolean {
    return this.hasFieldValue('excludedSystem');
  }

  /** Whether the expansion should include concept designations (0..1) */
  getIncludeDesignations(): boolean | undefined {
    return this.includeDesignations;
  }

  /** Sets `includeDesignations`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIncludeDesignations(includeDesignations: boolean | undefined): this {
    return this.setFieldValue('includeDesignations', includeDesignations);
  }

  hasIncludeDesignations(): boolean {
    return this.hasFieldValue('includeDesignations');
  }

  /** The element carrying the id and extensions of `includeDesignations`. Created when absent. */
  getIncludeDesignationsElement(): Element {
    if (this._includeDesignations === undefined) {
      this._includeDesignations = new Element();
    }
    return this._includeDesignations;
  }

  setIncludeDesignationsElement(includeDesignationsElement: Element | undefined): this {
    this._includeDesignations = includeDesignationsElement;
    return this;
  }

  /** When the expansion profile imposes designation contraints (0..1) Created when absent. */
  getDesignation(): ExpansionProfileDesignation {
    if (this.designation === undefined) {
      this.designation = new ExpansionProfileDesignation();
    }
    return this.designation;
  }

  setDesignation(designation: ExpansionProfileDesignation | undefined): this {
    return this.setFieldValue('designation', designation);
  }

  hasDesignation(): boolean {
    return this.hasFieldValue('designation');
  }

  /** Include or exclude the value set definition in the expansion (0..1) */
  getIncludeDefinition(): boolean | undefined {
    return this.includeDefinition;
  }

  /** Sets `includeDefinition`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIncludeDefinition(includeDefinition: boolean | undefined): this {
    return this.setFieldValue('includeDefinition', includeDefinition);
  }

  hasIncludeDefinition(): boolean {
    return this.hasFieldValue('includeDefinition');
  }

  /** The element carrying the id and extensions of `includeDefinition`. Created when absent. */
  getIncludeDefinitionElement(): Element {
    if (this._includeDefinition === undefined) {
      this._includeDefinition = new Element();
    }
    return this._includeDefinition;
  }

  setIncludeDefinitionElement(includeDefinitionElement: Element | undefined): this {
    this._includeDefinition = includeDefinitionElement;
    return this;
  }

  /** Include or exclude inactive concepts in the expansion (0..1) */
  getActiveOnly(): boolean | undefined {
    return this.activeOnly;
  }

  /** Sets `activeOnly`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActiveOnly(activeOnly: boolean | undefined): this {
    return this.setFieldValue('activeOnly', activeOnly);
  }

  hasActiveOnly(): boolean {
    return this.hasFieldValue('activeOnly');
  }

  /** The element carrying the id and extensions of `activeOnly`. Created when absent. */
  getActiveOnlyElement(): Element {
    if (this._activeOnly === undefined) {
      this._activeOnly = new Element();
    }
    return this._activeOnly;
  }

  setActiveOnlyElement(activeOnlyElement: Element | undefined): this {
    this._activeOnly = activeOnlyElement;
    return this;
  }

  /** Nested codes in the expansion or not (0..1) */
  getExcludeNested(): boolean | undefined {
    return this.excludeNested;
  }

  /** Sets `excludeNested`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExcludeNested(excludeNested: boolean | undefined): this {
    return this.setFieldValue('excludeNested', excludeNested);
  }

  hasExcludeNested(): boolean {
    return this.hasFieldValue('excludeNested');
  }

  /** The element carrying the id and extensions of `excludeNested`. Created when absent. */
  getExcludeNestedElement(): Element {
    if (this._excludeNested === undefined) {
      this._excludeNested = new Element();
    }
    return this._excludeNested;
  }

  setExcludeNestedElement(excludeNestedElement: Element | undefined): this {
    this._excludeNested = excludeNestedElement;
    return this;
  }

  /** Include or exclude codes which cannot be rendered in user interfaces in the value set expansion (0..1) */
  getExcludeNotForUI(): boolean | undefined {
    return this.excludeNotForUI;
  }

  /** Sets `excludeNotForUI`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExcludeNotForUI(excludeNotForUI: boolean | undefined): this {
    return this.setFieldValue('excludeNotForUI', excludeNotForUI);
  }

  hasExcludeNotForUI(): boolean {
    return this.hasFieldValue('excludeNotForUI');
  }

  /** The element carrying the id and extensions of `excludeNotForUI`. Created when absent. */
  getExcludeNotForUIElement(): Element {
    if (this._excludeNotForUI === undefined) {
      this._excludeNotForUI = new Element();
    }
    return this._excludeNotForUI;
  }

  setExcludeNotForUIElement(excludeNotForUIElement: Element | undefined): this {
    this._excludeNotForUI = excludeNotForUIElement;
    return this;
  }

  /** Include or exclude codes which are post coordinated expressions in the value set expansion (0..1) */
  getExcludePostCoordinated(): boolean | undefined {
    return this.excludePostCoordinated;
  }

  /** Sets `excludePostCoordinated`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setExcludePostCoordinated(excludePostCoordinated: boolean | undefined): this {
    return this.setFieldValue('excludePostCoordinated', excludePostCoordinated);
  }

  hasExcludePostCoordinated(): boolean {
    return this.hasFieldValue('excludePostCoordinated');
  }

  /** The element carrying the id and extensions of `excludePostCoordinated`. Created when absent. */
  getExcludePostCoordinatedElement(): Element {
    if (this._excludePostCoordinated === undefined) {
      this._excludePostCoordinated = new Element();
    }
    return this._excludePostCoordinated;
  }

  setExcludePostCoordinatedElement(excludePostCoordinatedElement: Element | undefined): this {
    this._excludePostCoordinated = excludePostCoordinatedElement;
    return this;
  }

  /** Specify the language for the display element of codes in the value set expansion (0..1) */
  getDisplayLanguage(): string | undefined {
    return this.displayLanguage;
  }

  /** Sets `displayLanguage`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setDisplayLanguage(displayLanguage: string | undefined): this {
    return this.setFieldValue('displayLanguage', displayLanguage);
  }

  hasDisplayLanguage(): boolean {
    return this.hasFieldValue('displayLanguage');
  }

  /** The element carrying the id and extensions of `displayLanguage`. Created when absent. */
  getDisplayLanguageElement(): Element {
    if (this._displayLanguage === undefined) {
      this._displayLanguage = new Element();
    }
    return this._displayLanguage;
  }

  setDisplayLanguageElement(displayLanguageElement: Element | undefined): this {
    this._displayLanguage = displayLanguageElement;
    return this;
  }

  /** Controls behaviour of the value set expand operation when value sets are too large to be completely expanded (0..1) */
  getLimitedExpansion(): boolean | undefined {
    return this.limitedExpansion;
  }

  /** Sets `limitedExpansion`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setLimitedExpansion(limitedExpansion: boolean | undefined): this {
    return this.setFieldValue('limitedExpansion', limitedExpansion);
  }

  hasLimitedExpansion(): boolean {
    return this.hasFieldValue('limitedExpansion');
  }

  /** The element carrying the id and extensions of `limitedExpansion`. Created when absent. */
  getLimitedExpansionElement(): Element {
    if (this._limitedExpansion === undefined) {
      this._limitedExpansion = new Element();
    }
    return this._limitedExpansion;
  }

  setLimitedExpansionElement(limitedExpansionElement: Element | undefined): this {
    this._limitedExpansion = limitedExpansionElement;
    return this;
  }
}

modelTypeRegistry.register('ExpansionProfile', ExpansionProfile, true);

/** True when the value is a ExpansionProfile model instance. */
export function isExpansionProfile(candidate: unknown): candidate is ExpansionProfile {
  return candidate instanceof ExpansionProfile;
}

/**
 * Fix use of a code system to a particular version
 */
export class ExpansionProfileFixedVersion extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'system',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'uri' }],
    },
    {
      elementName: 'version',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
    {
      elementName: 'mode',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'mode',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SystemVersionProcessingMode,
        },
      ],
    },
  ];

  /** System to have its version fixed (1..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** Specific version of the code system referred to (1..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** default | check | override (1..1) */
  mode?: valueSetCodes.SystemVersionProcessingMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  override fhirType(): string {
    return 'ExpansionProfile.fixedVersion';
  }

  /** FHIR JSON for this ExpansionProfileFixedVersion, typed as the plain `ExpansionProfileFixedVersion` data type. */
  override toJSON(): plainTypes.ExpansionProfileFixedVersion {
    return this.serialize() as plainTypes.ExpansionProfileFixedVersion;
  }

  /** System to have its version fixed (1..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR uri. */
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

  /** Specific version of the code system referred to (1..1) */
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

  /** default | check | override (1..1) */
  getMode(): valueSetCodes.SystemVersionProcessingMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.SystemVersionProcessingMode | undefined): this {
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
}

modelTypeRegistry.register('ExpansionProfileFixedVersion', ExpansionProfileFixedVersion, false);

/**
 * Systems/Versions to be exclude
 */
export class ExpansionProfileExcludedSystem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'system',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'system', typeCode: 'uri' }],
    },
    {
      elementName: 'version',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'version', typeCode: 'string' }],
    },
  ];

  /** The specific code system to be excluded (1..1) */
  system?: string;
  /** Id and extensions of the primitive `system`. */
  _system?: Element;

  /** Specific version of the code system referred to (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  override fhirType(): string {
    return 'ExpansionProfile.excludedSystem';
  }

  /** FHIR JSON for this ExpansionProfileExcludedSystem, typed as the plain `ExpansionProfileExcludedSystem` data type. */
  override toJSON(): plainTypes.ExpansionProfileExcludedSystem {
    return this.serialize() as plainTypes.ExpansionProfileExcludedSystem;
  }

  /** The specific code system to be excluded (1..1) */
  getSystem(): string | undefined {
    return this.system;
  }

  /** Sets `system`. Throws a FhirModelError when the value is not a valid FHIR uri. */
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

  /** Specific version of the code system referred to (0..1) */
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
}

modelTypeRegistry.register('ExpansionProfileExcludedSystem', ExpansionProfileExcludedSystem, false);

/**
 * When the expansion profile imposes designation contraints
 */
export class ExpansionProfileDesignation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'include',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'include', typeCode: 'ExpansionProfileDesignationInclude' }],
    },
    {
      elementName: 'exclude',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'exclude', typeCode: 'ExpansionProfileDesignationExclude' }],
    },
  ];

  /** Designations to be included (0..1) */
  include?: ExpansionProfileDesignationInclude;

  /** Designations to be excluded (0..1) */
  exclude?: ExpansionProfileDesignationExclude;

  override fhirType(): string {
    return 'ExpansionProfile.designation';
  }

  /** FHIR JSON for this ExpansionProfileDesignation, typed as the plain `ExpansionProfileDesignation` data type. */
  override toJSON(): plainTypes.ExpansionProfileDesignation {
    return this.serialize() as plainTypes.ExpansionProfileDesignation;
  }

  /** Designations to be included (0..1) Created when absent. */
  getInclude(): ExpansionProfileDesignationInclude {
    if (this.include === undefined) {
      this.include = new ExpansionProfileDesignationInclude();
    }
    return this.include;
  }

  setInclude(include: ExpansionProfileDesignationInclude | undefined): this {
    return this.setFieldValue('include', include);
  }

  hasInclude(): boolean {
    return this.hasFieldValue('include');
  }

  /** Designations to be excluded (0..1) Created when absent. */
  getExclude(): ExpansionProfileDesignationExclude {
    if (this.exclude === undefined) {
      this.exclude = new ExpansionProfileDesignationExclude();
    }
    return this.exclude;
  }

  setExclude(exclude: ExpansionProfileDesignationExclude | undefined): this {
    return this.setFieldValue('exclude', exclude);
  }

  hasExclude(): boolean {
    return this.hasFieldValue('exclude');
  }
}

modelTypeRegistry.register('ExpansionProfileDesignation', ExpansionProfileDesignation, false);

/**
 * Designations to be included
 */
export class ExpansionProfileDesignationInclude extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'designation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'designation', typeCode: 'ExpansionProfileDesignationIncludeDesignation' },
      ],
    },
  ];

  /** The designation to be included (0..*) */
  designation?: ExpansionProfileDesignationIncludeDesignation[];

  override fhirType(): string {
    return 'ExpansionProfile.designation.include';
  }

  /** FHIR JSON for this ExpansionProfileDesignationInclude, typed as the plain `ExpansionProfileInclude` data type. */
  override toJSON(): plainTypes.ExpansionProfileInclude {
    return this.serialize() as plainTypes.ExpansionProfileInclude;
  }

  /** The designation to be included (0..*) Never undefined; an empty list is created when absent. */
  getDesignation(): ExpansionProfileDesignationIncludeDesignation[] {
    if (this.designation === undefined) {
      this.designation = [];
    }
    return this.designation;
  }

  setDesignation(designation: ExpansionProfileDesignationIncludeDesignation[] | undefined): this {
    return this.setFieldValue('designation', designation);
  }

  hasDesignation(): boolean {
    return this.hasFieldValue('designation');
  }

  /** Appends a new, empty ExpansionProfileDesignationIncludeDesignation to `designation` and returns it so it can be filled in. */
  addDesignation(): ExpansionProfileDesignationIncludeDesignation;
  /** Appends the given ExpansionProfileDesignationIncludeDesignation to `designation` and returns this object for chaining. */
  addDesignation(
    expansionProfileDesignationIncludeDesignation: ExpansionProfileDesignationIncludeDesignation
  ): this;
  addDesignation(
    expansionProfileDesignationIncludeDesignation?: ExpansionProfileDesignationIncludeDesignation
  ): ExpansionProfileDesignationIncludeDesignation | this {
    if (expansionProfileDesignationIncludeDesignation !== undefined) {
      return this.addFieldValue('designation', expansionProfileDesignationIncludeDesignation);
    }
    const createdExpansionProfileDesignationIncludeDesignation =
      new ExpansionProfileDesignationIncludeDesignation();
    this.addFieldValue('designation', createdExpansionProfileDesignationIncludeDesignation);
    return createdExpansionProfileDesignationIncludeDesignation;
  }

  /** The first ExpansionProfileDesignationIncludeDesignation of `designation`. One is added when the list is empty. */
  getDesignationFirstRep(): ExpansionProfileDesignationIncludeDesignation {
    const firstExpansionProfileDesignationIncludeDesignation = this.getDesignation()[0];
    return firstExpansionProfileDesignationIncludeDesignation === undefined
      ? this.addDesignation()
      : firstExpansionProfileDesignationIncludeDesignation;
  }
}

modelTypeRegistry.register(
  'ExpansionProfileDesignationInclude',
  ExpansionProfileDesignationInclude,
  false
);

/**
 * The designation to be included
 */
export class ExpansionProfileDesignationIncludeDesignation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'code' }],
    },
    {
      elementName: 'use',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'Coding' }],
    },
  ];

  /** Human language of the designation to be included (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** What kind of Designation to include (0..1) */
  use?: Coding;

  override fhirType(): string {
    return 'ExpansionProfile.designation.include.designation';
  }

  /** FHIR JSON for this ExpansionProfileDesignationIncludeDesignation, typed as the plain `ExpansionProfileDesignation1` data type. */
  override toJSON(): plainTypes.ExpansionProfileDesignation1 {
    return this.serialize() as plainTypes.ExpansionProfileDesignation1;
  }

  /** Human language of the designation to be included (0..1) */
  getLanguage(): string | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setLanguage(language: string | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** What kind of Designation to include (0..1) Created when absent. */
  getUse(): Coding {
    if (this.use === undefined) {
      this.use = new Coding();
    }
    return this.use;
  }

  setUse(use: Coding | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }
}

modelTypeRegistry.register(
  'ExpansionProfileDesignationIncludeDesignation',
  ExpansionProfileDesignationIncludeDesignation,
  false
);

/**
 * Designations to be excluded
 */
export class ExpansionProfileDesignationExclude extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'designation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'designation', typeCode: 'ExpansionProfileDesignationExcludeDesignation' },
      ],
    },
  ];

  /** The designation to be excluded (0..*) */
  designation?: ExpansionProfileDesignationExcludeDesignation[];

  override fhirType(): string {
    return 'ExpansionProfile.designation.exclude';
  }

  /** FHIR JSON for this ExpansionProfileDesignationExclude, typed as the plain `ExpansionProfileExclude` data type. */
  override toJSON(): plainTypes.ExpansionProfileExclude {
    return this.serialize() as plainTypes.ExpansionProfileExclude;
  }

  /** The designation to be excluded (0..*) Never undefined; an empty list is created when absent. */
  getDesignation(): ExpansionProfileDesignationExcludeDesignation[] {
    if (this.designation === undefined) {
      this.designation = [];
    }
    return this.designation;
  }

  setDesignation(designation: ExpansionProfileDesignationExcludeDesignation[] | undefined): this {
    return this.setFieldValue('designation', designation);
  }

  hasDesignation(): boolean {
    return this.hasFieldValue('designation');
  }

  /** Appends a new, empty ExpansionProfileDesignationExcludeDesignation to `designation` and returns it so it can be filled in. */
  addDesignation(): ExpansionProfileDesignationExcludeDesignation;
  /** Appends the given ExpansionProfileDesignationExcludeDesignation to `designation` and returns this object for chaining. */
  addDesignation(
    expansionProfileDesignationExcludeDesignation: ExpansionProfileDesignationExcludeDesignation
  ): this;
  addDesignation(
    expansionProfileDesignationExcludeDesignation?: ExpansionProfileDesignationExcludeDesignation
  ): ExpansionProfileDesignationExcludeDesignation | this {
    if (expansionProfileDesignationExcludeDesignation !== undefined) {
      return this.addFieldValue('designation', expansionProfileDesignationExcludeDesignation);
    }
    const createdExpansionProfileDesignationExcludeDesignation =
      new ExpansionProfileDesignationExcludeDesignation();
    this.addFieldValue('designation', createdExpansionProfileDesignationExcludeDesignation);
    return createdExpansionProfileDesignationExcludeDesignation;
  }

  /** The first ExpansionProfileDesignationExcludeDesignation of `designation`. One is added when the list is empty. */
  getDesignationFirstRep(): ExpansionProfileDesignationExcludeDesignation {
    const firstExpansionProfileDesignationExcludeDesignation = this.getDesignation()[0];
    return firstExpansionProfileDesignationExcludeDesignation === undefined
      ? this.addDesignation()
      : firstExpansionProfileDesignationExcludeDesignation;
  }
}

modelTypeRegistry.register(
  'ExpansionProfileDesignationExclude',
  ExpansionProfileDesignationExclude,
  false
);

/**
 * The designation to be excluded
 */
export class ExpansionProfileDesignationExcludeDesignation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'language',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'language', typeCode: 'code' }],
    },
    {
      elementName: 'use',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'use', typeCode: 'Coding' }],
    },
  ];

  /** Human language of the designation to be excluded (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;

  /** What kind of Designation to exclude (0..1) */
  use?: Coding;

  override fhirType(): string {
    return 'ExpansionProfile.designation.exclude.designation';
  }

  /** FHIR JSON for this ExpansionProfileDesignationExcludeDesignation, typed as the plain `ExpansionProfileDesignation2` data type. */
  override toJSON(): plainTypes.ExpansionProfileDesignation2 {
    return this.serialize() as plainTypes.ExpansionProfileDesignation2;
  }

  /** Human language of the designation to be excluded (0..1) */
  getLanguage(): string | undefined {
    return this.language;
  }

  /** Sets `language`. Throws a FhirModelError when the value is not a valid FHIR code. */
  setLanguage(language: string | undefined): this {
    return this.setFieldValue('language', language);
  }

  hasLanguage(): boolean {
    return this.hasFieldValue('language');
  }

  /** The element carrying the id and extensions of `language`. Created when absent. */
  getLanguageElement(): Element {
    if (this._language === undefined) {
      this._language = new Element();
    }
    return this._language;
  }

  setLanguageElement(languageElement: Element | undefined): this {
    this._language = languageElement;
    return this;
  }

  /** What kind of Designation to exclude (0..1) Created when absent. */
  getUse(): Coding {
    if (this.use === undefined) {
      this.use = new Coding();
    }
    return this.use;
  }

  setUse(use: Coding | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }
}

modelTypeRegistry.register(
  'ExpansionProfileDesignationExcludeDesignation',
  ExpansionProfileDesignationExcludeDesignation,
  false
);
