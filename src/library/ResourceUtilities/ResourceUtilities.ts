export class ResourceUtility {
  /**
   *
   * @param inputJson - valid json
   * @param propertyName - top level property for resource
   * @returns json property if it exists
   * @limitation currently just supports get for top level property on resource
   */
  getResourceProperty(inputJson: object, propertyName: string) {
    let resourcePropertyValue = null;
    if (inputJson.hasOwnProperty(propertyName)) {
      resourcePropertyValue = inputJson[propertyName];
    }
    return resourcePropertyValue;
  }

  /**
   *
   * @param identifierList list of identifiers
   * @param propertyToCompare identifier property to compare
   * @param propertyValue value we want to compare against
   * @returns array of matches
   * @limitations currently does not work with identifier.type, identifier.period & identifier.assigner
   */
  getIdentifiersByProperty(
    identifierList: any[],
    propertyToCompare: string,
    propertyValue: string
  ): any[] {
    return identifierList?.length
      ? identifierList.filter((x) => x[propertyToCompare] === propertyValue)
      : [];
  }

  /**
   *
   * @param extensionList list of extensions
   * @param extensionUrl Extension.url to compare
   * @returns array of matches
   */
  getExtensionsByUrl(extensionList: any[], extensionUrl: string): any[] {
    return extensionList?.length
      ? extensionList.filter((x) => x["url"] === extensionUrl)
      : [];
  }

  /**
   *
   * @param codingList list of codings
   * @param propertyToCompare coding property to compare
   * @param propertyValue value we want to compare against string or boolean
   * @returns array of matches
   */
  getCodingsByProperty(
    codingList: any[],
    propertyToCompare: string,
    propertyValue: string | boolean
  ): any[] {
    return codingList?.length
      ? codingList.filter((x) => x[propertyToCompare] === propertyValue)
      : [];
  }

  /**
   *
   * @param resource resource for which path needs to be validated
   * @param elementPath path to validate in resource
   * @returns true or false if the path exists or not
   */
  resourcePathExists(resource: any, elementPath: string): boolean {
    const pathSections = elementPath.split(".");
    for (let index = 1; index < pathSections.length; index++) {
      const subPaths = pathSections[index];
      const resourcePathValue = resource[subPaths];
      if (resourcePathValue) {
        if (this.isPrimitive(resourcePathValue)) {
          return true;
        } else if (Array.isArray(resourcePathValue) && resourcePathValue.length > 0) {
          // loop over ???
          return this.resourcePathExists(
              resourcePathValue[0],
              pathSections.slice(index).join(".")
            );
        } else if (resourcePathValue.constructor === ({}).constructor) {
          // array is a object find out for {}
          return this.resourcePathExists(
              resourcePathValue,
              pathSections.slice(index).join(".")
            );
        }
      } else {
        break;
      }
    }
    return false;
  }

  /**
   *
   * @param resource resource for which path needs to be validated
   * @param elementPath path to validate in resource
   * @returns true or false if the path exists or not
   */
  getValuesAtResourcePath(resource: any, elementPath: string): string[] {
    const pathSections = elementPath.split(".");
    let resourcePathValue;
    for (let index = 1; index < pathSections.length; index++) {
      const subPaths = pathSections[index];
      resourcePathValue = resourcePathValue ? resourcePathValue[subPaths] : resource[subPaths];
      if (resourcePathValue) {
        if (this.isPrimitive(resourcePathValue)) {
          return [resourcePathValue];
        } else if (Array.isArray(resourcePathValue) && resourcePathValue.length > 0) {
           let resultSet = [];
           for (let subPathIndex = 0; subPathIndex < resourcePathValue.length; subPathIndex++) {
              const subPathValue = resourcePathValue[subPathIndex];
              resultSet.push(...this.getValuesAtResourcePath(subPathValue,
                 pathSections.slice(index).join(".")));
           }
           return resultSet;
        } else if (typeof(resourcePathValue) === 'object') {
          return this.getValuesAtResourcePath(resourcePathValue,
            pathSections.slice(index).join("."));
        }
      } else {
        break;
      }
    }
    return [];
  }

  private isPrimitive(value: any) {
    return typeof(value) === "boolean" || typeof(value) === "string";
  }
}

export const ResourceUtilities = new ResourceUtility();
