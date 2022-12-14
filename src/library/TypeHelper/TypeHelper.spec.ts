import { ValidationHelper } from "../ValidationHelper/ValidationHelper";
import { TypeHelper } from "./TypeHelper";

const inputPayload = require("./../../test-resources/Patient-R4.json");
describe("TypeHelper", () => {
  describe("#findMatchingValuesInArray()", () => {
    it("should return empty array given valueToMatch parameter is invalid", () => {
      // setup
      const valueToMatch = [];
      const isValidJsonSpy = spyOn(ValidationHelper, "isValidJson")
        .withArgs(inputPayload.identifier[0]).and.returnValue(true)
        .withArgs(valueToMatch).and.returnValue(false);
      // execute
      const actual = TypeHelper.findMatchingValuesInArray(
        inputPayload.identifier,
        valueToMatch
      );
      // validate
      expect(actual.length).toEqual(0);
      expect(isValidJsonSpy).toHaveBeenCalledTimes(2);
    });

    it("should return empty array given valueToMatchInArray parameter is invalid", () => {
      // setup
      const valueToMatch = {
        use: "usual",
        system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      };
      const valueToMatchInArray = [["abc"], ["def"]];
      const isValidJsonSpy = spyOn(ValidationHelper, "isValidJson")
        .withArgs(valueToMatchInArray[0]).and.returnValue(false)
        .withArgs(valueToMatch).and.returnValue(true);
      // execute
      const actual = TypeHelper.findMatchingValuesInArray(
        valueToMatchInArray,
        valueToMatch
      );
      // validate
      expect(actual.length).toEqual(0);
      expect(isValidJsonSpy).toHaveBeenCalledTimes(2);
    });

    it("should return empty array given valueToMatchInArray & valueToMatch parameters are invalid", () => {
        // setup
        const valueToMatch = new Date();
        const valueToMatchInArray = [];
        const isValidJsonSpy = spyOn(ValidationHelper, "isValidJson")
          .withArgs(valueToMatchInArray).and.returnValue(false)
          .withArgs(valueToMatch).and.returnValue(false);
        // execute
        const actual = TypeHelper.findMatchingValuesInArray(
          valueToMatchInArray,
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
      const isValidJsonSpy = spyOn(ValidationHelper, "isValidJson")
        .withArgs(inputPayload.identifier[0]).and.returnValue(true)
        .withArgs(valueToMatch).and.returnValue(true);
      // execute
      const actual = TypeHelper.findMatchingValuesInArray(
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
      const isValidJsonSpy = spyOn(ValidationHelper, "isValidJson")
        .withArgs(inputPayload.name[0]).and.returnValue(true)
        .withArgs(valueToMatch).and.returnValue(true);
      // execute
      const actual = TypeHelper.findMatchingValuesInArray(
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
});
