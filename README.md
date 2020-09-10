# FHIR TypeScript / JavaScript Library For Front End Applications

The Following Library contains classes and interafaces for [FHIR](https://www.hl7.org/fhir/) versions.

R3 is intended for projects using FHIR [R3](https://www.hl7.org/fhir/stu3/).
R4 is intended for projects using FHIR  [R4](http://hl7.org/fhir/index.html).
**Note**: This library does not include all FHIR TypeScript definitions. The idea is to collaborate and expand this library.

# Installation

Using npm:
```shell
$ npm i @smile-cdr/fhirts
```

# Usage

```js
// if using FHIR R3 
import fhirR3 from 'fhirlib';
let practitioner = new fhirR3.Practitioner();

// if using FHIR R4 
import fhirR4 from 'fhirlib';
let patient = new fhirR4.Patient();
```

# Dev Process

1. Create an issue.
2. Create a branch related to the issue.
3. Make necessary changes and upgrade library version in `package.json` file. This is a must as npm doesn't allow publish on same version.
4. Push changes & create a Pull Request.


