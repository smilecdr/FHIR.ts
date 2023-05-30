import { fhirR3, fhirR4 } from "../..";
import { BundleFilterPredicate } from "../models/BundleFilterPredicate";

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

    /**
     * params
     * AND/OR for parent level filter: Most likely ENUM
     * BundleToFilter: Bundle
     * Array<Predicate> : criterias to filter
     * Predicate
     * - path for example: Patient.gender or Patient.name.firstName (we'll recursively look for that path)
     * - Array<primitive> compareTo: primitive value 
     * - AND/OR for child level filter: Most likely ENUM
     * - Match type 
     */
    filterBundleWithCriterias(bundleToFilter: fhirR3.Bundle | fhirR4.Bundle, criterias: Array<BundleFilterPredicate>): Object {
        //  compareValue: string | Date | boolean | number;
            // compareOperator: 'AND' | 'OR';
            // compareType: 'EXACT';
        return {};
    }
}

export const BundleUtilities = new BundleUtility();


