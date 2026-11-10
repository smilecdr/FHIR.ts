/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { Coding } from './coding';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for Encounter Resource
 */
export class Encounter extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EncounterStatus }],
    },
    {
      elementName: 'statusHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusHistory', typeCode: 'EncounterStatusHistory' }],
    },
    {
      elementName: 'class',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'class', typeCode: 'Coding' }],
    },
    {
      elementName: 'classHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'classHistory', typeCode: 'EncounterClassHistory' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'subject',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'episodeOfCare',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'episodeOfCare', typeCode: 'Reference', targetResourceTypes: ['EpisodeOfCare'] },
      ],
    },
    {
      elementName: 'incomingReferral',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'incomingReferral',
          typeCode: 'Reference',
          targetResourceTypes: ['ReferralRequest'],
        },
      ],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'EncounterParticipant' }],
    },
    {
      elementName: 'appointment',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'appointment', typeCode: 'Reference', targetResourceTypes: ['Appointment'] },
      ],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'length',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'length', typeCode: 'Duration' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'diagnosis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'diagnosis', typeCode: 'EncounterDiagnosis' }],
    },
    {
      elementName: 'account',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'account', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
    {
      elementName: 'hospitalization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'hospitalization', typeCode: 'EncounterHospitalization' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'location', typeCode: 'EncounterLocation' }],
    },
    {
      elementName: 'serviceProvider',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'serviceProvider',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
  ];

  readonly resourceType = 'Encounter';

  /** Identifier(s) by which this encounter is known (0..*) */
  identifier?: Identifier[];

  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + (1..1) */
  status?: valueSetCodes.EncounterStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** List of past encounter statuses (0..*) */
  statusHistory?: EncounterStatusHistory[];

  /** inpatient | outpatient | ambulatory | emergency + (0..1) */
  class?: Coding;

  /** List of past encounter classes (0..*) */
  classHistory?: EncounterClassHistory[];

  /** Specific type of encounter (0..*) */
  type?: CodeableConcept[];

  /** Indicates the urgency of the encounter (0..1) */
  priority?: CodeableConcept;

  /** The patient ro group present at the encounter (0..1) */
  subject?: Reference;

  /** Episode(s) of care that this encounter should be recorded against (0..*) */
  episodeOfCare?: Reference[];

  /** The ReferralRequest that initiated this encounter (0..*) */
  incomingReferral?: Reference[];

  /** List of participants involved in the encounter (0..*) */
  participant?: EncounterParticipant[];

  /** The appointment that scheduled this encounter (0..1) */
  appointment?: Reference;

  /** The start and end time of the encounter (0..1) */
  period?: Period;

  /** Quantity of time the encounter lasted (less time absent) (0..1) */
  length?: Duration;

  /** Reason the encounter takes place (code) (0..*) */
  reason?: CodeableConcept[];

  /** The list of diagnosis relevant to this encounter (0..*) */
  diagnosis?: EncounterDiagnosis[];

  /** The set of accounts that may be used for billing for this Encounter (0..*) */
  account?: Reference[];

  /** Details about the admission to a healthcare service (0..1) */
  hospitalization?: EncounterHospitalization;

  /** List of locations where the patient has been (0..*) */
  location?: EncounterLocation[];

  /** The custodian organization of this Encounter record (0..1) */
  serviceProvider?: Reference;

  /** Another Encounter this encounter is part of (0..1) */
  partOf?: Reference;

  override fhirType(): string {
    return 'Encounter';
  }

  /** FHIR JSON for this Encounter, typed as the plain `Encounter` data type. */
  override toJSON(): plainTypes.Encounter {
    return this.serialize() as plainTypes.Encounter;
  }

  /** Identifier(s) by which this encounter is known (0..*) Never undefined; an empty list is created when absent. */
  getIdentifier(): Identifier[] {
    if (this.identifier === undefined) {
      this.identifier = [];
    }
    return this.identifier;
  }

  setIdentifier(identifier: Identifier[] | undefined): this {
    return this.setFieldValue('identifier', identifier);
  }

  hasIdentifier(): boolean {
    return this.hasFieldValue('identifier');
  }

  /** Appends a new, empty Identifier to `identifier` and returns it so it can be filled in. */
  addIdentifier(): Identifier;
  /** Appends the given Identifier to `identifier` and returns this object for chaining. */
  addIdentifier(identifier: Identifier): this;
  addIdentifier(identifier?: Identifier): Identifier | this {
    if (identifier !== undefined) {
      return this.addFieldValue('identifier', identifier);
    }
    const createdIdentifier = new Identifier();
    this.addFieldValue('identifier', createdIdentifier);
    return createdIdentifier;
  }

  /** The first Identifier of `identifier`. One is added when the list is empty. */
  getIdentifierFirstRep(): Identifier {
    const firstIdentifier = this.getIdentifier()[0];
    return firstIdentifier === undefined ? this.addIdentifier() : firstIdentifier;
  }

  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + (1..1) */
  getStatus(): valueSetCodes.EncounterStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EncounterStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** List of past encounter statuses (0..*) Never undefined; an empty list is created when absent. */
  getStatusHistory(): EncounterStatusHistory[] {
    if (this.statusHistory === undefined) {
      this.statusHistory = [];
    }
    return this.statusHistory;
  }

  setStatusHistory(statusHistory: EncounterStatusHistory[] | undefined): this {
    return this.setFieldValue('statusHistory', statusHistory);
  }

  hasStatusHistory(): boolean {
    return this.hasFieldValue('statusHistory');
  }

  /** Appends a new, empty EncounterStatusHistory to `statusHistory` and returns it so it can be filled in. */
  addStatusHistory(): EncounterStatusHistory;
  /** Appends the given EncounterStatusHistory to `statusHistory` and returns this object for chaining. */
  addStatusHistory(encounterStatusHistory: EncounterStatusHistory): this;
  addStatusHistory(encounterStatusHistory?: EncounterStatusHistory): EncounterStatusHistory | this {
    if (encounterStatusHistory !== undefined) {
      return this.addFieldValue('statusHistory', encounterStatusHistory);
    }
    const createdEncounterStatusHistory = new EncounterStatusHistory();
    this.addFieldValue('statusHistory', createdEncounterStatusHistory);
    return createdEncounterStatusHistory;
  }

  /** The first EncounterStatusHistory of `statusHistory`. One is added when the list is empty. */
  getStatusHistoryFirstRep(): EncounterStatusHistory {
    const firstEncounterStatusHistory = this.getStatusHistory()[0];
    return firstEncounterStatusHistory === undefined
      ? this.addStatusHistory()
      : firstEncounterStatusHistory;
  }

  /** inpatient | outpatient | ambulatory | emergency + (0..1) Created when absent. */
  getClass(): Coding {
    if (this.class === undefined) {
      this.class = new Coding();
    }
    return this.class;
  }

  setClass(classValue: Coding | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** List of past encounter classes (0..*) Never undefined; an empty list is created when absent. */
  getClassHistory(): EncounterClassHistory[] {
    if (this.classHistory === undefined) {
      this.classHistory = [];
    }
    return this.classHistory;
  }

  setClassHistory(classHistory: EncounterClassHistory[] | undefined): this {
    return this.setFieldValue('classHistory', classHistory);
  }

  hasClassHistory(): boolean {
    return this.hasFieldValue('classHistory');
  }

  /** Appends a new, empty EncounterClassHistory to `classHistory` and returns it so it can be filled in. */
  addClassHistory(): EncounterClassHistory;
  /** Appends the given EncounterClassHistory to `classHistory` and returns this object for chaining. */
  addClassHistory(encounterClassHistory: EncounterClassHistory): this;
  addClassHistory(encounterClassHistory?: EncounterClassHistory): EncounterClassHistory | this {
    if (encounterClassHistory !== undefined) {
      return this.addFieldValue('classHistory', encounterClassHistory);
    }
    const createdEncounterClassHistory = new EncounterClassHistory();
    this.addFieldValue('classHistory', createdEncounterClassHistory);
    return createdEncounterClassHistory;
  }

  /** The first EncounterClassHistory of `classHistory`. One is added when the list is empty. */
  getClassHistoryFirstRep(): EncounterClassHistory {
    const firstEncounterClassHistory = this.getClassHistory()[0];
    return firstEncounterClassHistory === undefined
      ? this.addClassHistory()
      : firstEncounterClassHistory;
  }

  /** Specific type of encounter (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Indicates the urgency of the encounter (0..1) Created when absent. */
  getPriority(): CodeableConcept {
    if (this.priority === undefined) {
      this.priority = new CodeableConcept();
    }
    return this.priority;
  }

  setPriority(priority: CodeableConcept | undefined): this {
    return this.setFieldValue('priority', priority);
  }

  hasPriority(): boolean {
    return this.hasFieldValue('priority');
  }

  /** The patient ro group present at the encounter (0..1) Created when absent. */
  getSubject(): Reference {
    if (this.subject === undefined) {
      this.subject = new Reference();
    }
    return this.subject;
  }

  setSubject(subject: Reference | undefined): this {
    return this.setFieldValue('subject', subject);
  }

  hasSubject(): boolean {
    return this.hasFieldValue('subject');
  }

  /** Episode(s) of care that this encounter should be recorded against (0..*) Never undefined; an empty list is created when absent. */
  getEpisodeOfCare(): Reference[] {
    if (this.episodeOfCare === undefined) {
      this.episodeOfCare = [];
    }
    return this.episodeOfCare;
  }

  setEpisodeOfCare(episodeOfCare: Reference[] | undefined): this {
    return this.setFieldValue('episodeOfCare', episodeOfCare);
  }

  hasEpisodeOfCare(): boolean {
    return this.hasFieldValue('episodeOfCare');
  }

  /** Appends a new, empty Reference to `episodeOfCare` and returns it so it can be filled in. */
  addEpisodeOfCare(): Reference;
  /** Appends the given Reference to `episodeOfCare` and returns this object for chaining. */
  addEpisodeOfCare(reference: Reference): this;
  addEpisodeOfCare(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('episodeOfCare', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('episodeOfCare', createdReference);
    return createdReference;
  }

  /** The first Reference of `episodeOfCare`. One is added when the list is empty. */
  getEpisodeOfCareFirstRep(): Reference {
    const firstReference = this.getEpisodeOfCare()[0];
    return firstReference === undefined ? this.addEpisodeOfCare() : firstReference;
  }

  /** The ReferralRequest that initiated this encounter (0..*) Never undefined; an empty list is created when absent. */
  getIncomingReferral(): Reference[] {
    if (this.incomingReferral === undefined) {
      this.incomingReferral = [];
    }
    return this.incomingReferral;
  }

  setIncomingReferral(incomingReferral: Reference[] | undefined): this {
    return this.setFieldValue('incomingReferral', incomingReferral);
  }

  hasIncomingReferral(): boolean {
    return this.hasFieldValue('incomingReferral');
  }

  /** Appends a new, empty Reference to `incomingReferral` and returns it so it can be filled in. */
  addIncomingReferral(): Reference;
  /** Appends the given Reference to `incomingReferral` and returns this object for chaining. */
  addIncomingReferral(reference: Reference): this;
  addIncomingReferral(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('incomingReferral', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('incomingReferral', createdReference);
    return createdReference;
  }

  /** The first Reference of `incomingReferral`. One is added when the list is empty. */
  getIncomingReferralFirstRep(): Reference {
    const firstReference = this.getIncomingReferral()[0];
    return firstReference === undefined ? this.addIncomingReferral() : firstReference;
  }

  /** List of participants involved in the encounter (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): EncounterParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: EncounterParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty EncounterParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): EncounterParticipant;
  /** Appends the given EncounterParticipant to `participant` and returns this object for chaining. */
  addParticipant(encounterParticipant: EncounterParticipant): this;
  addParticipant(encounterParticipant?: EncounterParticipant): EncounterParticipant | this {
    if (encounterParticipant !== undefined) {
      return this.addFieldValue('participant', encounterParticipant);
    }
    const createdEncounterParticipant = new EncounterParticipant();
    this.addFieldValue('participant', createdEncounterParticipant);
    return createdEncounterParticipant;
  }

  /** The first EncounterParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): EncounterParticipant {
    const firstEncounterParticipant = this.getParticipant()[0];
    return firstEncounterParticipant === undefined
      ? this.addParticipant()
      : firstEncounterParticipant;
  }

  /** The appointment that scheduled this encounter (0..1) Created when absent. */
  getAppointment(): Reference {
    if (this.appointment === undefined) {
      this.appointment = new Reference();
    }
    return this.appointment;
  }

  setAppointment(appointment: Reference | undefined): this {
    return this.setFieldValue('appointment', appointment);
  }

  hasAppointment(): boolean {
    return this.hasFieldValue('appointment');
  }

  /** The start and end time of the encounter (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Quantity of time the encounter lasted (less time absent) (0..1) Created when absent. */
  getLength(): Duration {
    if (this.length === undefined) {
      this.length = new Duration();
    }
    return this.length;
  }

  setLength(length: Duration | undefined): this {
    return this.setFieldValue('length', length);
  }

  hasLength(): boolean {
    return this.hasFieldValue('length');
  }

  /** Reason the encounter takes place (code) (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableConcept[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableConcept to `reason` and returns it so it can be filled in. */
  addReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `reason` and returns this object for chaining. */
  addReason(codeableConcept: CodeableConcept): this;
  addReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReason()[0];
    return firstCodeableConcept === undefined ? this.addReason() : firstCodeableConcept;
  }

  /** The list of diagnosis relevant to this encounter (0..*) Never undefined; an empty list is created when absent. */
  getDiagnosis(): EncounterDiagnosis[] {
    if (this.diagnosis === undefined) {
      this.diagnosis = [];
    }
    return this.diagnosis;
  }

  setDiagnosis(diagnosis: EncounterDiagnosis[] | undefined): this {
    return this.setFieldValue('diagnosis', diagnosis);
  }

  hasDiagnosis(): boolean {
    return this.hasFieldValue('diagnosis');
  }

  /** Appends a new, empty EncounterDiagnosis to `diagnosis` and returns it so it can be filled in. */
  addDiagnosis(): EncounterDiagnosis;
  /** Appends the given EncounterDiagnosis to `diagnosis` and returns this object for chaining. */
  addDiagnosis(encounterDiagnosis: EncounterDiagnosis): this;
  addDiagnosis(encounterDiagnosis?: EncounterDiagnosis): EncounterDiagnosis | this {
    if (encounterDiagnosis !== undefined) {
      return this.addFieldValue('diagnosis', encounterDiagnosis);
    }
    const createdEncounterDiagnosis = new EncounterDiagnosis();
    this.addFieldValue('diagnosis', createdEncounterDiagnosis);
    return createdEncounterDiagnosis;
  }

  /** The first EncounterDiagnosis of `diagnosis`. One is added when the list is empty. */
  getDiagnosisFirstRep(): EncounterDiagnosis {
    const firstEncounterDiagnosis = this.getDiagnosis()[0];
    return firstEncounterDiagnosis === undefined ? this.addDiagnosis() : firstEncounterDiagnosis;
  }

  /** The set of accounts that may be used for billing for this Encounter (0..*) Never undefined; an empty list is created when absent. */
  getAccount(): Reference[] {
    if (this.account === undefined) {
      this.account = [];
    }
    return this.account;
  }

  setAccount(account: Reference[] | undefined): this {
    return this.setFieldValue('account', account);
  }

  hasAccount(): boolean {
    return this.hasFieldValue('account');
  }

  /** Appends a new, empty Reference to `account` and returns it so it can be filled in. */
  addAccount(): Reference;
  /** Appends the given Reference to `account` and returns this object for chaining. */
  addAccount(reference: Reference): this;
  addAccount(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('account', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('account', createdReference);
    return createdReference;
  }

  /** The first Reference of `account`. One is added when the list is empty. */
  getAccountFirstRep(): Reference {
    const firstReference = this.getAccount()[0];
    return firstReference === undefined ? this.addAccount() : firstReference;
  }

  /** Details about the admission to a healthcare service (0..1) Created when absent. */
  getHospitalization(): EncounterHospitalization {
    if (this.hospitalization === undefined) {
      this.hospitalization = new EncounterHospitalization();
    }
    return this.hospitalization;
  }

  setHospitalization(hospitalization: EncounterHospitalization | undefined): this {
    return this.setFieldValue('hospitalization', hospitalization);
  }

  hasHospitalization(): boolean {
    return this.hasFieldValue('hospitalization');
  }

  /** List of locations where the patient has been (0..*) Never undefined; an empty list is created when absent. */
  getLocation(): EncounterLocation[] {
    if (this.location === undefined) {
      this.location = [];
    }
    return this.location;
  }

  setLocation(location: EncounterLocation[] | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Appends a new, empty EncounterLocation to `location` and returns it so it can be filled in. */
  addLocation(): EncounterLocation;
  /** Appends the given EncounterLocation to `location` and returns this object for chaining. */
  addLocation(encounterLocation: EncounterLocation): this;
  addLocation(encounterLocation?: EncounterLocation): EncounterLocation | this {
    if (encounterLocation !== undefined) {
      return this.addFieldValue('location', encounterLocation);
    }
    const createdEncounterLocation = new EncounterLocation();
    this.addFieldValue('location', createdEncounterLocation);
    return createdEncounterLocation;
  }

  /** The first EncounterLocation of `location`. One is added when the list is empty. */
  getLocationFirstRep(): EncounterLocation {
    const firstEncounterLocation = this.getLocation()[0];
    return firstEncounterLocation === undefined ? this.addLocation() : firstEncounterLocation;
  }

  /** The custodian organization of this Encounter record (0..1) Created when absent. */
  getServiceProvider(): Reference {
    if (this.serviceProvider === undefined) {
      this.serviceProvider = new Reference();
    }
    return this.serviceProvider;
  }

  setServiceProvider(serviceProvider: Reference | undefined): this {
    return this.setFieldValue('serviceProvider', serviceProvider);
  }

  hasServiceProvider(): boolean {
    return this.hasFieldValue('serviceProvider');
  }

  /** Another Encounter this encounter is part of (0..1) Created when absent. */
  getPartOf(): Reference {
    if (this.partOf === undefined) {
      this.partOf = new Reference();
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }
}

modelTypeRegistry.register('Encounter', Encounter, true);

/** True when the value is a Encounter model instance. */
export function isEncounter(candidate: unknown): candidate is Encounter {
  return candidate instanceof Encounter;
}

/**
 * List of past encounter statuses
 */
export class EncounterStatusHistory extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EncounterStatus }],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + (1..1) */
  status?: valueSetCodes.EncounterStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The time that the episode was in the specified status (1..1) */
  period?: Period;

  override fhirType(): string {
    return 'Encounter.statusHistory';
  }

  /** FHIR JSON for this EncounterStatusHistory, typed as the plain `EncounterStatusHistory` data type. */
  override toJSON(): plainTypes.EncounterStatusHistory {
    return this.serialize() as plainTypes.EncounterStatusHistory;
  }

  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + (1..1) */
  getStatus(): valueSetCodes.EncounterStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EncounterStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** The time that the episode was in the specified status (1..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register('EncounterStatusHistory', EncounterStatusHistory, false);

/**
 * List of past encounter classes
 */
export class EncounterClassHistory extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'class',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'class', typeCode: 'Coding' }],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** inpatient | outpatient | ambulatory | emergency + (1..1) */
  class?: Coding;

  /** The time that the episode was in the specified class (1..1) */
  period?: Period;

  override fhirType(): string {
    return 'Encounter.classHistory';
  }

  /** FHIR JSON for this EncounterClassHistory, typed as the plain `EncounterClassHistory` data type. */
  override toJSON(): plainTypes.EncounterClassHistory {
    return this.serialize() as plainTypes.EncounterClassHistory;
  }

  /** inpatient | outpatient | ambulatory | emergency + (1..1) Created when absent. */
  getClass(): Coding {
    if (this.class === undefined) {
      this.class = new Coding();
    }
    return this.class;
  }

  setClass(classValue: Coding | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** The time that the episode was in the specified class (1..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register('EncounterClassHistory', EncounterClassHistory, false);

/**
 * List of participants involved in the encounter
 */
export class EncounterParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'individual',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'individual',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'RelatedPerson'],
        },
      ],
    },
  ];

  /** Role of participant in encounter (0..*) */
  type?: CodeableConcept[];

  /** Period of time during the encounter that the participant participated (0..1) */
  period?: Period;

  /** Persons involved in the encounter other than the patient (0..1) */
  individual?: Reference;

  override fhirType(): string {
    return 'Encounter.participant';
  }

  /** FHIR JSON for this EncounterParticipant, typed as the plain `EncounterParticipant` data type. */
  override toJSON(): plainTypes.EncounterParticipant {
    return this.serialize() as plainTypes.EncounterParticipant;
  }

  /** Role of participant in encounter (0..*) Never undefined; an empty list is created when absent. */
  getType(): CodeableConcept[] {
    if (this.type === undefined) {
      this.type = [];
    }
    return this.type;
  }

  setType(type: CodeableConcept[] | undefined): this {
    return this.setFieldValue('type', type);
  }

  hasType(): boolean {
    return this.hasFieldValue('type');
  }

  /** Appends a new, empty CodeableConcept to `type` and returns it so it can be filled in. */
  addType(): CodeableConcept;
  /** Appends the given CodeableConcept to `type` and returns this object for chaining. */
  addType(codeableConcept: CodeableConcept): this;
  addType(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('type', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('type', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `type`. One is added when the list is empty. */
  getTypeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getType()[0];
    return firstCodeableConcept === undefined ? this.addType() : firstCodeableConcept;
  }

  /** Period of time during the encounter that the participant participated (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }

  /** Persons involved in the encounter other than the patient (0..1) Created when absent. */
  getIndividual(): Reference {
    if (this.individual === undefined) {
      this.individual = new Reference();
    }
    return this.individual;
  }

  setIndividual(individual: Reference | undefined): this {
    return this.setFieldValue('individual', individual);
  }

  hasIndividual(): boolean {
    return this.hasFieldValue('individual');
  }
}

modelTypeRegistry.register('EncounterParticipant', EncounterParticipant, false);

/**
 * The list of diagnosis relevant to this encounter
 */
export class EncounterDiagnosis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'condition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'condition',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition', 'Procedure'],
        },
      ],
    },
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'rank',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'rank', typeCode: 'positiveInt' }],
    },
  ];

  /** Reason the encounter takes place (resource) (1..1) */
  condition?: Reference;

  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) (0..1) */
  role?: CodeableConcept;

  /** Ranking of the diagnosis (for each role type) (0..1) */
  rank?: number;
  /** Id and extensions of the primitive `rank`. */
  _rank?: Element;

  override fhirType(): string {
    return 'Encounter.diagnosis';
  }

  /** FHIR JSON for this EncounterDiagnosis, typed as the plain `EncounterDiagnosis` data type. */
  override toJSON(): plainTypes.EncounterDiagnosis {
    return this.serialize() as plainTypes.EncounterDiagnosis;
  }

  /** Reason the encounter takes place (resource) (1..1) Created when absent. */
  getCondition(): Reference {
    if (this.condition === undefined) {
      this.condition = new Reference();
    }
    return this.condition;
  }

  setCondition(condition: Reference | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) (0..1) Created when absent. */
  getRole(): CodeableConcept {
    if (this.role === undefined) {
      this.role = new CodeableConcept();
    }
    return this.role;
  }

  setRole(role: CodeableConcept | undefined): this {
    return this.setFieldValue('role', role);
  }

  hasRole(): boolean {
    return this.hasFieldValue('role');
  }

  /** Ranking of the diagnosis (for each role type) (0..1) */
  getRank(): number | undefined {
    return this.rank;
  }

  /** Sets `rank`. Throws a FhirModelError when the value is not a valid FHIR positiveInt. */
  setRank(rank: number | undefined): this {
    return this.setFieldValue('rank', rank);
  }

  hasRank(): boolean {
    return this.hasFieldValue('rank');
  }

  /** The element carrying the id and extensions of `rank`. Created when absent. */
  getRankElement(): Element {
    if (this._rank === undefined) {
      this._rank = new Element();
    }
    return this._rank;
  }

  setRankElement(rankElement: Element | undefined): this {
    this._rank = rankElement;
    return this;
  }
}

