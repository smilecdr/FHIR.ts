import * as DSTU2 from "../../FHIR-DSTU2";
import * as R3 from "../../FHIR-R3";
import { Coding as r4Coding } from "../../FHIR-R4/classes/coding";
import { Extension as r4Extension } from "../../FHIR-R4/classes/extension";
import { Identifier as r4Identifier } from "../../FHIR-R4/classes/identifier";

type Identifier = r4Identifier & R3.Identifier & DSTU2.Identifier;
type IdentifierKeys = keyof Identifier;
type Extension = r4Extension & R3.Extension & DSTU2.Extension;
type Coding = r4Coding & R3.Coding & DSTU2.Coding;
type CodingKeys = keyof Coding;
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
  getIdentifiersByProperty(identifierList: Identifier[], propertyToCompare: IdentifierKeys, propertyValue: Identifier[IdentifierKeys]): Identifier[] {
    return identifierList?.length ? identifierList.filter(x => x[propertyToCompare] === propertyValue) : [];
  }

  /**
   * 
   * @param extensionList list of extensions
   * @param extensionUrl Extension.url to compare
   * @returns array of matches
   */
  getExtensionsByUrl(extensionList: Extension[], extensionUrl: string): Extension[] {
    return extensionList?.length ? extensionList.filter(x => x.url === extensionUrl) : [];
  }

  /**
   * 
   * @param codingList list of codings
   * @param propertyToCompare coding property to compare
   * @param propertyValue value we want to compare against string or boolean
   * @returns array of matches
   */
  getCodingsByProperty(codingList: Coding[], propertyToCompare: CodingKeys, propertyValue: Coding[CodingKeys]): Coding[] {
    return codingList?.length ? codingList.filter(x => x[propertyToCompare] === propertyValue) : [];
  }
}

export const ResourceUtilities = new ResourceUtility();
