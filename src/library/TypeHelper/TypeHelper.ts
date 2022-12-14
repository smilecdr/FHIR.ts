import { ValidationHelper } from "../ValidationHelper/ValidationHelper";

export class TypeHelper {
  /**
   * 
   * @param arrayToFindValueIn - Array of JSON objects in which we want to find values
   * @param valueToMatch - Value we want to find in @param arrayToFindValueIn
   * @returns array with results based on matches found
   */
  static findMatchingValuesInArray(arrayToFindValueIn: Array<object>, valueToMatch: object): Array<object> {
    let matchingResults = [];
    const valueToMatchIsValidJson = ValidationHelper.isValidJson(valueToMatch);
    const valueToMatchInArrayIncludesValidJson = arrayToFindValueIn.length > 0 ? ValidationHelper.isValidJson(arrayToFindValueIn[0]) : false;
    if (valueToMatchIsValidJson && valueToMatchInArrayIncludesValidJson) {
      for (let index = 0; index < arrayToFindValueIn.length; index++) {
        const matchAgainstStringified = JSON.stringify(arrayToFindValueIn[index]);
        const matchValueStringified = JSON.stringify(valueToMatch);
        if (matchAgainstStringified === matchValueStringified) {
          matchingResults.push(arrayToFindValueIn[index]);
        }
      }
    }
    return matchingResults;
  }
}
