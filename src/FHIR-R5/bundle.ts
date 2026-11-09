/**
 * FHIR R5 data types generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { ResourceList } from './resourceList';
import type { Signature } from './signature';

/**
 * A container for a collection of resources.
 */
export interface Bundle {
  resourceType: 'Bundle';
  /** Logical id of this artifact (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Metadata about the resource (0..1) */
  meta?: Meta;
  /** A set of rules under which this content was created (0..1) */
  implicitRules?: string;
  /** Id and extensions of the primitive `implicitRules`. */
  _implicitRules?: Element;
  /** Language of the resource content (0..1) */
  language?: string;
  /** Id and extensions of the primitive `language`. */
  _language?: Element;
  /** Persistent identifier for the bundle (0..1) */
  identifier?: Identifier;
  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification (1..1) */
  type?: Bundle.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** When the bundle was assembled (0..1) */
  timestamp?: string;
  /** Id and extensions of the primitive `timestamp`. */
  _timestamp?: Element;
  /** If search, the total number of matches (0..1) */
  total?: number;
  /** Id and extensions of the primitive `total`. */
  _total?: Element;
  /** Links related to this Bundle (0..*) */
  link?: Array<BundleLink>;
  /** Entry in the bundle - will have a resource or information (0..*) */
  entry?: Array<BundleEntry>;
  /** Digital Signature (0..1) */
  signature?: Signature;
  /** Issues with the Bundle (0..1) */
  issues?: ResourceList;
}

export namespace Bundle {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/bundle-type */
  export type TypeEnum =
    | 'document'
    | 'message'
    | 'transaction'
    | 'transaction-response'
    | 'batch'
    | 'batch-response'
    | 'history'
    | 'searchset'
    | 'collection'
    | 'subscription-notification';
  export const TypeEnum = {
    Document: 'document' as TypeEnum,
    Message: 'message' as TypeEnum,
    Transaction: 'transaction' as TypeEnum,
    TransactionResponse: 'transaction-response' as TypeEnum,
    Batch: 'batch' as TypeEnum,
    BatchResponse: 'batch-response' as TypeEnum,
    History: 'history' as TypeEnum,
    Searchset: 'searchset' as TypeEnum,
    Collection: 'collection' as TypeEnum,
    SubscriptionNotification: 'subscription-notification' as TypeEnum,
  };
}

/**
 * Links related to this Bundle
 */
