import { ValidationUtilities } from "../ValidationUtilities/ValidationUtilities";
import { TypeUtilities } from "./TypeUtilities";

const inputPayload = require("./../../test-resources/Patient-R4.json");
describe("TypeUtilities", () => {
  describe("#findMatchingValuesInArray()", () => {
    it("should return empty array given valueToMatch parameter is invalid", () => {
      // setup
      const valueToMatch = [];
      const isValidJsonSpy = spyOn(ValidationUtilities, "isValidJson")
        .withArgs(inputPayload.identifier[0])
        .and.returnValue(true)
        .withArgs(valueToMatch)
        .and.returnValue(false);
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
        .withArgs(arrayToMatchValueIn[0])
        .and.returnValue(false)
        .withArgs(valueToMatch)
        .and.returnValue(true);
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
        .withArgs(arrayToMatchValueIn)
        .and.returnValue(false)
        .withArgs(valueToMatch)
        .and.returnValue(false);
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
        .withArgs(inputPayload.identifier[0])
        .and.returnValue(true)
        .withArgs(valueToMatch)
        .and.returnValue(true);
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
        .withArgs(inputPayload.name[0])
        .and.returnValue(true)
        .withArgs(valueToMatch)
        .and.returnValue(true);
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

  describe("#getIdentifiersByProperty()", () => {
    const identifierList = [
      {
        use: "temp",
        system: "http://hl7.org/fhir/sid/us-ssn",
        value: "abc",
      },
      {
        use: "usual",
        system: "http://ns.electronichealth.net.au/id/hi/ihi/1.0",
        value: "abc",
      },
    ];

    it("should return empty array if null is passed as identifier list", () => {
      // setup
      const value = "abc";
      // execute
      const actual = TypeUtilities.getIdentifiersByProperty(null, "abc", value);
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if property not found", () => {
      // setup
      const value = "abc";
      // execute
      const actual = TypeUtilities.getIdentifiersByProperty(
        identifierList,
        "abc",
        value
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if no matches found", () => {
      // setup
      const systemUrl = "http://somesystem.com";
      // execute
      const actual = TypeUtilities.getIdentifiersByProperty(
        identifierList,
        "system",
        systemUrl
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return array with all matches", () => {
      // setup
      const value = "abc";
      // execute
      const actual = TypeUtilities.getIdentifiersByProperty(
        identifierList,
        "value",
        value
      );
      // validate
      expect(actual.length).toEqual(2);
    });
  });

  describe("#getExtensionsByUrl()", () => {
    const extensionList = [
      {
        url: "http://hl7.org/fhir/sid/us-ssn",
        valueBoolean: true,
      },
      {
        url: "http://ns.electronichealth.net.au/id/hi/ihi/1.0",
        valueString: "abc",
      },
    ];

    it("should return empty array if null is passed as extension list", () => {
      // execute
      const actual = TypeUtilities.getExtensionsByUrl(null, "url");
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if invalid extension array passed", () => {
      // setup
      const extensionListInvalid = [
        {
          use: "temp",
          system: "http://hl7.org/fhir/sid/us-ssn",
          value: "abc",
        },
      ];
      const url = "http://ns.electronichealth.net.au/id/hi/ihi/1.0";
      // execute
      const actual = TypeUtilities.getExtensionsByUrl(
        extensionListInvalid,
        url
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if no matches found", () => {
      // setup
      const url = "http://somesystem.com";
      // execute
      const actual = TypeUtilities.getExtensionsByUrl(extensionList, url);
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return array with all matches", () => {
      // setup
      const url = "http://ns.electronichealth.net.au/id/hi/ihi/1.0";
      // execute
      const actual = TypeUtilities.getExtensionsByUrl(extensionList, url);
      // validate
      expect(actual.length).toEqual(1);
    });
  });

  describe("#getCodingsByProperty()", () => {
    const codingList = [
      {
        version: "1.0",
        system: "http://hl7.org/fhir/sid/us-ssn",
        code: "abc",
        display: "abc",
        userSelected: false,
      },
      {
        version: "1.1",
        system: "http://ns.electronichealth.net.au/id/hi/ihi/1.0",
        code: "abc",
        display: "abc",
      },
    ];

    it("should return empty array if null is passed as coding list", () => {
      // setup
      const value = "abc";
      // execute
      const actual = TypeUtilities.getCodingsByProperty(null, "abc", value);
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if property not found", () => {
      // setup
      const value = "abc";
      // execute
      const actual = TypeUtilities.getCodingsByProperty(
        codingList,
        "abc",
        value
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if no matches found", () => {
      // setup
      const systemUrl = "http://somesystem.com";
      // execute
      const actual = TypeUtilities.getCodingsByProperty(
        codingList,
        "system",
        systemUrl
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return array with all matches for string values", () => {
      // setup
      const value = "abc";
      // execute
      const actual = TypeUtilities.getCodingsByProperty(
        codingList,
        "code",
        value
      );
      // validate
      expect(actual.length).toEqual(2);
    });

    it("should return array with all matches for boolean values", () => {
      // setup
      const value = false;
      // execute
      const actual = TypeUtilities.getCodingsByProperty(
        codingList,
        "userSelected",
        value
      );
      // validate
      expect(actual.length).toEqual(1);
    });
  });
});
