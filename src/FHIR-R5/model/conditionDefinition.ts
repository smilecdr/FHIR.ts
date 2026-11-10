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
import { Quantity } from './quantity';
import { Reference } from './reference';
import { UsageContext } from './usageContext';

/**
 * A definition of a condition and information relevant to managing it.
 */
export class ConditionDefinition extends DomainResource {
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
      elementName: 'subtitle',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subtitle', typeCode: 'string' }],
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
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'severity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'severity', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'stage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'stage', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'hasSeverity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hasSeverity', typeCode: 'boolean' }],
    },
    {
      elementName: 'hasBodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hasBodySite', typeCode: 'boolean' }],
    },
    {
      elementName: 'hasStage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hasStage', typeCode: 'boolean' }],
    },
    {
      elementName: 'definition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'definition', typeCode: 'uri' }],
    },
    {
      elementName: 'observation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'observation', typeCode: 'ConditionDefinitionObservation' }],
    },
    {
      elementName: 'medication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'medication', typeCode: 'ConditionDefinitionMedication' }],
    },
    {
      elementName: 'precondition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'precondition', typeCode: 'ConditionDefinitionPrecondition' }],
    },
    {
      elementName: 'team',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'team', typeCode: 'Reference', targetResourceTypes: ['CareTeam'] }],
    },
    {
      elementName: 'questionnaire',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'questionnaire', typeCode: 'ConditionDefinitionQuestionnaire' }],
    },
    {
      elementName: 'plan',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'plan', typeCode: 'ConditionDefinitionPlan' }],
    },
  ];

  readonly resourceType = 'ConditionDefinition';

  /** Canonical identifier for this condition definition, represented as a URI (globally unique) (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Additional identifier for the condition definition (0..*) */
  identifier?: Identifier[];

  /** Business version of the condition definition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** How to compare versions (0..1) */
  versionAlgorithmString?: string;
  /** Id and extensions of the primitive `versionAlgorithmString`. */
  _versionAlgorithmString?: Element;
  /** How to compare versions (0..1) */
  versionAlgorithmCoding?: Coding;

  /** Name for this condition definition (computer friendly) (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Name for this condition definition (human friendly) (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Subordinate title of the event definition (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;

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

  /** Natural language description of the condition definition (0..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** The context that the content is intended to support (0..*) */
  useContext?: UsageContext[];

  /** Intended jurisdiction for condition definition (if applicable) (0..*) */
  jurisdiction?: CodeableConcept[];

  /** Identification of the condition, problem or diagnosis (1..1) */
  code?: CodeableConcept;

  /** Subjective severity of condition (0..1) */
  severity?: CodeableConcept;

  /** Anatomical location, if relevant (0..1) */
  bodySite?: CodeableConcept;

  /** Stage/grade, usually assessed formally (0..1) */
  stage?: CodeableConcept;

  /** Whether Severity is appropriate (0..1) */
  hasSeverity?: boolean;
  /** Id and extensions of the primitive `hasSeverity`. */
  _hasSeverity?: Element;

  /** Whether bodySite is appropriate (0..1) */
  hasBodySite?: boolean;
  /** Id and extensions of the primitive `hasBodySite`. */
  _hasBodySite?: Element;

  /** Whether stage is appropriate (0..1) */
  hasStage?: boolean;
  /** Id and extensions of the primitive `hasStage`. */
  _hasStage?: Element;

  /** Formal Definition for the condition (0..*) */
  definition?: string[];
  /** Id and extensions of the primitive `definition`. */
  _definition?: (Element | null)[];

  /** Observations particularly relevant to this condition (0..*) */
  observation?: ConditionDefinitionObservation[];

  /** Medications particularly relevant for this condition (0..*) */
  medication?: ConditionDefinitionMedication[];

  /** Observation that suggets this condition (0..*) */
  precondition?: ConditionDefinitionPrecondition[];

  /** Appropriate team for this condition (0..*) */
  team?: Reference[];

  /** Questionnaire for this condition (0..*) */
  questionnaire?: ConditionDefinitionQuestionnaire[];

  /** Plan that is appropriate (0..*) */
  plan?: ConditionDefinitionPlan[];

  override fhirType(): string {
    return 'ConditionDefinition';
  }

  /** FHIR JSON for this ConditionDefinition, typed as the plain `ConditionDefinition` data type. */
  override toJSON(): plainTypes.ConditionDefinition {
    return this.serialize() as plainTypes.ConditionDefinition;
  }

  /** Canonical identifier for this condition definition, represented as a URI (globally unique) (0..1) */
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

  /** Additional identifier for the condition definition (0..*) Never undefined; an empty list is created when absent. */
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

  /** Business version of the condition definition (0..1) */
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

  /** Name for this condition definition (computer friendly) (0..1) */
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

  /** Name for this condition definition (human friendly) (0..1) */
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

  /** Subordinate title of the event definition (0..1) */
  getSubtitle(): string | undefined {
    return this.subtitle;
  }

  /** Sets `subtitle`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setSubtitle(subtitle: string | undefined): this {
    return this.setFieldValue('subtitle', subtitle);
  }

  hasSubtitle(): boolean {
    return this.hasFieldValue('subtitle');
  }

  /** The element carrying the id and extensions of `subtitle`. Created when absent. */
  getSubtitleElement(): Element {
    if (this._subtitle === undefined) {
      this._subtitle = new Element();
    }
    return this._subtitle;
  }

  setSubtitleElement(subtitleElement: Element | undefined): this {
    this._subtitle = subtitleElement;
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

  /** Natural language description of the condition definition (0..1) */
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

  /** Intended jurisdiction for condition definition (if applicable) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Identification of the condition, problem or diagnosis (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Subjective severity of condition (0..1) Created when absent. */
  getSeverity(): CodeableConcept {
    if (this.severity === undefined) {
      this.severity = new CodeableConcept();
    }
    return this.severity;
  }

  setSeverity(severity: CodeableConcept | undefined): this {
    return this.setFieldValue('severity', severity);
  }

  hasSeverityValue(): boolean {
    return this.hasFieldValue('severity');
  }

  /** Anatomical location, if relevant (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySiteValue(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Stage/grade, usually assessed formally (0..1) Created when absent. */
  getStage(): CodeableConcept {
    if (this.stage === undefined) {
      this.stage = new CodeableConcept();
    }
    return this.stage;
  }

  setStage(stage: CodeableConcept | undefined): this {
    return this.setFieldValue('stage', stage);
  }

  hasStageValue(): boolean {
    return this.hasFieldValue('stage');
  }

  /** Whether Severity is appropriate (0..1) */
  getHasSeverity(): boolean | undefined {
    return this.hasSeverity;
  }

  /** Sets `hasSeverity`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setHasSeverity(hasSeverity: boolean | undefined): this {
    return this.setFieldValue('hasSeverity', hasSeverity);
  }

  hasHasSeverity(): boolean {
    return this.hasFieldValue('hasSeverity');
  }

  /** The element carrying the id and extensions of `hasSeverity`. Created when absent. */
  getHasSeverityElement(): Element {
    if (this._hasSeverity === undefined) {
      this._hasSeverity = new Element();
    }
    return this._hasSeverity;
  }

  setHasSeverityElement(hasSeverityElement: Element | undefined): this {
    this._hasSeverity = hasSeverityElement;
    return this;
  }

  /** Whether bodySite is appropriate (0..1) */
  getHasBodySite(): boolean | undefined {
    return this.hasBodySite;
  }

  /** Sets `hasBodySite`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setHasBodySite(hasBodySite: boolean | undefined): this {
    return this.setFieldValue('hasBodySite', hasBodySite);
  }

  hasHasBodySite(): boolean {
    return this.hasFieldValue('hasBodySite');
  }

  /** The element carrying the id and extensions of `hasBodySite`. Created when absent. */
  getHasBodySiteElement(): Element {
    if (this._hasBodySite === undefined) {
      this._hasBodySite = new Element();
    }
    return this._hasBodySite;
  }

  setHasBodySiteElement(hasBodySiteElement: Element | undefined): this {
    this._hasBodySite = hasBodySiteElement;
    return this;
  }

  /** Whether stage is appropriate (0..1) */
  getHasStage(): boolean | undefined {
    return this.hasStage;
  }

  /** Sets `hasStage`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setHasStage(hasStage: boolean | undefined): this {
    return this.setFieldValue('hasStage', hasStage);
  }

  hasHasStage(): boolean {
    return this.hasFieldValue('hasStage');
  }

  /** The element carrying the id and extensions of `hasStage`. Created when absent. */
  getHasStageElement(): Element {
    if (this._hasStage === undefined) {
      this._hasStage = new Element();
    }
    return this._hasStage;
  }

  setHasStageElement(hasStageElement: Element | undefined): this {
    this._hasStage = hasStageElement;
    return this;
  }

  /** Formal Definition for the condition (0..*) Never undefined; an empty list is created when absent. */
  getDefinition(): string[] {
    if (this.definition === undefined) {
      this.definition = [];
    }
    return this.definition;
  }

  setDefinition(definition: string[] | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Appends one value to `definition`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addDefinition(definition: string): this {
    return this.addFieldValue('definition', definition);
  }

  /** Observations particularly relevant to this condition (0..*) Never undefined; an empty list is created when absent. */
  getObservation(): ConditionDefinitionObservation[] {
    if (this.observation === undefined) {
      this.observation = [];
    }
    return this.observation;
  }

  setObservation(observation: ConditionDefinitionObservation[] | undefined): this {
    return this.setFieldValue('observation', observation);
  }

  hasObservation(): boolean {
    return this.hasFieldValue('observation');
  }

  /** Appends a new, empty ConditionDefinitionObservation to `observation` and returns it so it can be filled in. */
  addObservation(): ConditionDefinitionObservation;
  /** Appends the given ConditionDefinitionObservation to `observation` and returns this object for chaining. */
  addObservation(conditionDefinitionObservation: ConditionDefinitionObservation): this;
  addObservation(
    conditionDefinitionObservation?: ConditionDefinitionObservation
  ): ConditionDefinitionObservation | this {
    if (conditionDefinitionObservation !== undefined) {
      return this.addFieldValue('observation', conditionDefinitionObservation);
    }
    const createdConditionDefinitionObservation = new ConditionDefinitionObservation();
    this.addFieldValue('observation', createdConditionDefinitionObservation);
    return createdConditionDefinitionObservation;
  }

  /** The first ConditionDefinitionObservation of `observation`. One is added when the list is empty. */
  getObservationFirstRep(): ConditionDefinitionObservation {
    const firstConditionDefinitionObservation = this.getObservation()[0];
    return firstConditionDefinitionObservation === undefined
      ? this.addObservation()
      : firstConditionDefinitionObservation;
  }

  /** Medications particularly relevant for this condition (0..*) Never undefined; an empty list is created when absent. */
  getMedication(): ConditionDefinitionMedication[] {
    if (this.medication === undefined) {
      this.medication = [];
    }
    return this.medication;
  }

  setMedication(medication: ConditionDefinitionMedication[] | undefined): this {
    return this.setFieldValue('medication', medication);
  }

  hasMedication(): boolean {
    return this.hasFieldValue('medication');
  }

  /** Appends a new, empty ConditionDefinitionMedication to `medication` and returns it so it can be filled in. */
  addMedication(): ConditionDefinitionMedication;
  /** Appends the given ConditionDefinitionMedication to `medication` and returns this object for chaining. */
  addMedication(conditionDefinitionMedication: ConditionDefinitionMedication): this;
  addMedication(
    conditionDefinitionMedication?: ConditionDefinitionMedication
  ): ConditionDefinitionMedication | this {
    if (conditionDefinitionMedication !== undefined) {
      return this.addFieldValue('medication', conditionDefinitionMedication);
    }
    const createdConditionDefinitionMedication = new ConditionDefinitionMedication();
    this.addFieldValue('medication', createdConditionDefinitionMedication);
    return createdConditionDefinitionMedication;
  }

  /** The first ConditionDefinitionMedication of `medication`. One is added when the list is empty. */
  getMedicationFirstRep(): ConditionDefinitionMedication {
    const firstConditionDefinitionMedication = this.getMedication()[0];
    return firstConditionDefinitionMedication === undefined
      ? this.addMedication()
      : firstConditionDefinitionMedication;
  }

  /** Observation that suggets this condition (0..*) Never undefined; an empty list is created when absent. */
  getPrecondition(): ConditionDefinitionPrecondition[] {
    if (this.precondition === undefined) {
      this.precondition = [];
    }
    return this.precondition;
  }

  setPrecondition(precondition: ConditionDefinitionPrecondition[] | undefined): this {
    return this.setFieldValue('precondition', precondition);
  }

  hasPrecondition(): boolean {
    return this.hasFieldValue('precondition');
  }

  /** Appends a new, empty ConditionDefinitionPrecondition to `precondition` and returns it so it can be filled in. */
  addPrecondition(): ConditionDefinitionPrecondition;
  /** Appends the given ConditionDefinitionPrecondition to `precondition` and returns this object for chaining. */
  addPrecondition(conditionDefinitionPrecondition: ConditionDefinitionPrecondition): this;
  addPrecondition(
    conditionDefinitionPrecondition?: ConditionDefinitionPrecondition
  ): ConditionDefinitionPrecondition | this {
    if (conditionDefinitionPrecondition !== undefined) {
      return this.addFieldValue('precondition', conditionDefinitionPrecondition);
    }
    const createdConditionDefinitionPrecondition = new ConditionDefinitionPrecondition();
    this.addFieldValue('precondition', createdConditionDefinitionPrecondition);
    return createdConditionDefinitionPrecondition;
  }

  /** The first ConditionDefinitionPrecondition of `precondition`. One is added when the list is empty. */
  getPreconditionFirstRep(): ConditionDefinitionPrecondition {
    const firstConditionDefinitionPrecondition = this.getPrecondition()[0];
    return firstConditionDefinitionPrecondition === undefined
      ? this.addPrecondition()
      : firstConditionDefinitionPrecondition;
  }

  /** Appropriate team for this condition (0..*) Never undefined; an empty list is created when absent. */
  getTeam(): Reference[] {
    if (this.team === undefined) {
      this.team = [];
    }
    return this.team;
  }

  setTeam(team: Reference[] | undefined): this {
    return this.setFieldValue('team', team);
  }

  hasTeam(): boolean {
    return this.hasFieldValue('team');
  }

  /** Appends a new, empty Reference to `team` and returns it so it can be filled in. */
  addTeam(): Reference;
  /** Appends the given Reference to `team` and returns this object for chaining. */
  addTeam(reference: Reference): this;
  addTeam(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('team', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('team', createdReference);
    return createdReference;
  }

  /** The first Reference of `team`. One is added when the list is empty. */
  getTeamFirstRep(): Reference {
    const firstReference = this.getTeam()[0];
    return firstReference === undefined ? this.addTeam() : firstReference;
  }

  /** Questionnaire for this condition (0..*) Never undefined; an empty list is created when absent. */
  getQuestionnaire(): ConditionDefinitionQuestionnaire[] {
    if (this.questionnaire === undefined) {
      this.questionnaire = [];
    }
    return this.questionnaire;
  }

  setQuestionnaire(questionnaire: ConditionDefinitionQuestionnaire[] | undefined): this {
    return this.setFieldValue('questionnaire', questionnaire);
  }

  hasQuestionnaire(): boolean {
    return this.hasFieldValue('questionnaire');
  }

  /** Appends a new, empty ConditionDefinitionQuestionnaire to `questionnaire` and returns it so it can be filled in. */
  addQuestionnaire(): ConditionDefinitionQuestionnaire;
  /** Appends the given ConditionDefinitionQuestionnaire to `questionnaire` and returns this object for chaining. */
  addQuestionnaire(conditionDefinitionQuestionnaire: ConditionDefinitionQuestionnaire): this;
  addQuestionnaire(
    conditionDefinitionQuestionnaire?: ConditionDefinitionQuestionnaire
  ): ConditionDefinitionQuestionnaire | this {
    if (conditionDefinitionQuestionnaire !== undefined) {
      return this.addFieldValue('questionnaire', conditionDefinitionQuestionnaire);
    }
    const createdConditionDefinitionQuestionnaire = new ConditionDefinitionQuestionnaire();
    this.addFieldValue('questionnaire', createdConditionDefinitionQuestionnaire);
    return createdConditionDefinitionQuestionnaire;
  }

  /** The first ConditionDefinitionQuestionnaire of `questionnaire`. One is added when the list is empty. */
  getQuestionnaireFirstRep(): ConditionDefinitionQuestionnaire {
    const firstConditionDefinitionQuestionnaire = this.getQuestionnaire()[0];
    return firstConditionDefinitionQuestionnaire === undefined
      ? this.addQuestionnaire()
      : firstConditionDefinitionQuestionnaire;
  }

  /** Plan that is appropriate (0..*) Never undefined; an empty list is created when absent. */
  getPlan(): ConditionDefinitionPlan[] {
    if (this.plan === undefined) {
      this.plan = [];
    }
    return this.plan;
  }

  setPlan(plan: ConditionDefinitionPlan[] | undefined): this {
    return this.setFieldValue('plan', plan);
  }

  hasPlan(): boolean {
    return this.hasFieldValue('plan');
  }

  /** Appends a new, empty ConditionDefinitionPlan to `plan` and returns it so it can be filled in. */
  addPlan(): ConditionDefinitionPlan;
  /** Appends the given ConditionDefinitionPlan to `plan` and returns this object for chaining. */
  addPlan(conditionDefinitionPlan: ConditionDefinitionPlan): this;
  addPlan(conditionDefinitionPlan?: ConditionDefinitionPlan): ConditionDefinitionPlan | this {
    if (conditionDefinitionPlan !== undefined) {
      return this.addFieldValue('plan', conditionDefinitionPlan);
    }
    const createdConditionDefinitionPlan = new ConditionDefinitionPlan();
    this.addFieldValue('plan', createdConditionDefinitionPlan);
    return createdConditionDefinitionPlan;
  }

  /** The first ConditionDefinitionPlan of `plan`. One is added when the list is empty. */
  getPlanFirstRep(): ConditionDefinitionPlan {
    const firstConditionDefinitionPlan = this.getPlan()[0];
    return firstConditionDefinitionPlan === undefined
      ? this.addPlan()
      : firstConditionDefinitionPlan;
  }
}

modelTypeRegistry.register('ConditionDefinition', ConditionDefinition, true);

/** True when the value is a ConditionDefinition model instance. */
export function isConditionDefinition(candidate: unknown): candidate is ConditionDefinition {
  return candidate instanceof ConditionDefinition;
}

/**
 * Observations particularly relevant to this condition
 */
export class ConditionDefinitionObservation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Category that is relevant (0..1) */
  category?: CodeableConcept;

  /** Code for relevant Observation (0..1) */
  code?: CodeableConcept;

  override fhirType(): string {
    return 'ConditionDefinition.observation';
  }

  /** FHIR JSON for this ConditionDefinitionObservation, typed as the plain `ConditionDefinitionObservation` data type. */
  override toJSON(): plainTypes.ConditionDefinitionObservation {
    return this.serialize() as plainTypes.ConditionDefinitionObservation;
  }

  /** Category that is relevant (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Code for relevant Observation (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }
}

modelTypeRegistry.register('ConditionDefinitionObservation', ConditionDefinitionObservation, false);

/**
 * Medications particularly relevant for this condition
 */
export class ConditionDefinitionMedication extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Category that is relevant (0..1) */
  category?: CodeableConcept;

  /** Code for relevant Medication (0..1) */
  code?: CodeableConcept;

  override fhirType(): string {
    return 'ConditionDefinition.medication';
  }

  /** FHIR JSON for this ConditionDefinitionMedication, typed as the plain `ConditionDefinitionMedication` data type. */
  override toJSON(): plainTypes.ConditionDefinitionMedication {
    return this.serialize() as plainTypes.ConditionDefinitionMedication;
  }

  /** Category that is relevant (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Code for relevant Medication (0..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }
}

modelTypeRegistry.register('ConditionDefinitionMedication', ConditionDefinitionMedication, false);

/**
 * Observation that suggets this condition
 */
export class ConditionDefinitionPrecondition extends BackboneElement {
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
          allowedCodes: valueSetCodes.ConditionPreconditionType,
        },
      ],
    },
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
      ],
    },
  ];

  /** sensitive | specific (1..1) */
  type?: valueSetCodes.ConditionPreconditionType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** Code for relevant Observation (1..1) */
  code?: CodeableConcept;

  /** Value of Observation (0..1) */
  valueCodeableConcept?: CodeableConcept;
  /** Value of Observation (0..1) */
  valueQuantity?: Quantity;

  override fhirType(): string {
    return 'ConditionDefinition.precondition';
  }

  /** FHIR JSON for this ConditionDefinitionPrecondition, typed as the plain `ConditionDefinitionPrecondition` data type. */
  override toJSON(): plainTypes.ConditionDefinitionPrecondition {
    return this.serialize() as plainTypes.ConditionDefinitionPrecondition;
  }

  /** sensitive | specific (1..1) */
  getType(): valueSetCodes.ConditionPreconditionType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.ConditionPreconditionType | undefined): this {
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

  /** Code for relevant Observation (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Value of Observation (0..1) Whichever type of `value[x]` is set. */
  getValue(): CodeableConcept | Quantity | undefined {
    return this.getChoiceValue<CodeableConcept | Quantity>('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
  }

  getValueCodeableConcept(): CodeableConcept | undefined {
    return this.valueCodeableConcept;
  }

  /** Sets `value[x]` as CodeableConcept and clears every other type of it. */
  setValueCodeableConcept(valueCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('valueCodeableConcept', valueCodeableConcept);
  }

  hasValueCodeableConcept(): boolean {
    return this.hasFieldValue('valueCodeableConcept');
  }

  getValueQuantity(): Quantity | undefined {
    return this.valueQuantity;
  }

  /** Sets `value[x]` as Quantity and clears every other type of it. */
  setValueQuantity(valueQuantity: Quantity | undefined): this {
    return this.setFieldValue('valueQuantity', valueQuantity);
  }

  hasValueQuantity(): boolean {
    return this.hasFieldValue('valueQuantity');
  }
}

modelTypeRegistry.register(
  'ConditionDefinitionPrecondition',
  ConditionDefinitionPrecondition,
  false
);

/**
 * Questionnaire for this condition
 */
export class ConditionDefinitionQuestionnaire extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'purpose',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'purpose',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ConditionQuestionnairePurpose,
        },
      ],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reference', typeCode: 'Reference', targetResourceTypes: ['Questionnaire'] },
      ],
    },
  ];

  /** preadmit | diff-diagnosis | outcome (1..1) */
  purpose?: valueSetCodes.ConditionQuestionnairePurpose;
  /** Id and extensions of the primitive `purpose`. */
  _purpose?: Element;

  /** Specific Questionnaire (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'ConditionDefinition.questionnaire';
  }

  /** FHIR JSON for this ConditionDefinitionQuestionnaire, typed as the plain `ConditionDefinitionQuestionnaire` data type. */
  override toJSON(): plainTypes.ConditionDefinitionQuestionnaire {
    return this.serialize() as plainTypes.ConditionDefinitionQuestionnaire;
  }

  /** preadmit | diff-diagnosis | outcome (1..1) */
  getPurpose(): valueSetCodes.ConditionQuestionnairePurpose | undefined {
    return this.purpose;
  }

  /** Sets `purpose`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPurpose(purpose: valueSetCodes.ConditionQuestionnairePurpose | undefined): this {
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

  /** Specific Questionnaire (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register(
  'ConditionDefinitionQuestionnaire',
  ConditionDefinitionQuestionnaire,
  false
);

/**
 * Plan that is appropriate
 */
export class ConditionDefinitionPlan extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reference',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'reference', typeCode: 'Reference', targetResourceTypes: ['PlanDefinition'] },
      ],
    },
  ];

  /** Use for the plan (0..1) */
  role?: CodeableConcept;

  /** The actual plan (1..1) */
  reference?: Reference;

  override fhirType(): string {
    return 'ConditionDefinition.plan';
  }

  /** FHIR JSON for this ConditionDefinitionPlan, typed as the plain `ConditionDefinitionPlan` data type. */
  override toJSON(): plainTypes.ConditionDefinitionPlan {
    return this.serialize() as plainTypes.ConditionDefinitionPlan;
  }

  /** Use for the plan (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** The actual plan (1..1) Created when absent. */
  getReference(): Reference {
    if (this.reference === undefined) {
      this.reference = new Reference();
    }
    return this.reference;
  }

  setReference(reference: Reference | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }
}

modelTypeRegistry.register('ConditionDefinitionPlan', ConditionDefinitionPlan, false);
