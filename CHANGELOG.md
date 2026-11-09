# Changelog

## 3.0.0

### Updates (All)

* Every FHIR type for R3, R4 and R5 is now generated from the official FHIR StructureDefinitions by `npm run generate` (`tools/generator`). This replaces the Swagger Codegen output for R4 and R5 and the hand-written R3 classes.
* Added model classes in the style of the HAPI FHIR Java model for R3 (`@smile-cdr/fhirts/r3/model`), R4 (`/r4/model`) and R5 (`/r5/model`): `getX` / `setX` / `hasX` / `addX` / `getXFirstRep`, typed accessors for choice elements, `fromJSON` / `toJSON` / `parseResource`, `copy`, type guards (`isPatient`...) and constants for required value sets (`valueSetCodes`).
* Added runtime checks on the model classes. Setters throw a `FhirModelError` for malformed primitives, codes outside a required value set, values of the wrong class, disallowed reference targets and too many repetitions. `validate()` reports required elements, cardinality, choice exclusivity and everything the setters check, with the path of each issue.
* Added entry points so an application only bundles what it uses: `@smile-cdr/fhirts/utils` for the utilities, `/r3`, `/r4`, `/r4/interfaces`, `/r5` and `/dstu2` for the data types of one version, and `/r3/model`, `/r4/model`, `/r5/model` for the model classes. The package root still exports the data types of every version and the utilities, but not the model classes.
* The specs run on Vitest instead of Jasmine, with coverage from Vitest in place of nyc. The test run also type-checks the specs, so type-level assertions (`expectTypeOf`) fail it. Developing the library now needs Node 22.12 or later; using the published package does not.
* The library is now compiled and type-checked with TypeScript 7 (it was 5.9). `tsconfig.json` sets `rootDir` and `types` explicitly and no longer sets `moduleResolution`, as TypeScript 7 requires. The published JavaScript is unchanged and the type definitions still work for consumers on TypeScript 5.
* Linting moved from ESLint to oxlint with the same rules (`.oxlintrc.json`), because ESLint's TypeScript parser does not work with TypeScript 7. The linter now also covers the generated model classes and `tools/`, where it rejects one-letter identifiers.
* `BundleUtils`, `ResourceUtils` and `PatchUtils` are typed instead of using `any`. `BundleUtils.getResources(bundle.entry, 'Claim')` returns `Claim[]` without a type argument, the `ResourceUtils` filters return the type of the list they are given, and `PatchUtils.getPatchParameters()` returns a typed `Parameters` resource. All three also accept model class instances.
* `PATCH_DATATYPE` has a member for every FHIR data type (55, up from 11), and a plain `value...` property name is accepted as well.
* Fixed `ResourceUtils.getAllReferencesFromResource` returning every reference with a leading `"`.
* Fixed `BundleUtils.getResources` throwing when a bundle entry has no resource.
* Fixed `ResourceUtils.getValuesAtResourcePath` dropping `false`, `0` and numbers inside arrays.
* Fixed `PatchUtils.getPatchParameters` returning its internal object, so creating more operations changed a result already returned.
* Every primitive element of the data types has a companion property for its id and extensions (`_birthDate`).

### Updates (R3)

* `fhirR3` now covers all 117 STU3 resources and every data type (it had 32 resources).
* Added code types and constants (`Patient.GenderEnum`) for every required value set.

### Updates (R4)

* Added code types and constants for 111 more elements with a required value set.
* Added the 18 resources that were missing from the `Resource` union.
* Added `Element`, `BackboneElement` and `DomainResource` data types.

### Updates (R5)

* Added code types and constants (`Patient.GenderEnum`) for every required value set.
* Added `List` to the `ResourceList` union.

### Breaking changes

These are compile-time changes to the data types (`fhirR3`, `fhirR4`, `IfhirR4`, `fhirR5`), which have no runtime behaviour.

All:

