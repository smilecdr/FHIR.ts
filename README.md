# FHIR TypeScript / JavaScript Library For Front End Applications

![npm](https://img.shields.io/npm/v/@smile-cdr/fhirts) ![workflow](https://github.com/smilecdr/FHIR.ts/actions/workflows/npm-publish.yml/badge.svg) [![NPM](https://img.shields.io/npm/l/@smile-cdr/fhirts)](./LICENSE)

## About 

`FHIR.ts` is a library that aims to assist JavaScript & TypeScript developers building FHIR applications by providing a set of utility methods as well as classes & interfaces that match the resources outlined in the [FHIR spec](https://www.hl7.org/fhir/).

The following library contains classes and interfaces for [FHIR](https://www.hl7.org/fhir/) versions.

* R3 is intended for projects using FHIR [R3 (STU3)](https://www.hl7.org/fhir/stu3/).
* R4 is intended for projects using FHIR [R4](https://hl7.org/fhir/R4/).
* R5 is intended for projects using FHIR [R5](https://hl7.org/fhir/R5/).
* DSTU2 has a small set of hand-written classes.

For R3, R4 and R5 every resource and data type is covered. All of it is generated from the official FHIR StructureDefinitions with `npm run generate` (see `tools/generator`), in two forms:

* **Data types** (`fhirR3`, `fhirR4`, `IfhirR4`, `fhirR5`): plain classes and interfaces that describe FHIR JSON, with no behaviour.
* **Model classes** (`@smile-cdr/fhirts/r3/model`, `/r4/model`, `/r5/model`): getters, setters, fluent builders and validation, in the style of the [HAPI FHIR](https://hapifhir.io/) Java model.


```ts
import { Patient } from '@smile-cdr/fhirts/r4/model';

const patient = new Patient().setGender('female').setBirthDate('1974-12-25');
patient.addName().setFamily('Chalmers').addGiven('Peter');
patient.validate(); // [] when the resource is valid
```

The model classes are large, so each FHIR version has its own entry point and an application only bundles what it imports. See [Entry points and bundle size](GETTINGSTARTED.md#entry-points-and-bundle-size).

Upgrading from 2.x? See the 3.0.0 entry in the [changelog](CHANGELOG.md) for what changed in the data types.

#### Table of Contents

- [Installation](#installation)
- [Contribute](#contribute)
- [File a bug](#file-a-bug)

## Installation

Using npm:
```shell
$ npm i @smile-cdr/fhirts
```

Using yarn: 
```shell
$ yarn add @smile-cdr/fhirts
``` 

## Usage

Checkout the [Getting Started section](GETTINGSTARTED.md) for how to use the library.

## Contribute

1. Create an [issue](https://github.com/smilecdr/FHIR.ts/issues) and attach appropriate labels.
2. Create a branch related to the issue.
3. Make necessary changes and upgrade library version in `package.json` file. This is a must as currently we don't have a CI job which can override a package with same version. doesn't allow publish on same version.
4. Push changes & create a Pull Request.
5. Get reviewed and merged !!!


## File a bug

1. Create an [issue](https://github.com/smilecdr/FHIR.ts/issues) and attach appropriate labels.
2. The issue will be prioritized and worked on.
