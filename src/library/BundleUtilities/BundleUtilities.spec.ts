import { BundleUtilities } from "./BundleUtilities";

const inputPayload = require("./../../test-resources/Bundle-R4.json");
describe("BundleUtilities", () => {

    describe("#getResourcesFromBundle()", () => {
        it('should return empty array if null is passed as bundle entries', () => {
            // execute
            const actual = BundleUtilities.getResourcesFromBundle(null, 'Patient');
            // validate
            expect(actual.length).toEqual(0);
        });

        it('should return empty array if invalid resourceType is passed', () => {
            // execute
            const actual = BundleUtilities.getResourcesFromBundle(inputPayload.entry, 'patient');
            // validate
            expect(actual.length).toEqual(0);
        });

        it('should return all matches array', () => {
            // execute
            const actual = BundleUtilities.getResourcesFromBundle(inputPayload.entry, 'Claim');
            // validate
            expect(actual.length).toEqual(27);
        });
    });
});