* Elements whose names are reserved words now have the name FHIR JSON uses: `function`, `class`, `import`, `extends`, `for`, `abstract`, `short`, `case`, `const` instead of `_function`, `_class` and so on.
* Elements FHIR requires are required properties only when they are a complex type. Required primitives are optional, because FHIR JSON may carry only their extension.
* Each data type and its backbone elements now share one file (`patient.ts` holds `Patient`, `PatientContact`...). Import from the package root or an entry point; deep imports of individual files under `dist` have moved.
* Utilities: values that were `any` are now typed, which can surface compile errors.
  * `ResourceUtils.getValuesAtResourcePath` returns `unknown[]` unless the value type is given (`getValuesAtResourcePath<string>(...)`), and returns nothing when the path continues past a primitive (it used to return the primitive).
  * `getIdentifiersByProperty` and `getCodingsByProperty` only accept the primitive elements that can be compared, not `extension`, `type`, `period` or `assigner`.
  * `BundleUtils.getResource` and `getResourceByFullUrl` are typed `| null | undefined`; they have always returned `undefined` when nothing matches.
  * `PatchUtils.getPatchParameters` returns a new object on every call.
* `package.json` now has an `exports` map. Paths under `@smile-cdr/fhirts/dist/` still resolve, but any other deep path (for example into `src/`) no longer does.

R3 (`fhirR3`):

* Rewritten from the STU3 definitions. Properties are optional, except required elements of a complex type; previously every property was required.
* The classes no longer have methods or constructors that take arguments (`Code`, `setvalueQuantity`, `setanswerBoolean` and similar). Use the model classes in `@smile-cdr/fhirts/r3/model` for behaviour.
* Backbone elements follow the naming of the other versions (`PatientContact`, `ObservationComponent`). These hand-picked names are gone: `FHIRElement`, `BaseResource`, `DoseCoding`, `PractitionerForImmunization`, `ImmunizationExplaination`, `VaccinationProtocol`, `Qualification`, `Content`, `Link`, `Contact`, `Payload`, `Network`, `EnableWhen`, `Answer`, `FHIROption`, `ContextRelated`, `Context`, `ReferenceRange`, `Participant`, `Activity`, `Component`, `Input`, `Output`, `Restriction`, `AvailableTime`, `NotAvailable`, `BundleSignature`, `Search`, `ActivityDetail`, `Position`, `Requester`, `Item`, `Agent`, `Source`, `EntityDetail`, `Entity`, `Udi`.
* `Code` is now the alias `string`, as in R4 and R5.

R4 (`fhirR4`, `IfhirR4`):

* Every `date`, `dateTime` and `instant` element is `Date | string`, so a JavaScript `Date` is still accepted. Before, 121 of these elements accepted a `Date` and the rest were `string`; code that reads one of the rest as a `string` now has to handle a `Date`.
* `resourceType` is the literal resource name on every resource. It was `string` on `Basic` and 18 others, and on every `IfhirR4` interface.
* The 18 properties typed `any` have their FHIR type, for example `BundleRequest.method`, `BundleSearch.mode`, `OperationOutcomeIssue.severity` and `code`, `AllergyIntolerance.category`.
* `Extension.valueAge`, `valueCount`, `valueDistance` and `valueDuration` are `Age`, `Count`, `Distance` and `Duration` instead of `string`.
* 33 required primitives became optional: `Bundle.type`, `Extension.url`, `Narrative.div`, `Observation.status`, `DocumentReference.status`, `MedicationRequest.status` and `intent`, `MeasureReport.measure`, `SearchParameter.code`, `base` and `type`, and others on conformance resources.
* `modifierExtension` is removed from 14 elements that FHIR types as `Element` (for example `TimingRepeat`, `DosageDoseAndRate`), and `contained` from `ExampleScenarioInstance`.
* `Expression.LanguageEnum` is removed; the binding is not `required` in FHIR.
* `IfhirR4.IPatient` and the other interfaces now extend the `fhirR4` class of the same resource, so the two cannot differ.

R5 (`fhirR5`):

* Coded elements with a required binding are typed with their codes instead of `string` (384 elements).
* 137 properties that are not FHIR R5 elements are removed: the 34 underscore forms of reserved words, `modifierExtension` on 17 `Element`-typed elements, and 86 others such as `author`, `editor`, `reviewer`, `endorser`, `topic` and `relatedArtifact` on resources that do not define them.
* 16 required primitives became optional, among them `Narrative.div`, `Subscription.topic` and `QuestionnaireResponse.questionnaire`.
* `Xhtml` is `string`; it was an empty interface.

## 2.4.1

* Added `Parameters` and `Basic` to the R4 `Resource` union type.

## 2.3.0

* Added support for `contained` property for classes of R4.

## 2.2.8

* Fixed issue with `ResourceUtils.getValuesAtResourcePath` not checking if the root of the path matches the resource type.

## 2.2.7

* Added `BundleUtils.getResourceByFullUrl` to get a resource by its full url from a bundle.

