import { ValidationUtilities } from "../ValidationUtilities/ValidationUtilities";
import { TypeUtilities } from "./TypeUtilities";

const inputPayload = require("./../../test-resources/Patient-R4.json");
describe("TypeUtilities", () => {
  describe("#findMatchingValuesInArray()", () => {
    it("should return empty array given valueToMatch parameter is invalid", () => {
      // setup
      const valueToMatch = [];
      const isValidJsonSpy = spyOn(ValidationUtilities, "isValidJson")
        .withArgs(inputPayload.identifier[0]).and.returnValue(true)
        .withArgs(valueToMatch).and.returnValue(false);
      // execute
      const actual = TypeUtilities.findMatchingValuesInArray(
        inputPayload.identifier,
        valueToMatch
      );
      // validate
      expect(actual.length).toEqual(0);
      expect(isValidJsonSpy).toHaveBeenCalledTimes(2);
    });

    it("should return empty array given arrayToMatchValueIn parameter is invalid", () => {
      // setup
      const valueToMatch = {
        use: "usual",
        system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      };
      const arrayToMatchValueIn = [["abc"], ["def"]];
      const isValidJsonSpy = spyOn(ValidationUtilities, "isValidJson")
        .withArgs(arrayToMatchValueIn[0]).and.returnValue(false)
        .withArgs(valueToMatch).and.returnValue(true);
      // execute
      const actual = TypeUtilities.findMatchingValuesInArray(
        arrayToMatchValueIn,
        valueToMatch
      );
      // validate
      expect(actual.length).toEqual(0);
      expect(isValidJsonSpy).toHaveBeenCalledTimes(2);
    });

    it("should return empty array given arrayToMatchValueIn & valueToMatch parameters are invalid", () => {
        // setup
        const valueToMatch = new Date();
        const arrayToMatchValueIn = [];
        const isValidJsonSpy = spyOn(ValidationUtilities, "isValidJson")
          .withArgs(arrayToMatchValueIn).and.returnValue(false)
          .withArgs(valueToMatch).and.returnValue(false);
        // execute
        const actual = TypeUtilities.findMatchingValuesInArray(
          arrayToMatchValueIn,
          valueToMatch
        );
        // validate
        expect(actual.length).toEqual(0);
        expect(isValidJsonSpy).toHaveBeenCalledTimes(1);
      });

    it("should return array with one identifier match", () => {
      // setup
      const valueToMatch = {
        use: "usual",
        system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      };
      const isValidJsonSpy = spyOn(ValidationUtilities, "isValidJson")
        .withArgs(inputPayload.identifier[0]).and.returnValue(true)
        .withArgs(valueToMatch).and.returnValue(true);
      // execute
      const actual = TypeUtilities.findMatchingValuesInArray(
        inputPayload.identifier,
        valueToMatch
      );
      // validate
      expect(actual.length).toEqual(1);
      expect(JSON.stringify(actual[0])).toEqual(JSON.stringify(valueToMatch));
      expect(isValidJsonSpy).toHaveBeenCalledTimes(2);
    });

    it("should return array with multiple name matches", () => {
      // setup
      const valueToMatch = {
        use: "usual",
        family: "van de Heuvel",
        given: ["Pieter"],
        suffix: ["MSc"],
      };
      const isValidJsonSpy = spyOn(ValidationUtilities, "isValidJson")
        .withArgs(inputPayload.name[0]).and.returnValue(true)
        .withArgs(valueToMatch).and.returnValue(true);
      // execute
      const actual = TypeUtilities.findMatchingValuesInArray(
        inputPayload.name,
        valueToMatch
      );
      // validate
      expect(actual.length).toEqual(2);
      expect(JSON.stringify(actual[0])).toEqual(JSON.stringify(valueToMatch));
      expect(JSON.stringify(actual[1])).toEqual(JSON.stringify(valueToMatch));
      expect(isValidJsonSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe("#getIdentifierBySystem()", () => {
    const identifierList = [{
      use: 'temp',
      system: 'http://hl7.org/fhir/sid/us-ssn',
      value: 'abc'
    }, {
      use: 'usual',
      system: 'http://ns.electronichealth.net.au/id/hi/ihi/1.0',
      value: 'abc'
    }];

    it('should return empty array if property not found', () => {
      // setup
      const value = 'abc';
      // execute
      const actual = TypeUtilities.getIdentifierByProperty(identifierList, 'abc', value); 
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return empty array if no matches found', () => {
      // setup
      const systemUrl = 'http://somesystem.com';
      // execute
      const actual = TypeUtilities.getIdentifierByProperty(identifierList, 'system', systemUrl); 
      // validate
      expect(actual.length).toEqual(0);
    });

    it('should return array with all matches', () => {
      // setup
      const value = 'abc';
      // execute
      const actual = TypeUtilities.getIdentifierByProperty(identifierList, 'value', value); 
      // validate
      expect(actual.length).toEqual(2);
    });
  });
});
