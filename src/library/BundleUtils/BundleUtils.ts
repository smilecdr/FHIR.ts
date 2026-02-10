export class BundleUtils {

    /**
     *
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceTypeToFilter ResourceType to filter from bundle entries
     * @returns array of resources
     */
    getResources(bundleEntry: any[] | null | undefined, resourceTypeToFilter: string): any[] {
        return bundleEntry?.length ? bundleEntry.filter(x => x['resource']['resourceType'] === resourceTypeToFilter) : [];
    }

    /**
     *
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceId Resource ID to filter from bundle entries
     * @returns single resource
     */
    getResource(bundleEntry: any[] | null | undefined, resourceId: string): any {
        return bundleEntry?.length ? bundleEntry.find(x => x['resource']['id'] === resourceId) : null;
    }

    /**
     *
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param fullUrl Full Url to filter from bundle entries
     * @returns single resource
     */
    getResourceByFullUrl(bundleEntry: any[] | null | undefined, fullUrl: string): any {
        return bundleEntry?.length ? bundleEntry.find(x => x['fullUrl'] === fullUrl) : null;
    }
}



