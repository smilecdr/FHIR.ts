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
  language: Code;
}

export class Narrative {
  status: Code;
  div: string;
}

export class Code extends FHIRElement {
  private codeString: string;
  private codeRE = new RegExp('[^\\s]+([\\s]?[^\\s]+)*');

  constructor(input?: string) {
    super();
    this.setCode(input);
  }

  private setCode(input: string) {
    if (this.codeRE.test(input)) {
      this.codeString = input;
    } else {
      throw new RangeError('Not a valid Id string - must match reg exp [^\\s]+([\\s]?[^\\s]+)* Was provided: ' + input);
    }
  }

  get code(): string {
    return this.codeString;
  }

  set code(input: string) {
    this.setCode(input);
  }

  public toString(): string {
    return this.codeString;
  }

  deserialize(jsonObject: any): Code {
    const that = this;
    Object.entries(jsonObject).forEach((value) => {
      if (!(typeof value[1] === 'object')) {
        that[value[0]] = value[1];
      } else {
        (that[value[0]].deserialize(value[1]));
      }
    });
    return this;
  }

}

export class Coding extends FHIRElement {
  system: string;
  version: string;
  code: string;
  display: string;
  userSelected: boolean;

  deserialize(jsonObject: any): Coding {
    const that = this;
    Object.entries(jsonObject).forEach((value) => {
      if (!(typeof value[1] === 'object')) {
        that[value[0]] = value[1];
      } else {
        (that[value[0]].deserialize(value[1]));
      }
    });
    return this;
  }

}

export class DoseCoding extends FHIRElement {
  system: string;
  code: string;
  value: number;

  deserialize(jsonObject: any): DoseCoding {
    const that = this;
    Object.entries(jsonObject).forEach((value) => {
      if (!(typeof value[1] === 'object')) {
        that[value[0]] = value[1];
      } else {
        (that[value[0]].deserialize(value[1]));
      }
    });
    return this;
  }

}

export class HumanName extends FHIRElement {
  use: Code;
  text: string;
  family: string;
  given: string[];
  prefix: string[];
  suffix: string[];
  period: Period;

  deserialize(jsonObject: any): HumanName {
    const that = this;
    Object.entries(jsonObject).forEach((value) => {
      if (!(typeof value[1] === 'object')) {
        that[value[0]] = value[1];
      } else {
        (that[value[0]].deserialize(value[1]));
      }
    });
    return this;
  }

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
}

export class Address extends FHIRElement {
  use: Code;
  type: Code;
  text: string;
  line: string[];
  city: string;
  district: string;
  state: string;
  postalCode: string;
  country: string;
  period: Period;

}

export class Meta extends FHIRElement {
  versionId: Id;
  lastUpdated: Date;
  profile: string;
  security: Coding;
  tag: Coding;

  deserialize(jsonObject: any): Meta {
    const that = this;
    Object.entries(jsonObject).forEach((value) => {
      if (!(typeof value[1] === 'object')) {
        that[value[0]] = value[1];
      } else {
        (that[value[0]].deserialize(value[1]));
      }
    });
    return this;
  }


}

export class CodeableConcept extends FHIRElement {
  coding: Coding[];
  text: string;
}

export class Period extends FHIRElement {
  start: string;
  end: string;
}

export class Quantity extends FHIRElement {
  value: number;
  comparator: Code;
  unit: string;
  system: string;
  code: Code;
}

export class FHIRRange extends FHIRElement {
  low: number;
  high: number;
}

export class UsageContext extends FHIRElement {
  code: Coding;

  valueCodeableConcept?: CodeableConcept;
  valueQuantity?: Quantity;
  valueRange?: FHIRRange;
}

export class PractitionerForImmunization extends BackboneElement {
  role: CodeableConcept;
  actor: Reference;
}

export class ImmunizationExplaination extends BackboneElement {
  reason: CodeableConcept[];
  reasonNotGiven: CodeableConcept[];
}

