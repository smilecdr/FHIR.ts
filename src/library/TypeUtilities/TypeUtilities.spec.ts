import { TypeUtilities } from "./TypeUtilities";

describe("TypeUtilities", () => {

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
