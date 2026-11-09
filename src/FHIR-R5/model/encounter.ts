/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { VirtualServiceDetail } from './virtualServiceDetail';

/**
 * An interaction between healthcare provider(s), and/or patient(s) for the purpose of providing healthcare service(s) or assessing the health status of patient(s).
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
      elementName: 'class',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'class', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'priority',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'priority', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviceType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceType', typeCode: 'CodeableReference' }],
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
      elementName: 'subjectStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subjectStatus', typeCode: 'CodeableConcept' }],
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
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: ['CarePlan', 'DeviceRequest', 'MedicationRequest', 'ServiceRequest'],
        },
      ],
    },
    {
      elementName: 'careTeam',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'careTeam', typeCode: 'Reference', targetResourceTypes: ['CareTeam'] }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'partOf', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
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
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'EncounterParticipant' }],
    },
    {
      elementName: 'appointment',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'appointment', typeCode: 'Reference', targetResourceTypes: ['Appointment'] },
      ],
    },
    {
      elementName: 'virtualService',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'virtualService', typeCode: 'VirtualServiceDetail' }],
    },
    {
      elementName: 'actualPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actualPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'plannedStartDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'plannedStartDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'plannedEndDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'plannedEndDate', typeCode: 'dateTime' }],
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
      types: [{ jsonKey: 'reason', typeCode: 'EncounterReason' }],
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
      elementName: 'dietPreference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dietPreference', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialArrangement',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialArrangement', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialCourtesy',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialCourtesy', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'admission',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'admission', typeCode: 'EncounterAdmission' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'location', typeCode: 'EncounterLocation' }],
    },
  ];

  readonly resourceType = 'Encounter';

  /** Identifier(s) by which this encounter is known (0..*) */
  identifier?: Identifier[];

  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.EncounterStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Classification of patient encounter context - e.g. Inpatient, outpatient (0..*) */
  class?: CodeableConcept[];

  /** Indicates the urgency of the encounter (0..1) */
  priority?: CodeableConcept;

  /** Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...) (0..*) */
  type?: CodeableConcept[];

  /** Specific type of service (0..*) */
  serviceType?: CodeableReference[];

  /** The patient or group related to this encounter (0..1) */
  subject?: Reference;

  /** The current status of the subject in relation to the Encounter (0..1) */
  subjectStatus?: CodeableConcept;

  /** Episode(s) of care that this encounter should be recorded against (0..*) */
  episodeOfCare?: Reference[];

  /** The request that initiated this encounter (0..*) */
  basedOn?: Reference[];

  /** The group(s) that are allocated to participate in this encounter (0..*) */
  careTeam?: Reference[];

  /** Another Encounter this encounter is part of (0..1) */
  partOf?: Reference;

  /** The organization (facility) responsible for this encounter (0..1) */
  serviceProvider?: Reference;

  /** List of participants involved in the encounter (0..*) */
  participant?: EncounterParticipant[];

  /** The appointment that scheduled this encounter (0..*) */
  appointment?: Reference[];

  /** Connection details of a virtual service (e.g. conference call) (0..*) */
  virtualService?: VirtualServiceDetail[];

  /** The actual start and end time of the encounter (0..1) */
  actualPeriod?: Period;

  /** The planned start date/time (or admission date) of the encounter (0..1) */
  plannedStartDate?: string;
  /** Id and extensions of the primitive `plannedStartDate`. */
  _plannedStartDate?: Element;

  /** The planned end date/time (or discharge date) of the encounter (0..1) */
  plannedEndDate?: string;
  /** Id and extensions of the primitive `plannedEndDate`. */
  _plannedEndDate?: Element;

  /** Actual quantity of time the encounter lasted (less time absent) (0..1) */
  length?: Duration;

  /** The list of medical reasons that are expected to be addressed during the episode of care (0..*) */
  reason?: EncounterReason[];

  /** The list of diagnosis relevant to this encounter (0..*) */
  diagnosis?: EncounterDiagnosis[];

  /** The set of accounts that may be used for billing for this Encounter (0..*) */
  account?: Reference[];

  /** Diet preferences reported by the patient (0..*) */
  dietPreference?: CodeableConcept[];

  /** Wheelchair, translator, stretcher, etc (0..*) */
  specialArrangement?: CodeableConcept[];

  /** Special courtesies (VIP, board member) (0..*) */
  specialCourtesy?: CodeableConcept[];

  /** Details about the admission to a healthcare service (0..1) */
  admission?: EncounterAdmission;

  /** List of locations where the patient has been (0..*) */
  location?: EncounterLocation[];

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

  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown (1..1) */
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

  /** Classification of patient encounter context - e.g. Inpatient, outpatient (0..*) Never undefined; an empty list is created when absent. */
  getClass(): CodeableConcept[] {
    if (this.class === undefined) {
      this.class = [];
    }
    return this.class;
  }

  setClass(classValue: CodeableConcept[] | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** Appends a new, empty CodeableConcept to `class` and returns it so it can be filled in. */
  addClass(): CodeableConcept;
  /** Appends the given CodeableConcept to `class` and returns this object for chaining. */
  addClass(codeableConcept: CodeableConcept): this;
  addClass(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('class', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('class', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `class`. One is added when the list is empty. */
  getClassFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getClass()[0];
    return firstCodeableConcept === undefined ? this.addClass() : firstCodeableConcept;
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

  /** Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Specific type of service (0..*) Never undefined; an empty list is created when absent. */
  getServiceType(): CodeableReference[] {
    if (this.serviceType === undefined) {
      this.serviceType = [];
    }
    return this.serviceType;
  }

  setServiceType(serviceType: CodeableReference[] | undefined): this {
    return this.setFieldValue('serviceType', serviceType);
  }

  hasServiceType(): boolean {
    return this.hasFieldValue('serviceType');
  }

  /** Appends a new, empty CodeableReference to `serviceType` and returns it so it can be filled in. */
  addServiceType(): CodeableReference;
  /** Appends the given CodeableReference to `serviceType` and returns this object for chaining. */
  addServiceType(codeableReference: CodeableReference): this;
  addServiceType(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('serviceType', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('serviceType', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `serviceType`. One is added when the list is empty. */
  getServiceTypeFirstRep(): CodeableReference {
    const firstCodeableReference = this.getServiceType()[0];
    return firstCodeableReference === undefined ? this.addServiceType() : firstCodeableReference;
  }

  /** The patient or group related to this encounter (0..1) Created when absent. */
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

  /** The current status of the subject in relation to the Encounter (0..1) Created when absent. */
  getSubjectStatus(): CodeableConcept {
    if (this.subjectStatus === undefined) {
      this.subjectStatus = new CodeableConcept();
    }
    return this.subjectStatus;
  }

  setSubjectStatus(subjectStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectStatus', subjectStatus);
  }

  hasSubjectStatus(): boolean {
    return this.hasFieldValue('subjectStatus');
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

  /** The request that initiated this encounter (0..*) Never undefined; an empty list is created when absent. */
  getBasedOn(): Reference[] {
    if (this.basedOn === undefined) {
      this.basedOn = [];
    }
    return this.basedOn;
  }

  setBasedOn(basedOn: Reference[] | undefined): this {
    return this.setFieldValue('basedOn', basedOn);
  }

  hasBasedOn(): boolean {
    return this.hasFieldValue('basedOn');
  }

  /** Appends a new, empty Reference to `basedOn` and returns it so it can be filled in. */
  addBasedOn(): Reference;
  /** Appends the given Reference to `basedOn` and returns this object for chaining. */
  addBasedOn(reference: Reference): this;
  addBasedOn(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('basedOn', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('basedOn', createdReference);
    return createdReference;
  }

  /** The first Reference of `basedOn`. One is added when the list is empty. */
  getBasedOnFirstRep(): Reference {
    const firstReference = this.getBasedOn()[0];
    return firstReference === undefined ? this.addBasedOn() : firstReference;
  }

  /** The group(s) that are allocated to participate in this encounter (0..*) Never undefined; an empty list is created when absent. */
  getCareTeam(): Reference[] {
    if (this.careTeam === undefined) {
      this.careTeam = [];
    }
    return this.careTeam;
  }

  setCareTeam(careTeam: Reference[] | undefined): this {
    return this.setFieldValue('careTeam', careTeam);
  }

  hasCareTeam(): boolean {
    return this.hasFieldValue('careTeam');
  }

  /** Appends a new, empty Reference to `careTeam` and returns it so it can be filled in. */
  addCareTeam(): Reference;
  /** Appends the given Reference to `careTeam` and returns this object for chaining. */
  addCareTeam(reference: Reference): this;
  addCareTeam(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('careTeam', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('careTeam', createdReference);
    return createdReference;
  }

  /** The first Reference of `careTeam`. One is added when the list is empty. */
  getCareTeamFirstRep(): Reference {
    const firstReference = this.getCareTeam()[0];
    return firstReference === undefined ? this.addCareTeam() : firstReference;
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

  /** The organization (facility) responsible for this encounter (0..1) Created when absent. */
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

  /** The appointment that scheduled this encounter (0..*) Never undefined; an empty list is created when absent. */
  getAppointment(): Reference[] {
    if (this.appointment === undefined) {
      this.appointment = [];
    }
    return this.appointment;
  }

  setAppointment(appointment: Reference[] | undefined): this {
    return this.setFieldValue('appointment', appointment);
  }

  hasAppointment(): boolean {
    return this.hasFieldValue('appointment');
  }

  /** Appends a new, empty Reference to `appointment` and returns it so it can be filled in. */
  addAppointment(): Reference;
  /** Appends the given Reference to `appointment` and returns this object for chaining. */
  addAppointment(reference: Reference): this;
  addAppointment(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('appointment', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('appointment', createdReference);
    return createdReference;
  }

  /** The first Reference of `appointment`. One is added when the list is empty. */
  getAppointmentFirstRep(): Reference {
    const firstReference = this.getAppointment()[0];
    return firstReference === undefined ? this.addAppointment() : firstReference;
  }

  /** Connection details of a virtual service (e.g. conference call) (0..*) Never undefined; an empty list is created when absent. */
  getVirtualService(): VirtualServiceDetail[] {
    if (this.virtualService === undefined) {
      this.virtualService = [];
    }
    return this.virtualService;
  }

  setVirtualService(virtualService: VirtualServiceDetail[] | undefined): this {
    return this.setFieldValue('virtualService', virtualService);
  }

  hasVirtualService(): boolean {
    return this.hasFieldValue('virtualService');
  }

  /** Appends a new, empty VirtualServiceDetail to `virtualService` and returns it so it can be filled in. */
  addVirtualService(): VirtualServiceDetail;
  /** Appends the given VirtualServiceDetail to `virtualService` and returns this object for chaining. */
  addVirtualService(virtualServiceDetail: VirtualServiceDetail): this;
  addVirtualService(virtualServiceDetail?: VirtualServiceDetail): VirtualServiceDetail | this {
    if (virtualServiceDetail !== undefined) {
      return this.addFieldValue('virtualService', virtualServiceDetail);
    }
    const createdVirtualServiceDetail = new VirtualServiceDetail();
    this.addFieldValue('virtualService', createdVirtualServiceDetail);
    return createdVirtualServiceDetail;
  }

  /** The first VirtualServiceDetail of `virtualService`. One is added when the list is empty. */
  getVirtualServiceFirstRep(): VirtualServiceDetail {
    const firstVirtualServiceDetail = this.getVirtualService()[0];
    return firstVirtualServiceDetail === undefined
      ? this.addVirtualService()
      : firstVirtualServiceDetail;
  }

  /** The actual start and end time of the encounter (0..1) Created when absent. */
  getActualPeriod(): Period {
    if (this.actualPeriod === undefined) {
      this.actualPeriod = new Period();
    }
    return this.actualPeriod;
  }

  setActualPeriod(actualPeriod: Period | undefined): this {
    return this.setFieldValue('actualPeriod', actualPeriod);
  }

  hasActualPeriod(): boolean {
    return this.hasFieldValue('actualPeriod');
  }

  /** The planned start date/time (or admission date) of the encounter (0..1) */
  getPlannedStartDate(): string | undefined {
    return this.plannedStartDate;
  }

  /** Sets `plannedStartDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPlannedStartDate(plannedStartDate: string | undefined): this {
    return this.setFieldValue('plannedStartDate', plannedStartDate);
  }

  hasPlannedStartDate(): boolean {
    return this.hasFieldValue('plannedStartDate');
  }

  /** The element carrying the id and extensions of `plannedStartDate`. Created when absent. */
  getPlannedStartDateElement(): Element {
    if (this._plannedStartDate === undefined) {
      this._plannedStartDate = new Element();
    }
    return this._plannedStartDate;
  }

  setPlannedStartDateElement(plannedStartDateElement: Element | undefined): this {
    this._plannedStartDate = plannedStartDateElement;
    return this;
  }

  /** The planned end date/time (or discharge date) of the encounter (0..1) */
  getPlannedEndDate(): string | undefined {
    return this.plannedEndDate;
  }

  /** Sets `plannedEndDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPlannedEndDate(plannedEndDate: string | undefined): this {
    return this.setFieldValue('plannedEndDate', plannedEndDate);
  }

  hasPlannedEndDate(): boolean {
    return this.hasFieldValue('plannedEndDate');
  }

  /** The element carrying the id and extensions of `plannedEndDate`. Created when absent. */
  getPlannedEndDateElement(): Element {
    if (this._plannedEndDate === undefined) {
      this._plannedEndDate = new Element();
    }
    return this._plannedEndDate;
  }

  setPlannedEndDateElement(plannedEndDateElement: Element | undefined): this {
    this._plannedEndDate = plannedEndDateElement;
    return this;
  }

  /** Actual quantity of time the encounter lasted (less time absent) (0..1) Created when absent. */
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

  /** The list of medical reasons that are expected to be addressed during the episode of care (0..*) Never undefined; an empty list is created when absent. */
  getReason(): EncounterReason[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: EncounterReason[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty EncounterReason to `reason` and returns it so it can be filled in. */
  addReason(): EncounterReason;
  /** Appends the given EncounterReason to `reason` and returns this object for chaining. */
  addReason(encounterReason: EncounterReason): this;
  addReason(encounterReason?: EncounterReason): EncounterReason | this {
    if (encounterReason !== undefined) {
      return this.addFieldValue('reason', encounterReason);
    }
    const createdEncounterReason = new EncounterReason();
    this.addFieldValue('reason', createdEncounterReason);
    return createdEncounterReason;
  }

  /** The first EncounterReason of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): EncounterReason {
    const firstEncounterReason = this.getReason()[0];
    return firstEncounterReason === undefined ? this.addReason() : firstEncounterReason;
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

  /** Wheelchair, translator, stretcher, etc (0..*) Never undefined; an empty list is created when absent. */
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

  /** Details about the admission to a healthcare service (0..1) Created when absent. */
  getAdmission(): EncounterAdmission {
    if (this.admission === undefined) {
      this.admission = new EncounterAdmission();
    }
    return this.admission;
  }

  setAdmission(admission: EncounterAdmission | undefined): this {
    return this.setFieldValue('admission', admission);
  }

  hasAdmission(): boolean {
    return this.hasFieldValue('admission');
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
}

modelTypeRegistry.register('Encounter', Encounter, true);

/** True when the value is a Encounter model instance. */
export function isEncounter(candidate: unknown): candidate is Encounter {
  return candidate instanceof Encounter;
}

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
      elementName: 'actor',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Device',
            'Group',
            'HealthcareService',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** Role of participant in encounter (0..*) */
  type?: CodeableConcept[];

  /** Period of time during the encounter that the participant participated (0..1) */
  period?: Period;

  /** The individual, device, or service participating in the encounter (0..1) */
  actor?: Reference;

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

  /** The individual, device, or service participating in the encounter (0..1) Created when absent. */
  getActor(): Reference {
    if (this.actor === undefined) {
      this.actor = new Reference();
    }
    return this.actor;
  }

  setActor(actor: Reference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
  }
}

modelTypeRegistry.register('EncounterParticipant', EncounterParticipant, false);

/**
 * The list of medical reasons that are expected to be addressed during the episode of care
 */
export class EncounterReason extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'use',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'use', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'value',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'value', typeCode: 'CodeableReference' }],
    },
  ];

  /** What the reason value should be used for/as (0..*) */
  use?: CodeableConcept[];

  /** Reason the encounter takes place (core or reference) (0..*) */
  value?: CodeableReference[];

  override fhirType(): string {
    return 'Encounter.reason';
  }

  /** FHIR JSON for this EncounterReason, typed as the plain `EncounterReason` data type. */
  override toJSON(): plainTypes.EncounterReason {
    return this.serialize() as plainTypes.EncounterReason;
  }

  /** What the reason value should be used for/as (0..*) Never undefined; an empty list is created when absent. */
  getUse(): CodeableConcept[] {
    if (this.use === undefined) {
      this.use = [];
    }
    return this.use;
  }

  setUse(use: CodeableConcept[] | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** Appends a new, empty CodeableConcept to `use` and returns it so it can be filled in. */
  addUse(): CodeableConcept;
  /** Appends the given CodeableConcept to `use` and returns this object for chaining. */
  addUse(codeableConcept: CodeableConcept): this;
  addUse(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('use', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('use', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `use`. One is added when the list is empty. */
  getUseFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getUse()[0];
    return firstCodeableConcept === undefined ? this.addUse() : firstCodeableConcept;
  }

  /** Reason the encounter takes place (core or reference) (0..*) Never undefined; an empty list is created when absent. */
  getValue(): CodeableReference[] {
    if (this.value === undefined) {
      this.value = [];
    }
    return this.value;
  }

  setValue(value: CodeableReference[] | undefined): this {
    return this.setFieldValue('value', value);
  }

  hasValue(): boolean {
    return this.hasFieldValue('value');
  }

  /** Appends a new, empty CodeableReference to `value` and returns it so it can be filled in. */
  addValue(): CodeableReference;
  /** Appends the given CodeableReference to `value` and returns this object for chaining. */
  addValue(codeableReference: CodeableReference): this;
  addValue(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('value', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('value', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `value`. One is added when the list is empty. */
  getValueFirstRep(): CodeableReference {
    const firstCodeableReference = this.getValue()[0];
    return firstCodeableReference === undefined ? this.addValue() : firstCodeableReference;
  }
}

modelTypeRegistry.register('EncounterReason', EncounterReason, false);

/**
 * The list of diagnosis relevant to this encounter
 */
export class EncounterDiagnosis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'condition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'condition', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'use',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'use', typeCode: 'CodeableConcept' }],
    },
  ];

  /** The diagnosis relevant to the encounter (0..*) */
  condition?: CodeableReference[];

  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) (0..*) */
  use?: CodeableConcept[];

  override fhirType(): string {
    return 'Encounter.diagnosis';
  }

  /** FHIR JSON for this EncounterDiagnosis, typed as the plain `EncounterDiagnosis` data type. */
  override toJSON(): plainTypes.EncounterDiagnosis {
    return this.serialize() as plainTypes.EncounterDiagnosis;
  }

  /** The diagnosis relevant to the encounter (0..*) Never undefined; an empty list is created when absent. */
  getCondition(): CodeableReference[] {
    if (this.condition === undefined) {
      this.condition = [];
    }
    return this.condition;
  }

  setCondition(condition: CodeableReference[] | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Appends a new, empty CodeableReference to `condition` and returns it so it can be filled in. */
  addCondition(): CodeableReference;
  /** Appends the given CodeableReference to `condition` and returns this object for chaining. */
  addCondition(codeableReference: CodeableReference): this;
  addCondition(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('condition', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('condition', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `condition`. One is added when the list is empty. */
  getConditionFirstRep(): CodeableReference {
    const firstCodeableReference = this.getCondition()[0];
    return firstCodeableReference === undefined ? this.addCondition() : firstCodeableReference;
  }

  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) (0..*) Never undefined; an empty list is created when absent. */
  getUse(): CodeableConcept[] {
    if (this.use === undefined) {
      this.use = [];
    }
    return this.use;
  }

  setUse(use: CodeableConcept[] | undefined): this {
    return this.setFieldValue('use', use);
  }

  hasUse(): boolean {
    return this.hasFieldValue('use');
  }

  /** Appends a new, empty CodeableConcept to `use` and returns it so it can be filled in. */
  addUse(): CodeableConcept;
  /** Appends the given CodeableConcept to `use` and returns this object for chaining. */
  addUse(codeableConcept: CodeableConcept): this;
  addUse(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('use', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('use', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `use`. One is added when the list is empty. */
  getUseFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getUse()[0];
    return firstCodeableConcept === undefined ? this.addUse() : firstCodeableConcept;
  }
}

modelTypeRegistry.register('EncounterDiagnosis', EncounterDiagnosis, false);

/**
 * Details about the admission to a healthcare service
 */
export class EncounterAdmission extends BackboneElement {
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
      types: [
        {
          jsonKey: 'origin',
          typeCode: 'Reference',
          targetResourceTypes: ['Location', 'Organization'],
        },
      ],
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
      elementName: 'destination',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'destination',
          typeCode: 'Reference',
          targetResourceTypes: ['Location', 'Organization'],
        },
      ],
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

  /** The location/organization from which the patient came before admission (0..1) */
  origin?: Reference;

  /** From where patient was admitted (physician referral, transfer) (0..1) */
  admitSource?: CodeableConcept;

  /** Indicates that the patient is being re-admitted (0..1) */
  reAdmission?: CodeableConcept;

  /** Location/organization to which the patient is discharged (0..1) */
  destination?: Reference;

  /** Category or kind of location after discharge (0..1) */
  dischargeDisposition?: CodeableConcept;

  override fhirType(): string {
    return 'Encounter.admission';
  }

  /** FHIR JSON for this EncounterAdmission, typed as the plain `EncounterAdmission` data type. */
  override toJSON(): plainTypes.EncounterAdmission {
    return this.serialize() as plainTypes.EncounterAdmission;
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

  /** The location/organization from which the patient came before admission (0..1) Created when absent. */
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

  /** Indicates that the patient is being re-admitted (0..1) Created when absent. */
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

  /** Location/organization to which the patient is discharged (0..1) Created when absent. */
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

modelTypeRegistry.register('EncounterAdmission', EncounterAdmission, false);

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
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'CodeableConcept' }],
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

  /** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.) (0..1) */
  form?: CodeableConcept;

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

  /** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.) (0..1) Created when absent. */
  getForm(): CodeableConcept {
    if (this.form === undefined) {
      this.form = new CodeableConcept();
    }
    return this.form;
  }

  setForm(form: CodeableConcept | undefined): this {
    return this.setFieldValue('form', form);
  }

  hasForm(): boolean {
    return this.hasFieldValue('form');
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
