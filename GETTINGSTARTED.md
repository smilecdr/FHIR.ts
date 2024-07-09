# Getting Started

## Setting Up Your First FHIR Resource


> NOTE: At the moment, the fhirR3 library only supports classes

#### Table of Contents

- [Class and Interface usage](#models-usage)
- [Resource Narrowing](#resource-narrowing)
- [Utilities](#utilities)
   - [PatchUtils](#patchutils)
   - [QueryBuilder](#querybuilder)
   - [BundleUtils](#bundleutilities)
   - [ResourceUtils](#resourceutilities)
   - [Bundle Utilities (static BundleUtils)](#bundleutilities)
   - [Resource Utilities (static ResourceUtils)](#resourceutilities)


### Class and Interface usage

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

- There are 4 new utilities available : 
   - BundleUtilities
   - ResourceUtilities
   - PatchUtilities
   - QueryBuilder
- All of the above mentioned classes are currently in preliminary phase and will be refined in future as per needs.
- The above utlity classes include common functionalities used by front end applications using FHIR. 

#### PatchUtils 
- Published in `v2.2.0`.
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
 * 
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
- Example usage demonstrated below.
```js
import { BundleUtils } from '@smile-cdr/fhirts';
 
const bundleUtils = new BundleUtils();
// returns arrayof Claim resources from Bundle.entry 
const claimsList = bundleUtils.getResourcesFromBundle(Bundle.entry, 'Claim');
// returns a single resource with ID 123 from Bundle.entry
const resource = bundleUtils.getResourceFromBundle(Bundle.entry, '123'); 
```

#### ResourceUtils
- Published in `v2.1.0`.
- Example usage demonstrated below.
```js
import { ResourceUtils } from '@smile-cdr/fhirts';
const resourceUtils = new ResourceUtils();

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



#### BundleUtilities
- Published in `v2.0.0`.
- Example usage demonstrated below.
```js
import { BundleUtilities } from '@smile-cdr/fhirts';
 
// returns arrayof Claim resources from Bundle.entry 
const claimsList = BundleUtilities.getResourcesFromBundle(Bundle.entry, 'Claim'); 
```

#### ResourceUtilities
- Published in `v2.0.0`.
- Example usage demonstrated below.
```js
import { ResourceUtilities } from '@smile-cdr/fhirts';

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