export class ImmunizationReaction extends BackboneElement {
  date: Date;
  detail: Reference;
  reported: boolean;
}

export class VaccinationProtocol extends BackboneElement {
  doseSequence: number;
  description: string;
  authority: Reference;
  series: string;
  seriesDoses: number;
  targetDisease: CodeableConcept[];
  doseStatus: CodeableConcept;
  doseStatusReason: CodeableConcept;
}

export class Attachment extends FHIRElement {

  // should be of type code
  contentType: string;

  // should be of type code
  language: string;
  data: string;
  url: string;
  size: number;
  hash: string;
  title: string;
  creation: string;
}

export class Qualification extends BackboneElement {
  identifier: Identifier[];
  code: CodeableConcept;
  period: Period;
  issuer: Reference;
}

export class Content extends BackboneElement {
  attachment: Attachment;
  format: Coding;
}

export class Link extends BackboneElement {
  other: Reference;
  type: string;
}

export class PatientCommunication extends BackboneElement {
  language: CodeableConcept;
  preferred: boolean;
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

export class ContactDetail extends FHIRElement {
  name: string;
  telecom: ContactPoint;
}

export class Related extends BackboneElement {
  // TODO - change to Code once code is sorted out
  type: string;
  target: Reference;
}

export class Reference extends FHIRElement {
  reference: string;
  identifier: Identifier;
  display: string;
}

export class Identifier extends FHIRElement {
  use: string;
  type: CodeableConcept;
  system: string;
  value: string;
  period: Period;
  assigner: Reference;
}

export class Payload extends BackboneElement {
  contentString: string;
  contentAttachment: Attachment;
  contentReference: Reference;
}

export class Network extends BackboneElement {
  address: string;
  type: string;
}

export class EnableWhen extends BackboneElement {
  question: string;
  operator: string;

