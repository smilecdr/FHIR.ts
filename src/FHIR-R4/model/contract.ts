/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Money } from './money';
import { Period } from './period';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { Signature } from './signature';
import { Timing } from './timing';

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export class Contract extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
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
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ContractResourceStatusCodes,
        },
      ],
    },
    {
      elementName: 'legalState',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'legalState', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'instantiatesCanonical',
          typeCode: 'Reference',
          targetResourceTypes: ['Contract'],
        },
      ],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
    },
    {
      elementName: 'contentDerivative',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentDerivative', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'issued',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issued', typeCode: 'dateTime' }],
    },
    {
      elementName: 'applies',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'applies', typeCode: 'Period' }],
    },
    {
      elementName: 'expirationType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'expirationType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subject', typeCode: 'Reference' }],
    },
    {
      elementName: 'authority',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'authority', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'domain',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'domain', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'site',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'site', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
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
      elementName: 'alias',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'alias', typeCode: 'string' }],
    },
    {
      elementName: 'author',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'author',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'scope',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scope', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'topicCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'topicReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contentDefinition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contentDefinition', typeCode: 'ContractContentDefinition' }],
    },
    {
      elementName: 'term',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'term', typeCode: 'ContractTerm' }],
    },
    {
      elementName: 'supportingInfo',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInfo', typeCode: 'Reference' }],
    },
    {
      elementName: 'relevantHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'relevantHistory', typeCode: 'Reference', targetResourceTypes: ['Provenance'] },
      ],
    },
    {
      elementName: 'signer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'signer', typeCode: 'ContractSigner' }],
    },
    {
      elementName: 'friendly',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'friendly', typeCode: 'ContractFriendly' }],
    },
    {
      elementName: 'legal',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'legal', typeCode: 'ContractLegal' }],
    },
    {
      elementName: 'rule',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'rule', typeCode: 'ContractRule' }],
    },
    {
      elementName: 'legallyBinding',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'legallyBindingAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'legallyBindingReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Composition',
            'Contract',
            'DocumentReference',
            'QuestionnaireResponse',
          ],
        },
      ],
    },
  ];

  readonly resourceType = 'Contract';

  /** Contract number (0..*) */
  identifier?: Identifier[];

  /** Basal definition (0..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** Business edition (0..1) */
  version?: string;
  /** Id and extensions of the primitive `version`. */
  _version?: Element;

  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (0..1) */
  status?: valueSetCodes.ContractResourceStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Negotiation status (0..1) */
  legalState?: CodeableConcept;

  /** Source Contract Definition (0..1) */
  instantiatesCanonical?: Reference;

  /** External Contract Definition (0..1) */
  instantiatesUri?: string;
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: Element;

  /** Content derived from the basal information (0..1) */
  contentDerivative?: CodeableConcept;

  /** When this Contract was issued (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Effective time (0..1) */
  applies?: Period;

  /** Contract cessation cause (0..1) */
  expirationType?: CodeableConcept;

  /** Contract Target Entity (0..*) */
  subject?: Reference[];

  /** Authority under which this Contract has standing (0..*) */
  authority?: Reference[];

  /** A sphere of control governed by an authoritative jurisdiction, organization, or person (0..*) */
  domain?: Reference[];

  /** Specific Location (0..*) */
  site?: Reference[];

  /** Computer friendly designation (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Human Friendly name (0..1) */
  title?: string;
  /** Id and extensions of the primitive `title`. */
  _title?: Element;

  /** Subordinate Friendly name (0..1) */
  subtitle?: string;
  /** Id and extensions of the primitive `subtitle`. */
  _subtitle?: Element;

  /** Acronym or short name (0..*) */
  alias?: string[];
  /** Id and extensions of the primitive `alias`. */
  _alias?: (Element | null)[];

  /** Source of Contract (0..1) */
  author?: Reference;

  /** Range of Legal Concerns (0..1) */
  scope?: CodeableConcept;

  /** Focus of contract interest (0..1) */
  topicCodeableConcept?: CodeableConcept;
  /** Focus of contract interest (0..1) */
  topicReference?: Reference;

  /** Legal instrument category (0..1) */
  type?: CodeableConcept;

  /** Subtype within the context of type (0..*) */
  subType?: CodeableConcept[];

  /** Contract precursor content (0..1) */
  contentDefinition?: ContractContentDefinition;

  /** Contract Term List (0..*) */
  term?: ContractTerm[];

  /** Extra Information (0..*) */
  supportingInfo?: Reference[];

  /** Key event in Contract History (0..*) */
  relevantHistory?: Reference[];

  /** Contract Signatory (0..*) */
  signer?: ContractSigner[];

  /** Contract Friendly Language (0..*) */
  friendly?: ContractFriendly[];

  /** Contract Legal Language (0..*) */
  legal?: ContractLegal[];

  /** Computable Contract Language (0..*) */
  rule?: ContractRule[];

  /** Binding Contract (0..1) */
  legallyBindingAttachment?: Attachment;
  /** Binding Contract (0..1) */
  legallyBindingReference?: Reference;

  override fhirType(): string {
    return 'Contract';
  }

  /** FHIR JSON for this Contract, typed as the plain `Contract` data type. */
  override toJSON(): plainTypes.Contract {
    return this.serialize() as plainTypes.Contract;
  }

  /** Contract number (0..*) Never undefined; an empty list is created when absent. */
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

  /** Basal definition (0..1) */
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

  /** Business edition (0..1) */
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

  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (0..1) */
  getStatus(): valueSetCodes.ContractResourceStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.ContractResourceStatusCodes | undefined): this {
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

  /** Negotiation status (0..1) Created when absent. */
  getLegalState(): CodeableConcept {
    if (this.legalState === undefined) {
      this.legalState = new CodeableConcept();
    }
    return this.legalState;
  }

  setLegalState(legalState: CodeableConcept | undefined): this {
    return this.setFieldValue('legalState', legalState);
  }

  hasLegalState(): boolean {
    return this.hasFieldValue('legalState');
  }

  /** Source Contract Definition (0..1) Created when absent. */
  getInstantiatesCanonical(): Reference {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = new Reference();
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: Reference | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** External Contract Definition (0..1) */
  getInstantiatesUri(): string | undefined {
    return this.instantiatesUri;
  }

  /** Sets `instantiatesUri`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setInstantiatesUri(instantiatesUri: string | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** The element carrying the id and extensions of `instantiatesUri`. Created when absent. */
  getInstantiatesUriElement(): Element {
    if (this._instantiatesUri === undefined) {
      this._instantiatesUri = new Element();
    }
    return this._instantiatesUri;
  }

  setInstantiatesUriElement(instantiatesUriElement: Element | undefined): this {
    this._instantiatesUri = instantiatesUriElement;
    return this;
  }

  /** Content derived from the basal information (0..1) Created when absent. */
  getContentDerivative(): CodeableConcept {
    if (this.contentDerivative === undefined) {
      this.contentDerivative = new CodeableConcept();
    }
    return this.contentDerivative;
  }

  setContentDerivative(contentDerivative: CodeableConcept | undefined): this {
    return this.setFieldValue('contentDerivative', contentDerivative);
  }

  hasContentDerivative(): boolean {
    return this.hasFieldValue('contentDerivative');
  }

  /** When this Contract was issued (0..1) */
  getIssued(): string | undefined {
    return this.issued;
  }

  /** Sets `issued`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setIssued(issued: string | undefined): this {
    return this.setFieldValue('issued', issued);
  }

  hasIssued(): boolean {
    return this.hasFieldValue('issued');
  }

  /** The element carrying the id and extensions of `issued`. Created when absent. */
  getIssuedElement(): Element {
    if (this._issued === undefined) {
      this._issued = new Element();
    }
    return this._issued;
  }

  setIssuedElement(issuedElement: Element | undefined): this {
    this._issued = issuedElement;
    return this;
  }

  /** Effective time (0..1) Created when absent. */
  getApplies(): Period {
    if (this.applies === undefined) {
      this.applies = new Period();
    }
    return this.applies;
  }

  setApplies(applies: Period | undefined): this {
    return this.setFieldValue('applies', applies);
  }

  hasApplies(): boolean {
    return this.hasFieldValue('applies');
  }

  /** Contract cessation cause (0..1) Created when absent. */
  getExpirationType(): CodeableConcept {
    if (this.expirationType === undefined) {
      this.expirationType = new CodeableConcept();
    }
    return this.expirationType;
  }

  setExpirationType(expirationType: CodeableConcept | undefined): this {
    return this.setFieldValue('expirationType', expirationType);
  }

  hasExpirationType(): boolean {
    return this.hasFieldValue('expirationType');
  }

  /** Contract Target Entity (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): Reference[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: Reference[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty Reference to `subject` and returns it so it can be filled in. */
  addSubject(): Reference;
  /** Appends the given Reference to `subject` and returns this object for chaining. */
  addSubject(reference: Reference): this;
  addSubject(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('subject', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('subject', createdReference);
    return createdReference;
  }

  /** The first Reference of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): Reference {
    const firstReference = this.getSubject()[0];
    return firstReference === undefined ? this.addSubject() : firstReference;
  }

  /** Authority under which this Contract has standing (0..*) Never undefined; an empty list is created when absent. */
  getAuthority(): Reference[] {
    if (this.authority === undefined) {
      this.authority = [];
    }
    return this.authority;
  }

  setAuthority(authority: Reference[] | undefined): this {
    return this.setFieldValue('authority', authority);
  }

  hasAuthority(): boolean {
    return this.hasFieldValue('authority');
  }

  /** Appends a new, empty Reference to `authority` and returns it so it can be filled in. */
  addAuthority(): Reference;
  /** Appends the given Reference to `authority` and returns this object for chaining. */
  addAuthority(reference: Reference): this;
  addAuthority(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('authority', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('authority', createdReference);
    return createdReference;
  }

  /** The first Reference of `authority`. One is added when the list is empty. */
  getAuthorityFirstRep(): Reference {
    const firstReference = this.getAuthority()[0];
    return firstReference === undefined ? this.addAuthority() : firstReference;
  }

  /** A sphere of control governed by an authoritative jurisdiction, organization, or person (0..*) Never undefined; an empty list is created when absent. */
  getDomain(): Reference[] {
    if (this.domain === undefined) {
      this.domain = [];
    }
    return this.domain;
  }

  setDomain(domain: Reference[] | undefined): this {
    return this.setFieldValue('domain', domain);
  }

  hasDomain(): boolean {
    return this.hasFieldValue('domain');
  }

  /** Appends a new, empty Reference to `domain` and returns it so it can be filled in. */
  addDomain(): Reference;
  /** Appends the given Reference to `domain` and returns this object for chaining. */
  addDomain(reference: Reference): this;
  addDomain(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('domain', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('domain', createdReference);
    return createdReference;
  }

  /** The first Reference of `domain`. One is added when the list is empty. */
  getDomainFirstRep(): Reference {
    const firstReference = this.getDomain()[0];
    return firstReference === undefined ? this.addDomain() : firstReference;
  }

  /** Specific Location (0..*) Never undefined; an empty list is created when absent. */
  getSite(): Reference[] {
    if (this.site === undefined) {
      this.site = [];
    }
    return this.site;
  }

  setSite(site: Reference[] | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** Appends a new, empty Reference to `site` and returns it so it can be filled in. */
  addSite(): Reference;
  /** Appends the given Reference to `site` and returns this object for chaining. */
  addSite(reference: Reference): this;
  addSite(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('site', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('site', createdReference);
    return createdReference;
  }

  /** The first Reference of `site`. One is added when the list is empty. */
  getSiteFirstRep(): Reference {
    const firstReference = this.getSite()[0];
    return firstReference === undefined ? this.addSite() : firstReference;
  }

  /** Computer friendly designation (0..1) */
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

  /** Human Friendly name (0..1) */
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

  /** Subordinate Friendly name (0..1) */
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

  /** Acronym or short name (0..*) Never undefined; an empty list is created when absent. */
  getAlias(): string[] {
    if (this.alias === undefined) {
      this.alias = [];
    }
    return this.alias;
  }

  setAlias(alias: string[] | undefined): this {
    return this.setFieldValue('alias', alias);
  }

  hasAlias(): boolean {
    return this.hasFieldValue('alias');
  }

  /** Appends one value to `alias`. Throws a FhirModelError when it is not a valid FHIR string. */
  addAlias(alias: string): this {
    return this.addFieldValue('alias', alias);
  }

  /** Source of Contract (0..1) Created when absent. */
  getAuthor(): Reference {
    if (this.author === undefined) {
      this.author = new Reference();
    }
    return this.author;
  }

  setAuthor(author: Reference | undefined): this {
    return this.setFieldValue('author', author);
  }

  hasAuthor(): boolean {
    return this.hasFieldValue('author');
  }

  /** Range of Legal Concerns (0..1) Created when absent. */
  getScope(): CodeableConcept {
    if (this.scope === undefined) {
      this.scope = new CodeableConcept();
    }
    return this.scope;
  }

  setScope(scope: CodeableConcept | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** Focus of contract interest (0..1) Whichever type of `topic[x]` is set. */
  getTopic(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('topic');
  }

  /** True when any type of `topic[x]` is set. */
  hasTopic(): boolean {
    return this.hasChoiceValue('topic');
  }

  getTopicCodeableConcept(): CodeableConcept | undefined {
    return this.topicCodeableConcept;
  }

  /** Sets `topic[x]` as CodeableConcept and clears every other type of it. */
  setTopicCodeableConcept(topicCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('topicCodeableConcept', topicCodeableConcept);
  }

  hasTopicCodeableConcept(): boolean {
    return this.hasFieldValue('topicCodeableConcept');
  }

  getTopicReference(): Reference | undefined {
    return this.topicReference;
  }

  /** Sets `topic[x]` as Reference and clears every other type of it. */
  setTopicReference(topicReference: Reference | undefined): this {
    return this.setFieldValue('topicReference', topicReference);
  }

  hasTopicReference(): boolean {
    return this.hasFieldValue('topicReference');
  }

  /** Legal instrument category (0..1) Created when absent. */
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

  /** Subtype within the context of type (0..*) Never undefined; an empty list is created when absent. */
  getSubType(): CodeableConcept[] {
    if (this.subType === undefined) {
      this.subType = [];
    }
    return this.subType;
  }

  setSubType(subType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subType', subType);
  }

  hasSubType(): boolean {
    return this.hasFieldValue('subType');
  }

  /** Appends a new, empty CodeableConcept to `subType` and returns it so it can be filled in. */
  addSubType(): CodeableConcept;
  /** Appends the given CodeableConcept to `subType` and returns this object for chaining. */
  addSubType(codeableConcept: CodeableConcept): this;
  addSubType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subType`. One is added when the list is empty. */
  getSubTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubType()[0];
    return firstCodeableConcept === undefined ? this.addSubType() : firstCodeableConcept;
  }

  /** Contract precursor content (0..1) Created when absent. */
  getContentDefinition(): ContractContentDefinition {
    if (this.contentDefinition === undefined) {
      this.contentDefinition = new ContractContentDefinition();
    }
    return this.contentDefinition;
  }

  setContentDefinition(contentDefinition: ContractContentDefinition | undefined): this {
    return this.setFieldValue('contentDefinition', contentDefinition);
  }

  hasContentDefinition(): boolean {
    return this.hasFieldValue('contentDefinition');
  }

  /** Contract Term List (0..*) Never undefined; an empty list is created when absent. */
  getTerm(): ContractTerm[] {
    if (this.term === undefined) {
      this.term = [];
    }
    return this.term;
  }

  setTerm(term: ContractTerm[] | undefined): this {
    return this.setFieldValue('term', term);
  }

  hasTerm(): boolean {
    return this.hasFieldValue('term');
  }

  /** Appends a new, empty ContractTerm to `term` and returns it so it can be filled in. */
  addTerm(): ContractTerm;
  /** Appends the given ContractTerm to `term` and returns this object for chaining. */
  addTerm(contractTerm: ContractTerm): this;
  addTerm(contractTerm?: ContractTerm): ContractTerm | this {
    if (contractTerm !== undefined) {
      return this.addFieldValue('term', contractTerm);
    }
    const createdContractTerm = new ContractTerm();
    this.addFieldValue('term', createdContractTerm);
    return createdContractTerm;
  }

  /** The first ContractTerm of `term`. One is added when the list is empty. */
  getTermFirstRep(): ContractTerm {
    const firstContractTerm = this.getTerm()[0];
    return firstContractTerm === undefined ? this.addTerm() : firstContractTerm;
  }

  /** Extra Information (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInfo(): Reference[] {
    if (this.supportingInfo === undefined) {
      this.supportingInfo = [];
    }
    return this.supportingInfo;
  }

  setSupportingInfo(supportingInfo: Reference[] | undefined): this {
    return this.setFieldValue('supportingInfo', supportingInfo);
  }

  hasSupportingInfo(): boolean {
    return this.hasFieldValue('supportingInfo');
  }

  /** Appends a new, empty Reference to `supportingInfo` and returns it so it can be filled in. */
  addSupportingInfo(): Reference;
  /** Appends the given Reference to `supportingInfo` and returns this object for chaining. */
  addSupportingInfo(reference: Reference): this;
  addSupportingInfo(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingInfo', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingInfo', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingInfo`. One is added when the list is empty. */
  getSupportingInfoFirstRep(): Reference {
    const firstReference = this.getSupportingInfo()[0];
    return firstReference === undefined ? this.addSupportingInfo() : firstReference;
  }

  /** Key event in Contract History (0..*) Never undefined; an empty list is created when absent. */
  getRelevantHistory(): Reference[] {
    if (this.relevantHistory === undefined) {
      this.relevantHistory = [];
    }
    return this.relevantHistory;
  }

  setRelevantHistory(relevantHistory: Reference[] | undefined): this {
    return this.setFieldValue('relevantHistory', relevantHistory);
  }

  hasRelevantHistory(): boolean {
    return this.hasFieldValue('relevantHistory');
  }

  /** Appends a new, empty Reference to `relevantHistory` and returns it so it can be filled in. */
  addRelevantHistory(): Reference;
  /** Appends the given Reference to `relevantHistory` and returns this object for chaining. */
  addRelevantHistory(reference: Reference): this;
  addRelevantHistory(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('relevantHistory', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('relevantHistory', createdReference);
    return createdReference;
  }

  /** The first Reference of `relevantHistory`. One is added when the list is empty. */
  getRelevantHistoryFirstRep(): Reference {
    const firstReference = this.getRelevantHistory()[0];
    return firstReference === undefined ? this.addRelevantHistory() : firstReference;
  }

  /** Contract Signatory (0..*) Never undefined; an empty list is created when absent. */
  getSigner(): ContractSigner[] {
    if (this.signer === undefined) {
      this.signer = [];
    }
    return this.signer;
  }

  setSigner(signer: ContractSigner[] | undefined): this {
    return this.setFieldValue('signer', signer);
  }

  hasSigner(): boolean {
    return this.hasFieldValue('signer');
  }

  /** Appends a new, empty ContractSigner to `signer` and returns it so it can be filled in. */
  addSigner(): ContractSigner;
  /** Appends the given ContractSigner to `signer` and returns this object for chaining. */
  addSigner(contractSigner: ContractSigner): this;
  addSigner(contractSigner?: ContractSigner): ContractSigner | this {
    if (contractSigner !== undefined) {
      return this.addFieldValue('signer', contractSigner);
    }
    const createdContractSigner = new ContractSigner();
    this.addFieldValue('signer', createdContractSigner);
    return createdContractSigner;
  }

  /** The first ContractSigner of `signer`. One is added when the list is empty. */
  getSignerFirstRep(): ContractSigner {
    const firstContractSigner = this.getSigner()[0];
    return firstContractSigner === undefined ? this.addSigner() : firstContractSigner;
  }

  /** Contract Friendly Language (0..*) Never undefined; an empty list is created when absent. */
  getFriendly(): ContractFriendly[] {
    if (this.friendly === undefined) {
      this.friendly = [];
    }
    return this.friendly;
  }

  setFriendly(friendly: ContractFriendly[] | undefined): this {
    return this.setFieldValue('friendly', friendly);
  }

  hasFriendly(): boolean {
    return this.hasFieldValue('friendly');
  }

  /** Appends a new, empty ContractFriendly to `friendly` and returns it so it can be filled in. */
  addFriendly(): ContractFriendly;
  /** Appends the given ContractFriendly to `friendly` and returns this object for chaining. */
  addFriendly(contractFriendly: ContractFriendly): this;
  addFriendly(contractFriendly?: ContractFriendly): ContractFriendly | this {
    if (contractFriendly !== undefined) {
      return this.addFieldValue('friendly', contractFriendly);
    }
    const createdContractFriendly = new ContractFriendly();
    this.addFieldValue('friendly', createdContractFriendly);
    return createdContractFriendly;
  }

  /** The first ContractFriendly of `friendly`. One is added when the list is empty. */
  getFriendlyFirstRep(): ContractFriendly {
    const firstContractFriendly = this.getFriendly()[0];
    return firstContractFriendly === undefined ? this.addFriendly() : firstContractFriendly;
  }

  /** Contract Legal Language (0..*) Never undefined; an empty list is created when absent. */
  getLegal(): ContractLegal[] {
    if (this.legal === undefined) {
      this.legal = [];
    }
    return this.legal;
  }

  setLegal(legal: ContractLegal[] | undefined): this {
    return this.setFieldValue('legal', legal);
  }

  hasLegal(): boolean {
    return this.hasFieldValue('legal');
  }

  /** Appends a new, empty ContractLegal to `legal` and returns it so it can be filled in. */
  addLegal(): ContractLegal;
  /** Appends the given ContractLegal to `legal` and returns this object for chaining. */
  addLegal(contractLegal: ContractLegal): this;
  addLegal(contractLegal?: ContractLegal): ContractLegal | this {
    if (contractLegal !== undefined) {
      return this.addFieldValue('legal', contractLegal);
    }
    const createdContractLegal = new ContractLegal();
    this.addFieldValue('legal', createdContractLegal);
    return createdContractLegal;
  }

  /** The first ContractLegal of `legal`. One is added when the list is empty. */
  getLegalFirstRep(): ContractLegal {
    const firstContractLegal = this.getLegal()[0];
    return firstContractLegal === undefined ? this.addLegal() : firstContractLegal;
  }

  /** Computable Contract Language (0..*) Never undefined; an empty list is created when absent. */
  getRule(): ContractRule[] {
    if (this.rule === undefined) {
      this.rule = [];
    }
    return this.rule;
  }

  setRule(rule: ContractRule[] | undefined): this {
    return this.setFieldValue('rule', rule);
  }

  hasRule(): boolean {
    return this.hasFieldValue('rule');
  }

  /** Appends a new, empty ContractRule to `rule` and returns it so it can be filled in. */
  addRule(): ContractRule;
  /** Appends the given ContractRule to `rule` and returns this object for chaining. */
  addRule(contractRule: ContractRule): this;
  addRule(contractRule?: ContractRule): ContractRule | this {
    if (contractRule !== undefined) {
      return this.addFieldValue('rule', contractRule);
    }
    const createdContractRule = new ContractRule();
    this.addFieldValue('rule', createdContractRule);
    return createdContractRule;
  }

  /** The first ContractRule of `rule`. One is added when the list is empty. */
  getRuleFirstRep(): ContractRule {
    const firstContractRule = this.getRule()[0];
    return firstContractRule === undefined ? this.addRule() : firstContractRule;
  }

  /** Binding Contract (0..1) Whichever type of `legallyBinding[x]` is set. */
  getLegallyBinding(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('legallyBinding');
  }

  /** True when any type of `legallyBinding[x]` is set. */
  hasLegallyBinding(): boolean {
    return this.hasChoiceValue('legallyBinding');
  }

  getLegallyBindingAttachment(): Attachment | undefined {
    return this.legallyBindingAttachment;
  }

  /** Sets `legallyBinding[x]` as Attachment and clears every other type of it. */
  setLegallyBindingAttachment(legallyBindingAttachment: Attachment | undefined): this {
    return this.setFieldValue('legallyBindingAttachment', legallyBindingAttachment);
  }

  hasLegallyBindingAttachment(): boolean {
    return this.hasFieldValue('legallyBindingAttachment');
  }

  getLegallyBindingReference(): Reference | undefined {
    return this.legallyBindingReference;
  }

  /** Sets `legallyBinding[x]` as Reference and clears every other type of it. */
  setLegallyBindingReference(legallyBindingReference: Reference | undefined): this {
    return this.setFieldValue('legallyBindingReference', legallyBindingReference);
  }

  hasLegallyBindingReference(): boolean {
    return this.hasFieldValue('legallyBindingReference');
  }
}

modelTypeRegistry.register('Contract', Contract, true);

/** True when the value is a Contract model instance. */
export function isContract(candidate: unknown): candidate is Contract {
  return candidate instanceof Contract;
}

/**
 * Contract precursor content
 */
export class ContractContentDefinition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'publisher',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'publisher',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'publicationDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'publicationDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'publicationStatus',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'publicationStatus',
          typeCode: 'code',
          allowedCodes: valueSetCodes.ContractResourcePublicationStatusCodes,
        },
      ],
    },
    {
      elementName: 'copyright',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'copyright', typeCode: 'markdown' }],
    },
  ];

  /** Content structure and use (1..1) */
  type?: CodeableConcept;

  /** Detailed Content Type Definition (0..1) */
  subType?: CodeableConcept;

  /** Publisher Entity (0..1) */
  publisher?: Reference;

  /** When published (0..1) */
  publicationDate?: string;
  /** Id and extensions of the primitive `publicationDate`. */
  _publicationDate?: Element;

  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (1..1) */
  publicationStatus?: valueSetCodes.ContractResourcePublicationStatusCodes;
  /** Id and extensions of the primitive `publicationStatus`. */
  _publicationStatus?: Element;

  /** Publication Ownership (0..1) */
  copyright?: string;
  /** Id and extensions of the primitive `copyright`. */
  _copyright?: Element;

  override fhirType(): string {
    return 'Contract.contentDefinition';
  }

  /** FHIR JSON for this ContractContentDefinition, typed as the plain `ContractContentDefinition` data type. */
  override toJSON(): plainTypes.ContractContentDefinition {
    return this.serialize() as plainTypes.ContractContentDefinition;
  }

  /** Content structure and use (1..1) Created when absent. */
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

  /** Detailed Content Type Definition (0..1) Created when absent. */
  getSubType(): CodeableConcept {
    if (this.subType === undefined) {
      this.subType = new CodeableConcept();
    }
    return this.subType;
  }

  setSubType(subType: CodeableConcept | undefined): this {
    return this.setFieldValue('subType', subType);
  }

  hasSubType(): boolean {
    return this.hasFieldValue('subType');
  }

  /** Publisher Entity (0..1) Created when absent. */
  getPublisher(): Reference {
    if (this.publisher === undefined) {
      this.publisher = new Reference();
    }
    return this.publisher;
  }

  setPublisher(publisher: Reference | undefined): this {
    return this.setFieldValue('publisher', publisher);
  }

  hasPublisher(): boolean {
    return this.hasFieldValue('publisher');
  }

  /** When published (0..1) */
  getPublicationDate(): string | undefined {
    return this.publicationDate;
  }

  /** Sets `publicationDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPublicationDate(publicationDate: string | undefined): this {
    return this.setFieldValue('publicationDate', publicationDate);
  }

  hasPublicationDate(): boolean {
    return this.hasFieldValue('publicationDate');
  }

  /** The element carrying the id and extensions of `publicationDate`. Created when absent. */
  getPublicationDateElement(): Element {
    if (this._publicationDate === undefined) {
      this._publicationDate = new Element();
    }
    return this._publicationDate;
  }

  setPublicationDateElement(publicationDateElement: Element | undefined): this {
    this._publicationDate = publicationDateElement;
    return this;
  }

  /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated (1..1) */
  getPublicationStatus(): valueSetCodes.ContractResourcePublicationStatusCodes | undefined {
    return this.publicationStatus;
  }

  /** Sets `publicationStatus`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setPublicationStatus(
    publicationStatus: valueSetCodes.ContractResourcePublicationStatusCodes | undefined
  ): this {
    return this.setFieldValue('publicationStatus', publicationStatus);
  }

  hasPublicationStatus(): boolean {
    return this.hasFieldValue('publicationStatus');
  }

  /** The element carrying the id and extensions of `publicationStatus`. Created when absent. */
  getPublicationStatusElement(): Element {
    if (this._publicationStatus === undefined) {
      this._publicationStatus = new Element();
    }
    return this._publicationStatus;
  }

  setPublicationStatusElement(publicationStatusElement: Element | undefined): this {
    this._publicationStatus = publicationStatusElement;
    return this;
  }

  /** Publication Ownership (0..1) */
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
}

modelTypeRegistry.register('ContractContentDefinition', ContractContentDefinition, false);

/**
 * Contract Term List
 */
export class ContractTerm extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'issued',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'issued', typeCode: 'dateTime' }],
    },
    {
      elementName: 'applies',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'applies', typeCode: 'Period' }],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'topicCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'topicReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subType',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'securityLabel',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabel', typeCode: 'ContractTermSecurityLabel' }],
    },
    {
      elementName: 'offer',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'offer', typeCode: 'ContractTermOffer' }],
    },
    {
      elementName: 'asset',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'asset', typeCode: 'ContractTermAsset' }],
    },
    {
      elementName: 'action',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'action', typeCode: 'ContractTermAction' }],
    },
    {
      elementName: 'group',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'group', typeCode: 'ContractTerm' }],
    },
  ];

  /** Contract Term Number (0..1) */
  identifier?: Identifier;

  /** Contract Term Issue Date Time (0..1) */
  issued?: string;
  /** Id and extensions of the primitive `issued`. */
  _issued?: Element;

  /** Contract Term Effective Time (0..1) */
  applies?: Period;

  /** Term Concern (0..1) */
  topicCodeableConcept?: CodeableConcept;
  /** Term Concern (0..1) */
  topicReference?: Reference;

  /** Contract Term Type or Form (0..1) */
  type?: CodeableConcept;

  /** Contract Term Type specific classification (0..1) */
  subType?: CodeableConcept;

  /** Term Statement (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Protection for the Term (0..*) */
  securityLabel?: ContractTermSecurityLabel[];

  /** Context of the Contract term (1..1) */
  offer?: ContractTermOffer;

  /** Contract Term Asset List (0..*) */
  asset?: ContractTermAsset[];

  /** Entity being ascribed responsibility (0..*) */
  action?: ContractTermAction[];

  /** Nested Contract Term Group (0..*) */
  group?: ContractTerm[];

  override fhirType(): string {
    return 'Contract.term';
  }

  /** FHIR JSON for this ContractTerm, typed as the plain `ContractTerm` data type. */
  override toJSON(): plainTypes.ContractTerm {
    return this.serialize() as plainTypes.ContractTerm;
  }

  /** Contract Term Number (0..1) Created when absent. */
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

  /** Contract Term Issue Date Time (0..1) */
  getIssued(): string | undefined {
    return this.issued;
  }

  /** Sets `issued`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setIssued(issued: string | undefined): this {
    return this.setFieldValue('issued', issued);
  }

  hasIssued(): boolean {
    return this.hasFieldValue('issued');
  }

  /** The element carrying the id and extensions of `issued`. Created when absent. */
  getIssuedElement(): Element {
    if (this._issued === undefined) {
      this._issued = new Element();
    }
    return this._issued;
  }

  setIssuedElement(issuedElement: Element | undefined): this {
    this._issued = issuedElement;
    return this;
  }

  /** Contract Term Effective Time (0..1) Created when absent. */
  getApplies(): Period {
    if (this.applies === undefined) {
      this.applies = new Period();
    }
    return this.applies;
  }

  setApplies(applies: Period | undefined): this {
    return this.setFieldValue('applies', applies);
  }

  hasApplies(): boolean {
    return this.hasFieldValue('applies');
  }

  /** Term Concern (0..1) Whichever type of `topic[x]` is set. */
  getTopic(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('topic');
  }

  /** True when any type of `topic[x]` is set. */
  hasTopic(): boolean {
    return this.hasChoiceValue('topic');
  }

  getTopicCodeableConcept(): CodeableConcept | undefined {
    return this.topicCodeableConcept;
  }

  /** Sets `topic[x]` as CodeableConcept and clears every other type of it. */
  setTopicCodeableConcept(topicCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('topicCodeableConcept', topicCodeableConcept);
  }

  hasTopicCodeableConcept(): boolean {
    return this.hasFieldValue('topicCodeableConcept');
  }

  getTopicReference(): Reference | undefined {
    return this.topicReference;
  }

  /** Sets `topic[x]` as Reference and clears every other type of it. */
  setTopicReference(topicReference: Reference | undefined): this {
    return this.setFieldValue('topicReference', topicReference);
  }

  hasTopicReference(): boolean {
    return this.hasFieldValue('topicReference');
  }

  /** Contract Term Type or Form (0..1) Created when absent. */
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

  /** Contract Term Type specific classification (0..1) Created when absent. */
  getSubType(): CodeableConcept {
    if (this.subType === undefined) {
      this.subType = new CodeableConcept();
    }
    return this.subType;
  }

  setSubType(subType: CodeableConcept | undefined): this {
    return this.setFieldValue('subType', subType);
  }

  hasSubType(): boolean {
    return this.hasFieldValue('subType');
  }

  /** Term Statement (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Protection for the Term (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabel(): ContractTermSecurityLabel[] {
    if (this.securityLabel === undefined) {
      this.securityLabel = [];
    }
    return this.securityLabel;
  }

  setSecurityLabel(securityLabel: ContractTermSecurityLabel[] | undefined): this {
    return this.setFieldValue('securityLabel', securityLabel);
  }

  hasSecurityLabel(): boolean {
    return this.hasFieldValue('securityLabel');
  }

  /** Appends a new, empty ContractTermSecurityLabel to `securityLabel` and returns it so it can be filled in. */
  addSecurityLabel(): ContractTermSecurityLabel;
  /** Appends the given ContractTermSecurityLabel to `securityLabel` and returns this object for chaining. */
  addSecurityLabel(contractTermSecurityLabel: ContractTermSecurityLabel): this;
  addSecurityLabel(
    contractTermSecurityLabel?: ContractTermSecurityLabel
  ): ContractTermSecurityLabel | this {
    if (contractTermSecurityLabel !== undefined) {
      return this.addFieldValue('securityLabel', contractTermSecurityLabel);
    }
    const createdContractTermSecurityLabel = new ContractTermSecurityLabel();
    this.addFieldValue('securityLabel', createdContractTermSecurityLabel);
    return createdContractTermSecurityLabel;
  }

  /** The first ContractTermSecurityLabel of `securityLabel`. One is added when the list is empty. */
  getSecurityLabelFirstRep(): ContractTermSecurityLabel {
    const firstContractTermSecurityLabel = this.getSecurityLabel()[0];
    return firstContractTermSecurityLabel === undefined
      ? this.addSecurityLabel()
      : firstContractTermSecurityLabel;
  }

  /** Context of the Contract term (1..1) Created when absent. */
  getOffer(): ContractTermOffer {
    if (this.offer === undefined) {
      this.offer = new ContractTermOffer();
    }
    return this.offer;
  }

  setOffer(offer: ContractTermOffer | undefined): this {
    return this.setFieldValue('offer', offer);
  }

  hasOffer(): boolean {
    return this.hasFieldValue('offer');
  }

  /** Contract Term Asset List (0..*) Never undefined; an empty list is created when absent. */
  getAsset(): ContractTermAsset[] {
    if (this.asset === undefined) {
      this.asset = [];
    }
    return this.asset;
  }

  setAsset(asset: ContractTermAsset[] | undefined): this {
    return this.setFieldValue('asset', asset);
  }

  hasAsset(): boolean {
    return this.hasFieldValue('asset');
  }

  /** Appends a new, empty ContractTermAsset to `asset` and returns it so it can be filled in. */
  addAsset(): ContractTermAsset;
  /** Appends the given ContractTermAsset to `asset` and returns this object for chaining. */
  addAsset(contractTermAsset: ContractTermAsset): this;
  addAsset(contractTermAsset?: ContractTermAsset): ContractTermAsset | this {
    if (contractTermAsset !== undefined) {
      return this.addFieldValue('asset', contractTermAsset);
    }
    const createdContractTermAsset = new ContractTermAsset();
    this.addFieldValue('asset', createdContractTermAsset);
    return createdContractTermAsset;
  }

  /** The first ContractTermAsset of `asset`. One is added when the list is empty. */
  getAssetFirstRep(): ContractTermAsset {
    const firstContractTermAsset = this.getAsset()[0];
    return firstContractTermAsset === undefined ? this.addAsset() : firstContractTermAsset;
  }

  /** Entity being ascribed responsibility (0..*) Never undefined; an empty list is created when absent. */
  getAction(): ContractTermAction[] {
    if (this.action === undefined) {
      this.action = [];
    }
    return this.action;
  }

  setAction(action: ContractTermAction[] | undefined): this {
    return this.setFieldValue('action', action);
  }

  hasAction(): boolean {
    return this.hasFieldValue('action');
  }

  /** Appends a new, empty ContractTermAction to `action` and returns it so it can be filled in. */
  addAction(): ContractTermAction;
  /** Appends the given ContractTermAction to `action` and returns this object for chaining. */
  addAction(contractTermAction: ContractTermAction): this;
  addAction(contractTermAction?: ContractTermAction): ContractTermAction | this {
    if (contractTermAction !== undefined) {
      return this.addFieldValue('action', contractTermAction);
    }
    const createdContractTermAction = new ContractTermAction();
    this.addFieldValue('action', createdContractTermAction);
    return createdContractTermAction;
  }

  /** The first ContractTermAction of `action`. One is added when the list is empty. */
  getActionFirstRep(): ContractTermAction {
    const firstContractTermAction = this.getAction()[0];
    return firstContractTermAction === undefined ? this.addAction() : firstContractTermAction;
  }

  /** Nested Contract Term Group (0..*) Never undefined; an empty list is created when absent. */
  getGroup(): ContractTerm[] {
    if (this.group === undefined) {
      this.group = [];
    }
    return this.group;
  }

  setGroup(group: ContractTerm[] | undefined): this {
    return this.setFieldValue('group', group);
  }

  hasGroup(): boolean {
    return this.hasFieldValue('group');
  }

  /** Appends a new, empty ContractTerm to `group` and returns it so it can be filled in. */
  addGroup(): ContractTerm;
  /** Appends the given ContractTerm to `group` and returns this object for chaining. */
  addGroup(contractTerm: ContractTerm): this;
  addGroup(contractTerm?: ContractTerm): ContractTerm | this {
    if (contractTerm !== undefined) {
      return this.addFieldValue('group', contractTerm);
    }
    const createdContractTerm = new ContractTerm();
    this.addFieldValue('group', createdContractTerm);
    return createdContractTerm;
  }

  /** The first ContractTerm of `group`. One is added when the list is empty. */
  getGroupFirstRep(): ContractTerm {
    const firstContractTerm = this.getGroup()[0];
    return firstContractTerm === undefined ? this.addGroup() : firstContractTerm;
  }
}

