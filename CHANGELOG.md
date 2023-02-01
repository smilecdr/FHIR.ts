# Changelog

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
