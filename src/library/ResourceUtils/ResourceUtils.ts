import { CodingKeys, IdentifierKeys } from "../dataTypes";

export class ResourceUtils {
  /**
   *
   * @param inputJson - valid json
   * @param propertyName - top level property for resource
   * @returns json property if it exists
   * @limitation currently just supports get for top level property on resource
   */
  getResourceProperty(inputJson: Record<string, any>, propertyName: string) {
    let resourcePropertyValue = null;
    if (inputJson.hasOwnProperty(propertyName)) {
      resourcePropertyValue = inputJson[propertyName];
    }
    return resourcePropertyValue;
  }

  /**
   * Get identifiers from a list filtered by property value
   *
   * @template T - The identifier type to return (defaults to any for backward compatibility)
   * @param identifierList list of identifiers
   * @param propertyToCompare identifier property to compare
   * @param propertyValue value we want to compare against
   * @returns array of matches
   * @limitations currently does not work with identifier.type, identifier.period & identifier.assigner
   */
  getIdentifiersByProperty<T = any>(
    identifierList: any[] | null | undefined,
    propertyToCompare: IdentifierKeys,
    propertyValue: any[IdentifierKeys]
  ): T[] {
    return identifierList?.length
      ? identifierList.filter((x) => x[propertyToCompare] === propertyValue)
      : [];
  }

  /**
   * Get extensions from a list filtered by URL
   *
   * @template T - The extension type to return (defaults to any for backward compatibility)
   * @param extensionList list of extensions
   * @param extensionUrl Extension.url to compare
   * @returns array of matches
   */
  getExtensionsByUrl<T = any>(extensionList: any[] | null | undefined, extensionUrl: string): T[] {
    return extensionList?.length
      ? extensionList.filter((x) => x["url"] === extensionUrl)
      : [];
  }

  /**
   * Get codings from a list filtered by property value
   *
   * @template T - The coding type to return (defaults to any for backward compatibility)
   * @param codingList list of codings
   * @param propertyToCompare coding property to compare
   * @param propertyValue value we want to compare against string or boolean
   * @returns array of matches
   */
  getCodingsByProperty<T = any>(
    codingList: any[] | null | undefined,
    propertyToCompare: CodingKeys,
    propertyValue: any[CodingKeys]
  ): T[] {
    return codingList?.length
      ? codingList.filter((x) => x[propertyToCompare] === propertyValue)
      : [];
  }

  /**
   * Get values at a specific path in a FHIR resource
   *
   * @template T - The value type to return (defaults to any for backward compatibility)
   * @param resource resource for which path needs to be validated
   * @param elementPath path to validate in resource (e.g., "Patient.name.given")
   * @returns array of elements found at the provided path
   */
  getValuesAtResourcePath<T = any>(resource: any, elementPath: string): T[] {
    const pathSections = elementPath.split('.');
    if (!resource || (resource.resourceType !== pathSections[0])) return [];
    return this.getValuesAtResourcePathInner(resource, pathSections);
  }

  private getValuesAtResourcePathInner(resource: any, pathSections: string[]): any[] {
    let resourcePathValue: any;
    for (let index = 1; index < pathSections.length; index++) {
      const subPaths: string = pathSections[index] ?? '';
      resourcePathValue = resourcePathValue ? resourcePathValue[subPaths] : resource[subPaths];
      if (resourcePathValue) {
        if (this.isPrimitive(resourcePathValue) || pathSections.length === 2) {
          return Array.isArray(resourcePathValue) ? [...resourcePathValue] : [resourcePathValue];
        } else if (Array.isArray(resourcePathValue) && resourcePathValue.length > 0) {
          let resultSet = [];
          for (let subPathIndex = 0; subPathIndex < resourcePathValue.length; subPathIndex++) {
            const subPathValue = resourcePathValue[subPathIndex];
            if (this.isPrimitive(subPathValue)) {
              resultSet.push(subPathValue);
            }
            else {
              resultSet.push(...this.getValuesAtResourcePathInner(subPathValue, pathSections.slice(index)));
            }
          }
          return resultSet;
        } else if (typeof (resourcePathValue) === 'object') {
          return this.getValuesAtResourcePathInner(resourcePathValue, pathSections.slice(index));
        }
      } else {
        break;
      }
    }
    return [];
  }

  private isPrimitive(value: any) {
    return typeof (value) === "boolean" || typeof (value) === "string";
  }

  /**
   * @param resource resource to pull out references from
   * @returns array of references inside a resource
   */
  getAllReferencesFromResource(resource: any): string[] {
    const stringifiedResource = JSON.stringify(resource);
    const referenceJsonString = '"reference":';
    let references = [];
    let cursor = stringifiedResource.indexOf(referenceJsonString, 0);
    while (cursor > -1) {
      const referenceStart = stringifiedResource.indexOf(referenceJsonString, cursor) + referenceJsonString.length;
      const referenceEnd = stringifiedResource.indexOf('"', referenceStart + 1);
      const reference = stringifiedResource.substring(referenceStart, referenceEnd);
      // this means the reference ends started reading from start again
      if (referenceEnd < cursor) {
        break;
      }
      references.push(reference);
      cursor = referenceEnd;
    }
    return references;
  }
}