modelTypeRegistry.register('ContractTerm', ContractTerm, false);

/**
 * Protection for the Term
 */
export class ContractTermSecurityLabel extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'number',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'number', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'classification',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'classification', typeCode: 'Coding' }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'Coding' }],
    },
    {
      elementName: 'control',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'control', typeCode: 'Coding' }],
    },
  ];

  /** Link to Security Labels (0..*) */
  number?: number[];
  /** Id and extensions of the primitive `number`. */
  _number?: (Element | null)[];

  /** Confidentiality Protection (1..1) */
  classification?: Coding;

  /** Applicable Policy (0..*) */
  category?: Coding[];

  /** Handling Instructions (0..*) */
  control?: Coding[];

  override fhirType(): string {
    return 'Contract.term.securityLabel';
  }

  /** FHIR JSON for this ContractTermSecurityLabel, typed as the plain `ContractSecurityLabel` data type. */
  override toJSON(): plainTypes.ContractSecurityLabel {
    return this.serialize() as plainTypes.ContractSecurityLabel;
  }

  /** Link to Security Labels (0..*) Never undefined; an empty list is created when absent. */
  getNumber(): number[] {
    if (this.number === undefined) {
      this.number = [];
    }
    return this.number;
  }

  setNumber(number: number[] | undefined): this {
    return this.setFieldValue('number', number);
  }

  hasNumber(): boolean {
    return this.hasFieldValue('number');
  }

  /** Appends one value to `number`. Throws a FhirModelError when it is not a valid FHIR unsignedInt. */
  addNumber(number: number): this {
    return this.addFieldValue('number', number);
  }

  /** Confidentiality Protection (1..1) Created when absent. */
  getClassification(): Coding {
    if (this.classification === undefined) {
      this.classification = new Coding();
    }
    return this.classification;
  }

  setClassification(classification: Coding | undefined): this {
    return this.setFieldValue('classification', classification);
  }

  hasClassification(): boolean {
    return this.hasFieldValue('classification');
  }

  /** Applicable Policy (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): Coding[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: Coding[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty Coding to `category` and returns it so it can be filled in. */
  addCategory(): Coding;
  /** Appends the given Coding to `category` and returns this object for chaining. */
  addCategory(coding: Coding): this;
  addCategory(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('category', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('category', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): Coding {
    const firstCoding = this.getCategory()[0];
    return firstCoding === undefined ? this.addCategory() : firstCoding;
  }

  /** Handling Instructions (0..*) Never undefined; an empty list is created when absent. */
  getControl(): Coding[] {
    if (this.control === undefined) {
      this.control = [];
    }
    return this.control;
  }

  setControl(control: Coding[] | undefined): this {
    return this.setFieldValue('control', control);
  }

  hasControl(): boolean {
    return this.hasFieldValue('control');
  }

  /** Appends a new, empty Coding to `control` and returns it so it can be filled in. */
  addControl(): Coding;
  /** Appends the given Coding to `control` and returns this object for chaining. */
  addControl(coding: Coding): this;
  addControl(coding?: Coding): Coding | this {
    if (coding !== undefined) {
      return this.addFieldValue('control', coding);
    }
    const createdCoding = new Coding();
    this.addFieldValue('control', createdCoding);
    return createdCoding;
  }

  /** The first Coding of `control`. One is added when the list is empty. */
  getControlFirstRep(): Coding {
    const firstCoding = this.getControl()[0];
    return firstCoding === undefined ? this.addControl() : firstCoding;
  }
}

modelTypeRegistry.register('ContractTermSecurityLabel', ContractTermSecurityLabel, false);

/**
 * Context of the Contract term
 */
export class ContractTermOffer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'party',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'party', typeCode: 'ContractTermOfferParty' }],
    },
    {
      elementName: 'topic',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'topic', typeCode: 'Reference' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'decision',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'decision', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'decisionMode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'decisionMode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'answer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'answer', typeCode: 'ContractTermOfferAnswer' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'securityLabelNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabelNumber', typeCode: 'unsignedInt' }],
    },
  ];

  /** Offer business ID (0..*) */
  identifier?: Identifier[];

  /** Offer Recipient (0..*) */
  party?: ContractTermOfferParty[];

  /** Negotiable offer asset (0..1) */
  topic?: Reference;

  /** Contract Offer Type or Form (0..1) */
  type?: CodeableConcept;

  /** Accepting party choice (0..1) */
  decision?: CodeableConcept;

  /** How decision is conveyed (0..*) */
  decisionMode?: CodeableConcept[];

  /** Response to offer text (0..*) */
  answer?: ContractTermOfferAnswer[];

  /** Human readable offer text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Pointer to text (0..*) */
  linkId?: string[];
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: (Element | null)[];

  /** Offer restriction numbers (0..*) */
  securityLabelNumber?: number[];
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: (Element | null)[];

  override fhirType(): string {
    return 'Contract.term.offer';
  }

  /** FHIR JSON for this ContractTermOffer, typed as the plain `ContractOffer` data type. */
  override toJSON(): plainTypes.ContractOffer {
    return this.serialize() as plainTypes.ContractOffer;
  }

  /** Offer business ID (0..*) Never undefined; an empty list is created when absent. */
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

  /** Offer Recipient (0..*) Never undefined; an empty list is created when absent. */
  getParty(): ContractTermOfferParty[] {
    if (this.party === undefined) {
      this.party = [];
    }
    return this.party;
  }

  setParty(party: ContractTermOfferParty[] | undefined): this {
    return this.setFieldValue('party', party);
  }

  hasParty(): boolean {
    return this.hasFieldValue('party');
  }

  /** Appends a new, empty ContractTermOfferParty to `party` and returns it so it can be filled in. */
  addParty(): ContractTermOfferParty;
  /** Appends the given ContractTermOfferParty to `party` and returns this object for chaining. */
  addParty(contractTermOfferParty: ContractTermOfferParty): this;
  addParty(contractTermOfferParty?: ContractTermOfferParty): ContractTermOfferParty | this {
    if (contractTermOfferParty !== undefined) {
      return this.addFieldValue('party', contractTermOfferParty);
    }
    const createdContractTermOfferParty = new ContractTermOfferParty();
    this.addFieldValue('party', createdContractTermOfferParty);
    return createdContractTermOfferParty;
  }

  /** The first ContractTermOfferParty of `party`. One is added when the list is empty. */
  getPartyFirstRep(): ContractTermOfferParty {
    const firstContractTermOfferParty = this.getParty()[0];
    return firstContractTermOfferParty === undefined
      ? this.addParty()
      : firstContractTermOfferParty;
  }

  /** Negotiable offer asset (0..1) Created when absent. */
  getTopic(): Reference {
    if (this.topic === undefined) {
      this.topic = new Reference();
    }
    return this.topic;
  }

  setTopic(topic: Reference | undefined): this {
    return this.setFieldValue('topic', topic);
  }

  hasTopic(): boolean {
    return this.hasFieldValue('topic');
  }

  /** Contract Offer Type or Form (0..1) Created when absent. */
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

  /** Accepting party choice (0..1) Created when absent. */
  getDecision(): CodeableConcept {
    if (this.decision === undefined) {
      this.decision = new CodeableConcept();
    }
    return this.decision;
  }

  setDecision(decision: CodeableConcept | undefined): this {
    return this.setFieldValue('decision', decision);
  }

  hasDecision(): boolean {
    return this.hasFieldValue('decision');
  }

  /** How decision is conveyed (0..*) Never undefined; an empty list is created when absent. */
  getDecisionMode(): CodeableConcept[] {
    if (this.decisionMode === undefined) {
      this.decisionMode = [];
    }
    return this.decisionMode;
  }

  setDecisionMode(decisionMode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('decisionMode', decisionMode);
  }

  hasDecisionMode(): boolean {
    return this.hasFieldValue('decisionMode');
  }

  /** Appends a new, empty CodeableConcept to `decisionMode` and returns it so it can be filled in. */
  addDecisionMode(): CodeableConcept;
  /** Appends the given CodeableConcept to `decisionMode` and returns this object for chaining. */
  addDecisionMode(codeableConcept: CodeableConcept): this;
  addDecisionMode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('decisionMode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('decisionMode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `decisionMode`. One is added when the list is empty. */
  getDecisionModeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getDecisionMode()[0];
    return firstCodeableConcept === undefined ? this.addDecisionMode() : firstCodeableConcept;
  }

  /** Response to offer text (0..*) Never undefined; an empty list is created when absent. */
  getAnswer(): ContractTermOfferAnswer[] {
    if (this.answer === undefined) {
      this.answer = [];
    }
    return this.answer;
  }

  setAnswer(answer: ContractTermOfferAnswer[] | undefined): this {
    return this.setFieldValue('answer', answer);
  }

  hasAnswer(): boolean {
    return this.hasFieldValue('answer');
  }

  /** Appends a new, empty ContractTermOfferAnswer to `answer` and returns it so it can be filled in. */
  addAnswer(): ContractTermOfferAnswer;
  /** Appends the given ContractTermOfferAnswer to `answer` and returns this object for chaining. */
  addAnswer(contractTermOfferAnswer: ContractTermOfferAnswer): this;
  addAnswer(contractTermOfferAnswer?: ContractTermOfferAnswer): ContractTermOfferAnswer | this {
    if (contractTermOfferAnswer !== undefined) {
      return this.addFieldValue('answer', contractTermOfferAnswer);
    }
    const createdContractTermOfferAnswer = new ContractTermOfferAnswer();
    this.addFieldValue('answer', createdContractTermOfferAnswer);
    return createdContractTermOfferAnswer;
  }

  /** The first ContractTermOfferAnswer of `answer`. One is added when the list is empty. */
  getAnswerFirstRep(): ContractTermOfferAnswer {
    const firstContractTermOfferAnswer = this.getAnswer()[0];
    return firstContractTermOfferAnswer === undefined
      ? this.addAnswer()
      : firstContractTermOfferAnswer;
  }

  /** Human readable offer text (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Pointer to text (0..*) Never undefined; an empty list is created when absent. */
  getLinkId(): string[] {
    if (this.linkId === undefined) {
      this.linkId = [];
    }
    return this.linkId;
  }

  setLinkId(linkId: string[] | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** Appends one value to `linkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addLinkId(linkId: string): this {
    return this.addFieldValue('linkId', linkId);
  }

  /** Offer restriction numbers (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabelNumber(): number[] {
    if (this.securityLabelNumber === undefined) {
      this.securityLabelNumber = [];
    }
    return this.securityLabelNumber;
  }

  setSecurityLabelNumber(securityLabelNumber: number[] | undefined): this {
    return this.setFieldValue('securityLabelNumber', securityLabelNumber);
  }

  hasSecurityLabelNumber(): boolean {
    return this.hasFieldValue('securityLabelNumber');
  }

  /** Appends one value to `securityLabelNumber`. Throws a FhirModelError when it is not a valid FHIR unsignedInt. */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addFieldValue('securityLabelNumber', securityLabelNumber);
  }
}

modelTypeRegistry.register('ContractTermOffer', ContractTermOffer, false);

/**
 * Offer Recipient
 */
export class ContractTermOfferParty extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Referenced entity (1..*) */
  reference?: Reference[];

  /** Participant engagement type (1..1) */
  role?: CodeableConcept;

  override fhirType(): string {
    return 'Contract.term.offer.party';
  }

  /** FHIR JSON for this ContractTermOfferParty, typed as the plain `ContractParty` data type. */
  override toJSON(): plainTypes.ContractParty {
    return this.serialize() as plainTypes.ContractParty;
  }

  /** Referenced entity (1..*) Never undefined; an empty list is created when absent. */
  getReference(): Reference[] {
    if (this.reference === undefined) {
      this.reference = [];
    }
    return this.reference;
  }

  setReference(reference: Reference[] | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Appends a new, empty Reference to `reference` and returns it so it can be filled in. */
  addReference(): Reference;
  /** Appends the given Reference to `reference` and returns this object for chaining. */
  addReference(reference: Reference): this;
  addReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reference`. One is added when the list is empty. */
  getReferenceFirstRep(): Reference {
    const firstReference = this.getReference()[0];
    return firstReference === undefined ? this.addReference() : firstReference;
  }

  /** Participant engagement type (1..1) Created when absent. */
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
}

