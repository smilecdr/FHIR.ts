/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { Element } from './element';
import { Identifier } from './identifier';
import { Resource } from './resource';
import { Signature } from './signature';

/**
 * Base StructureDefinition for Bundle Resource
 */
export class Bundle extends Resource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'type',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'type', typeCode: 'code', allowedCodes: valueSetCodes.BundleType }],
    },
    {
      elementName: 'total',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'total', typeCode: 'unsignedInt' }],
    },
    {
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'BundleLink' }],
    },
    {
      elementName: 'entry',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'entry', typeCode: 'BundleEntry' }],
    },
    {
      elementName: 'signature',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'signature', typeCode: 'Signature' }],
    },
  ];

  readonly resourceType = 'Bundle';

  /** Persistent identifier for the bundle (0..1) */
  identifier?: Identifier;

  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection (1..1) */
  type?: valueSetCodes.BundleType;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;

  /** If search, the total number of matches (0..1) */
  total?: number;
  /** Id and extensions of the primitive `total`. */
  _total?: Element;

  /** Links related to this Bundle (0..*) */
  link?: BundleLink[];

  /** Entry in the bundle - will have a resource, or information (0..*) */
  entry?: BundleEntry[];

  /** Digital Signature (0..1) */
  signature?: Signature;

  override fhirType(): string {
    return 'Bundle';
  }

  /** FHIR JSON for this Bundle, typed as the plain `Bundle` data type. */
  override toJSON(): plainTypes.Bundle {
    return this.serialize() as plainTypes.Bundle;
  }

  /** Persistent identifier for the bundle (0..1) Created when absent. */
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

  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection (1..1) */
  getType(): valueSetCodes.BundleType | undefined {
    return this.type;
  }

  /** Sets `type`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setType(type: valueSetCodes.BundleType | undefined): this {
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

  /** If search, the total number of matches (0..1) */
  getTotal(): number | undefined {
    return this.total;
  }

  /** Sets `total`. Throws a FhirModelError when the value is not a valid FHIR unsignedInt. */
  setTotal(total: number | undefined): this {
    return this.setFieldValue('total', total);
  }

  hasTotal(): boolean {
    return this.hasFieldValue('total');
  }

  /** The element carrying the id and extensions of `total`. Created when absent. */
  getTotalElement(): Element {
    if (this._total === undefined) {
      this._total = new Element();
    }
    return this._total;
  }

  setTotalElement(totalElement: Element | undefined): this {
    this._total = totalElement;
    return this;
  }

  /** Links related to this Bundle (0..*) Never undefined; an empty list is created when absent. */
  getLink(): BundleLink[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: BundleLink[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends a new, empty BundleLink to `link` and returns it so it can be filled in. */
  addLink(): BundleLink;
  /** Appends the given BundleLink to `link` and returns this object for chaining. */
  addLink(bundleLink: BundleLink): this;
  addLink(bundleLink?: BundleLink): BundleLink | this {
    if (bundleLink !== undefined) {
      return this.addFieldValue('link', bundleLink);
    }
    const createdBundleLink = new BundleLink();
    this.addFieldValue('link', createdBundleLink);
    return createdBundleLink;
  }

  /** The first BundleLink of `link`. One is added when the list is empty. */
  getLinkFirstRep(): BundleLink {
    const firstBundleLink = this.getLink()[0];
    return firstBundleLink === undefined ? this.addLink() : firstBundleLink;
  }

  /** Entry in the bundle - will have a resource, or information (0..*) Never undefined; an empty list is created when absent. */
  getEntry(): BundleEntry[] {
    if (this.entry === undefined) {
      this.entry = [];
    }
    return this.entry;
  }

  setEntry(entry: BundleEntry[] | undefined): this {
    return this.setFieldValue('entry', entry);
  }

  hasEntry(): boolean {
    return this.hasFieldValue('entry');
  }

  /** Appends a new, empty BundleEntry to `entry` and returns it so it can be filled in. */
  addEntry(): BundleEntry;
  /** Appends the given BundleEntry to `entry` and returns this object for chaining. */
  addEntry(bundleEntry: BundleEntry): this;
  addEntry(bundleEntry?: BundleEntry): BundleEntry | this {
    if (bundleEntry !== undefined) {
      return this.addFieldValue('entry', bundleEntry);
    }
    const createdBundleEntry = new BundleEntry();
    this.addFieldValue('entry', createdBundleEntry);
    return createdBundleEntry;
  }

  /** The first BundleEntry of `entry`. One is added when the list is empty. */
  getEntryFirstRep(): BundleEntry {
    const firstBundleEntry = this.getEntry()[0];
    return firstBundleEntry === undefined ? this.addEntry() : firstBundleEntry;
  }

  /** Digital Signature (0..1) Created when absent. */
  getSignature(): Signature {
    if (this.signature === undefined) {
      this.signature = new Signature();
    }
    return this.signature;
  }

  setSignature(signature: Signature | undefined): this {
    return this.setFieldValue('signature', signature);
  }

  hasSignature(): boolean {
    return this.hasFieldValue('signature');
  }
}

modelTypeRegistry.register('Bundle', Bundle, true);

/** True when the value is a Bundle model instance. */
export function isBundle(candidate: unknown): candidate is Bundle {
  return candidate instanceof Bundle;
}

/**
 * Links related to this Bundle
 */
export class BundleLink extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'relation',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relation', typeCode: 'string' }],
    },
    {
      elementName: 'url',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
  ];

  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 (1..1) */
  relation?: string;
  /** Id and extensions of the primitive `relation`. */
  _relation?: Element;

  /** Reference details for the link (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  override fhirType(): string {
    return 'Bundle.link';
  }

  /** FHIR JSON for this BundleLink, typed as the plain `BundleLink` data type. */
  override toJSON(): plainTypes.BundleLink {
    return this.serialize() as plainTypes.BundleLink;
  }

  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 (1..1) */
  getRelation(): string | undefined {
    return this.relation;
  }

  /** Sets `relation`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setRelation(relation: string | undefined): this {
    return this.setFieldValue('relation', relation);
  }

  hasRelation(): boolean {
    return this.hasFieldValue('relation');
  }

  /** The element carrying the id and extensions of `relation`. Created when absent. */
  getRelationElement(): Element {
    if (this._relation === undefined) {
      this._relation = new Element();
    }
    return this._relation;
  }

  setRelationElement(relationElement: Element | undefined): this {
    this._relation = relationElement;
    return this;
  }

  /** Reference details for the link (1..1) */
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
}

