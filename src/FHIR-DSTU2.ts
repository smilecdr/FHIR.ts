/* This is base class from which other elements are derived */
export class FHIRElement {
  id: string;
  extension: Extension[];
}

export class BackboneElement extends FHIRElement {
  modifierExtension: any;
}
/* FHIR classes used in resources */
export class Id {
  private id: string;

  constructor(input?: string) {
    const re = new RegExp('[A-Za-z0-9\\-\\.]{1,64}');

    if (re.test(input)) {
      this.id = input;
    } else {
      throw new RangeError('Not a valid Id string - must match reg exp [A-Za-z0-9\\-\\.]{1,64} Was provided: ' + input);
    }
  }
}

export class DomainResource  {
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
}

export class Resource extends DomainResource {
  resourceType: string;
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
}

export class Meta extends FHIRElement {
  versionId: Id;
  lastUpdated: Date;
  profile: string;
  security: Coding;
  tag: Coding;
}

export class Narrative {
  status: string;
  div: string;
}

export class CodeableConcept extends FHIRElement {
  coding: Coding[];
  text: string;
}

export class Identifier extends FHIRElement {
  use: string;
  type: CodeableConcept;
  system: string;
  value: string;
  period: Period;
  assigner: Reference;
}

export class Reference extends FHIRElement {
  reference: string;
  identifier: Identifier;
  display: string;
}

// Human Name - Last name is an array for DSTU2
export class HumanName extends FHIRElement {
  use: string;
  text: string;
  family: string[];
  given: string[];
  prefix: string[];
  suffix: string[];
  period: Period;
}

export class Extension {
  url: string;
  valueString: string;
  valueCode: string;
  valueAddress: Address;
  valueBoolean?: boolean;
  valueHumanName: HumanName;
  valueReference: Reference;
  valueDate: Date;
  valueIdentifier: string;
  valueDecimal?: number;
  valueInteger: number;
  valuePeriod: Period;
}

export class Coding extends FHIRElement {
  system: string;
  version: string;
  code: string;
  display: string;
  userSelected: boolean;
}

export class Period extends FHIRElement {
  start: string;
  end: string;
}

export class Address extends FHIRElement {
  use: string;
  type: string;
  text: string;
  line: string[];
  city: string;
  district: string;
  state: string;
  postalCode: string;
  country: string;
  period: Period;
}

export class Contact extends BackboneElement {
  relationship: CodeableConcept[];
  name: HumanName;
  telecom: ContactPoint[];
  address: Address;
  gender: string;
  organization: Reference;
  period: Period;
}

export class ContactPoint extends FHIRElement {
  system: string;
  value: string;
  use: string;
  rank: number;
  period: Period;
}

export class Link extends BackboneElement {
  other: Reference;
  type: string;
}

export class PatientCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred: boolean;
}

export class Patient extends Resource {
  identifier: Identifier[];
  active: boolean;
  name: HumanName[];
  telecom: ContactPoint[];
  gender: string;
  birthDate: string;
  address: Address[];
  maritalStatus: CodeableConcept;
  contact: Contact[];
  communication: PatientCommunication[];
  generalPractitioner: Reference[];
  managingOrganization: Reference;
  link: Link[];
}

export class OperationOutcome extends Resource {
  issue: Issue[];
}

export class Issue extends BackboneElement {
  severity: string;
  code: string;
  details: CodeableConcept;
  diagnostics: string;
  location: string[];
}
