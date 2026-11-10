// The model classes (getters, setters, validation) are deliberately not exported here.
// They are large, so each FHIR version has its own entry point and an application
// only bundles the version it imports:
//   @smile-cdr/fhirts/r3/model, @smile-cdr/fhirts/r4/model, @smile-cdr/fhirts/r5/model
// The data types of one version and the utilities also have entry points of their own:
//   @smile-cdr/fhirts/r3, /r4, /r4/interfaces, /r5, /dstu2 and /utils
import * as fhirR5 from './FHIR-R5/models';
import * as fhirR4 from './FHIR-R4/classes/models-r4';
import * as IfhirR4 from './FHIR-R4/interfaces/IModel';
import * as fhirR3 from './FHIR-R3/classes/models-r3';
import * as dstu2 from './FHIR-DSTU2';
import { ResourceUtils } from './library/ResourceUtils/ResourceUtils';
import { BundleUtils } from './library/BundleUtils/BundleUtils';
import { QueryBuilder } from './library/QueryBuilder/QueryBuilder';
import { PatchUtils } from './library/PatchUtils/PatchUtils';
import * as fhirtsConstants from './library/constants';
import { FhirModelError } from './library/model';
import type { ParseOptions, ValidationIssue } from './library/model';
export {
  fhirR5,
  fhirR4,
  fhirR3,
  IfhirR4,
  dstu2,
  ResourceUtils,
  BundleUtils,
  QueryBuilder,
  PatchUtils,
  fhirtsConstants,
  FhirModelError,
};
export type { ParseOptions, ValidationIssue };