modelTypeRegistry.register('BundleLink', BundleLink, false);

/**
 * Entry in the bundle - will have a resource, or information
 */
export class BundleEntry extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'link',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'link', typeCode: 'BundleLink' }],
    },
    {
      elementName: 'fullUrl',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'fullUrl', typeCode: 'uri' }],
    },
    {
      elementName: 'resource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'resource', typeCode: 'Resource' }],
    },
    {
      elementName: 'search',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'search', typeCode: 'BundleEntrySearch' }],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'request', typeCode: 'BundleEntryRequest' }],
    },
    {
      elementName: 'response',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'response', typeCode: 'BundleEntryResponse' }],
    },
  ];

  /** Links related to this entry (0..*) */
  link?: BundleLink[];

  /** Absolute URL for resource (server address, or UUID/OID) (0..1) */
  fullUrl?: string;
  /** Id and extensions of the primitive `fullUrl`. */
  _fullUrl?: Element;

  /** A resource in the bundle (0..1) */
  resource?: Resource;

  /** Search related information (0..1) */
  search?: BundleEntrySearch;

  /** Transaction Related Information (0..1) */
  request?: BundleEntryRequest;

  /** Transaction Related Information (0..1) */
  response?: BundleEntryResponse;

  override fhirType(): string {
    return 'Bundle.entry';
  }

  /** FHIR JSON for this BundleEntry, typed as the plain `BundleEntry` data type. */
  override toJSON(): plainTypes.BundleEntry {
    return this.serialize() as plainTypes.BundleEntry;
  }

  /** Links related to this entry (0..*) Never undefined; an empty list is created when absent. */
  getLink(): BundleLink[] {
    if (this.link === undefined) {
      this.link = [];
    }
    return this.link;
  }

  setLink(link: BundleLink[] | undefined): this {
    return this.setFieldValue('link', link);
  }

  hasLink(): boolean {
    return this.hasFieldValue('link');
  }

  /** Appends a new, empty BundleLink to `link` and returns it so it can be filled in. */
  addLink(): BundleLink;
  /** Appends the given BundleLink to `link` and returns this object for chaining. */
  addLink(bundleLink: BundleLink): this;
  addLink(bundleLink?: BundleLink): BundleLink | this {
    if (bundleLink !== undefined) {
      return this.addFieldValue('link', bundleLink);
    }
    const createdBundleLink = new BundleLink();
    this.addFieldValue('link', createdBundleLink);
    return createdBundleLink;
  }

  /** The first BundleLink of `link`. One is added when the list is empty. */
  getLinkFirstRep(): BundleLink {
    const firstBundleLink = this.getLink()[0];
    return firstBundleLink === undefined ? this.addLink() : firstBundleLink;
  }

  /** Absolute URL for resource (server address, or UUID/OID) (0..1) */
  getFullUrl(): string | undefined {
    return this.fullUrl;
  }

  /** Sets `fullUrl`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setFullUrl(fullUrl: string | undefined): this {
    return this.setFieldValue('fullUrl', fullUrl);
  }

  hasFullUrl(): boolean {
    return this.hasFieldValue('fullUrl');
  }

  /** The element carrying the id and extensions of `fullUrl`. Created when absent. */
  getFullUrlElement(): Element {
    if (this._fullUrl === undefined) {
      this._fullUrl = new Element();
    }
    return this._fullUrl;
  }

  setFullUrlElement(fullUrlElement: Element | undefined): this {
    this._fullUrl = fullUrlElement;
    return this;
  }

  /** A resource in the bundle (0..1) */
  getResource(): Resource | undefined {
    return this.resource;
  }

  setResource(resource: Resource | undefined): this {
    return this.setFieldValue('resource', resource);
  }

  hasResource(): boolean {
    return this.hasFieldValue('resource');
  }

  /** Search related information (0..1) Created when absent. */
  getSearch(): BundleEntrySearch {
    if (this.search === undefined) {
      this.search = new BundleEntrySearch();
    }
    return this.search;
  }

  setSearch(search: BundleEntrySearch | undefined): this {
    return this.setFieldValue('search', search);
  }

  hasSearch(): boolean {
    return this.hasFieldValue('search');
  }

  /** Transaction Related Information (0..1) Created when absent. */
  getRequest(): BundleEntryRequest {
    if (this.request === undefined) {
      this.request = new BundleEntryRequest();
    }
    return this.request;
  }

  setRequest(request: BundleEntryRequest | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Transaction Related Information (0..1) Created when absent. */
  getResponse(): BundleEntryResponse {
    if (this.response === undefined) {
      this.response = new BundleEntryResponse();
    }
    return this.response;
  }

  setResponse(response: BundleEntryResponse | undefined): this {
    return this.setFieldValue('response', response);
  }

  hasResponse(): boolean {
    return this.hasFieldValue('response');
  }
}