## 2.2.6

* Fixed issue with `ResourceUtils.getValuesAtResourcePath` not being able to get an array with values if path exists for a top level element and is an object.

## 2.2.5

* Fixed issue with `ResourceUtils.getValuesAtResourcePath` not being able to get an array with values if path exists for a top level element and is an array.

## 2.2.4

### Updates (R3)

* Added `Condition` resource definition.

## 2.2.2

* Added `PatchUtils` for generating Parameters resource for `FHIR Patch`.

## 2.2.1

* Added resource definitions for FHIR R5.

## 2.2.0

* Update `ResourceUtils` with strong typing to catch incorrect input data types for all FHIR versions.
* Update some cardinalities for base data types and structures

## 2.1.2

* Add `QueryBuilder` for ease of generating queries.

## 2.1.1

* Fix issue with `BundleUtils.getResourceFromBundle` not being able get the values inside nested array under array of objects.

## 2.1.0

* Remove static classes for `BundleUtilities` & `ResourceUtilities` to non static classes `BundleUtils` & `ResourceUtils.`

## 2.0.7

### Updates (R4)

* Add missing properties to `Bundle`

## 2.0.6

### Updates (R3)

* `DocumentReference.docStatus` and `DocumentReference.status` properties have codes defined.

### Updates (R4)

* `DocumentReference.docStatus` has codes defined and `DocumentReference.status` is a required property (as per the spec).

## 2.0.5

### Updates (R3)

* `Encounter` class now has all properties defined.

## 2.0.4

### Updates (R4)

* `OperationOutcome` class now has `id` set to type `string`. `Resource` class should now support `id`.

## 2.0.3

### Updates (R4)

* `Bundle` class now has `id` set to type `string`.

## 2.0.2

### Updates (R4)

* `Resource` Type now has `id` set to type `string`.
* Classes and Interfaces now accept `Date` types as `Date | string`.

## 2.0.1

### Updates (R3)

* Added support for `ValueSet` resource.

## 2.0.0

### Updates

* Introduce utilities for generic usages. Read more about usage here [Getting Started section](GETTINGSTARTED.md).


## 1.5.0

### Updates (R4)