  answerBoolean?: boolean;
  answerDecimal?: number;
  answerInteger?: number;
  answerDate?: Date;
  answerDateTime?: Date;
  answerTime?: string;
  answerString?: string;
  answerCoding?: Coding;
  answerQuantity?: Quantity;
  answerReference?: string;
}

export class Initial extends BackboneElement {
  valueBoolean?: boolean;
  valueDecimal?: number;
  valueInteger?: number;
  valueDate?: Date;
  valueDateTime?: Date;
  valueTime?: string;
  valueString?: string;
  valueUri?: string;
  valueAttachment?: Attachment;
  valueCoding?: Coding;
  valueQuantity?: Quantity;
  valueReference?: Reference;
}

export class Answer extends BackboneElement {
  valueBoolean?: boolean;
  valueDecimal?: number;
  valueInteger?: number;
  valueDate?: Date;
  valueDateTime?: Date;
  valueTime?: string;
  valueString?: string;
  valueUri?: string;
  valueAttachment?: Attachment;
  valueCoding?: Coding;
  valueQuantity?: Quantity;
  valueReference?: Reference;
}


export class AnswerOption {
  valueDate?: Date;
  valueTime?: string;
  valueString?: string;
  valueCoding?: Coding;
  valueReference?: Reference;
}

export class Annotation extends FHIRElement {
  authorReference: Reference;
  authorString: string;
  time: Date;
  text: string;
}

export class ContextRelated extends BackboneElement {
  identifier: Identifier;
  ref: Reference[];
}

export class Context extends BackboneElement {
  encounter: Reference;
  event: CodeableConcept[];
  sourcePatientInfo: Reference;
  related: ContextRelated[];
}

export class ReferenceRange extends BackboneElement {
  low: string;
  high: string;
  type: CodeableConcept;
  appliesTo: CodeableConcept[];
  age: FHIRRange;
  text: string[];
}

export class Participant extends BackboneElement {
  type: CodeableConcept[];
  actor: Reference;
  required: string;
  status: string;
  period: Period;
}

export class Activity extends BackboneElement {
  outcomeCodeableConcept: CodeableConcept[];
  outcomeReference: Reference[];
  progress: Annotation[];
  reference: Reference;
  detail: ActivityDetail;
}

export class Timing extends FHIRElement {
  event: Date;
  // TODO work on a Timing object
  repeat: string;
  location: Reference;
  performer: Reference[];
  productCodeableConcept: CodeableConcept;
  productReference: Reference;
  dailyAmount: string;
  quantity: string;
  description: string;

}

export class Component extends BackboneElement {
  code: CodeableConcept;
  valueQuantity: Quantity;
  valueCodeableConcept: CodeableConcept;
  valueString: string;
  valueBoolean: boolean;
  valueRange: FHIRRange;
  valueRatio: Ratio;
  valueSampledData: SampledData;
  valueAttachmnet: Attachment;
  valueTime: string;
  valueDateTime: Date;
  valuePeriod: Period;
  dataAbsentReason: CodeableConcept;
  interpretation: CodeableConcept;
  referenceRange: ReferenceRange[];
}

export class Ratio extends FHIRElement {
  numerator: Quantity;
  denominator: Quantity;
}

export class Input extends BackboneElement {
  type: CodeableConcept;
  value: any;
}

export class Output extends BackboneElement {
  type: CodeableConcept;
  value: any;
}

export class SampledData extends FHIRElement {
  origin: number;
  period: number;
  factor: number;
  lowerLimit: number;
  upperLimit: number;
  dimensions: number;
  data: string;
}
export class Restriction extends BackboneElement {
  repetitions: number;
  preiod: Period;
  recipient: Reference[];
}

export class AvailableTime extends BackboneElement {
  daysOfWeek: string[];
  allDay: boolean;
  availableStartTime: string;
  availableEndTime: string;
}

export class HoursOfOperation {
  daysOfWeek: string[];
  allDay: boolean;
  openingTime: string;
  closingTime: string;
}

export class NotAvailable extends BackboneElement {
  description: string;
  during: Period;
}

export class ActivityDetail extends BackboneElement {
  category: CodeableConcept;
  definition: Reference;
  code: CodeableConcept;
  reasonCode: CodeableConcept[];
  reasonReference: Reference[];
  goal: Reference;
  status: string;
  statusReason: string;
  prohibited: boolean;
  scheduledTiming: Timing;
  scheduledPeriod: Period;
  scheduledString: string;
  description: string;
}

export class Position extends BackboneElement {
  longitude: number;
  latitude: number;
  altitude: number;
}

export class Requester extends BackboneElement {
  agent: Reference;
  onBehalfOf: Reference;
}

export class QuestionnaireResponseItem extends BackboneElement {
  linkId: string;
  definition: string;
  text: string;
  answer: Answer[];
}

export class Item extends BackboneElement {
  linkId: string;
  definition?: string;
  code?: Coding[];
  prefix?: string;
  text?: string;
  type: Code;
  enableWhen?: EnableWhen[];
  enableBehavior?: string;
  required?: boolean;
  repeats?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  answerValueSet?: ValueSet;
  answerOption: AnswerOption[];
  initial: Initial[];
  item: Item[];
}

export class ValueSet extends DomainResource {
  url?: string;
  identifier?: Identifier[];
  version?: string;
  name?: string;
  title?: string;
  status: Code;
  experimental?: boolean;
  date?: Date;
  publisher?: string;
  contact?: ContactDetail[];
  description?: string;
  useContext?: UsageContext[];
  jurisdiction?: CodeableConcept[];
  immutable?: boolean;
  purpose?: string;
  copyright?: string;
  compose: Compose;
  expansion: Expansion;
}

export class Designation extends BackboneElement {
  language?: Code;
  use?: Coding;
  value: string;
}

export class Concept extends BackboneElement {
  code: Code;
  display?: string;
  designation?: Designation[];
}

export class Filter extends BackboneElement {
  property: Code;
  op: Code;
  value: string;
}

export class Include extends BackboneElement {
  system?: string;
  version?: string;
  concept?: Concept;
  filter?: Filter;
}

export class Parameter extends BackboneElement {
  name: string;