modelTypeRegistry.register('BundleEntry', BundleEntry, false);

/**
 * Search related information
 */
export class BundleEntrySearch extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'mode',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'mode', typeCode: 'code', allowedCodes: valueSetCodes.SearchEntryMode }],
    },
    {
      elementName: 'score',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'score', typeCode: 'decimal' }],
    },
  ];

  /** match | include | outcome - why this is in the result set (0..1) */
  mode?: valueSetCodes.SearchEntryMode;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;

  /** Search ranking (between 0 and 1) (0..1) */
  score?: number;
  /** Id and extensions of the primitive `score`. */
  _score?: Element;

  override fhirType(): string {
    return 'Bundle.entry.search';
  }

  /** FHIR JSON for this BundleEntrySearch, typed as the plain `BundleSearch` data type. */
  override toJSON(): plainTypes.BundleSearch {
    return this.serialize() as plainTypes.BundleSearch;
  }

  /** match | include | outcome - why this is in the result set (0..1) */
  getMode(): valueSetCodes.SearchEntryMode | undefined {
    return this.mode;
  }

  /** Sets `mode`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMode(mode: valueSetCodes.SearchEntryMode | undefined): this {
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

  /** Search ranking (between 0 and 1) (0..1) */
  getScore(): number | undefined {
    return this.score;
  }

  /** Sets `score`. Throws a FhirModelError when the value is not a valid FHIR decimal. */
  setScore(score: number | undefined): this {
    return this.setFieldValue('score', score);
  }

  hasScore(): boolean {
    return this.hasFieldValue('score');
  }

  /** The element carrying the id and extensions of `score`. Created when absent. */
  getScoreElement(): Element {
    if (this._score === undefined) {
      this._score = new Element();
    }
    return this._score;
  }

  setScoreElement(scoreElement: Element | undefined): this {
    this._score = scoreElement;
    return this;
  }
}

modelTypeRegistry.register('BundleEntrySearch', BundleEntrySearch, false);

/**
 * Transaction Related Information
 */