modelTypeRegistry.register('ContractTermOfferParty', ContractTermOfferParty, false);

/**
 * Response to offer text
 */
export class ContractTermOfferAnswer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'value',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'valueBoolean', typeCode: 'boolean' },
        { jsonKey: 'valueDecimal', typeCode: 'decimal' },
        { jsonKey: 'valueInteger', typeCode: 'integer' },
        { jsonKey: 'valueDate', typeCode: 'date' },
        { jsonKey: 'valueDateTime', typeCode: 'dateTime' },
        { jsonKey: 'valueTime', typeCode: 'time' },
        { jsonKey: 'valueString', typeCode: 'string' },
        { jsonKey: 'valueUri', typeCode: 'uri' },
        { jsonKey: 'valueAttachment', typeCode: 'Attachment' },
        { jsonKey: 'valueCoding', typeCode: 'Coding' },
        { jsonKey: 'valueQuantity', typeCode: 'Quantity' },
        { jsonKey: 'valueReference', typeCode: 'Reference' },
      ],
    },
  ];

  /** The actual answer response (1..1) */
  valueBoolean?: boolean;
  /** Id and extensions of the primitive `valueBoolean`. */
  _valueBoolean?: Element;
  /** The actual answer response (1..1) */
  valueDecimal?: number;
  /** Id and extensions of the primitive `valueDecimal`. */
  _valueDecimal?: Element;
  /** The actual answer response (1..1) */
  valueInteger?: number;
  /** Id and extensions of the primitive `valueInteger`. */
  _valueInteger?: Element;
  /** The actual answer response (1..1) */
  valueDate?: string;
  /** Id and extensions of the primitive `valueDate`. */
  _valueDate?: Element;
  /** The actual answer response (1..1) */
  valueDateTime?: string;
  /** Id and extensions of the primitive `valueDateTime`. */
  _valueDateTime?: Element;
  /** The actual answer response (1..1) */
  valueTime?: string;
  /** Id and extensions of the primitive `valueTime`. */
  _valueTime?: Element;
  /** The actual answer response (1..1) */
  valueString?: string;
  /** Id and extensions of the primitive `valueString`. */
  _valueString?: Element;
  /** The actual answer response (1..1) */
  valueUri?: string;
  /** Id and extensions of the primitive `valueUri`. */
  _valueUri?: Element;
  /** The actual answer response (1..1) */
  valueAttachment?: Attachment;
  /** The actual answer response (1..1) */
  valueCoding?: Coding;
  /** The actual answer response (1..1) */
  valueQuantity?: Quantity;
  /** The actual answer response (1..1) */
  valueReference?: Reference;

  override fhirType(): string {
    return 'Contract.term.offer.answer';
  }

  /** FHIR JSON for this ContractTermOfferAnswer, typed as the plain `ContractAnswer` data type. */
  override toJSON(): plainTypes.ContractAnswer {
    return this.serialize() as plainTypes.ContractAnswer;
  }

  /** The actual answer response (1..1) Whichever type of `value[x]` is set. */
  getValue(): boolean | number | string | Attachment | Coding | Quantity | Reference | undefined {
    return this.getChoiceValue<
      boolean | number | string | Attachment | Coding | Quantity | Reference
    >('value');
  }

  /** True when any type of `value[x]` is set. */
  hasValue(): boolean {
    return this.hasChoiceValue('value');
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

  getValueUri(): string | undefined {
    return this.valueUri;
  }

  /** Sets `value[x]` as uri and clears every other type of it. */
  setValueUri(valueUri: string | undefined): this {
    return this.setFieldValue('valueUri', valueUri);
  }

  hasValueUri(): boolean {
    return this.hasFieldValue('valueUri');
  }

  getValueAttachment(): Attachment | undefined {
    return this.valueAttachment;
  }

  /** Sets `value[x]` as Attachment and clears every other type of it. */
  setValueAttachment(valueAttachment: Attachment | undefined): this {
    return this.setFieldValue('valueAttachment', valueAttachment);
  }

  hasValueAttachment(): boolean {
    return this.hasFieldValue('valueAttachment');
  }

  getValueCoding(): Coding | undefined {
    return this.valueCoding;
  }

  /** Sets `value[x]` as Coding and clears every other type of it. */
  setValueCoding(valueCoding: Coding | undefined): this {
    return this.setFieldValue('valueCoding', valueCoding);
  }

  hasValueCoding(): boolean {
    return this.hasFieldValue('valueCoding');
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

  getValueReference(): Reference | undefined {
    return this.valueReference;
  }

  /** Sets `value[x]` as Reference and clears every other type of it. */
  setValueReference(valueReference: Reference | undefined): this {
    return this.setFieldValue('valueReference', valueReference);
  }

  hasValueReference(): boolean {
    return this.hasFieldValue('valueReference');
  }
}

modelTypeRegistry.register('ContractTermOfferAnswer', ContractTermOfferAnswer, false);

/**
 * Contract Term Asset List
 */
export class ContractTermAsset extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'scope',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'scope', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'typeReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'typeReference', typeCode: 'Reference' }],
    },
    {
      elementName: 'subtype',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subtype', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'relationship',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relationship', typeCode: 'Coding' }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'context', typeCode: 'ContractTermAssetContext' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'string' }],
    },
    {
      elementName: 'periodType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'periodType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'usePeriod',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'usePeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'answer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'answer', typeCode: 'ContractTermOfferAnswer' }],
    },
    {
      elementName: 'securityLabelNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabelNumber', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'valuedItem',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'valuedItem', typeCode: 'ContractTermAssetValuedItem' }],
    },
  ];

  /** Range of asset (0..1) */
  scope?: CodeableConcept;

  /** Asset category (0..*) */
  type?: CodeableConcept[];

  /** Associated entities (0..*) */
  typeReference?: Reference[];

  /** Asset sub-category (0..*) */
  subtype?: CodeableConcept[];

  /** Kinship of the asset (0..1) */
  relationship?: Coding;

  /** Circumstance of the asset (0..*) */
  context?: ContractTermAssetContext[];

  /** Quality desctiption of asset (0..1) */
  condition?: string;
  /** Id and extensions of the primitive `condition`. */
  _condition?: Element;

  /** Asset availability types (0..*) */
  periodType?: CodeableConcept[];

  /** Time period of the asset (0..*) */
  period?: Period[];

  /** Time period (0..*) */
  usePeriod?: Period[];

  /** Asset clause or question text (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Pointer to asset text (0..*) */
  linkId?: string[];
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: (Element | null)[];

  /** Response to assets (0..*) */
  answer?: ContractTermOfferAnswer[];

  /** Asset restriction numbers (0..*) */
  securityLabelNumber?: number[];
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: (Element | null)[];

  /** Contract Valued Item List (0..*) */
  valuedItem?: ContractTermAssetValuedItem[];

  override fhirType(): string {
    return 'Contract.term.asset';
  }

  /** FHIR JSON for this ContractTermAsset, typed as the plain `ContractAsset` data type. */
  override toJSON(): plainTypes.ContractAsset {
    return this.serialize() as plainTypes.ContractAsset;
  }

  /** Range of asset (0..1) Created when absent. */
  getScope(): CodeableConcept {
    if (this.scope === undefined) {
      this.scope = new CodeableConcept();
    }
    return this.scope;
  }

  setScope(scope: CodeableConcept | undefined): this {
    return this.setFieldValue('scope', scope);
  }

  hasScope(): boolean {
    return this.hasFieldValue('scope');
  }

  /** Asset category (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Associated entities (0..*) Never undefined; an empty list is created when absent. */
  getTypeReference(): Reference[] {
    if (this.typeReference === undefined) {
      this.typeReference = [];
    }
    return this.typeReference;
  }

  setTypeReference(typeReference: Reference[] | undefined): this {
    return this.setFieldValue('typeReference', typeReference);
  }

  hasTypeReference(): boolean {
    return this.hasFieldValue('typeReference');
  }

  /** Appends a new, empty Reference to `typeReference` and returns it so it can be filled in. */
  addTypeReference(): Reference;
  /** Appends the given Reference to `typeReference` and returns this object for chaining. */
  addTypeReference(reference: Reference): this;
  addTypeReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('typeReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('typeReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `typeReference`. One is added when the list is empty. */
  getTypeReferenceFirstRep(): Reference {
    const firstReference = this.getTypeReference()[0];
    return firstReference === undefined ? this.addTypeReference() : firstReference;
  }

  /** Asset sub-category (0..*) Never undefined; an empty list is created when absent. */
  getSubtype(): CodeableConcept[] {
    if (this.subtype === undefined) {
      this.subtype = [];
    }
    return this.subtype;
  }

  setSubtype(subtype: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subtype', subtype);
  }

  hasSubtype(): boolean {
    return this.hasFieldValue('subtype');
  }

  /** Appends a new, empty CodeableConcept to `subtype` and returns it so it can be filled in. */
  addSubtype(): CodeableConcept;
  /** Appends the given CodeableConcept to `subtype` and returns this object for chaining. */
  addSubtype(codeableConcept: CodeableConcept): this;
  addSubtype(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subtype', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subtype', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subtype`. One is added when the list is empty. */
  getSubtypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubtype()[0];
    return firstCodeableConcept === undefined ? this.addSubtype() : firstCodeableConcept;
  }

  /** Kinship of the asset (0..1) Created when absent. */
  getRelationship(): Coding {
    if (this.relationship === undefined) {
      this.relationship = new Coding();
    }
    return this.relationship;
  }

  setRelationship(relationship: Coding | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** Circumstance of the asset (0..*) Never undefined; an empty list is created when absent. */
  getContext(): ContractTermAssetContext[] {
    if (this.context === undefined) {
      this.context = [];
    }
    return this.context;
  }

  setContext(context: ContractTermAssetContext[] | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** Appends a new, empty ContractTermAssetContext to `context` and returns it so it can be filled in. */
  addContext(): ContractTermAssetContext;
  /** Appends the given ContractTermAssetContext to `context` and returns this object for chaining. */
  addContext(contractTermAssetContext: ContractTermAssetContext): this;
  addContext(contractTermAssetContext?: ContractTermAssetContext): ContractTermAssetContext | this {
    if (contractTermAssetContext !== undefined) {
      return this.addFieldValue('context', contractTermAssetContext);
    }
    const createdContractTermAssetContext = new ContractTermAssetContext();
    this.addFieldValue('context', createdContractTermAssetContext);
    return createdContractTermAssetContext;
  }

  /** The first ContractTermAssetContext of `context`. One is added when the list is empty. */
  getContextFirstRep(): ContractTermAssetContext {
    const firstContractTermAssetContext = this.getContext()[0];
    return firstContractTermAssetContext === undefined
      ? this.addContext()
      : firstContractTermAssetContext;
  }

  /** Quality desctiption of asset (0..1) */
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

  /** Asset availability types (0..*) Never undefined; an empty list is created when absent. */
  getPeriodType(): CodeableConcept[] {
    if (this.periodType === undefined) {
      this.periodType = [];
    }
    return this.periodType;
  }

  setPeriodType(periodType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('periodType', periodType);
  }

  hasPeriodType(): boolean {
    return this.hasFieldValue('periodType');
  }

  /** Appends a new, empty CodeableConcept to `periodType` and returns it so it can be filled in. */
  addPeriodType(): CodeableConcept;
  /** Appends the given CodeableConcept to `periodType` and returns this object for chaining. */
  addPeriodType(codeableConcept: CodeableConcept): this;
  addPeriodType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('periodType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('periodType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `periodType`. One is added when the list is empty. */
  getPeriodTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPeriodType()[0];
    return firstCodeableConcept === undefined ? this.addPeriodType() : firstCodeableConcept;
  }

  /** Time period of the asset (0..*) Never undefined; an empty list is created when absent. */
  getPeriod(): Period[] {
    if (this.period === undefined) {
      this.period = [];
    }
    return this.period;
  }

  setPeriod(period: Period[] | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Appends a new, empty Period to `period` and returns it so it can be filled in. */
  addPeriod(): Period;
  /** Appends the given Period to `period` and returns this object for chaining. */
  addPeriod(period: Period): this;
  addPeriod(period?: Period): Period | this {
    if (period !== undefined) {
      return this.addFieldValue('period', period);
    }
    const createdPeriod = new Period();
    this.addFieldValue('period', createdPeriod);
    return createdPeriod;
  }

  /** The first Period of `period`. One is added when the list is empty. */
  getPeriodFirstRep(): Period {
    const firstPeriod = this.getPeriod()[0];
    return firstPeriod === undefined ? this.addPeriod() : firstPeriod;
  }

  /** Time period (0..*) Never undefined; an empty list is created when absent. */
  getUsePeriod(): Period[] {
    if (this.usePeriod === undefined) {
      this.usePeriod = [];
    }
    return this.usePeriod;
  }

  setUsePeriod(usePeriod: Period[] | undefined): this {
    return this.setFieldValue('usePeriod', usePeriod);
  }

  hasUsePeriod(): boolean {
    return this.hasFieldValue('usePeriod');
  }

  /** Appends a new, empty Period to `usePeriod` and returns it so it can be filled in. */
  addUsePeriod(): Period;
  /** Appends the given Period to `usePeriod` and returns this object for chaining. */
  addUsePeriod(period: Period): this;
  addUsePeriod(period?: Period): Period | this {
    if (period !== undefined) {
      return this.addFieldValue('usePeriod', period);
    }
    const createdPeriod = new Period();
    this.addFieldValue('usePeriod', createdPeriod);
    return createdPeriod;
  }

  /** The first Period of `usePeriod`. One is added when the list is empty. */
  getUsePeriodFirstRep(): Period {
    const firstPeriod = this.getUsePeriod()[0];
    return firstPeriod === undefined ? this.addUsePeriod() : firstPeriod;
  }

  /** Asset clause or question text (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Pointer to asset text (0..*) Never undefined; an empty list is created when absent. */
  getLinkId(): string[] {
    if (this.linkId === undefined) {
      this.linkId = [];
    }
    return this.linkId;
  }

  setLinkId(linkId: string[] | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** Appends one value to `linkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addLinkId(linkId: string): this {
    return this.addFieldValue('linkId', linkId);
  }

  /** Response to assets (0..*) Never undefined; an empty list is created when absent. */
  getAnswer(): ContractTermOfferAnswer[] {
    if (this.answer === undefined) {
      this.answer = [];
    }
    return this.answer;
  }

  setAnswer(answer: ContractTermOfferAnswer[] | undefined): this {
    return this.setFieldValue('answer', answer);
  }

  hasAnswer(): boolean {
    return this.hasFieldValue('answer');
  }

  /** Appends a new, empty ContractTermOfferAnswer to `answer` and returns it so it can be filled in. */
  addAnswer(): ContractTermOfferAnswer;
  /** Appends the given ContractTermOfferAnswer to `answer` and returns this object for chaining. */
  addAnswer(contractTermOfferAnswer: ContractTermOfferAnswer): this;
  addAnswer(contractTermOfferAnswer?: ContractTermOfferAnswer): ContractTermOfferAnswer | this {
    if (contractTermOfferAnswer !== undefined) {
      return this.addFieldValue('answer', contractTermOfferAnswer);
    }
    const createdContractTermOfferAnswer = new ContractTermOfferAnswer();
    this.addFieldValue('answer', createdContractTermOfferAnswer);
    return createdContractTermOfferAnswer;
  }

  /** The first ContractTermOfferAnswer of `answer`. One is added when the list is empty. */
  getAnswerFirstRep(): ContractTermOfferAnswer {
    const firstContractTermOfferAnswer = this.getAnswer()[0];
    return firstContractTermOfferAnswer === undefined
      ? this.addAnswer()
      : firstContractTermOfferAnswer;
  }

  /** Asset restriction numbers (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabelNumber(): number[] {
    if (this.securityLabelNumber === undefined) {
      this.securityLabelNumber = [];
    }
    return this.securityLabelNumber;
  }

  setSecurityLabelNumber(securityLabelNumber: number[] | undefined): this {
    return this.setFieldValue('securityLabelNumber', securityLabelNumber);
  }

  hasSecurityLabelNumber(): boolean {
    return this.hasFieldValue('securityLabelNumber');
  }

  /** Appends one value to `securityLabelNumber`. Throws a FhirModelError when it is not a valid FHIR unsignedInt. */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addFieldValue('securityLabelNumber', securityLabelNumber);
  }

  /** Contract Valued Item List (0..*) Never undefined; an empty list is created when absent. */
  getValuedItem(): ContractTermAssetValuedItem[] {
    if (this.valuedItem === undefined) {
      this.valuedItem = [];
    }
    return this.valuedItem;
  }

  setValuedItem(valuedItem: ContractTermAssetValuedItem[] | undefined): this {
    return this.setFieldValue('valuedItem', valuedItem);
  }

  hasValuedItem(): boolean {
    return this.hasFieldValue('valuedItem');
  }

  /** Appends a new, empty ContractTermAssetValuedItem to `valuedItem` and returns it so it can be filled in. */
  addValuedItem(): ContractTermAssetValuedItem;
  /** Appends the given ContractTermAssetValuedItem to `valuedItem` and returns this object for chaining. */
  addValuedItem(contractTermAssetValuedItem: ContractTermAssetValuedItem): this;
  addValuedItem(
    contractTermAssetValuedItem?: ContractTermAssetValuedItem
  ): ContractTermAssetValuedItem | this {
    if (contractTermAssetValuedItem !== undefined) {
      return this.addFieldValue('valuedItem', contractTermAssetValuedItem);
    }
    const createdContractTermAssetValuedItem = new ContractTermAssetValuedItem();
    this.addFieldValue('valuedItem', createdContractTermAssetValuedItem);
    return createdContractTermAssetValuedItem;
  }

  /** The first ContractTermAssetValuedItem of `valuedItem`. One is added when the list is empty. */
  getValuedItemFirstRep(): ContractTermAssetValuedItem {
    const firstContractTermAssetValuedItem = this.getValuedItem()[0];
    return firstContractTermAssetValuedItem === undefined
      ? this.addValuedItem()
      : firstContractTermAssetValuedItem;
  }
}

