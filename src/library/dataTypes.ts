import type * as fhirR5 from '../FHIR-R5/models';
import type * as DSTU2 from '../FHIR-DSTU2';
import type * as fhirR3 from '../FHIR-R3/classes/models-r3';
import type { Coding as r4Coding } from '../FHIR-R4/classes/coding';
import type { Extension as r4Extension } from '../FHIR-R4/classes/extension';
import type { Identifier as r4Identifier } from '../FHIR-R4/classes/identifier';

export type Identifier = r4Identifier & fhirR3.Identifier & DSTU2.Identifier & fhirR5.Identifier;
export type IdentifierKeys = keyof Identifier;
export type Extension = r4Extension & fhirR3.Extension & DSTU2.Extension & fhirR5.Extension;
export type Coding = r4Coding & fhirR3.Coding & DSTU2.Coding & fhirR5.Coding;
export type CodingKeys = keyof Coding;