export class BundleEntryRequest extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'method',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'code', allowedCodes: valueSetCodes.HTTPVerb }],
    },
    {
      elementName: 'url',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'url', typeCode: 'uri' }],
    },
    {
      elementName: 'ifNoneMatch',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ifNoneMatch', typeCode: 'string' }],
    },
    {
      elementName: 'ifModifiedSince',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ifModifiedSince', typeCode: 'instant' }],
    },
    {
      elementName: 'ifMatch',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ifMatch', typeCode: 'string' }],
    },
    {
      elementName: 'ifNoneExist',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'ifNoneExist', typeCode: 'string' }],
    },
  ];

  /** GET | POST | PUT | DELETE (1..1) */
  method?: valueSetCodes.HTTPVerb;
  /** Id and extensions of the primitive `method`. */
  _method?: Element;

  /** URL for HTTP equivalent of this entry (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;

  /** For managing cache currency (0..1) */
  ifNoneMatch?: string;
  /** Id and extensions of the primitive `ifNoneMatch`. */
  _ifNoneMatch?: Element;

  /** For managing update contention (0..1) */
  ifModifiedSince?: string;
  /** Id and extensions of the primitive `ifModifiedSince`. */
  _ifModifiedSince?: Element;

  /** For managing update contention (0..1) */
  ifMatch?: string;
  /** Id and extensions of the primitive `ifMatch`. */
  _ifMatch?: Element;

  /** For conditional creates (0..1) */
  ifNoneExist?: string;
  /** Id and extensions of the primitive `ifNoneExist`. */
  _ifNoneExist?: Element;

  override fhirType(): string {
    return 'Bundle.entry.request';
  }

  /** FHIR JSON for this BundleEntryRequest, typed as the plain `BundleRequest` data type. */
  override toJSON(): plainTypes.BundleRequest {
    return this.serialize() as plainTypes.BundleRequest;
  }

  /** GET | POST | PUT | DELETE (1..1) */
  getMethod(): valueSetCodes.HTTPVerb | undefined {
    return this.method;
  }

  /** Sets `method`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setMethod(method: valueSetCodes.HTTPVerb | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** The element carrying the id and extensions of `method`. Created when absent. */
  getMethodElement(): Element {
    if (this._method === undefined) {
      this._method = new Element();
    }
    return this._method;
  }

  setMethodElement(methodElement: Element | undefined): this {
    this._method = methodElement;
    return this;
  }

  /** URL for HTTP equivalent of this entry (1..1) */
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

  /** For managing cache currency (0..1) */
  getIfNoneMatch(): string | undefined {
    return this.ifNoneMatch;
  }

  /** Sets `ifNoneMatch`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIfNoneMatch(ifNoneMatch: string | undefined): this {
    return this.setFieldValue('ifNoneMatch', ifNoneMatch);
  }

  hasIfNoneMatch(): boolean {
    return this.hasFieldValue('ifNoneMatch');
  }

  /** The element carrying the id and extensions of `ifNoneMatch`. Created when absent. */
  getIfNoneMatchElement(): Element {
    if (this._ifNoneMatch === undefined) {
      this._ifNoneMatch = new Element();
    }
    return this._ifNoneMatch;
  }

  setIfNoneMatchElement(ifNoneMatchElement: Element | undefined): this {
    this._ifNoneMatch = ifNoneMatchElement;
    return this;
  }

  /** For managing update contention (0..1) */
  getIfModifiedSince(): string | undefined {
    return this.ifModifiedSince;
  }

  /** Sets `ifModifiedSince`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setIfModifiedSince(ifModifiedSince: string | undefined): this {
    return this.setFieldValue('ifModifiedSince', ifModifiedSince);
  }

  hasIfModifiedSince(): boolean {
    return this.hasFieldValue('ifModifiedSince');
  }

  /** The element carrying the id and extensions of `ifModifiedSince`. Created when absent. */
  getIfModifiedSinceElement(): Element {
    if (this._ifModifiedSince === undefined) {
      this._ifModifiedSince = new Element();
    }
    return this._ifModifiedSince;
  }

  setIfModifiedSinceElement(ifModifiedSinceElement: Element | undefined): this {
    this._ifModifiedSince = ifModifiedSinceElement;
    return this;
  }

  /** For managing update contention (0..1) */
  getIfMatch(): string | undefined {
    return this.ifMatch;
  }

  /** Sets `ifMatch`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIfMatch(ifMatch: string | undefined): this {
    return this.setFieldValue('ifMatch', ifMatch);
  }

  hasIfMatch(): boolean {
    return this.hasFieldValue('ifMatch');
  }

  /** The element carrying the id and extensions of `ifMatch`. Created when absent. */
  getIfMatchElement(): Element {
    if (this._ifMatch === undefined) {
      this._ifMatch = new Element();
    }
    return this._ifMatch;
  }

  setIfMatchElement(ifMatchElement: Element | undefined): this {
    this._ifMatch = ifMatchElement;
    return this;
  }

  /** For conditional creates (0..1) */
  getIfNoneExist(): string | undefined {
    return this.ifNoneExist;
  }

  /** Sets `ifNoneExist`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setIfNoneExist(ifNoneExist: string | undefined): this {
    return this.setFieldValue('ifNoneExist', ifNoneExist);
  }

  hasIfNoneExist(): boolean {
    return this.hasFieldValue('ifNoneExist');
  }

  /** The element carrying the id and extensions of `ifNoneExist`. Created when absent. */
  getIfNoneExistElement(): Element {
    if (this._ifNoneExist === undefined) {
      this._ifNoneExist = new Element();
    }
    return this._ifNoneExist;
  }

  setIfNoneExistElement(ifNoneExistElement: Element | undefined): this {
    this._ifNoneExist = ifNoneExistElement;
    return this;
  }
}

