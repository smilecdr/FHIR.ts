import { Patient } from "../../FHIR-R4/classes/patient";
import { ResourceUtilities } from "./ResourceUtilities";
import { ValidationUtilities } from "../ValidationUtilities/ValidationUtilities";

const inputPayload = require("./../../test-resources/Patient-R4.json");
describe("ResourceUtilities", () => {

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
