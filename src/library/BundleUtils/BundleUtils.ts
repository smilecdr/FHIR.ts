export class BundleUtils {
  /**
   * Get resources from bundle entries filtered by resource type
   *
   * @template T - The resource type to return (defaults to any for backward compatibility)
   * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
   * @param resourceTypeToFilter ResourceType to filter from bundle entries
   * @returns array of resources
   */
  getResources<T = any>(bundleEntry: any[] | null | undefined, resourceTypeToFilter: string): T[] {
    return bundleEntry?.length
      ? bundleEntry
          .filter((x) => x['resource']['resourceType'] === resourceTypeToFilter)
          .map((x) => x['resource'])
      : [];
  }

  /**
   * Get a single resource from bundle entries by resource ID
   *
   * @template T - The resource type to return (defaults to any for backward compatibility)
   * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
   * @param resourceId Resource ID to filter from bundle entries
   * @returns single resource, undefined if not found, or null if input is null
   */
  getResource<T = any>(
    bundleEntry: any[] | null | undefined,
    resourceId: string
  ): T | undefined | null {
    if (!bundleEntry) {
      return null;
    }
    const entry = bundleEntry.find((x) => x['resource']?.['id'] === resourceId);
    return entry?.['resource'];
  }

  /**
   * Get a single resource from bundle entries by full URL
   *
   * @template T - The resource type to return (defaults to any for backward compatibility)
   * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
   * @param fullUrl Full Url to filter from bundle entries
   * @returns single resource, undefined if not found, or null if input is null
   */
  getResourceByFullUrl<T = any>(
    bundleEntry: any[] | null | undefined,
    fullUrl: string
  ): T | undefined | null {
    if (!bundleEntry) {
      return null;
    }
    const entry = bundleEntry.find((x) => x['fullUrl'] === fullUrl);
    return entry?.['resource'];
  }
}
