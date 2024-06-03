import { fhirR5 } from "..";
import * as DSTU2 from "../FHIR-DSTU2";
import * as fhirR3 from "../FHIR-R3";
import { Coding as r4Coding } from "../FHIR-R4/classes/coding";
import { Extension as r4Extension } from "../FHIR-R4/classes/extension";
import { Identifier as r4Identifier } from "../FHIR-R4/classes/identifier";

export type Identifier = r4Identifier & fhirR3.Identifier & DSTU2.Identifier & fhirR5.Identifier;
export type IdentifierKeys = keyof Identifier;
export type Extension = r4Extension & fhirR3.Extension & DSTU2.Extension & fhirR5.Extension;
export type Coding = r4Coding & fhirR3.Coding & DSTU2.Coding & fhirR5.Coding;
export type CodingKeys = keyof Coding;