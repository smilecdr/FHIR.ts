import { Patient } from "../../FHIR-R4/classes/patient";
import { ResourceUtilities } from "./ResourceUtilities";
import { ValidationUtilities } from "../ValidationUtilities/ValidationUtilities";

const inputPayload = require("./../../test-resources/Patient-R4.json");
describe("ResourceUtilities", () => {
  describe("#deserializeResource()", () => {
    it("should deserialize if input JSON is valid Patient R4 resource", () => {
      // setup
      const isValidJsonSpy = spyOn(ValidationUtilities, 'isValidJson').and.returnValue(true);
      // execute
      const actual = ResourceUtilities.deserializeResource(inputPayload, new Patient());
      // validate
      expect(actual instanceof Patient).toBeTrue();
      expect(actual.gender).toEqual("male");
      expect(actual.identifier[0].system).toEqual("urn:oid:2.16.840.1.113883.2.4.6.3");
      expect(actual.contact[0].relationship[0].coding[0].system).toEqual("http://terminology.hl7.org/CodeSystem/v2-0131");
      expect(isValidJsonSpy).toHaveBeenCalledOnceWith(inputPayload);
    });

    it("should return null", () => {
      // setup
      const isValidJsonSpy = spyOn(ValidationUtilities, 'isValidJson').and.returnValue(false);
      // execute
      const actual = ResourceUtilities.deserializeResource(inputPayload, new Patient());
      // validate
      expect(actual).toBeNull();
      expect(isValidJsonSpy).toHaveBeenCalledOnceWith(inputPayload);
    });
  });

  describe("#getResourceProperty()", () => {
    it('should return property if property exists in valid inputJson', () => {
      // setup
      const isValidJsonSpy = spyOn(ValidationUtilities, 'isValidJson').and.returnValue(true);
      // execute
      const actual = ResourceUtilities.getResourceProperty(inputPayload, 'deceasedBoolean');
      // validate
      expect(actual).toBeFalse();
      expect(isValidJsonSpy).toHaveBeenCalledOnceWith(inputPayload);
    });

    it('should return null if property exists in valid inputJson', () => {
      // setup
      const isValidJsonSpy = spyOn(ValidationUtilities, 'isValidJson').and.returnValue(true);
      // execute
      const actual = ResourceUtilities.getResourceProperty(inputPayload, 'abcd');
      // validate
      expect(actual).toBeNull();
      expect(isValidJsonSpy).toHaveBeenCalledOnceWith(inputPayload);
    });

    it('should return null if invalid inputJson is passed', () => {
      // setup
      const inputPayload = [1,2];
      const isValidJsonSpy = spyOn(ValidationUtilities, 'isValidJson').and.returnValue(false);
      // execute
      const actual = ResourceUtilities.getResourceProperty(inputPayload, 'deceasedBoolean');
      // validate
      expect(actual).toBeNull();
      expect(isValidJsonSpy).toHaveBeenCalledOnceWith(inputPayload);
    });
  });
});
