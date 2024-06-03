# Getting Started

## Installing FHIR.ts

Navigate to your project and install the library using `npm`

```shell
$ npm i @smile-cdr/fhirts
```

## Setting Up Your First FHIR Resource

FHIR.ts offers both classes & interfaces for various FHIR resources - which one(s) you choose to use will depend on what your use case is. 

> At the moment, the fhirR3 library only supports classes

To start, you'll need to first import the library:

```js

// if using FHIR DSTU2
import { dstu2 } from '@smile-cdr/fhirts';

// if using FHIR R3 
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

// if using FHIR R3 
let patient = new fhirR3.Patient();

// if using FHIR R4 classes
let patient = new fhirR4.Patient();

// if using FHIR R4 interfaces
let patient: IfhirR4.Patient = {
    resourceType: 'Patient'
};

// if using FHIR R4 interfaces
let patient: fhirR5.Patient = {
    resourceType: 'Patient'
};
```

Fields in FHIR.ts have strict typing to them. For example, in `Patient`, you can only select a `gender` that's in the list of accepted values.

## Example

Here's an example of setting up a `Patient` resource in R4 using classes:

```js
import { fhirR4 } from '@smile-cdr/fhirts';

const patient = new fhirR4.Patient();
const identifer = new fhirR4.Identifier();
const humanName = new fhirR4.HumanName();

humanName.family = 'Doe'
humanName.given = ['John', 'Edward'];

identifer.system = 'https://smilecdr.com';
identifer.value = '123';

patient.resourceType = 'Patient';
patient.identifier = [identifer];
patient.name = [humanName]
```

## Type / Resource [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

When working with Resources from a Bundle, by investigating the values and properties of those Resources Typescript will automatically infer the correct type. For example take the following code:
```js
function getResourceType(resource:Resource){
   if(resource.resourceType === 'CarePlan'){
      resource
   } 
}
```
If you try writing this out you will see that the variable `resource` inside the `if` block is of type `CarePlan`. This was inferred automatically using the `if` condition (since as per the specification the only resources which can have `resourceType:"CarePlan"` are `CarePlan` resources).

## Utilities

- There are 2 new utilities available starting `v2.0.0`.
   - BundleUtilities
   - ResourceUtilities
- All of the above mentioned classes are currently in preliminary phase and will be refined in future as per needs.
- The above utlity classes include common functionalities used by front end applications using FHIR. 
- All utilities functions are static right now, so, no need for instantiating classes. **Note: This is subject to change in future**

### `v2.1.0`
#### BundleUtils usage
```js
import { BundleUtils } from '@smile-cdr/fhirts';
 
const bundleUtils = new BundleUtils();
// returns arrayof Claim resources from Bundle.entry 
const claimsList = bundleUtils.getResourcesFromBundle(Bundle.entry, 'Claim');
// returns a single resource with ID 123 from Bundle.entry
const resource = bundleUtils.getResourceFromBundle(Bundle.entry, '123'); 
```

#### ResourceUtils usage
```js
import { ResourceUtils } from '@smile-cdr/fhirts';
const resourceUtils = new ResourceUtils();
// returns deserialized Patient resource
const deserializedPatientResource = resourceUtils.deserializeResource(jsonPatientPayload, new Patient()); 

// returns Patient.gender
const patientGender = resourceUtils.getResourceProperty(jsonPatientPayload, 'gender'); 

// returns all matching identifiers where Identifier.use = usual
const identifierFilter = resourceUtils.getIdentifiersByProperty(identifierList,"use","usual"); 

const url = "http://ns.electronichealth.net.au/id/hi/ihi/1.0";
// returns all matching extensions where Extension.use = "http://ns.electronichealth.net.au/id/hi/ihi/1.0"
const extensionFilter = resourceUtils.getExtensionsByUrl(extensionList, url); 

// returns all matching codings where Coding.code = "abc"
const codingFilter = resourceUtils.getCodingsByProperty(codingList,"code","abc"); 
// returns array of elements found at provided path and returns empty array if no values found 
const values = resourceUtils.getValuesAtResourcePath(jsonPatientPayload, "Patient.contact.relationship.coding.system");
// returns array of references found in a resource
const references = resourceUtils.getAllReferencesFromResource(resourcePayload);
```



### `v2.0.0`
#### BundleUtilities usage
```js
import { BundleUtilities } from '@smile-cdr/fhirts';
 
// returns arrayof Claim resources from Bundle.entry 
const claimsList = BundleUtilities.getResourcesFromBundle(Bundle.entry, 'Claim'); 
```

#### ResourceUtilities usage
```js
import { ResourceUtilities } from '@smile-cdr/fhirts';

// returns deserialized Patient resource
const deserializedPatientResource = ResourceUtilities.deserializeResource(jsonPatientPayload, new Patient()); 

// returns Patient.gender
const patientGender = ResourceUtilities.getResourceProperty(jsonPatientPayload, 'gender'); 

// returns all matching identifiers where Identifier.use = usual
const identifierFilter = ResourceUtilities.getIdentifiersByProperty(identifierList,"use","usual"); 

const url = "http://ns.electronichealth.net.au/id/hi/ihi/1.0";
// returns all matching extensions where Extension.use = "http://ns.electronichealth.net.au/id/hi/ihi/1.0"
const extensionFilter = ResourceUtilities.getExtensionsByUrl(extensionList, url); 

// returns all matching codings where Coding.code = "abc"
const codingFilter = ResourceUtilities.getCodingsByProperty(codingList,"code","abc"); 
```