export interface BundleLink {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 (1..1) */
  relation?: BundleLink.RelationEnum;
  /** Id and extensions of the primitive `relation`. */
  _relation?: Element;
  /** Reference details for the link (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

export namespace BundleLink {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/iana-link-relations */
  export type RelationEnum =
    | 'about'
    | 'acl'
    | 'alternate'
    | 'amphtml'
    | 'appendix'
    | 'apple-touch-icon'
    | 'apple-touch-startup-image'
    | 'archives'
    | 'author'
    | 'blocked-by'
    | 'bookmark'
    | 'canonical'
    | 'chapter'
    | 'cite-as'
    | 'collection'
    | 'contents'
    | 'convertedFrom'
    | 'copyright'
    | 'create-form'
    | 'current'
    | 'describedby'
    | 'describes'
    | 'disclosure'
    | 'dns-prefetch'
    | 'duplicate'
    | 'edit'
    | 'edit-form'
    | 'edit-media'
    | 'enclosure'
    | 'external'
    | 'first'
    | 'glossary'
    | 'help'
    | 'hosts'
    | 'hub'
    | 'icon'
    | 'index'
    | 'intervalAfter'
    | 'intervalBefore'
    | 'intervalContains'
    | 'intervalDisjoint'
    | 'intervalDuring'
    | 'intervalEquals'
    | 'intervalFinishedBy'
    | 'intervalFinishes'
    | 'intervalIn'
    | 'intervalMeets'
    | 'intervalMetBy'
    | 'intervalOverlappedBy'
    | 'intervalOverlaps'
    | 'intervalStartedBy'
    | 'intervalStarts'
    | 'item'
    | 'last'
    | 'latest-version'
    | 'license'
    | 'linkset'
    | 'lrdd'
    | 'manifest'
    | 'mask-icon'
    | 'media-feed'
    | 'memento'
    | 'micropub'
    | 'modulepreload'
    | 'monitor'
    | 'monitor-group'
    | 'next'
    | 'next-archive'
    | 'nofollow'
    | 'noopener'
    | 'noreferrer'
    | 'opener'
    | 'openid2.local_id'
    | 'openid2.provider'
    | 'original'
    | 'P3Pv1'
    | 'payment'
    | 'pingback'
    | 'preconnect'
    | 'predecessor-version'
    | 'prefetch'
    | 'preload'
    | 'prerender'
    | 'prev'
    | 'preview'
    | 'previous'
    | 'prev-archive'
    | 'privacy-policy'
    | 'profile'
    | 'publication'
    | 'related'
    | 'restconf'
    | 'replies'
    | 'ruleinput'
    | 'search'
    | 'section'
    | 'self'
    | 'service'
    | 'service-desc'
    | 'service-doc'
    | 'service-meta'
    | 'sponsored'
    | 'start'
    | 'status'
    | 'stylesheet'
    | 'subsection'
    | 'successor-version'
    | 'sunset'
    | 'tag'
    | 'terms-of-service'
    | 'timegate'
    | 'timemap'
    | 'type'
    | 'ugc'
    | 'up'
    | 'version-history'
    | 'via'
    | 'webmention'
    | 'working-copy'
    | 'working-copy-of';
  export const RelationEnum = {
    About: 'about' as RelationEnum,
    Acl: 'acl' as RelationEnum,
    Alternate: 'alternate' as RelationEnum,
    Amphtml: 'amphtml' as RelationEnum,
    Appendix: 'appendix' as RelationEnum,
    AppleTouchIcon: 'apple-touch-icon' as RelationEnum,
    AppleTouchStartupImage: 'apple-touch-startup-image' as RelationEnum,
    Archives: 'archives' as RelationEnum,
    Author: 'author' as RelationEnum,
    BlockedBy: 'blocked-by' as RelationEnum,
    Bookmark: 'bookmark' as RelationEnum,
    Canonical: 'canonical' as RelationEnum,
    Chapter: 'chapter' as RelationEnum,
    CiteAs: 'cite-as' as RelationEnum,
    Collection: 'collection' as RelationEnum,
    Contents: 'contents' as RelationEnum,
    ConvertedFrom: 'convertedFrom' as RelationEnum,
    Copyright: 'copyright' as RelationEnum,
    CreateForm: 'create-form' as RelationEnum,
    Current: 'current' as RelationEnum,
    Describedby: 'describedby' as RelationEnum,
    Describes: 'describes' as RelationEnum,
    Disclosure: 'disclosure' as RelationEnum,
    DnsPrefetch: 'dns-prefetch' as RelationEnum,
    Duplicate: 'duplicate' as RelationEnum,
    Edit: 'edit' as RelationEnum,
    EditForm: 'edit-form' as RelationEnum,
    EditMedia: 'edit-media' as RelationEnum,
    Enclosure: 'enclosure' as RelationEnum,
    External: 'external' as RelationEnum,
    First: 'first' as RelationEnum,
    Glossary: 'glossary' as RelationEnum,
    Help: 'help' as RelationEnum,
    Hosts: 'hosts' as RelationEnum,
    Hub: 'hub' as RelationEnum,
    Icon: 'icon' as RelationEnum,
    Index: 'index' as RelationEnum,
    IntervalAfter: 'intervalAfter' as RelationEnum,
    IntervalBefore: 'intervalBefore' as RelationEnum,
    IntervalContains: 'intervalContains' as RelationEnum,
    IntervalDisjoint: 'intervalDisjoint' as RelationEnum,
    IntervalDuring: 'intervalDuring' as RelationEnum,
    IntervalEquals: 'intervalEquals' as RelationEnum,
    IntervalFinishedBy: 'intervalFinishedBy' as RelationEnum,
    IntervalFinishes: 'intervalFinishes' as RelationEnum,
    IntervalIn: 'intervalIn' as RelationEnum,
    IntervalMeets: 'intervalMeets' as RelationEnum,
    IntervalMetBy: 'intervalMetBy' as RelationEnum,
    IntervalOverlappedBy: 'intervalOverlappedBy' as RelationEnum,
    IntervalOverlaps: 'intervalOverlaps' as RelationEnum,
    IntervalStartedBy: 'intervalStartedBy' as RelationEnum,
    IntervalStarts: 'intervalStarts' as RelationEnum,
    Item: 'item' as RelationEnum,
    Last: 'last' as RelationEnum,
    LatestVersion: 'latest-version' as RelationEnum,
    License: 'license' as RelationEnum,
    Linkset: 'linkset' as RelationEnum,
    Lrdd: 'lrdd' as RelationEnum,
    Manifest: 'manifest' as RelationEnum,
    MaskIcon: 'mask-icon' as RelationEnum,
    MediaFeed: 'media-feed' as RelationEnum,
    Memento: 'memento' as RelationEnum,
    Micropub: 'micropub' as RelationEnum,
    Modulepreload: 'modulepreload' as RelationEnum,
    Monitor: 'monitor' as RelationEnum,
    MonitorGroup: 'monitor-group' as RelationEnum,
    Next: 'next' as RelationEnum,
    NextArchive: 'next-archive' as RelationEnum,
    Nofollow: 'nofollow' as RelationEnum,
    Noopener: 'noopener' as RelationEnum,
    Noreferrer: 'noreferrer' as RelationEnum,
    Opener: 'opener' as RelationEnum,
    Openid2LocalId: 'openid2.local_id' as RelationEnum,
    Openid2Provider: 'openid2.provider' as RelationEnum,
    Original: 'original' as RelationEnum,
    P3Pv1: 'P3Pv1' as RelationEnum,
    Payment: 'payment' as RelationEnum,
    Pingback: 'pingback' as RelationEnum,
    Preconnect: 'preconnect' as RelationEnum,
    PredecessorVersion: 'predecessor-version' as RelationEnum,
    Prefetch: 'prefetch' as RelationEnum,
    Preload: 'preload' as RelationEnum,
    Prerender: 'prerender' as RelationEnum,
    Prev: 'prev' as RelationEnum,
    Preview: 'preview' as RelationEnum,
    Previous: 'previous' as RelationEnum,
    PrevArchive: 'prev-archive' as RelationEnum,
    PrivacyPolicy: 'privacy-policy' as RelationEnum,
    Profile: 'profile' as RelationEnum,
    Publication: 'publication' as RelationEnum,
    Related: 'related' as RelationEnum,
    Restconf: 'restconf' as RelationEnum,
    Replies: 'replies' as RelationEnum,
    Ruleinput: 'ruleinput' as RelationEnum,
    Search: 'search' as RelationEnum,
    Section: 'section' as RelationEnum,
    Self: 'self' as RelationEnum,
    Service: 'service' as RelationEnum,
    ServiceDesc: 'service-desc' as RelationEnum,
    ServiceDoc: 'service-doc' as RelationEnum,
    ServiceMeta: 'service-meta' as RelationEnum,
    Sponsored: 'sponsored' as RelationEnum,
    Start: 'start' as RelationEnum,
    Status: 'status' as RelationEnum,
    Stylesheet: 'stylesheet' as RelationEnum,
    Subsection: 'subsection' as RelationEnum,
    SuccessorVersion: 'successor-version' as RelationEnum,
    Sunset: 'sunset' as RelationEnum,
    Tag: 'tag' as RelationEnum,
    TermsOfService: 'terms-of-service' as RelationEnum,
    Timegate: 'timegate' as RelationEnum,
    Timemap: 'timemap' as RelationEnum,
    Type: 'type' as RelationEnum,
    Ugc: 'ugc' as RelationEnum,
    Up: 'up' as RelationEnum,
    VersionHistory: 'version-history' as RelationEnum,
    Via: 'via' as RelationEnum,
    Webmention: 'webmention' as RelationEnum,
    WorkingCopy: 'working-copy' as RelationEnum,
    WorkingCopyOf: 'working-copy-of' as RelationEnum,
  };
}

