export class BundleUtility {

    /**
     * 
     * @param bundleEntry Bundle.entry[] i.e. the bundle entries to filter
     * @param resourceTypeToFilter ResourceType to filter from bundle entries
     * @returns array of resources
     */
    getResourcesFromBundle(bundleEntry: any[], resourceTypeToFilter: string): any[] {
        return bundleEntry?.length ? bundleEntry.filter(x => x['resource']['resourceType'] === resourceTypeToFilter) : [];
    }

}

export const BundleUtilities = new BundleUtility();