modelTypeRegistry.register('EncounterDiagnosis', EncounterDiagnosis, false);

/**
 * Details about the admission to a healthcare service
 */
export class EncounterHospitalization extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'preAdmissionIdentifier',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'preAdmissionIdentifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'origin',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'origin', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'admitSource',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'admitSource', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reAdmission',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reAdmission', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dietPreference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dietPreference', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialCourtesy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialCourtesy', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialArrangement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialArrangement', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'destination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'destination', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'dischargeDisposition',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dischargeDisposition', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Pre-admission identifier (0..1) */
  preAdmissionIdentifier?: Identifier;

  /** The location from which the patient came before admission (0..1) */
  origin?: Reference;

  /** From where patient was admitted (physician referral, transfer) (0..1) */
  admitSource?: CodeableConcept;

  /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission (0..1) */
  reAdmission?: CodeableConcept;

  /** Diet preferences reported by the patient (0..*) */
  dietPreference?: CodeableConcept[];

  /** Special courtesies (VIP, board member) (0..*) */
  specialCourtesy?: CodeableConcept[];

  /** Wheelchair, translator, stretcher, etc. (0..*) */
  specialArrangement?: CodeableConcept[];

  /** Location to which the patient is discharged (0..1) */
  destination?: Reference;

  /** Category or kind of location after discharge (0..1) */
  dischargeDisposition?: CodeableConcept;

  override fhirType(): string {
    return 'Encounter.hospitalization';
  }

  /** FHIR JSON for this EncounterHospitalization, typed as the plain `EncounterHospitalization` data type. */
  override toJSON(): plainTypes.EncounterHospitalization {
    return this.serialize() as plainTypes.EncounterHospitalization;
  }

  /** Pre-admission identifier (0..1) Created when absent. */
  getPreAdmissionIdentifier(): Identifier {
    if (this.preAdmissionIdentifier === undefined) {
      this.preAdmissionIdentifier = new Identifier();
    }
    return this.preAdmissionIdentifier;
  }

  setPreAdmissionIdentifier(preAdmissionIdentifier: Identifier | undefined): this {
    return this.setFieldValue('preAdmissionIdentifier', preAdmissionIdentifier);
  }

  hasPreAdmissionIdentifier(): boolean {
    return this.hasFieldValue('preAdmissionIdentifier');
  }

  /** The location from which the patient came before admission (0..1) Created when absent. */
  getOrigin(): Reference {
    if (this.origin === undefined) {
      this.origin = new Reference();
    }
    return this.origin;
  }

  setOrigin(origin: Reference | undefined): this {
    return this.setFieldValue('origin', origin);
  }

  hasOrigin(): boolean {
    return this.hasFieldValue('origin');
  }

  /** From where patient was admitted (physician referral, transfer) (0..1) Created when absent. */
  getAdmitSource(): CodeableConcept {
    if (this.admitSource === undefined) {
      this.admitSource = new CodeableConcept();
    }
    return this.admitSource;
  }

  setAdmitSource(admitSource: CodeableConcept | undefined): this {
    return this.setFieldValue('admitSource', admitSource);
  }

  hasAdmitSource(): boolean {
    return this.hasFieldValue('admitSource');
  }

  /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission (0..1) Created when absent. */
  getReAdmission(): CodeableConcept {
    if (this.reAdmission === undefined) {
      this.reAdmission = new CodeableConcept();
    }
    return this.reAdmission;
  }

  setReAdmission(reAdmission: CodeableConcept | undefined): this {
    return this.setFieldValue('reAdmission', reAdmission);
  }

  hasReAdmission(): boolean {
    return this.hasFieldValue('reAdmission');
  }

  /** Diet preferences reported by the patient (0..*) Never undefined; an empty list is created when absent. */
  getDietPreference(): CodeableConcept[] {
    if (this.dietPreference === undefined) {
      this.dietPreference = [];
    }
    return this.dietPreference;
  }

  setDietPreference(dietPreference: CodeableConcept[] | undefined): this {
    return this.setFieldValue('dietPreference', dietPreference);
  }

  hasDietPreference(): boolean {
    return this.hasFieldValue('dietPreference');
  }

  /** Appends a new, empty CodeableConcept to `dietPreference` and returns it so it can be filled in. */
  addDietPreference(): CodeableConcept;
  /** Appends the given CodeableConcept to `dietPreference` and returns this object for chaining. */
  addDietPreference(codeableConcept: CodeableConcept): this;
  addDietPreference(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('dietPreference', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('dietPreference', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `dietPreference`. One is added when the list is empty. */
  getDietPreferenceFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getDietPreference()[0];
    return firstCodeableConcept === undefined ? this.addDietPreference() : firstCodeableConcept;
  }

  /** Special courtesies (VIP, board member) (0..*) Never undefined; an empty list is created when absent. */
  getSpecialCourtesy(): CodeableConcept[] {
    if (this.specialCourtesy === undefined) {
      this.specialCourtesy = [];
    }
    return this.specialCourtesy;
  }

  setSpecialCourtesy(specialCourtesy: CodeableConcept[] | undefined): this {
    return this.setFieldValue('specialCourtesy', specialCourtesy);
  }

  hasSpecialCourtesy(): boolean {
    return this.hasFieldValue('specialCourtesy');
  }

  /** Appends a new, empty CodeableConcept to `specialCourtesy` and returns it so it can be filled in. */
  addSpecialCourtesy(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialCourtesy` and returns this object for chaining. */
  addSpecialCourtesy(codeableConcept: CodeableConcept): this;
  addSpecialCourtesy(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialCourtesy', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialCourtesy', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialCourtesy`. One is added when the list is empty. */
  getSpecialCourtesyFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialCourtesy()[0];
    return firstCodeableConcept === undefined ? this.addSpecialCourtesy() : firstCodeableConcept;
  }

  /** Wheelchair, translator, stretcher, etc. (0..*) Never undefined; an empty list is created when absent. */
  getSpecialArrangement(): CodeableConcept[] {
    if (this.specialArrangement === undefined) {
      this.specialArrangement = [];
    }
    return this.specialArrangement;
  }

  setSpecialArrangement(specialArrangement: CodeableConcept[] | undefined): this {
    return this.setFieldValue('specialArrangement', specialArrangement);
  }

  hasSpecialArrangement(): boolean {
    return this.hasFieldValue('specialArrangement');
  }

  /** Appends a new, empty CodeableConcept to `specialArrangement` and returns it so it can be filled in. */
  addSpecialArrangement(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialArrangement` and returns this object for chaining. */
  addSpecialArrangement(codeableConcept: CodeableConcept): this;
  addSpecialArrangement(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialArrangement', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialArrangement', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialArrangement`. One is added when the list is empty. */
  getSpecialArrangementFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialArrangement()[0];
    return firstCodeableConcept === undefined ? this.addSpecialArrangement() : firstCodeableConcept;
  }

  /** Location to which the patient is discharged (0..1) Created when absent. */
  getDestination(): Reference {
    if (this.destination === undefined) {
      this.destination = new Reference();
    }
    return this.destination;
  }

  setDestination(destination: Reference | undefined): this {
    return this.setFieldValue('destination', destination);
  }

  hasDestination(): boolean {
    return this.hasFieldValue('destination');
  }

  /** Category or kind of location after discharge (0..1) Created when absent. */
  getDischargeDisposition(): CodeableConcept {
    if (this.dischargeDisposition === undefined) {
      this.dischargeDisposition = new CodeableConcept();
    }
    return this.dischargeDisposition;
  }

  setDischargeDisposition(dischargeDisposition: CodeableConcept | undefined): this {
    return this.setFieldValue('dischargeDisposition', dischargeDisposition);
  }

  hasDischargeDisposition(): boolean {
    return this.hasFieldValue('dischargeDisposition');
  }
}

modelTypeRegistry.register('EncounterHospitalization', EncounterHospitalization, false);

/**
 * List of locations where the patient has been
 */
export class EncounterLocation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'location',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'status',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.EncounterLocationStatus,
        },
      ],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** Location the encounter takes place (1..1) */
  location?: Reference;

  /** planned | active | reserved | completed (0..1) */
  status?: valueSetCodes.EncounterLocationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Time period during which the patient was present at the location (0..1) */
  period?: Period;

  override fhirType(): string {
    return 'Encounter.location';
  }

  /** FHIR JSON for this EncounterLocation, typed as the plain `EncounterLocation` data type. */
  override toJSON(): plainTypes.EncounterLocation {
    return this.serialize() as plainTypes.EncounterLocation;
  }

  /** Location the encounter takes place (1..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** planned | active | reserved | completed (0..1) */
  getStatus(): valueSetCodes.EncounterLocationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EncounterLocationStatus | undefined): this {
    return this.setFieldValue('status', status);
  }

  hasStatus(): boolean {
    return this.hasFieldValue('status');
  }

  /** The element carrying the id and extensions of `status`. Created when absent. */
  getStatusElement(): Element {
    if (this._status === undefined) {
      this._status = new Element();
    }
    return this._status;
  }

  setStatusElement(statusElement: Element | undefined): this {
    this._status = statusElement;
    return this;
  }

  /** Time period during which the patient was present at the location (0..1) Created when absent. */
  getPeriod(): Period {
    if (this.period === undefined) {
      this.period = new Period();
    }
    return this.period;
  }

  setPeriod(period: Period | undefined): this {
    return this.setFieldValue('period', period);
  }

  hasPeriod(): boolean {
    return this.hasFieldValue('period');
  }
}

modelTypeRegistry.register('EncounterLocation', EncounterLocation, false);
