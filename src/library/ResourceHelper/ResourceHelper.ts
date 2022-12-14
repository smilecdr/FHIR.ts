import { ValidationHelper } from "./../ValidationHelper/ValidationHelper";
export class ResourceHelper {
  /**
   * 
   * @param inputJson - valid json
   * @param castTo - valid class
   * @returns deserialized resource 
   */
  static deserializeResource<T>(inputJson: object, castTo: T): T | null {
    const isValidJson = ValidationHelper.isValidJson(inputJson);
    let deserializedResource: T | null = null;
    if (isValidJson) {
      for (let propName in inputJson) {
        castTo[propName] = inputJson[propName];
      }
      deserializedResource = castTo;
    }
    return deserializedResource;
  }

  /**
   * 
   * @param inputJson - valid json
   * @param propertyName - top level property for resource
   * @returns json property if it exists
   * @limitation currently just supports get for top level property on resource
   */
  static getResourceProperty(inputJson: object, propertyName: string) {
    const isValidJson = ValidationHelper.isValidJson(inputJson);
    let resourcePropertyValue = null;
    if (isValidJson && inputJson[propertyName] !== undefined) {
      resourcePropertyValue = inputJson[propertyName];
    }
    return resourcePropertyValue;
  }
}
