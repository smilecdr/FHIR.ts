import { ResourceUtils } from "./ResourceUtils";
import { Coding, Extension, Identifier, } from "../dataTypes";
import { CareTeam } from "../../FHIR-R4/classes/careTeam";

const patientPayload = require("./../../test-resources/Patient-R4.json");
const careTeamPayload = require("./../../test-resources/CareTeam-R4.json");
const careTeamContainedPayload = require("./../../test-resources/CareTeam-R4-contained.json");
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
    const identifierList: Identifier[] = [
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
      const value = "shouldBeIgnored";
      // execute
      const actual = resourceUtils.getIdentifiersByProperty(
        null,
        "id",
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
        "extension", // no extensions in test data
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
    const extensionList: Extension[] = [
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
          // @ts-ignore
          use: "temp",
          system: "http://hl7.org/fhir/sid/us-ssn",
          value: "abc",
        },
      ] as Extension[]; // disabling compiler warning for the test
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
    const codingList: Coding[] = [
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
      const value = "shouldBeIgnored";
      // execute
      const actual = resourceUtils.getCodingsByProperty(null, "extension", value);
      // validate
      expect(actual.length).toEqual(0);
    });

    it("should return empty array if property not found", () => {
      // setup
      const value = "abc";
      // execute
      const actual = resourceUtils.getCodingsByProperty(
        codingList,
        "id", // expect no ID in codingList
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

    it("should return empty array if the root of the path path does not match the resource type", () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, "Practitioner.name.given");
      // validate
      expect(pathValues.length).toEqual(0);
    });

    it("should return array with values if path exists for a top level element", () => {
      // execute
      const pathValues = resourceUtils.getValuesAtResourcePath(patientPayload, "Patient.gender");
      // validate
      expect(pathValues.length).toEqual(1);
      expect(pathValues[0]).toEqual("male");
    });

    it('should return array with values if path exists for a top level element and is an object', () => {
      const expected = [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "M",
              display: "Married"
            }
          ],
          text: "Getrouwd",
        }
      ];
      // execute
      const actual = resourceUtils.getValuesAtResourcePath(
        patientPayload,
        "Patient.maritalStatus"
      );
      // validate
      expect(actual.length).toEqual(1);
      expect(actual).toEqual(expected);
    });

    it("should return array with values if path exists for a top level element and is an array", () => {
      // setup
      const expected = [
        {
          use: "usual",
          family: "van de Heuvel",
          given: ["Pieter", "Peter"],
          suffix: ["MSc"],
        },
        {
          use: "usual",
          family: "van de Heuvel",
          given: ["Pieter"],
          suffix: ["MSc"],
        },
      ];
      // execute
      const actual = resourceUtils.getValuesAtResourcePath(
        patientPayload,
        "Patient.name"
      );
      // validate
      expect(actual.length).toEqual(2);
      expect(actual).toEqual(expected);
    });

    it("should return array with values for a array under object", () => {
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

    it("should return empty array all references in a resource when references found", () => {
      // setup
      const input = careTeamContainedPayload as CareTeam;
      expect(input.contained).toHaveSize(1);
      // execute
      const actual = resourceUtils.getAllReferencesFromResource(input.contained[0]);
      // validate
      expect(actual.length).toEqual(1);
    });
  });

});
