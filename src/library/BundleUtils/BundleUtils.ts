import type { BundleEntryLike, ResourceLike, ResourceOfType } from '../dataTypes';

type BundleEntries<EntryResource> = readonly BundleEntryLike<EntryResource>[] | null | undefined;

export class BundleUtils {
  /**
   * Get the resources of one resource type from bundle entries.
   *
   * When the entries are typed (`fhirR4.Bundle['entry']`), the result is typed
   * as that resource: `getResources(bundle.entry, 'Claim')` returns `Claim[]`.
   * Entries without a resource are skipped.
   *
   * @param bundleEntries Bundle.entry, i.e. the bundle entries to filter
   * @param resourceTypeToFilter resource type to keep
   * @returns array of resources, empty when there are no entries
   */
  getResources<
    EntryResource extends ResourceLike,
    ResourceTypeName extends NonNullable<EntryResource['resourceType']>,
  >(
    bundleEntries: BundleEntries<EntryResource>,
    resourceTypeToFilter: ResourceTypeName
  ): ResourceOfType<EntryResource, ResourceTypeName>[];
  /** Get the resources of one resource type, naming the result type yourself. */
  getResources<ResourceType>(
    bundleEntries: BundleEntries<unknown>,
    resourceTypeToFilter: string
  ): ResourceType[];
  getResources(bundleEntries: BundleEntries<unknown>, resourceTypeToFilter: string): unknown[] {
    const matchingResources: unknown[] = [];
    for (const bundleEntry of bundleEntries ?? []) {
      const entryResource = bundleEntry?.resource as ResourceLike | undefined;
      if (entryResource?.resourceType === resourceTypeToFilter) {
        matchingResources.push(entryResource);
      }
    }
    return matchingResources;
  }

  /**
   * Get a single resource from bundle entries by resource id.
   *
   * @param bundleEntries Bundle.entry, i.e. the bundle entries to search
   * @param resourceId resource id to look for
   * @returns the resource, undefined when no entry has that id, or null when the entries are null
   */
  getResource<EntryResource extends ResourceLike>(
    bundleEntries: BundleEntries<EntryResource>,
    resourceId: string
  ): EntryResource | null | undefined;
  /** Get a single resource by id, naming the result type yourself. */
  getResource<ResourceType>(
    bundleEntries: BundleEntries<unknown>,
    resourceId: string
  ): ResourceType | null | undefined;
  getResource(bundleEntries: BundleEntries<unknown>, resourceId: string): unknown {
    if (!bundleEntries) {
      return null;
    }
    const matchingEntry = bundleEntries.find(
      (bundleEntry) => (bundleEntry?.resource as ResourceLike | undefined)?.id === resourceId
    );
    return matchingEntry?.resource;
  }

  /**
   * Get a single resource from bundle entries by full URL.
   *
   * @param bundleEntries Bundle.entry, i.e. the bundle entries to search
   * @param fullUrl Bundle.entry.fullUrl to look for
   * @returns the resource, undefined when no entry has that full URL, or null when the entries are null
   */
  getResourceByFullUrl<EntryResource extends ResourceLike>(
    bundleEntries: BundleEntries<EntryResource>,
    fullUrl: string
  ): EntryResource | null | undefined;
  /** Get a single resource by full URL, naming the result type yourself. */
  getResourceByFullUrl<ResourceType>(
    bundleEntries: BundleEntries<unknown>,
    fullUrl: string
  ): ResourceType | null | undefined;
  getResourceByFullUrl(bundleEntries: BundleEntries<unknown>, fullUrl: string): unknown {
    if (!bundleEntries) {
      return null;
    }
    const matchingEntry = bundleEntries.find((bundleEntry) => bundleEntry?.fullUrl === fullUrl);
    return matchingEntry?.resource;
  }
}