modelTypeRegistry.register('ContractTermAsset', ContractTermAsset, false);

/**
 * Circumstance of the asset
 */
export class ContractTermAssetContext extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reference', typeCode: 'Reference' }],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
  ];

  /** Creator,custodian or owner (0..1) */
  reference?: Reference;

  /** Codeable asset context (0..*) */
  code?: CodeableConcept[];

  /** Context description (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  override fhirType(): string {
    return 'Contract.term.asset.context';
  }

  /** FHIR JSON for this ContractTermAssetContext, typed as the plain `ContractContext` data type. */
  override toJSON(): plainTypes.ContractContext {
    return this.serialize() as plainTypes.ContractContext;
  }

  /** Creator,custodian or owner (0..1) Created when absent. */
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

  /** Codeable asset context (0..*) Never undefined; an empty list is created when absent. */
  getCode(): CodeableConcept[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: CodeableConcept[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty CodeableConcept to `code` and returns it so it can be filled in. */
  addCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `code` and returns this object for chaining. */
  addCode(codeableConcept: CodeableConcept): this;
  addCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('code', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('code', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `code`. One is added when the list is empty. */
  getCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCode()[0];
    return firstCodeableConcept === undefined ? this.addCode() : firstCodeableConcept;
  }

  /** Context description (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }
}

modelTypeRegistry.register('ContractTermAssetContext', ContractTermAssetContext, false);

/**
 * Contract Valued Item List
 */
export class ContractTermAssetValuedItem extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'entity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'entityCodeableConcept', typeCode: 'CodeableConcept' },
        { jsonKey: 'entityReference', typeCode: 'Reference' },
      ],
    },
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'effectiveTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'effectiveTime', typeCode: 'dateTime' }],
    },
    {
      elementName: 'quantity',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'quantity', typeCode: 'Quantity' }],
    },
    {
      elementName: 'unitPrice',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'unitPrice', typeCode: 'Money' }],
    },
    {
      elementName: 'factor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'factor', typeCode: 'decimal' }],
    },
    {
      elementName: 'points',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'points', typeCode: 'decimal' }],
    },
    {
      elementName: 'net',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'net', typeCode: 'Money' }],
    },
    {
      elementName: 'payment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'payment', typeCode: 'string' }],
    },
    {
      elementName: 'paymentDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'paymentDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'responsible',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'responsible',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'recipient',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'recipient',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'securityLabelNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabelNumber', typeCode: 'unsignedInt' }],
    },
  ];

  /** Contract Valued Item Type (0..1) */
  entityCodeableConcept?: CodeableConcept;
  /** Contract Valued Item Type (0..1) */
  entityReference?: Reference;

  /** Contract Valued Item Number (0..1) */
  identifier?: Identifier;

  /** Contract Valued Item Effective Tiem (0..1) */
  effectiveTime?: string;
  /** Id and extensions of the primitive `effectiveTime`. */
  _effectiveTime?: Element;

  /** Count of Contract Valued Items (0..1) */
  quantity?: Quantity;

  /** Contract Valued Item fee, charge, or cost (0..1) */
  unitPrice?: Money;

  /** Contract Valued Item Price Scaling Factor (0..1) */
  factor?: number;
  /** Id and extensions of the primitive `factor`. */
  _factor?: Element;

  /** Contract Valued Item Difficulty Scaling Factor (0..1) */
  points?: number;
  /** Id and extensions of the primitive `points`. */
  _points?: Element;

  /** Total Contract Valued Item Value (0..1) */
  net?: Money;

  /** Terms of valuation (0..1) */
  payment?: string;
  /** Id and extensions of the primitive `payment`. */
  _payment?: Element;

  /** When payment is due (0..1) */
  paymentDate?: string;
  /** Id and extensions of the primitive `paymentDate`. */
  _paymentDate?: Element;

  /** Who will make payment (0..1) */
  responsible?: Reference;

  /** Who will receive payment (0..1) */
  recipient?: Reference;

  /** Pointer to specific item (0..*) */
  linkId?: string[];
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: (Element | null)[];

  /** Security Labels that define affected terms (0..*) */
  securityLabelNumber?: number[];
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: (Element | null)[];

  override fhirType(): string {
    return 'Contract.term.asset.valuedItem';
  }

  /** FHIR JSON for this ContractTermAssetValuedItem, typed as the plain `ContractValuedItem` data type. */
  override toJSON(): plainTypes.ContractValuedItem {
    return this.serialize() as plainTypes.ContractValuedItem;
  }

  /** Contract Valued Item Type (0..1) Whichever type of `entity[x]` is set. */
  getEntity(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('entity');
  }

  /** True when any type of `entity[x]` is set. */
  hasEntity(): boolean {
    return this.hasChoiceValue('entity');
  }

  getEntityCodeableConcept(): CodeableConcept | undefined {
    return this.entityCodeableConcept;
  }

  /** Sets `entity[x]` as CodeableConcept and clears every other type of it. */
  setEntityCodeableConcept(entityCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('entityCodeableConcept', entityCodeableConcept);
  }

  hasEntityCodeableConcept(): boolean {
    return this.hasFieldValue('entityCodeableConcept');
  }

  getEntityReference(): Reference | undefined {
    return this.entityReference;
  }

  /** Sets `entity[x]` as Reference and clears every other type of it. */
  setEntityReference(entityReference: Reference | undefined): this {
    return this.setFieldValue('entityReference', entityReference);
  }

  hasEntityReference(): boolean {
    return this.hasFieldValue('entityReference');
  }

  /** Contract Valued Item Number (0..1) Created when absent. */
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

  /** Contract Valued Item Effective Tiem (0..1) */
  getEffectiveTime(): string | undefined {
    return this.effectiveTime;
  }

  /** Sets `effectiveTime`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setEffectiveTime(effectiveTime: string | undefined): this {
    return this.setFieldValue('effectiveTime', effectiveTime);
  }

  hasEffectiveTime(): boolean {
    return this.hasFieldValue('effectiveTime');
  }

  /** The element carrying the id and extensions of `effectiveTime`. Created when absent. */
  getEffectiveTimeElement(): Element {
    if (this._effectiveTime === undefined) {
      this._effectiveTime = new Element();
    }
    return this._effectiveTime;
  }

  setEffectiveTimeElement(effectiveTimeElement: Element | undefined): this {
    this._effectiveTime = effectiveTimeElement;
    return this;
  }

  /** Count of Contract Valued Items (0..1) Created when absent. */
  getQuantity(): Quantity {
    if (this.quantity === undefined) {
      this.quantity = new Quantity();
    }
    return this.quantity;
  }

  setQuantity(quantity: Quantity | undefined): this {
    return this.setFieldValue('quantity', quantity);
  }

  hasQuantity(): boolean {
    return this.hasFieldValue('quantity');
  }

  /** Contract Valued Item fee, charge, or cost (0..1) Created when absent. */
  getUnitPrice(): Money {
    if (this.unitPrice === undefined) {
      this.unitPrice = new Money();
    }
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: Money | undefined): this {
    return this.setFieldValue('unitPrice', unitPrice);
  }

  hasUnitPrice(): boolean {
    return this.hasFieldValue('unitPrice');
  }

  /** Contract Valued Item Price Scaling Factor (0..1) */
  getFactor(): number | undefined {
    return this.factor;
  }

  /** Sets `factor`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setFactor(factor: number | undefined): this {
    return this.setFieldValue('factor', factor);
  }

  hasFactor(): boolean {
    return this.hasFieldValue('factor');
  }

  /** The element carrying the id and extensions of `factor`. Created when absent. */
  getFactorElement(): Element {
    if (this._factor === undefined) {
      this._factor = new Element();
    }
    return this._factor;
  }

  setFactorElement(factorElement: Element | undefined): this {
    this._factor = factorElement;
    return this;
  }

  /** Contract Valued Item Difficulty Scaling Factor (0..1) */
  getPoints(): number | undefined {
    return this.points;
  }

  /** Sets `points`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setPoints(points: number | undefined): this {
    return this.setFieldValue('points', points);
  }

  hasPoints(): boolean {
    return this.hasFieldValue('points');
  }

  /** The element carrying the id and extensions of `points`. Created when absent. */
  getPointsElement(): Element {
    if (this._points === undefined) {
      this._points = new Element();
    }
    return this._points;
  }

  setPointsElement(pointsElement: Element | undefined): this {
    this._points = pointsElement;
    return this;
  }

  /** Total Contract Valued Item Value (0..1) Created when absent. */
  getNet(): Money {
    if (this.net === undefined) {
      this.net = new Money();
    }
    return this.net;
  }

  setNet(net: Money | undefined): this {
    return this.setFieldValue('net', net);
  }

  hasNet(): boolean {
    return this.hasFieldValue('net');
  }

  /** Terms of valuation (0..1) */
  getPayment(): string | undefined {
    return this.payment;
  }

  /** Sets `payment`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setPayment(payment: string | undefined): this {
    return this.setFieldValue('payment', payment);
  }

  hasPayment(): boolean {
    return this.hasFieldValue('payment');
  }

  /** The element carrying the id and extensions of `payment`. Created when absent. */
  getPaymentElement(): Element {
    if (this._payment === undefined) {
      this._payment = new Element();
    }
    return this._payment;
  }

  setPaymentElement(paymentElement: Element | undefined): this {
    this._payment = paymentElement;
    return this;
  }

  /** When payment is due (0..1) */
  getPaymentDate(): string | undefined {
    return this.paymentDate;
  }

  /** Sets `paymentDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPaymentDate(paymentDate: string | undefined): this {
    return this.setFieldValue('paymentDate', paymentDate);
  }

  hasPaymentDate(): boolean {
    return this.hasFieldValue('paymentDate');
  }

  /** The element carrying the id and extensions of `paymentDate`. Created when absent. */
  getPaymentDateElement(): Element {
    if (this._paymentDate === undefined) {
      this._paymentDate = new Element();
    }
    return this._paymentDate;
  }

  setPaymentDateElement(paymentDateElement: Element | undefined): this {
    this._paymentDate = paymentDateElement;
    return this;
  }

  /** Who will make payment (0..1) Created when absent. */
  getResponsible(): Reference {
    if (this.responsible === undefined) {
      this.responsible = new Reference();
    }
    return this.responsible;
  }

  setResponsible(responsible: Reference | undefined): this {
    return this.setFieldValue('responsible', responsible);
  }

  hasResponsible(): boolean {
    return this.hasFieldValue('responsible');
  }

  /** Who will receive payment (0..1) Created when absent. */
  getRecipient(): Reference {
    if (this.recipient === undefined) {
      this.recipient = new Reference();
    }
    return this.recipient;
  }

  setRecipient(recipient: Reference | undefined): this {
    return this.setFieldValue('recipient', recipient);
  }

  hasRecipient(): boolean {
    return this.hasFieldValue('recipient');
  }

  /** Pointer to specific item (0..*) Never undefined; an empty list is created when absent. */
  getLinkId(): string[] {
    if (this.linkId === undefined) {
      this.linkId = [];
    }
    return this.linkId;
  }

  setLinkId(linkId: string[] | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** Appends one value to `linkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addLinkId(linkId: string): this {
    return this.addFieldValue('linkId', linkId);
  }

  /** Security Labels that define affected terms (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabelNumber(): number[] {
    if (this.securityLabelNumber === undefined) {
      this.securityLabelNumber = [];
    }
    return this.securityLabelNumber;
  }

  setSecurityLabelNumber(securityLabelNumber: number[] | undefined): this {
    return this.setFieldValue('securityLabelNumber', securityLabelNumber);
  }

  hasSecurityLabelNumber(): boolean {
    return this.hasFieldValue('securityLabelNumber');
  }

  /** Appends one value to `securityLabelNumber`. Throws a FhirModelError when it is not a valid FHIR unsignedInt. */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addFieldValue('securityLabelNumber', securityLabelNumber);
  }
}

modelTypeRegistry.register('ContractTermAssetValuedItem', ContractTermAssetValuedItem, false);

/**
 * Entity being ascribed responsibility
 */
export class ContractTermAction extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'doNotPerform',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'doNotPerform', typeCode: 'boolean' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subject', typeCode: 'ContractTermActionSubject' }],
    },
    {
      elementName: 'intent',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'intent', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'linkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'linkId', typeCode: 'string' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
        },
      ],
    },
    {
      elementName: 'contextLinkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contextLinkId', typeCode: 'string' }],
    },
    {
      elementName: 'occurrence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurrenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurrencePeriod', typeCode: 'Period' },
        { jsonKey: 'occurrenceTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'requester',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'requester',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'requesterLinkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'requesterLinkId', typeCode: 'string' }],
    },
    {
      elementName: 'performerType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performerType', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'performerRole',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'performerRole', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'performer',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Location',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
            'Substance',
          ],
        },
      ],
    },
    {
      elementName: 'performerLinkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performerLinkId', typeCode: 'string' }],
    },
    {
      elementName: 'reasonCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reasonReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Condition',
            'DiagnosticReport',
            'DocumentReference',
            'Observation',
            'Questionnaire',
            'QuestionnaireResponse',
          ],
        },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'string' }],
    },
    {
      elementName: 'reasonLinkId',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonLinkId', typeCode: 'string' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'securityLabelNumber',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'securityLabelNumber', typeCode: 'unsignedInt' }],
    },
  ];

  /** True if the term prohibits the action (0..1) */
  doNotPerform?: boolean;
  /** Id and extensions of the primitive `doNotPerform`. */
  _doNotPerform?: Element;

  /** Type or form of the action (1..1) */
  type?: CodeableConcept;

  /** Entity of the action (0..*) */
  subject?: ContractTermActionSubject[];

  /** Purpose for the Contract Term Action (1..1) */
  intent?: CodeableConcept;

  /** Pointer to specific item (0..*) */
  linkId?: string[];
  /** Id and extensions of the primitive `linkId`. */
  _linkId?: (Element | null)[];

  /** State of the action (1..1) */
  status?: CodeableConcept;

  /** Episode associated with action (0..1) */
  context?: Reference;

  /** Pointer to specific item (0..*) */
  contextLinkId?: string[];
  /** Id and extensions of the primitive `contextLinkId`. */
  _contextLinkId?: (Element | null)[];

  /** When action happens (0..1) */
  occurrenceDateTime?: string;
  /** Id and extensions of the primitive `occurrenceDateTime`. */
  _occurrenceDateTime?: Element;
  /** When action happens (0..1) */
  occurrencePeriod?: Period;
  /** When action happens (0..1) */
  occurrenceTiming?: Timing;

  /** Who asked for action (0..*) */
  requester?: Reference[];

  /** Pointer to specific item (0..*) */
  requesterLinkId?: string[];
  /** Id and extensions of the primitive `requesterLinkId`. */
  _requesterLinkId?: (Element | null)[];

  /** Kind of service performer (0..*) */
  performerType?: CodeableConcept[];

  /** Competency of the performer (0..1) */
  performerRole?: CodeableConcept;

  /** Actor that wil execute (or not) the action (0..1) */
  performer?: Reference;

  /** Pointer to specific item (0..*) */
  performerLinkId?: string[];
  /** Id and extensions of the primitive `performerLinkId`. */
  _performerLinkId?: (Element | null)[];

  /** Why is action (not) needed? (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why is action (not) needed? (0..*) */
  reasonReference?: Reference[];

  /** Why action is to be performed (0..*) */
  reason?: string[];
  /** Id and extensions of the primitive `reason`. */
  _reason?: (Element | null)[];

  /** Pointer to specific item (0..*) */
  reasonLinkId?: string[];
  /** Id and extensions of the primitive `reasonLinkId`. */
  _reasonLinkId?: (Element | null)[];

  /** Comments about the action (0..*) */
  note?: Annotation[];

  /** Action restriction numbers (0..*) */
  securityLabelNumber?: number[];
  /** Id and extensions of the primitive `securityLabelNumber`. */
  _securityLabelNumber?: (Element | null)[];

  override fhirType(): string {
    return 'Contract.term.action';
  }

  /** FHIR JSON for this ContractTermAction, typed as the plain `ContractAction` data type. */
  override toJSON(): plainTypes.ContractAction {
    return this.serialize() as plainTypes.ContractAction;
  }

  /** True if the term prohibits the action (0..1) */
  getDoNotPerform(): boolean | undefined {
    return this.doNotPerform;
  }

  /** Sets `doNotPerform`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setDoNotPerform(doNotPerform: boolean | undefined): this {
    return this.setFieldValue('doNotPerform', doNotPerform);
  }

  hasDoNotPerform(): boolean {
    return this.hasFieldValue('doNotPerform');
  }

  /** The element carrying the id and extensions of `doNotPerform`. Created when absent. */
  getDoNotPerformElement(): Element {
    if (this._doNotPerform === undefined) {
      this._doNotPerform = new Element();
    }
    return this._doNotPerform;
  }

  setDoNotPerformElement(doNotPerformElement: Element | undefined): this {
    this._doNotPerform = doNotPerformElement;
    return this;
  }

  /** Type or form of the action (1..1) Created when absent. */
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

  /** Entity of the action (0..*) Never undefined; an empty list is created when absent. */
  getSubject(): ContractTermActionSubject[] {
    if (this.subject === undefined) {
      this.subject = [];
    }
    return this.subject;
  }

  setSubject(subject: ContractTermActionSubject[] | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Appends a new, empty ContractTermActionSubject to `subject` and returns it so it can be filled in. */
  addSubject(): ContractTermActionSubject;
  /** Appends the given ContractTermActionSubject to `subject` and returns this object for chaining. */
  addSubject(contractTermActionSubject: ContractTermActionSubject): this;
  addSubject(
    contractTermActionSubject?: ContractTermActionSubject
  ): ContractTermActionSubject | this {
    if (contractTermActionSubject !== undefined) {
      return this.addFieldValue('subject', contractTermActionSubject);
    }
    const createdContractTermActionSubject = new ContractTermActionSubject();
    this.addFieldValue('subject', createdContractTermActionSubject);
    return createdContractTermActionSubject;
  }

  /** The first ContractTermActionSubject of `subject`. One is added when the list is empty. */
  getSubjectFirstRep(): ContractTermActionSubject {
    const firstContractTermActionSubject = this.getSubject()[0];
    return firstContractTermActionSubject === undefined
      ? this.addSubject()
      : firstContractTermActionSubject;
  }

  /** Purpose for the Contract Term Action (1..1) Created when absent. */
  getIntent(): CodeableConcept {
    if (this.intent === undefined) {
      this.intent = new CodeableConcept();
    }
    return this.intent;
  }

  setIntent(intent: CodeableConcept | undefined): this {
    return this.setFieldValue('intent', intent);
  }

  hasIntent(): boolean {
    return this.hasFieldValue('intent');
  }

  /** Pointer to specific item (0..*) Never undefined; an empty list is created when absent. */
  getLinkId(): string[] {
    if (this.linkId === undefined) {
      this.linkId = [];
    }
    return this.linkId;
  }

  setLinkId(linkId: string[] | undefined): this {
    return this.setFieldValue('linkId', linkId);
  }

  hasLinkId(): boolean {
    return this.hasFieldValue('linkId');
  }

  /** Appends one value to `linkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addLinkId(linkId: string): this {
    return this.addFieldValue('linkId', linkId);
  }

  /** State of the action (1..1) Created when absent. */
  getStatus(): CodeableConcept {
    if (this.status === undefined) {
      this.status = new CodeableConcept();
    }
    return this.status;
  }

  setStatus(status: CodeableConcept | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** Episode associated with action (0..1) Created when absent. */
  getContext(): Reference {
    if (this.context === undefined) {
      this.context = new Reference();
    }
    return this.context;
  }

  setContext(context: Reference | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** Pointer to specific item (0..*) Never undefined; an empty list is created when absent. */
  getContextLinkId(): string[] {
    if (this.contextLinkId === undefined) {
      this.contextLinkId = [];
    }
    return this.contextLinkId;
  }

  setContextLinkId(contextLinkId: string[] | undefined): this {
    return this.setFieldValue('contextLinkId', contextLinkId);
  }

  hasContextLinkId(): boolean {
    return this.hasFieldValue('contextLinkId');
  }

  /** Appends one value to `contextLinkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addContextLinkId(contextLinkId: string): this {
    return this.addFieldValue('contextLinkId', contextLinkId);
  }

  /** When action happens (0..1) Whichever type of `occurrence[x]` is set. */
  getOccurrence(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('occurrence');
  }

  /** True when any type of `occurrence[x]` is set. */
  hasOccurrence(): boolean {
    return this.hasChoiceValue('occurrence');
  }

  getOccurrenceDateTime(): string | undefined {
    return this.occurrenceDateTime;
  }

  /** Sets `occurrence[x]` as dateTime and clears every other type of it. */
  setOccurrenceDateTime(occurrenceDateTime: string | undefined): this {
    return this.setFieldValue('occurrenceDateTime', occurrenceDateTime);
  }

  hasOccurrenceDateTime(): boolean {
    return this.hasFieldValue('occurrenceDateTime');
  }

  getOccurrencePeriod(): Period | undefined {
    return this.occurrencePeriod;
  }

  /** Sets `occurrence[x]` as Period and clears every other type of it. */
  setOccurrencePeriod(occurrencePeriod: Period | undefined): this {
    return this.setFieldValue('occurrencePeriod', occurrencePeriod);
  }

  hasOccurrencePeriod(): boolean {
    return this.hasFieldValue('occurrencePeriod');
  }

  getOccurrenceTiming(): Timing | undefined {
    return this.occurrenceTiming;
  }

  /** Sets `occurrence[x]` as Timing and clears every other type of it. */
  setOccurrenceTiming(occurrenceTiming: Timing | undefined): this {
    return this.setFieldValue('occurrenceTiming', occurrenceTiming);
  }

  hasOccurrenceTiming(): boolean {
    return this.hasFieldValue('occurrenceTiming');
  }

  /** Who asked for action (0..*) Never undefined; an empty list is created when absent. */
  getRequester(): Reference[] {
    if (this.requester === undefined) {
      this.requester = [];
    }
    return this.requester;
  }

  setRequester(requester: Reference[] | undefined): this {
    return this.setFieldValue('requester', requester);
  }

  hasRequester(): boolean {
    return this.hasFieldValue('requester');
  }

  /** Appends a new, empty Reference to `requester` and returns it so it can be filled in. */
  addRequester(): Reference;
  /** Appends the given Reference to `requester` and returns this object for chaining. */
  addRequester(reference: Reference): this;
  addRequester(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('requester', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('requester', createdReference);
    return createdReference;
  }

  /** The first Reference of `requester`. One is added when the list is empty. */
  getRequesterFirstRep(): Reference {
    const firstReference = this.getRequester()[0];
    return firstReference === undefined ? this.addRequester() : firstReference;
  }

  /** Pointer to specific item (0..*) Never undefined; an empty list is created when absent. */
  getRequesterLinkId(): string[] {
    if (this.requesterLinkId === undefined) {
      this.requesterLinkId = [];
    }
    return this.requesterLinkId;
  }

  setRequesterLinkId(requesterLinkId: string[] | undefined): this {
    return this.setFieldValue('requesterLinkId', requesterLinkId);
  }

  hasRequesterLinkId(): boolean {
    return this.hasFieldValue('requesterLinkId');
  }

  /** Appends one value to `requesterLinkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addRequesterLinkId(requesterLinkId: string): this {
    return this.addFieldValue('requesterLinkId', requesterLinkId);
  }

  /** Kind of service performer (0..*) Never undefined; an empty list is created when absent. */
  getPerformerType(): CodeableConcept[] {
    if (this.performerType === undefined) {
      this.performerType = [];
    }
    return this.performerType;
  }

  setPerformerType(performerType: CodeableConcept[] | undefined): this {
    return this.setFieldValue('performerType', performerType);
  }

  hasPerformerType(): boolean {
    return this.hasFieldValue('performerType');
  }

  /** Appends a new, empty CodeableConcept to `performerType` and returns it so it can be filled in. */
  addPerformerType(): CodeableConcept;
  /** Appends the given CodeableConcept to `performerType` and returns this object for chaining. */
  addPerformerType(codeableConcept: CodeableConcept): this;
  addPerformerType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('performerType', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('performerType', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `performerType`. One is added when the list is empty. */
  getPerformerTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getPerformerType()[0];
    return firstCodeableConcept === undefined ? this.addPerformerType() : firstCodeableConcept;
  }

  /** Competency of the performer (0..1) Created when absent. */
  getPerformerRole(): CodeableConcept {
    if (this.performerRole === undefined) {
      this.performerRole = new CodeableConcept();
    }
    return this.performerRole;
  }

  setPerformerRole(performerRole: CodeableConcept | undefined): this {
    return this.setFieldValue('performerRole', performerRole);
  }

  hasPerformerRole(): boolean {
    return this.hasFieldValue('performerRole');
  }

  /** Actor that wil execute (or not) the action (0..1) Created when absent. */
  getPerformer(): Reference {
    if (this.performer === undefined) {
      this.performer = new Reference();
    }
    return this.performer;
  }

  setPerformer(performer: Reference | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Pointer to specific item (0..*) Never undefined; an empty list is created when absent. */
  getPerformerLinkId(): string[] {
    if (this.performerLinkId === undefined) {
      this.performerLinkId = [];
    }
    return this.performerLinkId;
  }

  setPerformerLinkId(performerLinkId: string[] | undefined): this {
    return this.setFieldValue('performerLinkId', performerLinkId);
  }

  hasPerformerLinkId(): boolean {
    return this.hasFieldValue('performerLinkId');
  }

  /** Appends one value to `performerLinkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addPerformerLinkId(performerLinkId: string): this {
    return this.addFieldValue('performerLinkId', performerLinkId);
  }

  /** Why is action (not) needed? (0..*) Never undefined; an empty list is created when absent. */
  getReasonCode(): CodeableConcept[] {
    if (this.reasonCode === undefined) {
      this.reasonCode = [];
    }
    return this.reasonCode;
  }

  setReasonCode(reasonCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonCode', reasonCode);
  }

  hasReasonCode(): boolean {
    return this.hasFieldValue('reasonCode');
  }

  /** Appends a new, empty CodeableConcept to `reasonCode` and returns it so it can be filled in. */
  addReasonCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonCode` and returns this object for chaining. */
  addReasonCode(codeableConcept: CodeableConcept): this;
  addReasonCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonCode`. One is added when the list is empty. */
  getReasonCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonCode()[0];
    return firstCodeableConcept === undefined ? this.addReasonCode() : firstCodeableConcept;
  }

  /** Why is action (not) needed? (0..*) Never undefined; an empty list is created when absent. */
  getReasonReference(): Reference[] {
    if (this.reasonReference === undefined) {
      this.reasonReference = [];
    }
    return this.reasonReference;
  }

  setReasonReference(reasonReference: Reference[] | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Appends a new, empty Reference to `reasonReference` and returns it so it can be filled in. */
  addReasonReference(): Reference;
  /** Appends the given Reference to `reasonReference` and returns this object for chaining. */
  addReasonReference(reference: Reference): this;
  addReasonReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reasonReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reasonReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reasonReference`. One is added when the list is empty. */
  getReasonReferenceFirstRep(): Reference {
    const firstReference = this.getReasonReference()[0];
    return firstReference === undefined ? this.addReasonReference() : firstReference;
  }

  /** Why action is to be performed (0..*) Never undefined; an empty list is created when absent. */
  getReason(): string[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: string[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends one value to `reason`. Throws a FhirModelError when it is not a valid FHIR string. */
  addReason(reason: string): this {
    return this.addFieldValue('reason', reason);
  }

  /** Pointer to specific item (0..*) Never undefined; an empty list is created when absent. */
  getReasonLinkId(): string[] {
    if (this.reasonLinkId === undefined) {
      this.reasonLinkId = [];
    }
    return this.reasonLinkId;
  }

  setReasonLinkId(reasonLinkId: string[] | undefined): this {
    return this.setFieldValue('reasonLinkId', reasonLinkId);
  }

  hasReasonLinkId(): boolean {
    return this.hasFieldValue('reasonLinkId');
  }

  /** Appends one value to `reasonLinkId`. Throws a FhirModelError when it is not a valid FHIR string. */
  addReasonLinkId(reasonLinkId: string): this {
    return this.addFieldValue('reasonLinkId', reasonLinkId);
  }

  /** Comments about the action (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }

  /** Action restriction numbers (0..*) Never undefined; an empty list is created when absent. */
  getSecurityLabelNumber(): number[] {
    if (this.securityLabelNumber === undefined) {
      this.securityLabelNumber = [];
    }
    return this.securityLabelNumber;
  }

  setSecurityLabelNumber(securityLabelNumber: number[] | undefined): this {
    return this.setFieldValue('securityLabelNumber', securityLabelNumber);
  }

  hasSecurityLabelNumber(): boolean {
    return this.hasFieldValue('securityLabelNumber');
  }

  /** Appends one value to `securityLabelNumber`. Throws a FhirModelError when it is not a valid FHIR unsignedInt. */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addFieldValue('securityLabelNumber', securityLabelNumber);
  }
}

modelTypeRegistry.register('ContractTermAction', ContractTermAction, false);

/**
 * Entity of the action
 */
export class ContractTermActionSubject extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'reference',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Group',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Entity of the action (1..*) */
  reference?: Reference[];

  /** Role type of the agent (0..1) */
  role?: CodeableConcept;

  override fhirType(): string {
    return 'Contract.term.action.subject';
  }

  /** FHIR JSON for this ContractTermActionSubject, typed as the plain `ContractSubject` data type. */
  override toJSON(): plainTypes.ContractSubject {
    return this.serialize() as plainTypes.ContractSubject;
  }

  /** Entity of the action (1..*) Never undefined; an empty list is created when absent. */
  getReference(): Reference[] {
    if (this.reference === undefined) {
      this.reference = [];
    }
    return this.reference;
  }

  setReference(reference: Reference[] | undefined): this {
    return this.setFieldValue('reference', reference);
  }

  hasReference(): boolean {
    return this.hasFieldValue('reference');
  }

  /** Appends a new, empty Reference to `reference` and returns it so it can be filled in. */
  addReference(): Reference;
  /** Appends the given Reference to `reference` and returns this object for chaining. */
  addReference(reference: Reference): this;
  addReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reference`. One is added when the list is empty. */
  getReferenceFirstRep(): Reference {
    const firstReference = this.getReference()[0];
    return firstReference === undefined ? this.addReference() : firstReference;
  }

  /** Role type of the agent (0..1) Created when absent. */
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
}

modelTypeRegistry.register('ContractTermActionSubject', ContractTermActionSubject, false);

/**
 * Contract Signatory
 */
export class ContractSigner extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'Coding' }],
    },
    {
      elementName: 'party',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'party',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'signature',
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'signature', typeCode: 'Signature' }],
    },
  ];

  /** Contract Signatory Role (1..1) */
  type?: Coding;

  /** Contract Signatory Party (1..1) */
  party?: Reference;

  /** Contract Documentation Signature (1..*) */
  signature?: Signature[];

  override fhirType(): string {
    return 'Contract.signer';
  }

  /** FHIR JSON for this ContractSigner, typed as the plain `ContractSigner` data type. */
  override toJSON(): plainTypes.ContractSigner {
    return this.serialize() as plainTypes.ContractSigner;
  }

  /** Contract Signatory Role (1..1) Created when absent. */
  getType(): Coding {
    if (this.type === undefined) {
      this.type = new Coding();
    }
    return this.type;
  }

  setType(type: Coding | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Contract Signatory Party (1..1) Created when absent. */
  getParty(): Reference {
    if (this.party === undefined) {
      this.party = new Reference();
    }
    return this.party;
  }

  setParty(party: Reference | undefined): this {
    return this.setFieldValue('party', party);
  }

  hasParty(): boolean {
    return this.hasFieldValue('party');
  }

  /** Contract Documentation Signature (1..*) Never undefined; an empty list is created when absent. */
  getSignature(): Signature[] {
    if (this.signature === undefined) {
      this.signature = [];
    }
    return this.signature;
  }

  setSignature(signature: Signature[] | undefined): this {
    return this.setFieldValue('signature', signature);
  }

  hasSignature(): boolean {
    return this.hasFieldValue('signature');
  }

  /** Appends a new, empty Signature to `signature` and returns it so it can be filled in. */
  addSignature(): Signature;
  /** Appends the given Signature to `signature` and returns this object for chaining. */
  addSignature(signature: Signature): this;
  addSignature(signature?: Signature): Signature | this {
    if (signature !== undefined) {
      return this.addFieldValue('signature', signature);
    }
    const createdSignature = new Signature();
    this.addFieldValue('signature', createdSignature);
    return createdSignature;
  }

  /** The first Signature of `signature`. One is added when the list is empty. */
  getSignatureFirstRep(): Signature {
    const firstSignature = this.getSignature()[0];
    return firstSignature === undefined ? this.addSignature() : firstSignature;
  }
}

