import { QueryUtils } from "./QueryUtils";

describe("QueryUtils", () => {

  let queryUtils;

  beforeEach(() => {
    queryUtils = new QueryUtils();
  });

  it('setBaseResource() should set base resource and getBaseResource() should return correct base resource', () => {
    // setup
    const expected: String = "Patient";
    // execute
    queryUtils.setBaseResource(expected);
    // validate
    expect(queryUtils.getBaseResource()).toEqual(expected);
  })

  it('should make query for _include', () => {
    // setup
    const expected: String = "Patient?_include=Patient:organization"
    // execute
    queryUtils.setBaseResource("Patient").include("organization");
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for multiple _include', () => {
    // setup
    const expected: String = "Patient?_include=Patient:organization&_include=Patient:link"
    // execute
    queryUtils.setBaseResource("Patient").include("organization").include("link");
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan:activity-reference"
    // execute
    queryUtils.setBaseResource("MedicationRequest").revinclude("CarePlan", "activity-reference");
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for multiple _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan:activity-reference&_revinclude=Observation:based-on"
    // execute
    queryUtils.setBaseResource("MedicationRequest").revinclude("CarePlan", "activity-reference").revinclude("Observation", "based-on");
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _include & _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan:activity-reference&_include=MedicationRequest:encounter"
    // execute
    queryUtils.setBaseResource("MedicationRequest").revinclude("CarePlan", "activity-reference").include("encounter");
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _include all', () => {
    // setup
    const expected: String = "MedicationRequest?_include=*"
    // execute
    queryUtils.setBaseResource("MedicationRequest").includeAll();
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _revinclude all', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=*"
    // execute
    queryUtils.setBaseResource("MedicationRequest").revincludeAll();
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _include all & _revinclude all', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=*&_include=*"
    // execute
    queryUtils.setBaseResource("MedicationRequest").revincludeAll().includeAll();
    // validate
    expect(queryUtils.getCompleteUrl()).toEqual(expected);
  });
});