/**
 * Entry in the bundle - will have a resource or information
 */
export interface BundleEntry {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Links related to this entry (0..*) */
  link?: Array<BundleLink>;
  /** URI for resource (e.g. the absolute URL server address, URI for UUID/OID, etc.) (0..1) */
  fullUrl?: string;
  /** Id and extensions of the primitive `fullUrl`. */
  _fullUrl?: Element;
  /** A resource in the bundle (0..1) */
  resource?: ResourceList;
  /** Search related information (0..1) */
  search?: BundleSearch;
  /** Additional execution information (transaction/batch/history) (0..1) */
  request?: BundleRequest;
  /** Results of execution (transaction/batch/history) (0..1) */
  response?: BundleResponse;
}

/**
 * Search related information
 */
export interface BundleSearch {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** match | include - why this is in the result set (0..1) */
  mode?: BundleSearch.ModeEnum;
  /** Id and extensions of the primitive `mode`. */
  _mode?: Element;
  /** Search ranking (between 0 and 1) (0..1) */
  score?: number;
  /** Id and extensions of the primitive `score`. */
  _score?: Element;
}

export namespace BundleSearch {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/search-entry-mode */
  export type ModeEnum = 'match' | 'include' | 'outcome';
  export const ModeEnum = {
    Match: 'match' as ModeEnum,
    Include: 'include' as ModeEnum,
    Outcome: 'outcome' as ModeEnum,
  };
}

