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
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * A kind of specimen with associated set of requirements.
 */
export class SpecimenDefinition extends DomainResource {
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
      elementName: 'derivedFromCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFromCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'derivedFromUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFromUri', typeCode: 'uri' }],
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
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subjectCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'subjectReference', typeCode: 'Reference', targetResourceTypes: ['Group'] },
      ],
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
      elementName: 'typeCollected',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'typeCollected', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patientPreparation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'patientPreparation', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'timeAspect',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'timeAspect', typeCode: 'string' }],
    },
    {
      elementName: 'collection',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'collection', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'typeTested',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'typeTested', typeCode: 'SpecimenDefinitionTypeTested' }],
    },
  ];

  readonly resourceType = 'SpecimenDefinition';

  /** Logical canonical URL to reference this SpecimenDefinition (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business identifier (0..1) */
  identifier?: Identifier;

  /** Business version of the SpecimenDefinition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this {{title}} (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this SpecimenDefinition (Human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Based on FHIR definition of another SpecimenDefinition (0..*) */
  derivedFromCanonical?: string[];
  /** Id and extensions of the primitive `derivedFromCanonical`. */
  _derivedFromCanonical?: (Element | null)[];

  /** Based on external definition (0..*) */
  derivedFromUri?: string[];
  /** Id and extensions of the primitive `derivedFromUri`. */
  _derivedFromUri?: (Element | null)[];

  /** draft | active | retired | unknown (1..1) */
  status?: valueSetCodes.PublicationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** If this SpecimenDefinition is not for real usage (0..1) */
  experimental?: boolean;
  /** Id and extensions of the primitive `experimental`. */
  _experimental?: Element;

  /** Type of subject for specimen collection (0..1) */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of subject for specimen collection (0..1) */
  subjectReference?: Reference;

  /** Date status first applied (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The name of the individual or organization that published the SpecimenDefinition (0..1) */
  publisher?: string;
  /** Id and extensions of the primitive `publisher`. */
  _publisher?: Element;

  /** Contact details for the publisher (0..*) */
  contact?: ContactDetail[];

  /** Natural language description of the SpecimenDefinition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Content intends to support these contexts (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for this SpecimenDefinition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Why this SpecimenDefinition is defined (0..1) */
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

  /** When SpecimenDefinition was approved by publisher (0..1) */
  approvalDate?: string;
  /** Id and extensions of the primitive `approvalDate`. */
  _approvalDate?: Element;

  /** The date on which the asset content was last reviewed by the publisher (0..1) */
  lastReviewDate?: string;
  /** Id and extensions of the primitive `lastReviewDate`. */
  _lastReviewDate?: Element;

  /** The effective date range for the SpecimenDefinition (0..1) */
  effectivePeriod?: Period;

  /** Kind of material to collect (0..1) */
  typeCollected?: CodeableConcept;

  /** Patient preparation for collection (0..*) */
  patientPreparation?: CodeableConcept[];

  /** Time aspect for collection (0..1) */
  timeAspect?: string;
  /** Id and extensions of the primitive `timeAspect`. */
  _timeAspect?: Element;

  /** Specimen collection procedure (0..*) */
  collection?: CodeableConcept[];

  /** Specimen in container intended for testing by lab (0..*) */
  typeTested?: SpecimenDefinitionTypeTested[];

  override fhirType(): string {
    return 'SpecimenDefinition';
  }

  /** FHIR JSON for this SpecimenDefinition, typed as the plain `SpecimenDefinition` data type. */
  override toJSON(): plainTypes.SpecimenDefinition {
    return this.serialize() as plainTypes.SpecimenDefinition;
  }

  /** Logical canonical URL to reference this SpecimenDefinition (globally unique) (0..1) */
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

  /** Business identifier (0..1) Created when absent. */
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

  /** Business version of the SpecimenDefinition (0..1) */
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

  /** Name for this {{title}} (computer friendly) (0..1) */
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

  /** Name for this SpecimenDefinition (Human friendly) (0..1) */
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

  /** Based on FHIR definition of another SpecimenDefinition (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFromCanonical(): string[] {
    if (this.derivedFromCanonical === undefined) {
      this.derivedFromCanonical = [];
    }
    return this.derivedFromCanonical;
  }

  setDerivedFromCanonical(derivedFromCanonical: string[] | undefined): this {
    return this.setFieldValue('derivedFromCanonical', derivedFromCanonical);
  }

  hasDerivedFromCanonical(): boolean {
    return this.hasFieldValue('derivedFromCanonical');
  }

  /** Appends one value to `derivedFromCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addDerivedFromCanonical(derivedFromCanonical: string): this {
    return this.addFieldValue('derivedFromCanonical', derivedFromCanonical);
  }

  /** Based on external definition (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFromUri(): string[] {
    if (this.derivedFromUri === undefined) {
      this.derivedFromUri = [];
    }
    return this.derivedFromUri;
  }

  setDerivedFromUri(derivedFromUri: string[] | undefined): this {
    return this.setFieldValue('derivedFromUri', derivedFromUri);
  }

  hasDerivedFromUri(): boolean {
    return this.hasFieldValue('derivedFromUri');
  }

  /** Appends one value to `derivedFromUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addDerivedFromUri(derivedFromUri: string): this {
    return this.addFieldValue('derivedFromUri', derivedFromUri);
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

  /** If this SpecimenDefinition is not for real usage (0..1) */
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

  /** Type of subject for specimen collection (0..1) Whichever type of `subject[x]` is set. */
  getSubject(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('subject');
  }

  /** True when any type of `subject[x]` is set. */
  hasSubject(): boolean {
    return this.hasChoiceValue('subject');
  }

  getSubjectCodeableConcept(): CodeableConcept | undefined {
    return this.subjectCodeableConcept;
  }

  /** Sets `subject[x]` as CodeableConcept and clears every other type of it. */
  setSubjectCodeableConcept(subjectCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectCodeableConcept', subjectCodeableConcept);
  }

  hasSubjectCodeableConcept(): boolean {
    return this.hasFieldValue('subjectCodeableConcept');
  }

  getSubjectReference(): Reference | undefined {
    return this.subjectReference;
  }

  /** Sets `subject[x]` as Reference and clears every other type of it. */
  setSubjectReference(subjectReference: Reference | undefined): this {
    return this.setFieldValue('subjectReference', subjectReference);
  }

  hasSubjectReference(): boolean {
    return this.hasFieldValue('subjectReference');
  }

  /** Date status first applied (0..1) */
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

  /** The name of the individual or organization that published the SpecimenDefinition (0..1) */
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

  /** Natural language description of the SpecimenDefinition (0..1) */
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

  /** Content intends to support these contexts (0..*) Never undefined; an empty list is created when absent. */
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

  /** Intended jurisdiction for this SpecimenDefinition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why this SpecimenDefinition is defined (0..1) */
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

  /** When SpecimenDefinition was approved by publisher (0..1) */
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

  /** The date on which the asset content was last reviewed by the publisher (0..1) */
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

  /** The effective date range for the SpecimenDefinition (0..1) Created when absent. */
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

  /** Kind of material to collect (0..1) Created when absent. */
  getTypeCollected(): CodeableConcept {
    if (this.typeCollected === undefined) {
      this.typeCollected = new CodeableConcept();
    }
    return this.typeCollected;
  }

  setTypeCollected(typeCollected: CodeableConcept | undefined): this {
    return this.setFieldValue('typeCollected', typeCollected);
  }

  hasTypeCollected(): boolean {
    return this.hasFieldValue('typeCollected');
  }

  /** Patient preparation for collection (0..*) Never undefined; an empty list is created when absent. */
  getPatientPreparation(): CodeableConcept[] {
    if (this.patientPreparation === undefined) {
      this.patientPreparation = [];
    }
    return this.patientPreparation;
  }

  setPatientPreparation(patientPreparation: CodeableConcept[] | undefined): this {
    return this.setFieldValue('patientPreparation', patientPreparation);
  }

  hasPatientPreparation(): boolean {
    return this.hasFieldValue('patientPreparation');
  }

  /** Appends a new, empty CodeableConcept to `patientPreparation` and returns it so it can be filled in. */
  addPatientPreparation(): CodeableConcept;
  /** Appends the given CodeableConcept to `patientPreparation` and returns this object for chaining. */
  addPatientPreparation(codeableConcept: CodeableConcept): this;
  addPatientPreparation(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('patientPreparation', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('patientPreparation', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `patientPreparation`. One is added when the list is empty. */
  getPatientPreparationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPatientPreparation()[0];
    return firstCodeableConcept === undefined ? this.addPatientPreparation() : firstCodeableConcept;
  }

  /** Time aspect for collection (0..1) */
  getTimeAspect(): string | undefined {
    return this.timeAspect;
  }

  /** Sets `timeAspect`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setTimeAspect(timeAspect: string | undefined): this {
    return this.setFieldValue('timeAspect', timeAspect);
  }

  hasTimeAspect(): boolean {
    return this.hasFieldValue('timeAspect');
  }

  /** The element carrying the id and extensions of `timeAspect`. Created when absent. */
  getTimeAspectElement(): Element {
    if (this._timeAspect === undefined) {
      this._timeAspect = new Element();
    }
    return this._timeAspect;
  }

  setTimeAspectElement(timeAspectElement: Element | undefined): this {
    this._timeAspect = timeAspectElement;
    return this;
  }

  /** Specimen collection procedure (0..*) Never undefined; an empty list is created when absent. */
  getCollection(): CodeableConcept[] {
    if (this.collection === undefined) {
      this.collection = [];
    }
    return this.collection;
  }

  setCollection(collection: CodeableConcept[] | undefined): this {
    return this.setFieldValue('collection', collection);
  }

  hasCollection(): boolean {
    return this.hasFieldValue('collection');
  }

  /** Appends a new, empty CodeableConcept to `collection` and returns it so it can be filled in. */
  addCollection(): CodeableConcept;
  /** Appends the given CodeableConcept to `collection` and returns this object for chaining. */
  addCollection(codeableConcept: CodeableConcept): this;
  addCollection(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('collection', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('collection', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `collection`. One is added when the list is empty. */
  getCollectionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCollection()[0];
    return firstCodeableConcept === undefined ? this.addCollection() : firstCodeableConcept;
  }

  /** Specimen in container intended for testing by lab (0..*) Never undefined; an empty list is created when absent. */
  getTypeTested(): SpecimenDefinitionTypeTested[] {
    if (this.typeTested === undefined) {
      this.typeTested = [];
    }
    return this.typeTested;
  }

  setTypeTested(typeTested: SpecimenDefinitionTypeTested[] | undefined): this {
    return this.setFieldValue('typeTested', typeTested);
  }

  hasTypeTested(): boolean {
    return this.hasFieldValue('typeTested');
  }

  /** Appends a new, empty SpecimenDefinitionTypeTested to `typeTested` and returns it so it can be filled in. */
  addTypeTested(): SpecimenDefinitionTypeTested;
  /** Appends the given SpecimenDefinitionTypeTested to `typeTested` and returns this object for chaining. */
  addTypeTested(specimenDefinitionTypeTested: SpecimenDefinitionTypeTested): this;
  addTypeTested(
    specimenDefinitionTypeTested?: SpecimenDefinitionTypeTested
  ): SpecimenDefinitionTypeTested | this {
    if (specimenDefinitionTypeTested !== undefined) {
      return this.addFieldValue('typeTested', specimenDefinitionTypeTested);
    }
    const createdSpecimenDefinitionTypeTested = new SpecimenDefinitionTypeTested();
    this.addFieldValue('typeTested', createdSpecimenDefinitionTypeTested);
    return createdSpecimenDefinitionTypeTested;
  }

  /** The first SpecimenDefinitionTypeTested of `typeTested`. One is added when the list is empty. */
  getTypeTestedFirstRep(): SpecimenDefinitionTypeTested {
    const firstSpecimenDefinitionTypeTested = this.getTypeTested()[0];
    return firstSpecimenDefinitionTypeTested === undefined
      ? this.addTypeTested()
      : firstSpecimenDefinitionTypeTested;
  }
}

modelTypeRegistry.register('SpecimenDefinition', SpecimenDefinition, true);

/** True when the value is a SpecimenDefinition model instance. */
export function isSpecimenDefinition(candidate: unknown): candidate is SpecimenDefinition {
  return candidate instanceof SpecimenDefinition;
}

/**
 * Specimen in container intended for testing by lab
 */
export class SpecimenDefinitionTypeTested extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'isDerived',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isDerived', typeCode: 'boolean' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'preference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'preference',
          typeCode: 'code',
          allowedCodes: valueSetCodes.SpecimenContainedPreference,
        },
      ],
    },
    {
      elementName: 'container',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'container', typeCode: 'SpecimenDefinitionTypeTestedContainer' }],
    },
    {
      elementName: 'requirement',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'requirement', typeCode: 'markdown' }],
    },
    {
      elementName: 'retentionTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'retentionTime', typeCode: 'Duration' }],
    },
    {
      elementName: 'singleUse',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'singleUse', typeCode: 'boolean' }],
    },
    {
      elementName: 'rejectionCriterion',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rejectionCriterion', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'handling',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'handling', typeCode: 'SpecimenDefinitionTypeTestedHandling' }],
    },
    {
      elementName: 'testingDestination',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'testingDestination', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Primary or secondary specimen (0..1) */
  isDerived?: boolean;
  /** Id and extensions of the primitive `isDerived`. */
  _isDerived?: Element;

  /** Type of intended specimen (0..1) */
  type?: CodeableConcept;

  /** preferred | alternate (1..1) */
  preference?: valueSetCodes.SpecimenContainedPreference;
  /** Id and extensions of the primitive `preference`. */
  _preference?: Element;

  /** The specimen's container (0..1) */
  container?: SpecimenDefinitionTypeTestedContainer;

  /** Requirements for specimen delivery and special handling (0..1) */
  requirement?: string;
  /** Id and extensions of the primitive `requirement`. */
  _requirement?: Element;

  /** The usual time for retaining this kind of specimen (0..1) */
  retentionTime?: Duration;

  /** Specimen for single use only (0..1) */
  singleUse?: boolean;
  /** Id and extensions of the primitive `singleUse`. */
  _singleUse?: Element;

  /** Criterion specified for specimen rejection (0..*) */
  rejectionCriterion?: CodeableConcept[];

  /** Specimen handling before testing (0..*) */
  handling?: SpecimenDefinitionTypeTestedHandling[];

  /** Where the specimen will be tested (0..*) */
  testingDestination?: CodeableConcept[];

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTested, typed as the plain `SpecimenDefinitionTypeTested` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionTypeTested {
    return this.serialize() as plainTypes.SpecimenDefinitionTypeTested;
  }

  /** Primary or secondary specimen (0..1) */
  getIsDerived(): boolean | undefined {
    return this.isDerived;
  }

  /** Sets `isDerived`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsDerived(isDerived: boolean | undefined): this {
    return this.setFieldValue('isDerived', isDerived);
  }

  hasIsDerived(): boolean {
    return this.hasFieldValue('isDerived');
  }

  /** The element carrying the id and extensions of `isDerived`. Created when absent. */
  getIsDerivedElement(): Element {
    if (this._isDerived === undefined) {
      this._isDerived = new Element();
    }
    return this._isDerived;
  }

  setIsDerivedElement(isDerivedElement: Element | undefined): this {
    this._isDerived = isDerivedElement;
    return this;
  }

  /** Type of intended specimen (0..1) Created when absent. */
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

  /** preferred | alternate (1..1) */
  getPreference(): valueSetCodes.SpecimenContainedPreference | undefined {
    return this.preference;
  }

  /** Sets `preference`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPreference(preference: valueSetCodes.SpecimenContainedPreference | undefined): this {
    return this.setFieldValue('preference', preference);
  }

  hasPreference(): boolean {
    return this.hasFieldValue('preference');
  }

  /** The element carrying the id and extensions of `preference`. Created when absent. */
  getPreferenceElement(): Element {
    if (this._preference === undefined) {
      this._preference = new Element();
    }
    return this._preference;
  }

  setPreferenceElement(preferenceElement: Element | undefined): this {
    this._preference = preferenceElement;
    return this;
  }

  /** The specimen's container (0..1) Created when absent. */
  getContainer(): SpecimenDefinitionTypeTestedContainer {
    if (this.container === undefined) {
      this.container = new SpecimenDefinitionTypeTestedContainer();
    }
    return this.container;
  }

  setContainer(container: SpecimenDefinitionTypeTestedContainer | undefined): this {
    return this.setFieldValue('container', container);
  }

  hasContainer(): boolean {
    return this.hasFieldValue('container');
  }

  /** Requirements for specimen delivery and special handling (0..1) */
  getRequirement(): string | undefined {
    return this.requirement;
  }

  /** Sets `requirement`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setRequirement(requirement: string | undefined): this {
    return this.setFieldValue('requirement', requirement);
  }

  hasRequirement(): boolean {
    return this.hasFieldValue('requirement');
  }

  /** The element carrying the id and extensions of `requirement`. Created when absent. */
  getRequirementElement(): Element {
    if (this._requirement === undefined) {
      this._requirement = new Element();
    }
    return this._requirement;
  }

  setRequirementElement(requirementElement: Element | undefined): this {
    this._requirement = requirementElement;
    return this;
  }

  /** The usual time for retaining this kind of specimen (0..1) Created when absent. */
  getRetentionTime(): Duration {
    if (this.retentionTime === undefined) {
      this.retentionTime = new Duration();
    }
    return this.retentionTime;
  }

  setRetentionTime(retentionTime: Duration | undefined): this {
    return this.setFieldValue('retentionTime', retentionTime);
  }

  hasRetentionTime(): boolean {
    return this.hasFieldValue('retentionTime');
  }

  /** Specimen for single use only (0..1) */
  getSingleUse(): boolean | undefined {
    return this.singleUse;
  }

  /** Sets `singleUse`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setSingleUse(singleUse: boolean | undefined): this {
    return this.setFieldValue('singleUse', singleUse);
  }

  hasSingleUse(): boolean {
    return this.hasFieldValue('singleUse');
  }

  /** The element carrying the id and extensions of `singleUse`. Created when absent. */
  getSingleUseElement(): Element {
    if (this._singleUse === undefined) {
      this._singleUse = new Element();
    }
    return this._singleUse;
  }

  setSingleUseElement(singleUseElement: Element | undefined): this {
    this._singleUse = singleUseElement;
    return this;
  }

  /** Criterion specified for specimen rejection (0..*) Never undefined; an empty list is created when absent. */
  getRejectionCriterion(): CodeableConcept[] {
    if (this.rejectionCriterion === undefined) {
      this.rejectionCriterion = [];
    }
    return this.rejectionCriterion;
  }

  setRejectionCriterion(rejectionCriterion: CodeableConcept[] | undefined): this {
    return this.setFieldValue('rejectionCriterion', rejectionCriterion);
  }

  hasRejectionCriterion(): boolean {
    return this.hasFieldValue('rejectionCriterion');
  }

  /** Appends a new, empty CodeableConcept to `rejectionCriterion` and returns it so it can be filled in. */
  addRejectionCriterion(): CodeableConcept;
  /** Appends the given CodeableConcept to `rejectionCriterion` and returns this object for chaining. */
  addRejectionCriterion(codeableConcept: CodeableConcept): this;
  addRejectionCriterion(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('rejectionCriterion', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('rejectionCriterion', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `rejectionCriterion`. One is added when the list is empty. */
  getRejectionCriterionFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getRejectionCriterion()[0];
    return firstCodeableConcept === undefined ? this.addRejectionCriterion() : firstCodeableConcept;
  }

  /** Specimen handling before testing (0..*) Never undefined; an empty list is created when absent. */
  getHandling(): SpecimenDefinitionTypeTestedHandling[] {
    if (this.handling === undefined) {
      this.handling = [];
    }
    return this.handling;
  }

  setHandling(handling: SpecimenDefinitionTypeTestedHandling[] | undefined): this {
    return this.setFieldValue('handling', handling);
  }

  hasHandling(): boolean {
    return this.hasFieldValue('handling');
  }

  /** Appends a new, empty SpecimenDefinitionTypeTestedHandling to `handling` and returns it so it can be filled in. */
  addHandling(): SpecimenDefinitionTypeTestedHandling;
  /** Appends the given SpecimenDefinitionTypeTestedHandling to `handling` and returns this object for chaining. */
  addHandling(specimenDefinitionTypeTestedHandling: SpecimenDefinitionTypeTestedHandling): this;
  addHandling(
    specimenDefinitionTypeTestedHandling?: SpecimenDefinitionTypeTestedHandling
  ): SpecimenDefinitionTypeTestedHandling | this {
    if (specimenDefinitionTypeTestedHandling !== undefined) {
      return this.addFieldValue('handling', specimenDefinitionTypeTestedHandling);
    }
    const createdSpecimenDefinitionTypeTestedHandling = new SpecimenDefinitionTypeTestedHandling();
    this.addFieldValue('handling', createdSpecimenDefinitionTypeTestedHandling);
    return createdSpecimenDefinitionTypeTestedHandling;
  }

  /** The first SpecimenDefinitionTypeTestedHandling of `handling`. One is added when the list is empty. */
  getHandlingFirstRep(): SpecimenDefinitionTypeTestedHandling {
    const firstSpecimenDefinitionTypeTestedHandling = this.getHandling()[0];
    return firstSpecimenDefinitionTypeTestedHandling === undefined
      ? this.addHandling()
      : firstSpecimenDefinitionTypeTestedHandling;
  }

  /** Where the specimen will be tested (0..*) Never undefined; an empty list is created when absent. */
  getTestingDestination(): CodeableConcept[] {
    if (this.testingDestination === undefined) {
      this.testingDestination = [];
    }
    return this.testingDestination;
  }

  setTestingDestination(testingDestination: CodeableConcept[] | undefined): this {
    return this.setFieldValue('testingDestination', testingDestination);
  }

  hasTestingDestination(): boolean {
    return this.hasFieldValue('testingDestination');
  }

  /** Appends a new, empty CodeableConcept to `testingDestination` and returns it so it can be filled in. */
  addTestingDestination(): CodeableConcept;
  /** Appends the given CodeableConcept to `testingDestination` and returns this object for chaining. */
  addTestingDestination(codeableConcept: CodeableConcept): this;
  addTestingDestination(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('testingDestination', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('testingDestination', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `testingDestination`. One is added when the list is empty. */
  getTestingDestinationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getTestingDestination()[0];
    return firstCodeableConcept === undefined ? this.addTestingDestination() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('SpecimenDefinitionTypeTested', SpecimenDefinitionTypeTested, false);

/**
 * The specimen's container
 */
export class SpecimenDefinitionTypeTestedContainer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'material',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'material', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'cap',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'cap', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'description',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'markdown' }],
    },
    {
      elementName: 'capacity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'capacity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'minimumVolume',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'minimumVolumeQuantity', typeCode: 'Quantity' },
        { jsonKey: 'minimumVolumeString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'additive',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'additive', typeCode: 'SpecimenDefinitionTypeTestedContainerAdditive' }],
    },
    {
      elementName: 'preparation',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preparation', typeCode: 'markdown' }],
    },
  ];

  /** The material type used for the container (0..1) */
  material?: CodeableConcept;

  /** Kind of container associated with the kind of specimen (0..1) */
  type?: CodeableConcept;

  /** Color of container cap (0..1) */
  cap?: CodeableConcept;

  /** The description of the kind of container (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The capacity of this kind of container (0..1) */
  capacity?: Quantity;

  /** Minimum volume (0..1) */
  minimumVolumeQuantity?: Quantity;
  /** Minimum volume (0..1) */
  minimumVolumeString?: string;
  /** Id and extensions of the primitive `minimumVolumeString`. */
  _minimumVolumeString?: Element;

  /** Additive associated with container (0..*) */
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[];

  /** Special processing applied to the container for this specimen type (0..1) */
  preparation?: string;
  /** Id and extensions of the primitive `preparation`. */
  _preparation?: Element;

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTestedContainer, typed as the plain `SpecimenDefinitionContainer` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionContainer {
    return this.serialize() as plainTypes.SpecimenDefinitionContainer;
  }

  /** The material type used for the container (0..1) Created when absent. */
  getMaterial(): CodeableConcept {
    if (this.material === undefined) {
      this.material = new CodeableConcept();
    }
    return this.material;
  }

  setMaterial(material: CodeableConcept | undefined): this {
    return this.setFieldValue('material', material);
  }

  hasMaterial(): boolean {
    return this.hasFieldValue('material');
  }

  /** Kind of container associated with the kind of specimen (0..1) Created when absent. */
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

  /** Color of container cap (0..1) Created when absent. */
  getCap(): CodeableConcept {
    if (this.cap === undefined) {
      this.cap = new CodeableConcept();
    }
    return this.cap;
  }

  setCap(cap: CodeableConcept | undefined): this {
    return this.setFieldValue('cap', cap);
  }

  hasCap(): boolean {
    return this.hasFieldValue('cap');
  }

  /** The description of the kind of container (0..1) */
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

  /** The capacity of this kind of container (0..1) Created when absent. */
  getCapacity(): Quantity {
    if (this.capacity === undefined) {
      this.capacity = new Quantity();
    }
    return this.capacity;
  }

  setCapacity(capacity: Quantity | undefined): this {
    return this.setFieldValue('capacity', capacity);
  }

  hasCapacity(): boolean {
    return this.hasFieldValue('capacity');
  }

  /** Minimum volume (0..1) Whichever type of `minimumVolume[x]` is set. */
  getMinimumVolume(): Quantity | string | undefined {
    return this.getChoiceValue<Quantity | string>('minimumVolume');
  }

  /** True when any type of `minimumVolume[x]` is set. */
  hasMinimumVolume(): boolean {
    return this.hasChoiceValue('minimumVolume');
  }

  getMinimumVolumeQuantity(): Quantity | undefined {
    return this.minimumVolumeQuantity;
  }

  /** Sets `minimumVolume[x]` as Quantity and clears every other type of it. */
  setMinimumVolumeQuantity(minimumVolumeQuantity: Quantity | undefined): this {
    return this.setFieldValue('minimumVolumeQuantity', minimumVolumeQuantity);
  }

  hasMinimumVolumeQuantity(): boolean {
    return this.hasFieldValue('minimumVolumeQuantity');
  }

  getMinimumVolumeString(): string | undefined {
    return this.minimumVolumeString;
  }

  /** Sets `minimumVolume[x]` as string and clears every other type of it. */
  setMinimumVolumeString(minimumVolumeString: string | undefined): this {
    return this.setFieldValue('minimumVolumeString', minimumVolumeString);
  }

  hasMinimumVolumeString(): boolean {
    return this.hasFieldValue('minimumVolumeString');
  }

  /** Additive associated with container (0..*) Never undefined; an empty list is created when absent. */
  getAdditive(): SpecimenDefinitionTypeTestedContainerAdditive[] {
    if (this.additive === undefined) {
      this.additive = [];
    }
    return this.additive;
  }

  setAdditive(additive: SpecimenDefinitionTypeTestedContainerAdditive[] | undefined): this {
    return this.setFieldValue('additive', additive);
  }

  hasAdditive(): boolean {
    return this.hasFieldValue('additive');
  }

  /** Appends a new, empty SpecimenDefinitionTypeTestedContainerAdditive to `additive` and returns it so it can be filled in. */
  addAdditive(): SpecimenDefinitionTypeTestedContainerAdditive;
  /** Appends the given SpecimenDefinitionTypeTestedContainerAdditive to `additive` and returns this object for chaining. */
  addAdditive(
    specimenDefinitionTypeTestedContainerAdditive: SpecimenDefinitionTypeTestedContainerAdditive
  ): this;
  addAdditive(
    specimenDefinitionTypeTestedContainerAdditive?: SpecimenDefinitionTypeTestedContainerAdditive
  ): SpecimenDefinitionTypeTestedContainerAdditive | this {
    if (specimenDefinitionTypeTestedContainerAdditive !== undefined) {
      return this.addFieldValue('additive', specimenDefinitionTypeTestedContainerAdditive);
    }
    const createdSpecimenDefinitionTypeTestedContainerAdditive =
      new SpecimenDefinitionTypeTestedContainerAdditive();
    this.addFieldValue('additive', createdSpecimenDefinitionTypeTestedContainerAdditive);
    return createdSpecimenDefinitionTypeTestedContainerAdditive;
  }

  /** The first SpecimenDefinitionTypeTestedContainerAdditive of `additive`. One is added when the list is empty. */
  getAdditiveFirstRep(): SpecimenDefinitionTypeTestedContainerAdditive {
    const firstSpecimenDefinitionTypeTestedContainerAdditive = this.getAdditive()[0];
    return firstSpecimenDefinitionTypeTestedContainerAdditive === undefined
      ? this.addAdditive()
      : firstSpecimenDefinitionTypeTestedContainerAdditive;
  }

  /** Special processing applied to the container for this specimen type (0..1) */
  getPreparation(): string | undefined {
    return this.preparation;
  }

  /** Sets `preparation`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setPreparation(preparation: string | undefined): this {
    return this.setFieldValue('preparation', preparation);
  }

  hasPreparation(): boolean {
    return this.hasFieldValue('preparation');
  }

  /** The element carrying the id and extensions of `preparation`. Created when absent. */
  getPreparationElement(): Element {
    if (this._preparation === undefined) {
      this._preparation = new Element();
    }
    return this._preparation;
  }

  setPreparationElement(preparationElement: Element | undefined): this {
    this._preparation = preparationElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SpecimenDefinitionTypeTestedContainer',
  SpecimenDefinitionTypeTestedContainer,
  false
);

/**
 * Additive associated with container
 */
export class SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'additive',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'additiveCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'additiveReference',
          typeCode: 'Reference',
          targetResourceTypes: ['SubstanceDefinition'],
        },
      ],
    },
  ];

  /** Additive associated with container (1..1) */
  additiveCodeableConcept?: CodeableConcept;
  /** Additive associated with container (1..1) */
  additiveReference?: Reference;

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container.additive';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTestedContainerAdditive, typed as the plain `SpecimenDefinitionAdditive` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionAdditive {
    return this.serialize() as plainTypes.SpecimenDefinitionAdditive;
  }

  /** Additive associated with container (1..1) Whichever type of `additive[x]` is set. */
  getAdditive(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('additive');
  }

  /** True when any type of `additive[x]` is set. */
  hasAdditive(): boolean {
    return this.hasChoiceValue('additive');
  }

  getAdditiveCodeableConcept(): CodeableConcept | undefined {
    return this.additiveCodeableConcept;
  }

  /** Sets `additive[x]` as CodeableConcept and clears every other type of it. */
  setAdditiveCodeableConcept(additiveCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('additiveCodeableConcept', additiveCodeableConcept);
  }

  hasAdditiveCodeableConcept(): boolean {
    return this.hasFieldValue('additiveCodeableConcept');
  }

  getAdditiveReference(): Reference | undefined {
    return this.additiveReference;
  }

  /** Sets `additive[x]` as Reference and clears every other type of it. */
  setAdditiveReference(additiveReference: Reference | undefined): this {
    return this.setFieldValue('additiveReference', additiveReference);
  }

  hasAdditiveReference(): boolean {
    return this.hasFieldValue('additiveReference');
  }
}