modelTypeRegistry.register('BundleEntryRequest', BundleEntryRequest, false);

/**
 * Transaction Related Information
 */
export class BundleEntryResponse extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'string' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'uri' }],
    },
    {
      elementName: 'etag',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'etag', typeCode: 'string' }],
    },
    {
      elementName: 'lastModified',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'lastModified', typeCode: 'instant' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcome', typeCode: 'Resource' }],
    },
  ];

  /** Status response code (text optional) (1..1) */
  status?: string;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The location, if the operation returns a location (0..1) */
  location?: string;
  /** Id and extensions of the primitive `location`. */
  _location?: Element;

  /** The etag for the resource (if relevant) (0..1) */
  etag?: string;
  /** Id and extensions of the primitive `etag`. */
  _etag?: Element;

  /** Server's date time modified (0..1) */
  lastModified?: string;
  /** Id and extensions of the primitive `lastModified`. */
  _lastModified?: Element;

  /** OperationOutcome with hints and warnings (for batch/transaction) (0..1) */
  outcome?: Resource;

  override fhirType(): string {
    return 'Bundle.entry.response';
  }

  /** FHIR JSON for this BundleEntryResponse, typed as the plain `BundleResponse` data type. */
  override toJSON(): plainTypes.BundleResponse {
    return this.serialize() as plainTypes.BundleResponse;
  }

  /** Status response code (text optional) (1..1) */
  getStatus(): string | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setStatus(status: string | undefined): this {
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

  /** The location, if the operation returns a location (0..1) */
  getLocation(): string | undefined {
    return this.location;
  }

  /** Sets `location`. Throws a FhirModelError when the value is not a valid FHIR uri. */
  setLocation(location: string | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** The element carrying the id and extensions of `location`. Created when absent. */
  getLocationElement(): Element {
    if (this._location === undefined) {
      this._location = new Element();
    }
    return this._location;
  }

  setLocationElement(locationElement: Element | undefined): this {
    this._location = locationElement;
    return this;
  }

  /** The etag for the resource (if relevant) (0..1) */
  getEtag(): string | undefined {
    return this.etag;
  }

  /** Sets `etag`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setEtag(etag: string | undefined): this {
    return this.setFieldValue('etag', etag);
  }

  hasEtag(): boolean {
    return this.hasFieldValue('etag');
  }

  /** The element carrying the id and extensions of `etag`. Created when absent. */
  getEtagElement(): Element {
    if (this._etag === undefined) {
      this._etag = new Element();
    }
    return this._etag;
  }

  setEtagElement(etagElement: Element | undefined): this {
    this._etag = etagElement;
    return this;
  }

  /** Server's date time modified (0..1) */
  getLastModified(): string | undefined {
    return this.lastModified;
  }

  /** Sets `lastModified`. Throws a FhirModelError when the value is not a valid FHIR instant. */
  setLastModified(lastModified: string | undefined): this {
    return this.setFieldValue('lastModified', lastModified);
  }

  hasLastModified(): boolean {
    return this.hasFieldValue('lastModified');
  }

  /** The element carrying the id and extensions of `lastModified`. Created when absent. */
  getLastModifiedElement(): Element {
    if (this._lastModified === undefined) {
      this._lastModified = new Element();
    }
    return this._lastModified;
  }

  setLastModifiedElement(lastModifiedElement: Element | undefined): this {
    this._lastModified = lastModifiedElement;
    return this;
  }

  /** OperationOutcome with hints and warnings (for batch/transaction) (0..1) */
  getOutcome(): Resource | undefined {
    return this.outcome;
  }

  setOutcome(outcome: Resource | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }
}

modelTypeRegistry.register('BundleEntryResponse', BundleEntryResponse, false);