modelTypeRegistry.register('ContractSigner', ContractSigner, false);

/**
 * Contract Friendly Language
 */
export class ContractFriendly extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'contentAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'contentReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Composition', 'DocumentReference', 'QuestionnaireResponse'],
        },
      ],
    },
  ];

  /** Easily comprehended representation of this Contract (1..1) */
  contentAttachment?: Attachment;
  /** Easily comprehended representation of this Contract (1..1) */
  contentReference?: Reference;

  override fhirType(): string {
    return 'Contract.friendly';
  }

  /** FHIR JSON for this ContractFriendly, typed as the plain `ContractFriendly` data type. */
  override toJSON(): plainTypes.ContractFriendly {
    return this.serialize() as plainTypes.ContractFriendly;
  }

  /** Easily comprehended representation of this Contract (1..1) Whichever type of `content[x]` is set. */
  getContent(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('content');
  }

  /** True when any type of `content[x]` is set. */
  hasContent(): boolean {
    return this.hasChoiceValue('content');
  }

  getContentAttachment(): Attachment | undefined {
    return this.contentAttachment;
  }

  /** Sets `content[x]` as Attachment and clears every other type of it. */
  setContentAttachment(contentAttachment: Attachment | undefined): this {
    return this.setFieldValue('contentAttachment', contentAttachment);
  }

  hasContentAttachment(): boolean {
    return this.hasFieldValue('contentAttachment');
  }

  getContentReference(): Reference | undefined {
    return this.contentReference;
  }

  /** Sets `content[x]` as Reference and clears every other type of it. */
  setContentReference(contentReference: Reference | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }
}

