export class ValidationUtilities {
    /**
     * 
     * @param inputJson - takes an object
     * @returns boolean based on inputJson passed 
     */
    static isValidJson(inputJson: object): boolean {
        let returnValue = true;
        if (Array.isArray(inputJson) || inputJson === null || inputJson instanceof Date) {
            console.error("Invalid JSON input.");
            returnValue = false;
        }
        return returnValue;
    }
}