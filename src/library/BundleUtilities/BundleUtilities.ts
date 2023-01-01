export class BundleUtilities {

    /**
     * 
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceTypeToFilter ResourceType to filter from bundle entries
     * @returns array of resources
     */
    static getResourcesFromBundle(bundleEntry: any[], resourceTypeToFilter: string): any[] {
        return bundleEntry?.length ? bundleEntry.filter(x => x['resource']['resourceType'] === resourceTypeToFilter) : [];
    }
}