modelTypeRegistry.register('ContractFriendly', ContractFriendly, false);

/**
 * Contract Legal Language
 */
export class ContractLegal extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'contentAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'contentReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Composition', 'DocumentReference', 'QuestionnaireResponse'],
        },
      ],
    },
  ];

  /** Contract Legal Text (1..1) */
  contentAttachment?: Attachment;
  /** Contract Legal Text (1..1) */
  contentReference?: Reference;

  override fhirType(): string {
    return 'Contract.legal';
  }

  /** FHIR JSON for this ContractLegal, typed as the plain `ContractLegal` data type. */
  override toJSON(): plainTypes.ContractLegal {
    return this.serialize() as plainTypes.ContractLegal;
  }

  /** Contract Legal Text (1..1) Whichever type of `content[x]` is set. */
  getContent(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('content');
  }

  /** True when any type of `content[x]` is set. */
  hasContent(): boolean {
    return this.hasChoiceValue('content');
  }

  getContentAttachment(): Attachment | undefined {
    return this.contentAttachment;
  }

  /** Sets `content[x]` as Attachment and clears every other type of it. */
  setContentAttachment(contentAttachment: Attachment | undefined): this {
    return this.setFieldValue('contentAttachment', contentAttachment);
  }

  hasContentAttachment(): boolean {
    return this.hasFieldValue('contentAttachment');
  }

  getContentReference(): Reference | undefined {
    return this.contentReference;
  }

  /** Sets `content[x]` as Reference and clears every other type of it. */
  setContentReference(contentReference: Reference | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }
}

