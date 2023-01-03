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
      // execute
      const actual = ValidationUtilities.isValidJson(inputPayload);
      // validate
      expect(actual).toBeFalse();
    });

    it("should return false if null is passed as inputJson", () => {
      // setup
      const inputPayload = null;
      // execute
      const actual = ValidationUtilities.isValidJson(inputPayload);
      // validate
      expect(actual).toBeFalse();
    });

    it("should return false if date is passed as inputJson", () => {
      // setup
      const inputPayload = new Date();
      // execute
      const actual = ValidationUtilities.isValidJson(inputPayload);
      // validate
      expect(actual).toBeFalse();
    });
  });
});
