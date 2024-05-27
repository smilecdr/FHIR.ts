import { QueryBuilder } from "./QueryBuilder";

describe("QueryBuilder", () => {

  let queryBuilder;

  beforeEach(() => {
    queryBuilder = new QueryBuilder();
  });

  it('setBaseResource() should set base resource and getBaseResource() should return correct base resource', () => {
    // setup
    const expected: String = "Patient";
    // execute
    queryBuilder.setBaseResource(expected);
    // validate
    expect(queryBuilder.getBaseResource()).toEqual(expected);
  })

  it('should make query for _include', () => {
    // setup
    const expected: String = "Patient?_include=Patient:organization"
    // execute
    queryBuilder.setBaseResource("Patient").include("organization");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for multiple _include', () => {
    // setup
    const expected: String = "Patient?_include=Patient:organization&_include=Patient:link"
    // execute
    queryBuilder.setBaseResource("Patient").include("organization").include("link");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan:activity-reference"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").revinclude("CarePlan", "activity-reference");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for multiple _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan:activity-reference&_revinclude=Observation:based-on"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").revinclude("CarePlan", "activity-reference").revinclude("Observation", "based-on");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _include & _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan:activity-reference&_include=MedicationRequest:encounter"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").revinclude("CarePlan", "activity-reference").include("encounter");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _include all', () => {
    // setup
    const expected: String = "MedicationRequest?_include=*"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").includeAll();
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _revinclude all', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=*"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").revincludeAll();
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('should make query for _include all & _revinclude all', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=*&_include=*"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").revincludeAll().includeAll();
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });
});