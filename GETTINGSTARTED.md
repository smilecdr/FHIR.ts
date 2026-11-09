# Getting Started

## Setting Up Your First FHIR Resource


#### Table of Contents

- [Class and Interface usage](#class-and-interface-usage)
- [Model classes with getters, setters and validation](#model-classes-with-getters-setters-and-validation)
- [Entry points and bundle size](#entry-points-and-bundle-size)
- [Resource Narrowing](#resource-narrowing)
- [Utilities](#utilities)
   - [PatchUtils](#patchutils)
   - [QueryBuilder](#querybuilder)
   - [BundleUtils](#bundleutils)
   - [ResourceUtils](#resourceutils)


### Class and Interface usage

```js

// if using FHIR DSTU2
import { dstu2 } from '@smile-cdr/fhirts';

// if using FHIR R3 classes
import { fhirR3 } from '@smile-cdr/fhirts';

// if using FHIR R4 classes
import { fhirR4 } from '@smile-cdr/fhirts';

// if using FHIR R4 interfaces
import { IfhirR4 } from '@smile-cdr/fhirts';

// if using FHIR R5 interfaces
import { fhirR5 } from '@smile-cdr/fhirts';
```

Next, depending on the library & whether you're using classes or interfaces, the way you initialize resources might look a bit different:

```js
// if using FHIR DSTU2
let patient = new dstu2.Patient();

// if using FHIR R3 classes
let patient = new fhirR3.Patient();

// if using FHIR R4 classes
let patient = new fhirR4.Patient();

// if using FHIR R4 interfaces
let patient: IfhirR4.IPatient = {
    resourceType: 'Patient'
};

// if using FHIR R5 interfaces
let patient: fhirR5.Patient = {
    resourceType: 'Patient'
};
```

These data types describe FHIR JSON and have no behaviour: `new fhirR4.Patient()` is an empty object, so set `resourceType` yourself or use an object literal.

Fields have strict typing to them. For example, in `Patient`, you can only select a `gender` that's in the list of accepted values, in R3, R4 and R5 alike. The accepted values are also available as constants:

```ts
const patient: fhirR4.Patient = {
    resourceType: 'Patient',
    gender: fhirR4.Patient.GenderEnum.Female, // or just 'female'
    _birthDate: { extension: [{ url: 'http://example.org/reason', valueCode: 'unknown' }] }
};
```

- Every primitive element has a companion property for its id and extensions (`_birthDate` for `birthDate`).
- Backbone elements are named after the type and the element, so `Bundle.entry.request` is `BundleRequest`.
- An element FHIR requires is a required property when it is a complex type (`Basic.code`). Required primitives (`Observation.status`) are optional, because FHIR JSON may carry only their extension (`_status`).
- In R4, `date`, `dateTime` and `instant` elements are typed `Date | string`, so a JavaScript `Date` can be assigned. `JSON.stringify` writes a `Date` as a full timestamp (`1974-12-25T00:00:00.000Z`), which is not valid for a `date` element such as `birthDate`; use a string there. R3 and R5 take strings only.
- For getters, setters and runtime checks, use the [model classes](#model-classes-with-getters-setters-and-validation).

### Model classes with getters, setters and validation

- Published in `v3.0.0` for FHIR R3, R4 and R5. Each version has its own entry point: `@smile-cdr/fhirts/r3/model`, `/r4/model` and `/r5/model`. They are not exported from the package root, so an application only bundles the version it uses.
- These classes follow the conventions of the [HAPI FHIR](https://hapifhir.io/) Java model: `getX`, `setX`, `hasX`, `addX` and `getXFirstRep`, with setters that return the object so calls can be chained.
- They are generated from the official FHIR StructureDefinitions by `npm run generate`, like the data types above, and `toJSON()` returns the data type of the same resource.

```ts
import { Patient, Observation, Quantity, Reference, FhirModelError } from '@smile-cdr/fhirts/r4/model';

const patient = new Patient().setId('example').setGender('female').setBirthDate('1974-12-25');
patient.addName().setUse('official').setFamily('Chalmers').addGiven('Peter').addGiven('James');
patient.addIdentifier().setSystem('urn:oid:1.2.36.146.595.217.0.1').setValue('12345');
patient.getMaritalStatus().addCoding().setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus').setCode('M');

patient.getNameFirstRep().getFamily(); // 'Chalmers'
patient.hasBirthDate();                // true
patient.hasPhoto();                    // false

JSON.stringify(patient);               // FHIR JSON, empty elements left out
const plainPatient = patient.toJSON(); // typed as the plain fhirR4.Patient
```

**Getters never return `undefined` for lists or complex elements.** `getName()` returns an empty array when there are no names, and `getMaritalStatus()` creates an empty `CodeableConcept` when there is none, so chains such as `patient.getMaritalStatus().addCoding()` always work. Use `hasX()` to test for presence. Elements that are still empty are left out of the JSON.

**Choice elements** (`value[x]`, `deceased[x]`...) have one set of accessors per type, plus `getValue()` / `hasValue()` for whichever type is set. Setting one type clears the others:

```ts
const observation = new Observation().setStatus('final');
observation.setValueQuantity(new Quantity().setValue(6.3).setUnit('mmol/l'));
observation.setValueString('high'); // valueQuantity is removed
observation.getValue();             // 'high'
```

**Reading JSON.** `fromJSON` turns FHIR JSON into classes all the way down, including `contained` resources and `Bundle.entry.resource`. `parseResource` picks the class from `resourceType`.

```ts
const patient = Patient.fromJSON(patientJson);
import { parseResource, isObservation } from '@smile-cdr/fhirts/r4/model';

const resource = parseResource(anyResourceJson);
if (isObservation(resource)) {
  resource.getCode().getText();
}
```

`fromJSON` throws a `FhirModelError` when the JSON does not have the shape of the type: a different `resourceType`, an array where FHIR has a single value (or the reverse), a value of the wrong JSON type, or a property the type does not have. Pass `{ ignoreUnknownProperties: true }` to drop unknown properties instead.

**Validation happens at two points.**

1. Setters and `addX` throw a `FhirModelError` straight away for values that can never be valid:

```ts
patient.setGender('robot');        // code is not in the required value set
patient.setBirthDate('1974-02-30'); // not a valid FHIR date
patient.addName({ family: 'x' });  // not a HumanName instance (use HumanName.fromJSON)
patient.setManagingOrganization(new Reference().setReference('Practitioner/1')); // only Organization is allowed
```

2. `validate()` checks the whole object, because a resource that is still being built is allowed to be incomplete. It returns a list of issues, each with a `severity`, `code`, `path` and `message`:

```ts
new Observation().validate();
// [ { severity: 'error', code: 'required', path: 'Observation.status', message: 'required element is missing (minimum cardinality 1)' },
//   { severity: 'error', code: 'required', path: 'Observation.code',   message: 'required element is missing (minimum cardinality 1)' } ]

observation.isValid();      // true when there are no errors
observation.assertValid();  // throws a FhirModelError carrying the issues
Patient.fromJSON(patientJson, { validate: true }); // parse and validate in one step
```

| Rule | Checked by |
|---|---|
| Single value or list (`0..1` vs `0..*`) | TypeScript types, `fromJSON` |
| Maximum cardinality | `addX` / `setX`, `validate()` |
| Required elements (minimum cardinality) | `validate()` |
| Only one type of a choice element | setters (by clearing the others), `validate()` |
| Primitive formats (`date`, `id`, `instant`, `positiveInt`...) | setters, `validate()` |
| Codes with a required binding | TypeScript types, setters, `validate()` |
| Element is an instance of the right class | setters, `validate()` |
| Reference target types | setters, `validate()` |

`validate()` does not evaluate FHIRPath invariants, profiles or implementation guides, and does not check codes of bindings that are not `required` or whose value set cannot be listed (for example all languages or all MIME types). Use a FHIR server's `$validate` operation for those.

**Other helpers**

```ts
import { valueSetCodes } from '@smile-cdr/fhirts/r4/model';

patient.getBirthDateElement().addExtension().setUrl('http://example.org/reason').setValueCode('unknown'); // primitive extension (_birthDate)
patient.getExtensionByUrl('http://example.org/eye-colour');   // also getExtensionsByUrl(url) and hasExtension(url)
Reference.to(patient);                                        // { reference: 'Patient/example' }
patient.copy();                                               // deep copy
valueSetCodes.AdministrativeGender.Female;                    // 'female', constants for every required value set
```

Things to know:

- Backbone elements are named after their full path, so `Bundle.entry.request` is `BundleEntryRequest` (the plain type is `BundleRequest`).
- A property and a method cannot share a name. Where FHIR has an element whose name looks like an accessor, the accessor gets a suffix: `ClaimResponse.addItemEntry()` adds to `item` because `addItem` is an element, and R5 `ConditionDefinition.hasSeverityValue()` tests `severity` because `hasSeverity` is an element.
- `decimal` values are JavaScript numbers, so trailing zeros (`1.50`) are not preserved.
- Classes of different FHIR versions cannot be mixed in one resource.
- `FhirModelError` is the same class whether it is imported from a model entry point, from `@smile-cdr/fhirts/utils` or from the package root.

### Entry points and bundle size

The package is CommonJS, so a bundler keeps everything an entry point exports once you import anything from it. To keep applications small, each FHIR version and each kind of export has its own entry point:

| Import from | What it contains | Bundled size (minified / gzipped) |
|---|---|---|
| `@smile-cdr/fhirts` | Data types of every version (`fhirR3`, `fhirR4`, `IfhirR4`, `fhirR5`, `dstu2`) and the utilities | 599 KB / 90 KB |
| `@smile-cdr/fhirts/utils` | `BundleUtils`, `ResourceUtils`, `QueryBuilder`, `PatchUtils`, `fhirtsConstants`, `FhirModelError` | 23 KB / 7 KB |
| `@smile-cdr/fhirts/r3`, `/r4`, `/r5`, `/dstu2` | Data types of one version | about 200 KB / 30 KB for R4 or R5 |
| `@smile-cdr/fhirts/r4/interfaces` | The `IPatient`-style R4 interfaces | |
| `@smile-cdr/fhirts/r3/model` | R3 model classes | 1.8 MB / 224 KB |
| `@smile-cdr/fhirts/r4/model` | R4 model classes | 2.5 MB / 310 KB |
| `@smile-cdr/fhirts/r5/model` | R5 model classes | 3.2 MB / 390 KB |

Sizes were measured with esbuild on the 3.0.0 build.

- The data types only cost bundle size for their code constants (`Patient.GenderEnum`). If you use them purely as types, write `import type { fhirR4 } from '@smile-cdr/fhirts'` and nothing is bundled.
- Within one version, the model classes are not tree-shaken: importing `Patient` from `/r4/model` bundles all R4 model classes.
- TypeScript finds the entry points with any `moduleResolution` setting (`node`, `node16`, `nodenext` or `bundler`).

```ts
import type { Patient } from '@smile-cdr/fhirts/r4';
import { QueryBuilder } from '@smile-cdr/fhirts/utils';
```


### Resource Narrowing

When working with Resources from a Bundle, by investigating the values and properties of those Resources Typescript will automatically infer the correct type. For example take the following code:
```js
function getResourceType(resource:Resource){
   if(resource.resourceType === 'CarePlan'){
      resource
   } 
}
```
If you try writing this out you will see that the variable `resource` inside the `if` block is of type `CarePlan`. This was inferred automatically using the `if` condition (since as per the specification the only resources which can have `resourceType:"CarePlan"` are `CarePlan` resources).

Read more about resource narrowing here : https://www.typescriptlang.org/docs/handbook/2/narrowing.html

### Utilities

- There are 4 utilities available : 
   - BundleUtils
   - ResourceUtils
   - PatchUtils
   - QueryBuilder
- All of the above mentioned classes are currently in preliminary phase and will be refined in future as per needs.
- The above utlity classes include common functionalities used by front end applications using FHIR. 

#### PatchUtils
- Published in `v2.2.0`.
- Since `v3.0.0` `PATCH_DATATYPE` (in `fhirtsConstants`) has a member for every FHIR data type, and `getPatchParameters()` returns a typed `Parameters` resource that can be assigned to `fhirR3`, `fhirR4` or `fhirR5` `Parameters`.
- Example usage demonstrated below.
```js
import { PatchUtils } from '@smile-cdr/fhirts';
 
const patchUtils = new PatchUtils();
// returns patch parameters
const patchParameters = patchUtils.createDeleteParameters("Patient.identifier[3]").getPatchParameters();
console.log(patchParameters) 
// console logs 
/*
 * {
      "resourceType": "Parameters",
      "parameter": [
         {
            "name": "operation",
            "part": [
               {
                  "name": "type",
                  "valueCode": "delete"
               },
               {
                  "name": "path",
                  "valueString": "Patient.identifier[3]"
               }
            ]
         }
	   ]
   }
 */ 
```

#### QueryBuilder
- Published in `v2.1.2`.
- Example usage demonstrated below.
```js
import { QueryBuilder } from '@smile-cdr/fhirts';
 
const queryBuilder = new QueryBuilder();
// returns encoded url
const query = queryBuilder.setBaseResource("Observation")
                .revincludeAll()
                .include("based-on")
                .sort("status", SORT_ORDER.ASCENDING)
                .getCompleteUrl();
console.log(query) 
// console logs 
// "Observation?_revinclude=*&_include=Observation%3Abased-on&_sort=status"
```


#### BundleUtils
- Published in `v2.1.0`.
- Since `v3.0.0` the results are typed from the entries you pass in, for the data types and model classes of every FHIR version. Entries without a resource are skipped.
- Example usage demonstrated below.
```ts
import { BundleUtils } from '@smile-cdr/fhirts/utils';
import type { Bundle, Patient } from '@smile-cdr/fhirts/r4';

const bundleUtils = new BundleUtils();
declare const bundle: Bundle;

// returns Claim[], inferred from the resource type name
const claimsList = bundleUtils.getResources(bundle.entry, 'Claim');

// returns the resource with that id, undefined when there is none, null when the entries are null
const resource = bundleUtils.getResource(bundle.entry, '123');

// same, by Bundle.entry.fullUrl
const resourceByUrl = bundleUtils.getResourceByFullUrl(bundle.entry, 'http://server-host/fhir/Patient/123');

// entries that are not typed (for example parsed JSON): name the result type yourself
const patients = bundleUtils.getResources<Patient>(untypedEntries, 'Patient');
```

#### ResourceUtils
- Published in `v2.1.0`.
- Since `v3.0.0` every method returns the type of what you pass in, and works on model class instances as well as plain JSON.
- Example usage demonstrated below.
```ts
import { ResourceUtils } from '@smile-cdr/fhirts/utils';

const resourceUtils = new ResourceUtils();

// returns Patient.gender, typed from the resource; null when the resource does not have it
const patientGender = resourceUtils.getResourceProperty(patient, 'gender');

// returns the identifiers whose `use` is "usual". Comparable elements: id, use, system, value
const identifierFilter = resourceUtils.getIdentifiersByProperty(patient.identifier, 'use', 'usual');

// returns the extensions with that URL
const url = 'http://ns.electronichealth.net.au/id/hi/ihi/1.0';
const extensionFilter = resourceUtils.getExtensionsByUrl(patient.extension, url);

// returns the codings whose `code` is "abc". Comparable elements: id, system, version, code, display, userSelected
const codingFilter = resourceUtils.getCodingsByProperty(codingList, 'code', 'abc');

// returns every value at the path, following repeating elements. The values are `unknown`
// unless you name their type
const systemValues = resourceUtils.getValuesAtResourcePath<string>(
  patient,
  'Patient.contact.relationship.coding.system'
);

// returns every literal reference in the resource, e.g. ['Organization/1', 'Practitioner/2']
const references = resourceUtils.getAllReferencesFromResource(patient);
```
