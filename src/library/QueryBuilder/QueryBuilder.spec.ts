import { SORT_ORDER } from "../constants";
import { QueryBuilder } from "./QueryBuilder";

describe("QueryBuilder", () => {

  let queryBuilder: QueryBuilder;

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

  it('include() should make query for _include', () => {
    // setup
    const expected: String = "Patient?_include=Patient%3Aorganization"
    // execute
    queryBuilder.setBaseResource("Patient").include("organization");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('include() should make query for multiple _include', () => {
    // setup
    const expected: String = "Patient?_include=Patient%3Aorganization&_include=Patient%3Alink"
    // execute
    queryBuilder.setBaseResource("Patient")
                .include("organization")
                .include("link");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('revinclude() should make query for _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan%3Aactivity-reference"
    // execute
    queryBuilder.setBaseResource("MedicationRequest")
                .revinclude("CarePlan", "activity-reference");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('revinclude() should make query for multiple _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan%3Aactivity-reference&_revinclude=Observation%3Abased-on"
    // execute
    queryBuilder.setBaseResource("MedicationRequest")
                .revinclude("CarePlan", "activity-reference")
                .revinclude("Observation", "based-on");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('include() and revinclude() should make query for _include & _revinclude', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=CarePlan%3Aactivity-reference&_include=MedicationRequest%3Aencounter"
    // execute
    queryBuilder.setBaseResource("MedicationRequest")
                .revinclude("CarePlan", "activity-reference")
                .include("encounter");
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('includeAll() should make query for _include all', () => {
    // setup
    const expected: String = "MedicationRequest?_include=*"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").includeAll();
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('revincludeAll() should make query for _revinclude all', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=*"
    // execute
    queryBuilder.setBaseResource("MedicationRequest").revincludeAll();
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('includeAll() & revincludeAll() should make query for _include all & _revinclude all', () => {
    // setup
    const expected: String = "MedicationRequest?_revinclude=*&_include=*"
    // execute
    queryBuilder.setBaseResource("MedicationRequest")
                .revincludeAll()
                .includeAll();
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('sort() should make query for _sort', () => {
    // setup
    const expected: String = "Observation?_sort=status%2C-date"
    // execute
    queryBuilder.setBaseResource("Observation")
                .sort("status", SORT_ORDER.ASCENDING)
                .sort("date", SORT_ORDER.DESCENDING);
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('sort(), include() and revincludeAll() should make query for _sort, _include & _revinclude', () => {
    // setup
    const expected: String = "Observation?_revinclude=*&_include=Observation%3Abased-on&_sort=status"
    // execute
    queryBuilder.setBaseResource("Observation")
                .revincludeAll()
                .include("based-on")
                .sort("status", SORT_ORDER.ASCENDING);
    // validate
    expect(queryBuilder.getCompleteUrl()).toEqual(expected);
  });

  it('resetQuery() should reset query', () => {
    // setup
    const expected: String = ""
    queryBuilder.setBaseResource("Observation")
                .revincludeAll()
                .include("based-on")
                .sort("status", SORT_ORDER.ASCENDING);
    // execute
    queryBuilder.resetQuery();
    // validate
    expect(queryBuilder.getBaseResource()).toEqual(expected);
  });

  it('getCompleteUrlDecoded() should get uri decoded query', () => {
    // setup
    const expected: String = "Observation?_revinclude=*&_include=Observation:based-on&_sort=status"
    // execute
    queryBuilder.setBaseResource("Observation")
                .revincludeAll()
                .include("based-on")
                .sort("status", SORT_ORDER.ASCENDING);
    // validate
    expect(queryBuilder.getCompleteUrlDecoded()).toEqual(expected);
  });
});