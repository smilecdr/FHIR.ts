import { ResourceUtils } from "./ResourceUtils";

const patientPayload = require("./../../test-resources/Patient-R4.json");
const careTeamPayload = require("./../../test-resources/CareTeam-R4.json");
describe("ResourceUtils", () => {

  let resourceUtils = new ResourceUtils();

  describe("#getResourceProperty()", () => {
    it("should return property if property exists in valid inputJson", () => {
      // execute
      const actual = resourceUtils.getResourceProperty(
        patientPayload,
        "deceasedBoolean"
      );
      // validate
      expect(actual).toBeFalse();
    });

    it("should return null if property exists in valid inputJson", () => {
      // execute
      const actual = resourceUtils.getResourceProperty(
        patientPayload,
        "abcd"
      );
      // validate
      expect(actual).toBeNull();
    });

    it("should return null if invalid inputJson is passed", () => {
      // setup
      const inputPayload = [1, 2];
      // execute
      const actual = resourceUtils.getResourceProperty(
        inputPayload,
        "deceasedBoolean"
      );
      // validate
      expect(actual).toBeNull();
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
      const actual = resourceUtils.getIdentifiersByProperty(
        null,
        "abc",
        value
      );
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if property not found", () => {
      // setup
      const value = "abc";
      // execute
      const actual = resourceUtils.getIdentifiersByProperty(
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
      const actual = resourceUtils.getIdentifiersByProperty(
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
      const actual = resourceUtils.getIdentifiersByProperty(
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
      const actual = resourceUtils.getExtensionsByUrl(null, "url");
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
      const actual = resourceUtils.getExtensionsByUrl(
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
      const actual = resourceUtils.getExtensionsByUrl(extensionList, url);
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return array with all matches", () => {
      // setup
      const url = "http://ns.electronichealth.net.au/id/hi/ihi/1.0";
      // execute
      const actual = resourceUtils.getExtensionsByUrl(extensionList, url);
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
      const actual = resourceUtils.getCodingsByProperty(null, "abc", value);
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if property not found", () => {
      // setup
      const value = "abc";
      // execute
      const actual = resourceUtils.getCodingsByProperty(
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
      const actual = resourceUtils.getCodingsByProperty(
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
      const actual = resourceUtils.getCodingsByProperty(
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
      const actual = resourceUtils.getCodingsByProperty(
        codingList,
        "userSelected",
        value
      );
      // validate
      expect(actual.length).toEqual(1);
    });
  });

  describe("#getValuesAtResourcePath()", () => {
    
    it("should return array with values if path exists for a top level element", () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, "Patient.gender");
      // validate
      expect(pathValues.length).toEqual(1);
      expect(pathValues[0]).toEqual("male");
    });

    fit("should return array with values for a array under object", () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, "Patient.name.given");
      // validate
      expect(pathValues.length).toEqual(3);
      expect(pathValues[0]).toEqual("Pieter");
      expect(pathValues[1]).toEqual("Peter");
      expect(pathValues[2]).toEqual("Pieter");
    });

    it("should return array with values if path exists for a deep array element", () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, "Patient.contact.relationship.coding.system");
      // validate
      expect(pathValues.length).toEqual(2);
      expect(pathValues[0]).toEqual("http://terminology.hl7.org/CodeSystem/v2-0131");
      expect(pathValues[1]).toEqual("http://terminology.hl7.org/CodeSystem/v2-0132");
    });

    it("should return array with values if path exists for a deep json element", () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, "Patient.maritalStatus.coding.system");
      // validate
      expect(pathValues.length).toEqual(1);
      expect(pathValues[0]).toEqual("http://terminology.hl7.org/CodeSystem/v3-MaritalStatus");
    });

    it("should return empty array if path does not exist", () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, "Patient.contact.relationship.coding.abcd");
      // validate
      expect(pathValues.length).toEqual(0);
    });
  });

  describe("#getAllResourceReferences()", () => {

    it("should return array of all references in a resource when references found", () => {
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(careTeamPayload);
      // validate
      expect(actual.length).toEqual(6);
    });

    it("should return empty array if references in a resource not found", () => {
      // setup
      const input = {
        "resourceType": "Patient"
      };
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(input);
      // validate
      expect(actual.length).toEqual(0);
    });

  });
});
