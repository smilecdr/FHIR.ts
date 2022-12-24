import { ValidationUtilities } from "./ValidationUtilities";

describe("ValidationUtilities", () => {
  describe("#isValidJson()", () => {
    it("should return true if json is passed as inputJson", () => {
      // setup
      const inputPayload = require("./../../test-resources/Patient-R4.json");
      // execute
      const actual = ValidationUtilities.isValidJson(inputPayload);
      // validate
      expect(actual).toBeTrue();
    });

    it("should return false if array is passed as inputJson", () => {
      // setup
      const inputPayload = [1, 2];
      const consoleSpy = spyOn(console, 'error');
      // execute
      const actual = ValidationUtilities.isValidJson(inputPayload);
      // validate
      expect(actual).toBeFalse();
      expect(consoleSpy).toHaveBeenCalledOnceWith("Invalid JSON input.");
    });

    it("should return false if array is passed as inputJson", () => {
      // setup
      const inputPayload = null;
      const consoleSpy = spyOn(console, 'error');
      // execute
      const actual = ValidationUtilities.isValidJson(inputPayload);
      // validate
      expect(actual).toBeFalse();
      expect(consoleSpy).toHaveBeenCalledOnceWith("Invalid JSON input.");
    });

    it("should return false if array is passed as inputJson", () => {
      // setup
      const inputPayload = new Date();
      const consoleSpy = spyOn(console, 'error');
      // execute
      const actual = ValidationUtilities.isValidJson(inputPayload);
      // validate
      expect(actual).toBeFalse();
      expect(consoleSpy).toHaveBeenCalledOnceWith("Invalid JSON input.");
    });
  });
});
