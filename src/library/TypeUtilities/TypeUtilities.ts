import { ValidationUtilities } from "../ValidationUtilities/ValidationUtilities";

export class TypeUtilityClass {
  /**
   * 
   * @param identifierList list of identifiers
   * @param propertyToCompare identifier property to compare
   * @param propertyValue value we want to compare against
   * @returns array of matches
   * @limitations currently does not work with identifier.type, identifier.period & identifier.assigner
   */
  getIdentifiersByProperty(identifierList: any[], propertyToCompare: string, propertyValue: string): any[] {
    return identifierList?.length ? identifierList.filter(x => x[propertyToCompare] === propertyValue): [];
  }

  /**
   * 
   * @param extensionList list of extensions
   * @param extensionUrl Extension.url to compare
   * @returns array of matches
   */
  getExtensionsByUrl(extensionList: any[], extensionUrl: string): any[] {
    return extensionList?.length ? extensionList.filter(x => x['url'] === extensionUrl) : [];
  }

  /**
   * 
   * @param codingList list of codings
   * @param propertyToCompare coding property to compare
   * @param propertyValue value we want to compare against string or boolean
   * @returns array of matches
   */
  getCodingsByProperty(codingList: any[], propertyToCompare: string, propertyValue: string | boolean): any[] {
    return codingList?.length ? codingList.filter(x => x[propertyToCompare] === propertyValue) : [];
  }

}

export const TypeUtilities = new TypeUtilityClass();