modelTypeRegistry.register(
  'SpecimenDefinitionTypeTestedContainerAdditive',
  SpecimenDefinitionTypeTestedContainerAdditive,
  false
);

/**
 * Specimen handling before testing
 */
export class SpecimenDefinitionTypeTestedHandling extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'temperatureQualifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'temperatureQualifier', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'temperatureRange',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'temperatureRange', typeCode: 'Range' }],
    },
    {
      elementName: 'maxDuration',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'maxDuration', typeCode: 'Duration' }],
    },
    {
      elementName: 'instruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instruction', typeCode: 'markdown' }],
    },
  ];

  /** Qualifies the interval of temperature (0..1) */
  temperatureQualifier?: CodeableConcept;

  /** Temperature range for these handling instructions (0..1) */
  temperatureRange?: Range;

  /** Maximum preservation time (0..1) */
  maxDuration?: Duration;

  /** Preservation instruction (0..1) */
  instruction?: string;
  /** Id and extensions of the primitive `instruction`. */
  _instruction?: Element;

  override fhirType(): string {
    return 'SpecimenDefinition.typeTested.handling';
  }

  /** FHIR JSON for this SpecimenDefinitionTypeTestedHandling, typed as the plain `SpecimenDefinitionHandling` data type. */
  override toJSON(): plainTypes.SpecimenDefinitionHandling {
    return this.serialize() as plainTypes.SpecimenDefinitionHandling;
  }

  /** Qualifies the interval of temperature (0..1) Created when absent. */
  getTemperatureQualifier(): CodeableConcept {
    if (this.temperatureQualifier === undefined) {
      this.temperatureQualifier = new CodeableConcept();
    }
    return this.temperatureQualifier;
  }

  setTemperatureQualifier(temperatureQualifier: CodeableConcept | undefined): this {
    return this.setFieldValue('temperatureQualifier', temperatureQualifier);
  }

  hasTemperatureQualifier(): boolean {
    return this.hasFieldValue('temperatureQualifier');
  }

  /** Temperature range for these handling instructions (0..1) Created when absent. */
  getTemperatureRange(): Range {
    if (this.temperatureRange === undefined) {
      this.temperatureRange = new Range();
    }
    return this.temperatureRange;
  }

  setTemperatureRange(temperatureRange: Range | undefined): this {
    return this.setFieldValue('temperatureRange', temperatureRange);
  }

  hasTemperatureRange(): boolean {
    return this.hasFieldValue('temperatureRange');
  }

  /** Maximum preservation time (0..1) Created when absent. */
  getMaxDuration(): Duration {
    if (this.maxDuration === undefined) {
      this.maxDuration = new Duration();
    }
    return this.maxDuration;
  }

  setMaxDuration(maxDuration: Duration | undefined): this {
    return this.setFieldValue('maxDuration', maxDuration);
  }

  hasMaxDuration(): boolean {
    return this.hasFieldValue('maxDuration');
  }

  /** Preservation instruction (0..1) */
  getInstruction(): string | undefined {
    return this.instruction;
  }

  /** Sets `instruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setInstruction(instruction: string | undefined): this {
    return this.setFieldValue('instruction', instruction);
  }

  hasInstruction(): boolean {
    return this.hasFieldValue('instruction');
  }

  /** The element carrying the id and extensions of `instruction`. Created when absent. */
  getInstructionElement(): Element {
    if (this._instruction === undefined) {
      this._instruction = new Element();
    }
    return this._instruction;
  }

  setInstructionElement(instructionElement: Element | undefined): this {
    this._instruction = instructionElement;
    return this;
  }
}

modelTypeRegistry.register(
  'SpecimenDefinitionTypeTestedHandling',
  SpecimenDefinitionTypeTestedHandling,
  false
);
