import { ValidationHelper } from "../ValidationHelper/ValidationHelper";

export class TypeHelper {
  /**
   * 
   * @param arrayToMatchValueIn - Array of JSON objects in which we want to find values
   * @param valueToMatch - Value we want to find in @param arrayToMatchValueIn
   * @returns array with results based on matches found
   */
  static findMatchingValuesInArray(arrayToMatchValueIn: Array<object>, valueToMatch: object): Array<object> {
    let matchingResults = [];
    const valueToMatchIsValidJson = ValidationHelper.isValidJson(valueToMatch);
    const valueToMatchInArrayIncludesValidJson = arrayToMatchValueIn.length > 0 ? ValidationHelper.isValidJson(arrayToMatchValueIn[0]) : false;
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
}
