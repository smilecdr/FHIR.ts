# FHIR TypeScript / JavaScript Library For Front End Applications

![npm](https://img.shields.io/npm/v/@smile-cdr/fhirts) ![workflow](https://github.com/smilecdr/FHIR.ts/actions/workflows/npm-publish.yml/badge.svg) [![NPM](https://img.shields.io/npm/l/@smile-cdr/fhirts)](./LICENSE)

## About 

`FHIR.ts` is a library that aims to assist web developers building FHIR applications by providing a set of utility methods as well as classes & interfaces that match the resources outlined in the [FHIR spec](https://www.hl7.org/fhir/).

The following library contains classes and interfaces for [FHIR](https://www.hl7.org/fhir/) versions.

* R3 is intended for projects using FHIR [R3](https://www.hl7.org/fhir/stu3/).
* R4 is intended for projects using FHIR  [R4](https://hl7.org/fhir/R4/). The definitions are generated using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).
* R5 is intended for projects using FHIR. [R5](https://hl7.org/fhir/R5/). The definitions are generated using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)


**Note**: This library does not include all FHIR TypeScript definitions for R3. The idea is to collaborate and expand this library.

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



