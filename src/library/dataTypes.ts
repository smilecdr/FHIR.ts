/**
 * Shapes the utilities rely on. They are structural, so the plain data types
 * and the model classes of every FHIR version satisfy them, and the utilities
 * do not load the types of any particular version.
 */

/** Anything with the two elements every FHIR resource has. */
export interface ResourceLike {
  resourceType?: string;
  id?: string;
}

/** A `Bundle.entry` of any FHIR version. */
export interface BundleEntryLike<EntryResource = unknown> {
  fullUrl?: string;
  resource?: EntryResource;
}

/**
 * The resource type named `ResourceTypeName` out of a union of resource types.
 * When the entries are not typed as a union that `resourceType` can tell apart,
 * the type of the entries' resources is kept as it is.
 */
export type ResourceOfType<EntryResource, ResourceTypeName> = [
  Extract<EntryResource, { resourceType: ResourceTypeName }>,
] extends [never]
  ? EntryResource
  : Extract<EntryResource, { resourceType: ResourceTypeName }>;

/** The primitive elements of Identifier that can be compared with a value. */
export type IdentifierKeys = 'id' | 'use' | 'system' | 'value';

/** The primitive elements of Coding that can be compared with a value. */
export type CodingKeys = 'id' | 'system' | 'version' | 'code' | 'display' | 'userSelected';

export type IdentifierLike = { [IdentifierKey in IdentifierKeys]?: unknown };
export type CodingLike = { [CodingKey in CodingKeys]?: unknown };

export interface ExtensionLike {
  url?: string;
}
