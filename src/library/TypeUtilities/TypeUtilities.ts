import { ValidationUtilities } from "../ValidationUtilities/ValidationUtilities";

export class TypeUtilities {
  /**
   * 
   * @param arrayToMatchValueIn - Array of JSON objects in which we want to find values
   * @param valueToMatch - Value we want to find in @param arrayToMatchValueIn
   * @returns array with results based on matches found
   */
  static findMatchingValuesInArray(arrayToMatchValueIn: Array<object>, valueToMatch: object): Array<object> {
    let matchingResults: Array<object> = [];
    const valueToMatchIsValidJson = ValidationUtilities.isValidJson(valueToMatch);
    const valueToMatchInArrayIncludesValidJson = arrayToMatchValueIn.length > 0 ? ValidationUtilities.isValidJson(arrayToMatchValueIn[0]) : false;
    if (valueToMatchIsValidJson && valueToMatchInArrayIncludesValidJson) {
      for (let index = 0; index < arrayToMatchValueIn.length; index++) {
        const matchAgainstStringified = JSON.stringify(arrayToMatchValueIn[index]);
        const matchValueStringified = JSON.stringify(valueToMatch);
        if (matchAgainstStringified === matchValueStringified) {
          matchingResults.push(arrayToMatchValueIn[index]);
        }
      }
    }
    return matchingResults;
  }

  /**
   * 
   * @param identifierList list of identifiers
   * @param propertyToCompare identifier property to compare
   * @param propertyValue value we want to compare against
   * @returns array of matches
   * @limitations currently does not work with identifier.type, identifier.period & identifier.assigner
   */
  static getIdentifiersByProperty(identifierList: any[], propertyToCompare: string, propertyValue: string): any[] {
    return identifierList?.length ? identifierList.filter(x => x[propertyToCompare] === propertyValue): [];
  }

  /**
   * 
   * @param extensionList list of extensions
   * @param extensionUrl Extension.url to compare
   * @returns array of matches
   */
  static getExtensionsByUrl(extensionList: any[], extensionUrl: string): any[] {
    return extensionList?.length ? extensionList.filter(x => x['url'] === extensionUrl) : [];
  }

  /**
   * 
   * @param codingList list of codings
   * @param propertyToCompare coding property to compare
   * @param propertyValue value we want to compare against string or boolean
   * @returns array of matches
   */
  static getCodingsByProperty(codingList: any[], propertyToCompare: string, propertyValue: string | boolean): any[] {
    return codingList?.length ? codingList.filter(x => x[propertyToCompare] === propertyValue) : [];
  }

}
