/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 */
export class EpisodeOfCare extends DomainResource {
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
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EpisodeOfCareStatus },
      ],
    },
    {
      elementName: 'statusHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusHistory', typeCode: 'EpisodeOfCareStatusHistory' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'diagnosis',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'diagnosis', typeCode: 'EpisodeOfCareDiagnosis' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'managingOrganization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'managingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
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
    {
      elementName: 'referralRequest',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'referralRequest',
          typeCode: 'Reference',
          targetResourceTypes: ['ServiceRequest'],
        },
      ],
    },
    {
      elementName: 'careManager',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'careManager',
          typeCode: 'Reference',
          targetResourceTypes: ['Practitioner', 'PractitionerRole'],
        },
      ],
    },
    {
      elementName: 'team',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'team', typeCode: 'Reference', targetResourceTypes: ['CareTeam'] }],
    },
    {
      elementName: 'account',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'account', typeCode: 'Reference', targetResourceTypes: ['Account'] }],
    },
  ];

  readonly resourceType = 'EpisodeOfCare';

  /** Business Identifier(s) relevant for this EpisodeOfCare (0..*) */
  identifier?: Identifier[];

  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error (1..1) */
  status?: valueSetCodes.EpisodeOfCareStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Past list of status codes (the current status may be included to cover the start date of the status) (0..*) */
  statusHistory?: EpisodeOfCareStatusHistory[];

  /** Type/class - e.g. specialist referral, disease management (0..*) */
  type?: CodeableConcept[];

  /** The list of diagnosis relevant to this episode of care (0..*) */
  diagnosis?: EpisodeOfCareDiagnosis[];

  /** The patient who is the focus of this episode of care (1..1) */
  patient?: Reference;

  /** Organization that assumes care (0..1) */
  managingOrganization?: Reference;

  /** Interval during responsibility is assumed (0..1) */
  period?: Period;

  /** Originating Referral Request(s) (0..*) */
  referralRequest?: Reference[];

  /** Care manager/care coordinator for the patient (0..1) */
  careManager?: Reference;

  /** Other practitioners facilitating this episode of care (0..*) */
  team?: Reference[];

  /** The set of accounts that may be used for billing for this EpisodeOfCare (0..*) */
  account?: Reference[];

  override fhirType(): string {
    return 'EpisodeOfCare';
  }

  /** FHIR JSON for this EpisodeOfCare, typed as the plain `EpisodeOfCare` data type. */
  override toJSON(): plainTypes.EpisodeOfCare {
    return this.serialize() as plainTypes.EpisodeOfCare;
  }

  /** Business Identifier(s) relevant for this EpisodeOfCare (0..*) Never undefined; an empty list is created when absent. */
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

  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error (1..1) */
  getStatus(): valueSetCodes.EpisodeOfCareStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EpisodeOfCareStatus | undefined): this {
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

  /** Past list of status codes (the current status may be included to cover the start date of the status) (0..*) Never undefined; an empty list is created when absent. */
  getStatusHistory(): EpisodeOfCareStatusHistory[] {
    if (this.statusHistory === undefined) {
      this.statusHistory = [];
    }
    return this.statusHistory;
  }

  setStatusHistory(statusHistory: EpisodeOfCareStatusHistory[] | undefined): this {
    return this.setFieldValue('statusHistory', statusHistory);
  }

  hasStatusHistory(): boolean {
    return this.hasFieldValue('statusHistory');
  }

  /** Appends a new, empty EpisodeOfCareStatusHistory to `statusHistory` and returns it so it can be filled in. */
  addStatusHistory(): EpisodeOfCareStatusHistory;
  /** Appends the given EpisodeOfCareStatusHistory to `statusHistory` and returns this object for chaining. */
  addStatusHistory(episodeOfCareStatusHistory: EpisodeOfCareStatusHistory): this;
  addStatusHistory(
    episodeOfCareStatusHistory?: EpisodeOfCareStatusHistory
  ): EpisodeOfCareStatusHistory | this {
    if (episodeOfCareStatusHistory !== undefined) {
      return this.addFieldValue('statusHistory', episodeOfCareStatusHistory);
    }
    const createdEpisodeOfCareStatusHistory = new EpisodeOfCareStatusHistory();
    this.addFieldValue('statusHistory', createdEpisodeOfCareStatusHistory);
    return createdEpisodeOfCareStatusHistory;
  }

  /** The first EpisodeOfCareStatusHistory of `statusHistory`. One is added when the list is empty. */
  getStatusHistoryFirstRep(): EpisodeOfCareStatusHistory {
    const firstEpisodeOfCareStatusHistory = this.getStatusHistory()[0];
    return firstEpisodeOfCareStatusHistory === undefined
      ? this.addStatusHistory()
      : firstEpisodeOfCareStatusHistory;
  }

  /** Type/class - e.g. specialist referral, disease management (0..*) Never undefined; an empty list is created when absent. */
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

  /** The list of diagnosis relevant to this episode of care (0..*) Never undefined; an empty list is created when absent. */
  getDiagnosis(): EpisodeOfCareDiagnosis[] {
    if (this.diagnosis === undefined) {
      this.diagnosis = [];
    }
    return this.diagnosis;
  }

  setDiagnosis(diagnosis: EpisodeOfCareDiagnosis[] | undefined): this {
    return this.setFieldValue('diagnosis', diagnosis);
  }

  hasDiagnosis(): boolean {
    return this.hasFieldValue('diagnosis');
  }

  /** Appends a new, empty EpisodeOfCareDiagnosis to `diagnosis` and returns it so it can be filled in. */
  addDiagnosis(): EpisodeOfCareDiagnosis;
  /** Appends the given EpisodeOfCareDiagnosis to `diagnosis` and returns this object for chaining. */
  addDiagnosis(episodeOfCareDiagnosis: EpisodeOfCareDiagnosis): this;
  addDiagnosis(episodeOfCareDiagnosis?: EpisodeOfCareDiagnosis): EpisodeOfCareDiagnosis | this {
    if (episodeOfCareDiagnosis !== undefined) {
      return this.addFieldValue('diagnosis', episodeOfCareDiagnosis);
    }
    const createdEpisodeOfCareDiagnosis = new EpisodeOfCareDiagnosis();
    this.addFieldValue('diagnosis', createdEpisodeOfCareDiagnosis);
    return createdEpisodeOfCareDiagnosis;
  }

  /** The first EpisodeOfCareDiagnosis of `diagnosis`. One is added when the list is empty. */
  getDiagnosisFirstRep(): EpisodeOfCareDiagnosis {
    const firstEpisodeOfCareDiagnosis = this.getDiagnosis()[0];
    return firstEpisodeOfCareDiagnosis === undefined
      ? this.addDiagnosis()
      : firstEpisodeOfCareDiagnosis;
  }

  /** The patient who is the focus of this episode of care (1..1) Created when absent. */
  getPatient(): Reference {
    if (this.patient === undefined) {
      this.patient = new Reference();
    }
    return this.patient;
  }

  setPatient(patient: Reference | undefined): this {
    return this.setFieldValue('patient', patient);
  }

  hasPatient(): boolean {
    return this.hasFieldValue('patient');
  }

  /** Organization that assumes care (0..1) Created when absent. */
  getManagingOrganization(): Reference {
    if (this.managingOrganization === undefined) {
      this.managingOrganization = new Reference();
    }
    return this.managingOrganization;
  }

  setManagingOrganization(managingOrganization: Reference | undefined): this {
    return this.setFieldValue('managingOrganization', managingOrganization);
  }

  hasManagingOrganization(): boolean {
    return this.hasFieldValue('managingOrganization');
  }

  /** Interval during responsibility is assumed (0..1) Created when absent. */
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

  /** Originating Referral Request(s) (0..*) Never undefined; an empty list is created when absent. */
  getReferralRequest(): Reference[] {
    if (this.referralRequest === undefined) {
      this.referralRequest = [];
    }
    return this.referralRequest;
  }

  setReferralRequest(referralRequest: Reference[] | undefined): this {
    return this.setFieldValue('referralRequest', referralRequest);
  }

  hasReferralRequest(): boolean {
    return this.hasFieldValue('referralRequest');
  }

  /** Appends a new, empty Reference to `referralRequest` and returns it so it can be filled in. */
  addReferralRequest(): Reference;
  /** Appends the given Reference to `referralRequest` and returns this object for chaining. */
  addReferralRequest(reference: Reference): this;
  addReferralRequest(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('referralRequest', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('referralRequest', createdReference);
    return createdReference;
  }

  /** The first Reference of `referralRequest`. One is added when the list is empty. */
  getReferralRequestFirstRep(): Reference {
    const firstReference = this.getReferralRequest()[0];
    return firstReference === undefined ? this.addReferralRequest() : firstReference;
  }

  /** Care manager/care coordinator for the patient (0..1) Created when absent. */
  getCareManager(): Reference {
    if (this.careManager === undefined) {
      this.careManager = new Reference();
    }
    return this.careManager;
  }

  setCareManager(careManager: Reference | undefined): this {
    return this.setFieldValue('careManager', careManager);
  }

  hasCareManager(): boolean {
    return this.hasFieldValue('careManager');
  }

  /** Other practitioners facilitating this episode of care (0..*) Never undefined; an empty list is created when absent. */
  getTeam(): Reference[] {
    if (this.team === undefined) {
      this.team = [];
    }
    return this.team;
  }

  setTeam(team: Reference[] | undefined): this {
    return this.setFieldValue('team', team);
  }

  hasTeam(): boolean {
    return this.hasFieldValue('team');
  }

  /** Appends a new, empty Reference to `team` and returns it so it can be filled in. */
  addTeam(): Reference;
  /** Appends the given Reference to `team` and returns this object for chaining. */
  addTeam(reference: Reference): this;
  addTeam(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('team', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('team', createdReference);
    return createdReference;
  }

  /** The first Reference of `team`. One is added when the list is empty. */
  getTeamFirstRep(): Reference {
    const firstReference = this.getTeam()[0];
    return firstReference === undefined ? this.addTeam() : firstReference;
  }

  /** The set of accounts that may be used for billing for this EpisodeOfCare (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('EpisodeOfCare', EpisodeOfCare, true);

/** True when the value is a EpisodeOfCare model instance. */
export function isEpisodeOfCare(candidate: unknown): candidate is EpisodeOfCare {
  return candidate instanceof EpisodeOfCare;
}

/**
 * Past list of status codes (the current status may be included to cover the start date of the status)
 */
export class EpisodeOfCareStatusHistory extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EpisodeOfCareStatus },
      ],
    },
    {
      elementName: 'period',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
  ];

  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error (1..1) */
  status?: valueSetCodes.EpisodeOfCareStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Duration the EpisodeOfCare was in the specified status (1..1) */
  period?: Period;

  override fhirType(): string {
    return 'EpisodeOfCare.statusHistory';
  }

  /** FHIR JSON for this EpisodeOfCareStatusHistory, typed as the plain `EpisodeOfCareStatusHistory` data type. */
  override toJSON(): plainTypes.EpisodeOfCareStatusHistory {
    return this.serialize() as plainTypes.EpisodeOfCareStatusHistory;
  }

  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error (1..1) */
  getStatus(): valueSetCodes.EpisodeOfCareStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EpisodeOfCareStatus | undefined): this {
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

  /** Duration the EpisodeOfCare was in the specified status (1..1) Created when absent. */
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

modelTypeRegistry.register('EpisodeOfCareStatusHistory', EpisodeOfCareStatusHistory, false);

/**
 * The list of diagnosis relevant to this episode of care
 */
export class EpisodeOfCareDiagnosis extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'condition',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'condition', typeCode: 'Reference', targetResourceTypes: ['Condition'] }],
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

  /** Conditions/problems/diagnoses this episode of care is for (1..1) */
  condition?: Reference;

  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) (0..1) */
  role?: CodeableConcept;

  /** Ranking of the diagnosis (for each role type) (0..1) */
  rank?: number;
  /** Id and extensions of the primitive `rank`. */
  _rank?: Element;

  override fhirType(): string {
    return 'EpisodeOfCare.diagnosis';
  }

  /** FHIR JSON for this EpisodeOfCareDiagnosis, typed as the plain `EpisodeOfCareDiagnosis` data type. */
  override toJSON(): plainTypes.EpisodeOfCareDiagnosis {
    return this.serialize() as plainTypes.EpisodeOfCareDiagnosis;
  }

  /** Conditions/problems/diagnoses this episode of care is for (1..1) Created when absent. */
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

  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) (0..1) Created when absent. */
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

modelTypeRegistry.register('EpisodeOfCareDiagnosis', EpisodeOfCareDiagnosis, false);
