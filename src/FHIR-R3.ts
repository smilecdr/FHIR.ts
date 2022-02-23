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

export class Narrative {
  status: Code;
  div: string;
}

export class Code extends FHIRElement {
  private _code: string;
  private codeRE = new RegExp('[^\\s]+([\\s]?[^\\s]+)*');

  constructor(input?: string) {
    super();
    this.setCode(input);
  }

  private setCode(input: string) {
    if (this.codeRE.test(input)) {
      this._code = input;
    } else {
      throw new RangeError('Not a valid Id string - must match reg exp [^\\s]+([\\s]?[^\\s]+)* Was provided: ' + input);
    }
  }

  getcode(): string {
    return this._code;
  }

  setcode(input: string) {
    this.setCode(input);
  }

  public toString(): string {
    return this._code;
  }
}

export class Coding extends FHIRElement {
  system: string;
  version: string;
  // should be of type Code
  code: string;
  display: string;
  userSelected: boolean;
  value: string;
}

export class DoseCoding extends FHIRElement {
  system: string;
  code: string;
  value: number;
}

export class HumanName extends FHIRElement {
  use: Code;
  text: string;
  family: string;
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
  lastUpdated: string;
  profile: string;
  security: Coding;
  tag: Coding;
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


export class UsageContext extends FHIRElement {
  code: Coding;
  value: any;

  setvalueCodeableConcept(value: CodeableConcept) {
    this.value = value;
  }
  setvalueQuantity(value: Quantity) {
    this.value = value;
  }
  setvalueRange(value: Range) {
    this.value = value;
  }

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
  type: Code;
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
  gender: Code;
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

class Related extends BackboneElement {
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
  hasAnswer: boolean;
  answer: any;

