/**
 * FHIR R3 data types generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { Element } from './element';
import type { Extension } from './extension';
import type { Identifier } from './identifier';
import type { Meta } from './meta';
import type { Resource } from './resourceList';
import type { Signature } from './signature';

/**
 * Base StructureDefinition for Bundle Resource
 */
export class Bundle {
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
  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection (1..1) */
  type?: Bundle.TypeEnum;
  /** Id and extensions of the primitive `type`. */
  _type?: Element;
  /** If search, the total number of matches (0..1) */
  total?: number;
  /** Id and extensions of the primitive `total`. */
  _total?: Element;
  /** Links related to this Bundle (0..*) */
  link?: Array<BundleLink>;
  /** Entry in the bundle - will have a resource, or information (0..*) */
  entry?: Array<BundleEntry>;
  /** Digital Signature (0..1) */
  signature?: Signature;
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
    | 'collection';
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
  };
}

/**
 * Links related to this Bundle
 */
export class BundleLink {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 (1..1) */
  relation?: string;
  /** Id and extensions of the primitive `relation`. */
  _relation?: Element;
  /** Reference details for the link (1..1) */
  url?: string;
  /** Id and extensions of the primitive `url`. */
  _url?: Element;
}

/**
 * Entry in the bundle - will have a resource, or information
 */
export class BundleEntry {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** Links related to this entry (0..*) */
  link?: Array<BundleLink>;
  /** Absolute URL for resource (server address, or UUID/OID) (0..1) */
  fullUrl?: string;
  /** Id and extensions of the primitive `fullUrl`. */
  _fullUrl?: Element;
  /** A resource in the bundle (0..1) */
  resource?: Resource;
  /** Search related information (0..1) */
  search?: BundleSearch;
  /** Transaction Related Information (0..1) */
  request?: BundleRequest;
  /** Transaction Related Information (0..1) */
  response?: BundleResponse;
}

/**
 * Search related information
 */
export class BundleSearch {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** match | include | outcome - why this is in the result set (0..1) */
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
 * Transaction Related Information
 */
export class BundleRequest {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
  /** GET | POST | PUT | DELETE (1..1) */
  method?: BundleRequest.MethodEnum;
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
}

export namespace BundleRequest {
  /** Codes of the required value set http://hl7.org/fhir/ValueSet/http-verb */
  export type MethodEnum = 'GET' | 'POST' | 'PUT' | 'DELETE';
  export const MethodEnum = {
    GET: 'GET' as MethodEnum,
    POST: 'POST' as MethodEnum,
    PUT: 'PUT' as MethodEnum,
    DELETE: 'DELETE' as MethodEnum,
  };
}

/**
 * Transaction Related Information
 */
export class BundleResponse {
  /** xml:id (or equivalent in JSON) (0..1) */
  id?: string;
  /** Id and extensions of the primitive `id`. */
  _id?: Element;
  /** Additional Content defined by implementations (0..*) */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored (0..*) */
  modifierExtension?: Array<Extension>;
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
}