  valueString?: string;
  valueBoolean?: boolean;
  valueInteger?: number;
  valueDecimal?: number;
  valueUri?: string;
  valueCode?: Code;
  valueDateTime?: Date;
}

export class Contains extends BackboneElement {
  system?: string;
  abstract?: boolean;
  inactive?: boolean;
  version?: string;
  code?: Code;
  display?: string;
  designation: Designation[];
  contains: Contains[];
}

export class Compose extends BackboneElement {
  lockedDate?: Date;
  inactive?: boolean;
  include: Include[];
}

export class Expansion extends BackboneElement {
  identifier?: string;
  timestamp: string;
  total?: number;
  offset?: number;
  parameter?: Parameter;
  contains: Contains;
}

export class Agent extends BackboneElement {
  role: CodeableConcept[];
  reference: Reference;
  userId: Identifier;
  altId: string;
  name: string;
  requestor: boolean;
  location: Reference;
  policy: string[];
  media: Coding;
  /**
   * Logical network location for application activity
   */
  network: Network;
  /**
   * Reason given for this user
   */
  purposeOfUse: CodeableConcept;
}

export class Source extends BackboneElement {
  site: string;
  identifier: Identifier;
  type: Coding[];
}

export class EntityDetail extends BackboneElement {
  type: string;
  value: string;
}

export class Entity extends BackboneElement {
  identifier: Identifier;
  reference: Reference;
  type: Coding;
  role: Coding;
  lifecycle: Coding;
  securityLabel: Coding[];
  name: string;
  description: string;
  query: string;
  detail: EntityDetail[];
}

export class Udi extends BackboneElement {
  deviceIdentifier: string;
  name: string;
  jurisdiction: string;
  carrierHRF: string;
  carrierAIDC: any;
  issuer: string;
  entryType: string;
}

export class QuestionnaireResponse extends Resource {
  identifier: Identifier;
  basedOn: Reference[];
  parent: Reference[];
  questionnaire: string;
  status: string;
  context: Reference;
  authored: Date;
  author: Reference;
  source: Reference;
  item: QuestionnaireResponseItem[];
  subject: Reference;
}

export class Questionnaire extends Resource {
  url: string;
  identifier: Identifier[];
  version: string;
  name: string;
  title: string;
  derivedFrom: Questionnaire;
  status: Code;
  experimental: boolean;
  subjectType: Code[];
  date: Date;
  publisher: string;
  contact: ContactDetail[];
  description: string;
  useContext: UsageContext[];
  jurisdiction: CodeableConcept[];
  purpose: string;
  copyright: string;
  approvalDate: Date;
  lastReviewDate: Date;
  effectivePeriod: Period;
  code: Coding[];
  item: Item[];
}

export class Person extends Resource {
  identifier: Identifier[];
  name: HumanName[];
  telecom: ContactPoint[];
  gender: string;
  birthDate: string;
  address: Address[];
  managingOrganization: Reference;
  link: PersonLink[];
}

export class PersonLink extends BackboneElement {
  target: Reference;
  assurance: string;
}

export class RelatesTo extends BackboneElement {
  code: string;
  target: Reference
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

export class DocumentReference extends Resource {
  masterIdentifier: Identifier;
  identifier: Identifier[];
  status: string;
  docStatus: string;
  type: CodeableConcept;
  category: CodeableConcept[];
  subject: Reference;
  date: Date;
  author: Reference[];
  authenticator: Reference;
  custodian: Reference;
  relatesTo: RelatesTo[];
  description: string;
  securityLabel: CodeableConcept[];
  content: Content[];
  context: Context;
}

export class Appointment extends Resource {
  identifier: Identifier[];
  status: string;
  serviceCategory: CodeableConcept;
  serviceType: CodeableConcept[];
  specialty: CodeableConcept[];
  appointmentType: CodeableConcept;
  indication: Reference[];
  priority: number;
  description: string;
  supportingInformation: Reference[];
  start: Date;
  end: Date;
  minutesDuration: number;
  slot: Reference[];
  created: Date;
  comment: string;
  incomingReferral: Reference[];
  participant: Participant[];
  requestPeriod: Period[];
}

export class Organization extends Resource {
  identifier: Identifier[];
  active: boolean;
  status: string;
  name: string;
  alias: string[];
  description: string;
  type: CodeableConcept[];
  telecom: ContactPoint[];
  address: Address[];
  partOf: Reference;
  contact: Contact[];
  endpoint: Reference[];
}

export class Location extends Resource {
  identifier: Identifier[];
  status: string;
  operationalStatus: Coding;
  name: string;
  alias: string[];
  description: string;
  mode: Code;
  type: CodeableConcept;
  telecom: ContactPoint[];
  address: Address;
  physicalType: CodeableConcept;
  managingOrganization: Reference;
  partOf: Reference;
  hoursOfOperation: HoursOfOperation[];
  endpoint: Reference[];
  extension: Extension[];
}

export class Account extends Resource {
  identifier: Identifier[];
  status: Code;
  type: CodeableConcept;
  name: string;
  subject: Reference;
  period: Period;
  active: Period;
  alias: string[];
  description: string;
  mode: Code;
  telecom: ContactPoint;
  address: Address;
  physicalType: CodeableConcept;
  managingOrganization: Reference;
  partOf: Reference;
  endpoint: Reference[];
}

export class ProcessRequest extends Resource {
  identifier: Identifier[];
  status: string;
  created: Date;
  provider: Reference;
  request: Reference;
}

export class Encounter extends Resource {
  identifier: Identifier[];
  status: string;
  episodeOfCare: Reference[];
  subject: Reference;
  participant: Participant[];

}

export class CareTeamParticipant extends BackboneElement {
  role: CodeableConcept;
  member: Reference;
  onBehalfOf: Reference;
  period: Period;
}

export class CareTeam extends Resource {
  identifier: Identifier[];
  status: string;
  category: CodeableConcept[];
  name: string;
  subject: Reference;
  context: Reference;
  participant: CareTeamParticipant[];
  note: Annotation[];
}

export class EpisodeOfCare extends Resource {
  identifier: Identifier[];
  status: string;
  statusHistory: BackboneElement[];
  type: CodeableConcept[];
  diagnosis: BackboneElement[];
  patient: Reference;
  mangingOrganization: Reference;
  period: Period;
  referralRequest: Reference;
  careManager: Reference;
  team: Reference[];
  account: Reference[];
}
export class CarePlan extends Resource {
  identifier: Identifier[];
  definition: Reference[];
  basedOn: Reference[];
  replaces: Reference[];
  partOf: Reference[];
  status: string;
  intent: string;
  category: CodeableConcept[];
  title: string;
  description: string;
  subject: Reference;
  context: Reference;
  period: Period;
  author: Reference[];
  careTeam: Reference[];
  addresses: Reference[];
  supportingInfo: Reference[];
  goal: Reference[];
  activity: Activity[];
  note: Annotation[];
}

export class Communication extends Resource {
  identifier: Identifier[];
  definition: Reference[];
  basedOn: Reference[];
  partOf: Reference[];
  status: string;
  notDone: boolean;
  notDoneReason: CodeableConcept;
  category: CodeableConcept[];
  medium: CodeableConcept[];
  subject: Reference;
  context: Reference;
  recipient: Reference[];
  topic: Reference[];
  sent: Date;
  received: Date;
  sender: Reference;
  reasonCode: CodeableConcept[];
  reasonReference: Reference[];
  payload: Payload[];
  note: Annotation[];
}

export class Task extends Resource {
  identifier: Identifier[];
  definitionUri: string;
  definitionReference: Reference;
  basedOn: Reference[];
  groupIdentifier: Identifier;
  replaces: Reference[];
  partOf: Reference[];
  status: string;
  statusReason: CodeableConcept;
  businessStatus: CodeableConcept;
  intent: string;
  priority: string;
  code: CodeableConcept;
  description: string;
  focus: Reference;
  for: Reference;
  context: Reference;
  executionPeriod: Period;
  authoredOn: string;
  lastModified: string;
  requester: Requester;
  performerType: CodeableConcept;
  owner: Reference;
  reason: CodeableConcept;
  note: Annotation[];
  relevantHistory: Reference[];
  restriction: Restriction;
  input: Input[];
  output: Output[];
}

export class ProcedureRequest extends Resource {
  identifier: Identifier[];
  status: string;
  intent: string;
  category: CodeableConcept[];
  orderDetail: CodeableConcept[];
  subject: Reference;
  requester: Requester;
  performer: Reference;
  authoredOn: string;
  context: Reference;
  performerType: CodeableConcept;
  note: Annotation[];
}


export class PractitionerRole extends Resource {
  identifier: Identifier[];
  active: boolean;
  period: Period;
  practitioner: Reference;
  organization: Reference;
  code: CodeableConcept[];
  specialty: CodeableConcept[];
  location: Reference[];
  healthcareService: Reference[];
  telecom: ContactPoint[];
  availableTime: AvailableTime[];
  notAvailable: NotAvailable[];
  availabilityExceptions: string;
  endpoint: Reference[];
}

export class Practitioner extends Resource {
  identifier: Identifier[];
  active: boolean;
  name: HumanName[];
  telecom: ContactPoint[];
  address: Address[];
  gender: string;
  birthDate: Date;
  photo: Attachment[];
  qualification: Qualification[];
  communication: CodeableConcept[];
}

export class Device extends Resource {
  identifier: Identifier[];
  udi: Udi;
  status: string;
  type: CodeableConcept;
  lotNumber: string;
  manufacturer: string;
  manufacturerDate: Date;
  expirationDate: Date;
  model: string;
  version: string;
  patient: Reference;
  owner: Reference;
  contact: ContactPoint[];
  location: Reference;
  url: string;
  note: Annotation[];
  safety: CodeableConcept[];
}

export class Observation extends Resource {
  identifier: Identifier[];
  basedOn: Reference[];
  status: string;
  category: CodeableConcept[];
  code: CodeableConcept;
  subject: Reference;
  context: Reference;
  effectiveDateTime: Date;
  effectivePeriod: Period;
  issued: string;
  performer: Reference[];
  valueQuantity: Quantity;
  valueCodeableConcept: CodeableConcept;
  valueString: string;
  valueBoolean: boolean;
  valueRange: FHIRRange;
  valueRatio: Ratio;
  valueSampledData: SampledData;
  valueAttachmnet: Attachment;
  valueTime: string;
  valueDateTime: Date;
  valuePeriod: Period;
  dataAbsentReason: CodeableConcept;
  interpretation: CodeableConcept;
  comment: string;
  bodySite: CodeableConcept;
  method: CodeableConcept;
  specimen: Reference;
  device: Reference;
  referenceRange: ReferenceRange[];
  related: Related[];
  component: Component[];
}

export class Immunization extends Resource {
  identifier: Identifier[];
  status: string;
  notGiven: boolean;
  vaccineCode: CodeableConcept;
  patient: Reference;
  encounter: Reference;
  date: Date;
  primarySource: boolean;
  reportOrigin: CodeableConcept;
  location: Reference;
  manufacturer: Reference;
  lotNumber: string;
  expirationDate: Date;
  site: CodeableConcept;
  route: CodeableConcept;
  doseQuantity: DoseCoding;
  practitioner: PractitionerForImmunization[];
  note: Annotation[];
  reaction: ImmunizationReaction[];
  vaccinationProtocol: VaccinationProtocol[];
}

export class CommunicationRequest extends Resource {
  identifier: Identifier[];
  basedOn: Reference[];
  replaces: Reference[];
  groupIdentifier: Identifier;
  status: string;
  category: CodeableConcept[];
  priority: string;
  medium: CodeableConcept[];
  subject: Reference;
  recipent: Reference[];
  topic: Reference[];
  context: Reference[];
  payload: Payload[];
  occurrenceDateTime: Date;
  occurrencePeriod: Period;
  authoredOn: Date;
  sender: Reference;
  requester: Requester;
  reasonCode: CodeableConcept[];
  reasonReference: Reference[];
  note: Annotation[];
}


export class AuditEvent extends Resource {
  type: Coding;
  subtype: Coding[];
  action: string;
  recorded: Date;
  outcome: string;
  outcomeDesc: string;
  purposeOfEvent: CodeableConcept[];
  /**
   * (Required) Actor involved in the event
   */
  agent: Agent[];
  source: Source;
  entity: Entity[];
}

export class BundleLink extends BackboneElement {
  relation: string;
  url: string;
}

export class BundleSignature extends FHIRElement {
  type: Coding[];
  when: string;
  who: Reference;
  onBehalfOf: Reference;
  targetFormat: string;
  sigFormat: string;
  data: string;
}

export class Search extends BackboneElement {
  mode: string;
  score: number;
}

export class BundleRequest extends BackboneElement {
  method: string;
  url: string;
  ifNoneMatch: string;
  ifModifiedSince: number;
  ifMatch: number;
  ifNoneExist: number;
}

export class BundleResponse extends BackboneElement {
  status: string;
  location: number;
  etag: string;
  lastModified: number;
  outcome: number;
}

export class BundleEntry extends BackboneElement {
  link: BundleLink[];
  fullUrl: string;
  resource: Resource;
  search: Search;
  request: BundleRequest;
  response: BundleResponse;
}

export class Bundle extends Resource {
  identifier: Identifier;
  type: Code;
  timestamp: string;
  total: number;
  link: BundleLink[];
  entry: BundleEntry[];
  signature: BundleSignature;
}

export class Range extends FHIRElement {
  low: number;
  high: number;
} 

export class ServiceRequest extends Resource {
  identifier?: Identifier[];
  instantiatesCanonical?: string[];
  instantiatesUri?: string[];
  basedOn?: Reference[];
  replaces?: Reference[];
  requisition?: Identifier;
  status: Code;
  intent: Code;
  category?: CodeableConcept[];
  priority: Code;
  doNotPerform?: boolean;
  code?: CodeableConcept;
  orderDetail?: CodeableConcept[];
  quantity?: Quantity | Ratio | Range;
  subject?: Reference;
  encounter?: Reference;
  occurence?: Period | Timing | Date;
  asNeeded?: boolean | CodeableConcept;
  authoredOn?: Date;
  requester?: Reference;
  performerType?: CodeableConcept;
  performer?: Reference[];
  locationCode?: CodeableConcept[];
  locationReference?: Reference[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference[];
  insurance?: Reference[];
  supportingInfo?: Reference[];
  specimen?: Reference[];
  bodySite?: CodeableConcept[];
  note?: Annotation[];
  patientInstuction?: string;
  relevantHistory?: Reference[];
}

export class Schedule extends Resource {
  identifier: Identifier[];
  active: boolean;
  serviceCategory: CodeableConcept[];
  serviceType: CodeableConcept[];
  specialty: CodeableConcept[];
  actor: Reference[];
  planningHorizon: Period;
  comment: string;
}