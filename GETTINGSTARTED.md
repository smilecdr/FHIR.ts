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
function getResourceType(res:Resource){
   if(res.resourceType === 'CarePlan'){
      res
   } 
}
```
Either if you try it on your own or try it in the [Typescript Playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgEJwM4QEoQwewFcolkBvAKGWqjyJIgBUBPABwgC4MwpQBzCgF8KoSLEQoAwnFoAFADZwQyCAA9IIACYY0mHHWJJK1ZLQKGmbTgHJpcxSGtCR4aPFKpCW+SjUbtuli45gzGNAYMLOwc1p7eEE7CYFbIwfSkALxoXpo+yAA+yHYQCkoUMF4IYMD4ynwQYGkWURAAFGYcTQwAlGHIwDDteAB0ZumW7MgZ08i2MiUO1r1UJuEYK8iCyM5AA) you will see that the variable `res` inside the `if` block is of type `CarePlan`. This was inferred automatically using the `if` condition (since as per the specification the only resources which can have `resourceType:"CarePlan"` are `CarePlan` resources).