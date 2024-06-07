import { PATCH_DATATYPE } from "../constants";
import { PatchUtils } from "./PatchUtils";
describe("PatchUtils", () => {

  let patchUtils;

  beforeEach(() => {
    patchUtils = new PatchUtils();
  });

  it('createReplaceParameters() should create Parameters for FHIR patch replace operation', () => {
    // setup
    const expected = {
      "resourceType": "Parameters",
      "parameter": [ {
        "name": "operation",
        "part": [ {
          "name": "type",
          "valueCode": "replace"
        }, {
          "name": "path",
          "valueString": "Patient.birthDate"
        }, {
          "name": "value",
          "valueDate": "1930-01-01"
        } ]
      } ]
    };
    // execute
    const actual = patchUtils.createReplaceParameters("Patient.birthDate", "1930-01-01", PATCH_DATATYPE.DATE);
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createDeleteParameters() should create Parameters for FHIR patch delete operation', () => {
    // setup
    const expected = {
      "resourceType": "Parameters",
      "parameter": [ {
        "name": "operation",
        "part": [ {
          "name": "type",
          "valueCode": "delete"
        }, {
          "name": "path",
          "valueString": "Patient.status"
        }]
      } ]
    };
    // execute
    const actual = patchUtils.createDeleteParameters("Patient.status");
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createMoveParameters() should create Parameters for FHIR patch move operation', () => {
    // setup
    const expected = {
      "resourceType": "Parameters",
      "parameter": [ {
        "name": "operation",
        "part": [ {
          "name": "type",
          "valueCode": "move"
        }, {
          "name": "path",
          "valueString": "Patient.identifier"
        }, {
          "name": "source",
          "valueInteger": 0
        }, {
          "name": "destination",
          "valueInteger": 1
        }]
      } ]
    };
    // execute
    const actual = patchUtils.createMoveParameters("Patient.identifier", 0, 1);
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createAddParameters() should create Parameters for FHIR patch add operation', () => {
    // setup
    const expected = {
      "resourceType": "Parameters",
      "parameter": [ {
        "name": "operation",
        "part": [ {
          "name": "type",
          "valueCode": "add"
        }, {
          "name": "path",
          "valueString": "Patient"
        }, {
          "name": "name",
          "valueString": "birthDate"
        }, {
          "name": "value",
          "valueDate": "1930-01-01"
        }]
      } ]
    };
    // execute
    const actual = patchUtils.createAddParameters("Patient", "birthDate", "1930-01-01", PATCH_DATATYPE.DATE);
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('createInsertParameters() should create Parameters for FHIR patch add operation', () => {
    // setup
    const identifier = {
      "system": "http://some-system.com",
      "value": "someValue"
    }
    const expected = {
      "resourceType": "Parameters",
      "parameter": [ {
        "name": "operation",
        "part": [ {
          "name": "type",
          "valueCode": "insert"
        }, {
          "name": "path",
          "valueString": "Patient.identifier"
        }, {
          "name": "index",
          "valueInteger": 1
        }, {
          "name": "value",
          "valueIdentifier": identifier
        }]
      } ]
    };
    // execute
    const actual = patchUtils.createInsertParameters("Patient.identifier", identifier, PATCH_DATATYPE.IDENTIFIER, 1);
    // validate
    expect(actual.getPatchParameters()).toEqual(expected);
  });

  it('resetPatchParameters() should reset Parameter property inside Parameters resource for PATCH operation', () => {
    // setup
    // validate delete params are present
    expect(patchUtils.createDeleteParameters("Patient.status").getPatchParameters().parameter).toHaveSize(1);
    // execute
    const actual = patchUtils.resetPatchParameters().getPatchParameters();
    // validate
    expect(actual.parameter).toHaveSize(0);
  });
  
});