modelTypeRegistry.register('ContractLegal', ContractLegal, false);

/**
 * Computable Contract Language
 */
export class ContractRule extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'content',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'contentAttachment', typeCode: 'Attachment' },
        {
          jsonKey: 'contentReference',
          typeCode: 'Reference',
          targetResourceTypes: ['DocumentReference'],
        },
      ],
    },
  ];

  /** Computable Contract Rules (1..1) */
  contentAttachment?: Attachment;
  /** Computable Contract Rules (1..1) */
  contentReference?: Reference;

  override fhirType(): string {
    return 'Contract.rule';
  }

  /** FHIR JSON for this ContractRule, typed as the plain `ContractRule` data type. */
  override toJSON(): plainTypes.ContractRule {
    return this.serialize() as plainTypes.ContractRule;
  }

  /** Computable Contract Rules (1..1) Whichever type of `content[x]` is set. */
  getContent(): Attachment | Reference | undefined {
    return this.getChoiceValue<Attachment | Reference>('content');
  }

  /** True when any type of `content[x]` is set. */
  hasContent(): boolean {
    return this.hasChoiceValue('content');
  }

  getContentAttachment(): Attachment | undefined {
    return this.contentAttachment;
  }

  /** Sets `content[x]` as Attachment and clears every other type of it. */
  setContentAttachment(contentAttachment: Attachment | undefined): this {
    return this.setFieldValue('contentAttachment', contentAttachment);
  }

  hasContentAttachment(): boolean {
    return this.hasFieldValue('contentAttachment');
  }

  getContentReference(): Reference | undefined {
    return this.contentReference;
  }

  /** Sets `content[x]` as Reference and clears every other type of it. */
  setContentReference(contentReference: Reference | undefined): this {
    return this.setFieldValue('contentReference', contentReference);
  }

  hasContentReference(): boolean {
    return this.hasFieldValue('contentReference');
  }
}

modelTypeRegistry.register('ContractRule', ContractRule, false);
