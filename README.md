# FHIR TypeScript / JavaScript Library For Front End Applications

![npm](https://img.shields.io/npm/v/@smile-cdr/fhirts) ![workflow](https://github.com/smilecdr/FHIR.ts/actions/workflows/npm-publish.yml/badge.svg)

## About 

FHIR.ts is a library that aims to assist web developers building FHIR applications by providing a set of classes & interfaces that match the resources outlined in the [FHIR spec](https://www.hl7.org/fhir/)

The following library contains classes and interfaces for [FHIR](https://www.hl7.org/fhir/) versions.

* R3 is intended for projects using FHIR [R3](https://www.hl7.org/fhir/stu3/).
* R4 is intended for projects using FHIR  [R4](http://hl7.org/fhir/index.html). The definitions are generated using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).


**Note**: This library does not include all FHIR TypeScript definitions for R3. The idea is to collaborate and expand this library.

## Installation

Using npm:
```shell
$ npm i @smile-cdr/fhirts
```

## Usage

Checkout the [Getting Started section](GETTINGSTARTED.md) for how to use the library.

## Dev Process

1. Create an issue.
2. Create a branch related to the issue.
3. Make necessary changes and upgrade library version in `package.json` file. This is a must as npm doesn't allow publish on same version.
4. Push changes & create a Pull Request.


