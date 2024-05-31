import { BundleUtils } from "./BundleUtils";

const inputPayload = require("./../../test-resources/Bundle-R4.json");
describe("BundleUtils", () => {

  let bundleUtils = new BundleUtils();
  
  describe("#getResources()", () => {
    it("should return empty array if null is passed as bundle entries", () => {
      // execute
      const actual = bundleUtils.getResources(null, "Patient");
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if invalid resourceType is passed", () => {
      // execute
      const actual = bundleUtils.getResources(
        inputPayload.entry,
        "patient"
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return all matches array", () => {
      // execute
      const actual = bundleUtils.getResources(
        inputPayload.entry,
        "Claim"
      );
      // validate
      expect(actual.length).toEqual(27);
    });
  });

  describe("#getResource()", () => {
    it("should return null if null is passed as bundle entries", () => {
      // execute
      const actual = bundleUtils.getResource(null, "123");
      // validate
      expect(actual).toBeNull();
    });

    it("should return undefined if resourceId is not found", () => {
      // execute
      const actual = bundleUtils.getResource(
        inputPayload.entry,
        "123"
      );
      // validate
      expect(actual).toBeUndefined();
    });

    it("should return resource if resource is found", () => {
      // execute
      const actual = bundleUtils.getResource(
        inputPayload.entry,
        "ec0bb1b3-b229-36cf-7e34-3f5fec9d3afe"
      );
      // validate
      expect(actual).not.toBeNull();
    });
  });
});