  setanswerBoolean(answer: boolean) {
    this.answer = answer;
  }
  setanswerInteger(answer: number) {
    this.answer = answer;
  }
  setanswerDate(answer: string) {
    this.answer = answer;
  }
  setanswerdateTime(answer: string) {
    this.answer = answer;
  }
  setanswerTime(answer: string) {
    this.answer = answer;
  }
  setanswerUri(answer: string) {
    this.answer = answer;
  }
  setanswerAttachment(answer: any) {
    this.answer = answer;
  }
  setanswerCoding(answer: Coding) {
    this.answer = answer;
  }
  setanswerQuantity(answer: Quantity) {
    this.answer = answer;
  }
  setanswerReference(answer: string) {
    this.answer = answer;
  }

}

export class Answer extends BackboneElement {
  valueDecimal: number;
  valueInteger: number;
  valueDate: Date;
  valueDateTime: Date;
  valueTime: string;
  valueString: string;
  valueUri: string;
  valueAttachment: Attachment;
  valueCoding: Coding;
  valueQuantity: Quantity;
  valueBoolean: boolean;
  valueReference: Reference;
}


export class FHIROption extends BackboneElement {
  value: any;
  setvalueDate(value: string) {
    this.value = value;
  }
  setvalueTime(value: string) {
    this.value = value;
  }
  setvalueString(value: string) {
    this.value = value;
  }
  setvalueCoding(value: Coding) {
    this.value = value;
  }
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
  age: Range;
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
  valueRange: Range;
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

export class Range extends FHIRElement {
  low: number;
  high: number;
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
  period: Period;
  recipient: Reference[];
}

export class AvailableTime extends BackboneElement {
  daysOfWeek: string[];
  allDay: boolean;
  availableStartTime: string;
  availableEndTime: string;
}

export class NotAvailable extends BackboneElement {
  description: string;
  during: Period;
}

export class BundleLink extends BackboneElement {
  relation: string;
  url: string;
}

export class BundleSignature extends FHIRElement {
  type: Coding[];
  when: string;
  who: Reference;
  onBehalfOfUri: string;
  onBehalfOfReference: Reference;
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
  location: string;
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
  definition: string;
  code: Coding[];
  prefix: string;
  text: string;
  type: Code;
  subject: Reference;
  enableWhen: EnableWhen[];
  required: boolean;
  repeats: boolean;
  readOnly: boolean;
  maxLength: number;
  options: string;
  option: FHIROption[];
  item: Item[];
  initial: any;
  answer: Answer[];
  initialReference: Reference;
  initialDateTime: Date;
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
  questionnaire: Reference;
  status: string;
  context: Reference;
  authored: Date;
  author: Reference;
  source: Reference;
  item: QuestionnaireResponseItem[];
  subject: Reference;
}

export class Questionnaire extends Resource  {
  url: string;
  identifier: Identifier[];
  version: string;
  name: string;
  title: string;
  // TODO - fix Code and change status to type Code
  status: string;
  experimental: boolean;
  date: string;
  publisher: string;
  description: string;
  purpose: string;
  rovalDate: string;
  lastReviewedDate: string;
  effectivePeriod: Period;
  useContext: UsageContext[];
  jurisdiction: CodeableConcept[];
  contact: ContactDetail[];
  copyright: string;
  code: Coding[];
  subjectType: Code[];
  item: Item[];
}


export class Patient extends Resource {
  identifier: Identifier[];
  active: boolean;
  name: HumanName[];
  telecom: ContactPoint[];
  gender: Code;
  birthDate: string;
  address: Address;
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
  subject: Reference;
  created: Date;
  description: string;
  author: Reference[];
  content: Content[];
  indexed: Date;
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

export class AppointmentResponse extends Resource {
  identifier: Identifier[];
  appointment: Reference;
  start: Date;
  end: Date;
  participationType: CodeableConcept[];
  actor: Reference;
  participantStatus: string;
  comment: string;
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
  // TODO: fix mapping for money
  balance: number;
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
  birthDate: string;
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
  valueRange: Range;
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
  date: string;
  primarySource: boolean;
  reportOrigin: CodeableConcept;
  location: Reference;
  manufacturer: Reference;
  lotNumber: string;
  expirationDate: string;
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

export class Bundle extends Resource {
  identifier: Identifier;
  type: string;
  timestamp: string;
  total: number;
  link: BundleLink[];
  entry: BundleEntry[];
  signature: BundleSignature;
}

export class HealthcareService extends Resource {
  identifier: Identifier[];
  active: string;
  providedBy: Reference;
  category: CodeableConcept;
  type: CodeableConcept[];
  specialty: CodeableConcept[];
  location: Reference[];
  name: string;
  comment: string;
  extraDetails: string;
  photo: Attachment;
  telecom: ContactPoint[];
  coverageArea: Reference[];
  serviceProvisionCode: CodeableConcept[];
  eligibility: CodeableConcept;
  eligibilityNote: string;
  programName: string;
  characteristic: CodeableConcept[];
  referralMethod: CodeableConcept[];
  appointmentRequired: string;
  availableTime: AvailableTime[];
  notAvailable: NotAvailable[];
  availibilityExceptions: string;
  endpoint: Reference[];
}

export class Schedule extends Resource {
  identifier: Identifier[];
  active: boolean;
  serviceCategory: CodeableConcept;
  serviceType: CodeableConcept[]
  specialty: CodeableConcept[];
  actor: Reference[];
  planningHorizon: Period;
  comment: string;
}

export class Slot extends Resource {
  identifier: Identifier[];
  serviceCategory: CodeableConcept;
  serviceType: CodeableConcept[];
  speciality: CodeableConcept[];
  appointmentType: CodeableConcept;
  schedule: Reference;
  status: string;
  start: string;
  end: string;
  overbooked: boolean;
  comment: string;
}

export class ClinicalImpression extends Resource {
  identifier: Identifier[];
  status: string;
  code: CodeableConcept;
  description: string;
  subject: Reference;
  context: Reference;
  effectiveDateTime: string;
  effectivePeriod: Period;
  date: string;
  assessor: Reference;
  previous: Reference;
  problem: Reference[];
  investigation: ClinicalImpressionInvestigation[];
  protocol: string[];
  summary: string;
  finding: ClinicalImpressionFinding[];
  prognosisCodeableConcept: CodeableConcept[];
  prognosisReference: Reference[];
  action: Reference[];
  note: Annotation[];
}

export class ClinicalImpressionInvestigation extends BackboneElement {
  code: CodeableConcept;
  item: Reference[];
}

export class ClinicalImpressionFinding extends BackboneElement {
  basis: string;
  itemCodeableConcept: CodeableConcept;
  itemReference: Reference;
}


