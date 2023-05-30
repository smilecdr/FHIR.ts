import { BundleComparator } from "./BundleComparator";

export class BundleFilterPredicate {
    /**  
    * Predicate
     * - path for example: Patient.gender or Patient.name.firstName (we'll recursively look for that path)
     * - Array<primitive> compareTo: primitive value 
     * - AND/OR for child level filter: Most likely ENUM
     * - Match type 
     */
    filterPath: string;
    bundleComparators:  Array<BundleComparator>;
}