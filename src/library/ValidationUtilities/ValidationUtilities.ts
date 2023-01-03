export class ValidationUtilityClass {
    /**
     * 
     * @param inputJson - takes an object
     * @returns boolean based on inputJson passed 
     */
    isValidJson(inputJson: object): boolean {
        return !(Array.isArray(inputJson) || inputJson === null || inputJson instanceof Date);
    }
}

export const ValidationUtilities = new ValidationUtilityClass();