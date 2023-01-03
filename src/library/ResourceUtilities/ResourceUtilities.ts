import { ValidationUtilities } from "../ValidationUtilities/ValidationUtilities";
export class ResourceUtilityClass {
  
  /**
   * 
   * @param inputJson - valid json
   * @param propertyName - top level property for resource
   * @returns json property if it exists
   * @limitation currently just supports get for top level property on resource
   */
  getResourceProperty(inputJson: object, propertyName: string) {
    const isValidJson = ValidationUtilities.isValidJson(inputJson);
    let resourcePropertyValue = null;
    if (isValidJson && inputJson[propertyName] !== undefined) {
      resourcePropertyValue = inputJson[propertyName];
    }
    return resourcePropertyValue;
  }
}

export const ResourceUtilities = new ResourceUtilityClass();