/**
 * Additional execution information (transaction/batch/history)
 */
export interface BundleRequest {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** GET | HEAD | POST | PUT | DELETE | PATCH (1..1) */
  method?: BundleRequest.MethodEnum;
  /** Id and extensions of the primitive `method`. */
  _method?: Element;
  /** URL for HTTP equivalent of this entry (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
  /** For managing cache validation (0..1) */
  ifNoneMatch?: string;
  /** Id and extensions of the primitive `ifNoneMatch`. */
  _ifNoneMatch?: Element;
  /** For managing cache currency (0..1) */
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
}

export namespace BundleRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/http-verb */
  export type MethodEnum = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  export const MethodEnum = {
    GET: 'GET' as MethodEnum,
    HEAD: 'HEAD' as MethodEnum,
    POST: 'POST' as MethodEnum,
    PUT: 'PUT' as MethodEnum,
    DELETE: 'DELETE' as MethodEnum,
    PATCH: 'PATCH' as MethodEnum,
  };
}

/**
 * Results of execution (transaction/batch/history)
 */
export interface BundleResponse {
  /** Unique id for inter-element referencing (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored even if unrecognized (0..*) */
  modifierExtension?: Array<Extension>;
  /** Status response code (text optional) (1..1) */
  status?: string;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;
  /** The location (if the operation returns a location) (0..1) */
  location?: string;
  /** Id and extensions of the primitive `location`. */
  _location?: Element;
  /** The Etag for the resource (if relevant) (0..1) */
  etag?: string;
  /** Id and extensions of the primitive `etag`. */
  _etag?: Element;
  /** Server's date time modified (0..1) */
  lastModified?: string;
  /** Id and extensions of the primitive `lastModified`. */
  _lastModified?: Element;
  /** OperationOutcome with hints and warnings (for batch/transaction) (0..1) */
  outcome?: ResourceList;
}