* Added a `ResourceList` type for codes which are part of the [ResourceTypes](https://hl7.org/fhir/codesystem-resource-types.html) codesystem
* Updated `Required` status for: MessageDefinition.focus.code, CapabilityStatement.rest.resource.type, GraphDefinition.start, GraphDefinition.link.target.type, ImplementationGuide.global.type, SearchParameter.base, SearchParameter.target, OperationDefinition.resource, CompartmentDefinition.resource.code, ExampleScenario.instance.resourceType
* Changed `BundleEntry.resource` and other uses of generic `Resource` to a union type which supports inference and narrowing.
* Correct type for `ParametersParameter.resource`

## 1.4.9

### Updates (R3)

* Made a generic `Resource` type which is a union of all other resources to allow type narrowing when working with Bundles and Contained Resources. For example:
```
const res = bundle.entry[0].resource
// res -> fhirR3.Resource
if(res.resourceType === 'Organization'){
  // TypeScript will infer the type of Organization automatically
  // res -> fhirR3.Organization
```

## 1.4.8

### Updates (R4)

* Made `resourceType` a `required` for Resource for R4.

## 1.4.7

### Updates (R3)

* Fixed property `asserted` to `asserter` for AllergyIntolerance resource. 
## 1.4.6

### Updates (R3)

* Added AllergyIntolerance resource. 

## 1.4.5

### Updates (R3)

* Added optional date type properties to FHIR dateTime/Date properties for easier parsing on the front-end side.

## 1.4.4

### Updates (R3)

* Fixed typo in `CommunicationRequest.recipient` (was previously `CommunicationRequest.recipent`)

## 1.4.3

### Updates (R4)

* Updated `_short` property to `short` used in `elementDefinition.ts` for R4.
* Updated `_abstract` property to `abstract` used in `structureDefinition.ts, valueSetContains.ts and IStructureDefinition.ts` for R4.

## 1.4.2

### Updates (R3)

* Removed `Id` type used by `Meta.versionId` and changed to `string`.

## 1.4.1

### Updates (R3)

* Added support for nested `QuestionnaireResponseItem` in `QuestionnaireResponse.item` and `QuestionnaireResponse.item.answer`.

## 1.4.0
---
### Updates (R3)

* The `Participant` class has been re-tooled to only be used in the `Appointment` class
* Droped the `Period` field in the `Participant` class as it is not used in `Appointment.participant`
* Added `EncounterParticipant` to replace the class type in `Encounter.participant`
  * `EncounterParticipant` follows the STU3 spec for `Encounter.participant` 

This release introduces a breaking change for Encounter.If you're using `Encounter` in your code, the `participant` field will have a new type, `EncounterParticipant` with the appropriate changes. This will break existing implementations, unless they are updated to take advantage of the new `EncounterParticipant` class.  The `Period` in the `Participant` class has been removed as it's not using by the `Appointment.participant` field.

## 1.3.1
---
### Updates (R3)

* Added class for `ClinicalImpression` resource.

## 1.3.0

### Updates (DSTU2)

* Added initial classes for DSTU2.

## 1.2.11
---

### Updates (R3)

* Fixed an issue where BundleResponse.location was of type `number` instead of type `string`

## 1.2.10
---

### Updates (R3)

* Added class for `Slot` resource.


## 1.2.9
---

### Updates (R3)

* Fixed a type in the `Restriction` resource, where `period` was written as `preiod`
## 1.2.8
---
### Updates (R4)

* Instances of `_for` have been replaced with  `for` for the following resources:

  * Task

## 1.2.7
---
### Updates (R4)

* Instances of `status` and `intent` made required according to FHIR spec:

  * MedicationRequest

## 1.2.6
---
### Updates (R4)

* Instances of `status` made required according to FHIR spec:

  * Observation

## 1.2.5
---
### Updates (General)

* A GETTINGSTARTED guide has now been implemented to introduce the library to new users
* Updated compiler to ES6
* Updated README

### 1.2.4
---
### Updates (R4)

* Instances of `_function` have been replaced with  `function` for the following resources:

  * ProcedurePerformer
  * MedicationDispensePerformer
  * MedicationAdministrationPerformer
  * ImmunizationPerformer 
  * ImagingStudyPerformer
  * ChargeItemPerformer


### 1.2.3
---
### Updates (R4)

* `classes` and `interfaces` both are now available for FHIR R4 resources.

## 1.1.3
---
### Updates (General)

* A CHANGELOG has now been implemented to better track updates made to the library

### Updates (R4)

* The `Extension` resource previous assigned all value[x] to type `string`. This has been corrected. Below is the list of all value types affected:

  * `valueCanonical` now requires a `Canonical` object 
  * `valueCode` now requires a `Code` object 
  * `valueInstant` now requires a `Instant` object 
  * `valueAddress` now requires a `Address` object 
  * `valueAnnotation` now requires a `Annotation` object 
  * `valueAttachment` now requires a `Attachment` object 
  * `valueCodeableConcept` now requires a `CodeableConcept` object 
  * `valueContactPoint` now requires a `ContactPoint` object 
  * `valueHumanName` now requires a `HumanName` object 
  * `valueMoney` now requires a `Money` object 
  * `valuePeriod` now requires a `Period` object 
  * `valueQuantity` now requires a `Identifier` object 
  * `valueRange` now requires a `Range` object 
  * `valueRatio` now requires a `Ratio` object 
  * `valueReference` now requires a `Reference` object 
  * `valueSampledData` now requires a `SampledData` object 
  * `valueSignature` now requires a `Signature` object 
  * `valueContactDetail` now requires a `ContactDetail` object 
  * `valueContributor` now requires a `Contributor` object 
  * `valueDataRequirement` now requires a `Timing` object 
  * `valueExpression` now requires a `DataRequirement` object 
  * `valueParameterDefinition` now requires a `Expression` object 
  * `valueRelatedArtifact` now requires a `ParameterDefinition` object 
  * `valueTriggerDefinition` now requires a `TriggerDefinition` object 
  * `valueDosage` now requires a `Dosage` object 

## 1.1.2
---
### Updates (R4)

* All instances of `_class` have been replaced with `class`. This affects the following:

  * ConsentProvision
  * Coverage
  * Encounter
  * EncounterClassHistory
  * SubstancePolymer
  * SubstanceSourceMaterialOrganismGeneral

## 1.1.1
---
### Updates (General)

* Updated spelling error in documentation
* Updated example in documentation

## 1.1.0
---
### Updates (R3)

* Updated FHIR.ts file to FHIR-R3.ts

### Updates (R4)

* All classes previously created have been replaced with classes generated from swagger
