/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care.
 */
export class CareTeam extends DomainResource {
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
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.CareTeamStatus }],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
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
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'CareTeamParticipant' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'managingOrganization',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'managingOrganization',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization'],
        },
      ],
    },
    {
      elementName: 'telecom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'telecom', typeCode: 'ContactPoint' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'CareTeam';

  /** External Ids for this team (0..*) */
  identifier?: Identifier[];

  /** proposed | active | suspended | inactive | entered-in-error (0..1) */
  status?: valueSetCodes.CareTeamStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Type of team (0..*) */
  category?: CodeableConcept[];

  /** Name of the team, such as crisis assessment team (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Who care team is for (0..1) */
  subject?: Reference;

  /** Time period team covers (0..1) */
  period?: Period;

  /** Members of the team (0..*) */
  participant?: CareTeamParticipant[];

  /** Why the care team exists (0..*) */
  reason?: CodeableReference[];

  /** Organization responsible for the care team (0..*) */
  managingOrganization?: Reference[];

  /** A contact detail for the care team (that applies to all members) (0..*) */
  telecom?: ContactPoint[];

  /** Comments made about the CareTeam (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'CareTeam';
  }

  /** FHIR JSON for this CareTeam, typed as the plain `CareTeam` data type. */
  override toJSON(): plainTypes.CareTeam {
    return this.serialize() as plainTypes.CareTeam;
  }

  /** External Ids for this team (0..*) Never undefined; an empty list is created when absent. */
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

  /** proposed | active | suspended | inactive | entered-in-error (0..1) */
  getStatus(): valueSetCodes.CareTeamStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.CareTeamStatus | undefined): this {
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

  /** Type of team (0..*) Never undefined; an empty list is created when absent. */
  getCategory(): CodeableConcept[] {
    if (this.category === undefined) {
      this.category = [];
    }
    return this.category;
  }

  setCategory(category: CodeableConcept[] | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** Appends a new, empty CodeableConcept to `category` and returns it so it can be filled in. */
  addCategory(): CodeableConcept;
  /** Appends the given CodeableConcept to `category` and returns this object for chaining. */
  addCategory(codeableConcept: CodeableConcept): this;
  addCategory(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('category', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('category', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `category`. One is added when the list is empty. */
  getCategoryFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCategory()[0];
    return firstCodeableConcept === undefined ? this.addCategory() : firstCodeableConcept;
  }

  /** Name of the team, such as crisis assessment team (0..1) */
  getName(): string | undefined {
    return this.name;
  }

  /** Sets `name`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setName(name: string | undefined): this {
    return this.setFieldValue('name', name);
  }

  hasName(): boolean {
    return this.hasFieldValue('name');
  }

  /** The element carrying the id and extensions of `name`. Created when absent. */
  getNameElement(): Element {
    if (this._name === undefined) {
      this._name = new Element();
    }
    return this._name;
  }

  setNameElement(nameElement: Element | undefined): this {
    this._name = nameElement;
    return this;
  }

  /** Who care team is for (0..1) Created when absent. */
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

  /** Time period team covers (0..1) Created when absent. */
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

  /** Members of the team (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): CareTeamParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: CareTeamParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty CareTeamParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): CareTeamParticipant;
  /** Appends the given CareTeamParticipant to `participant` and returns this object for chaining. */
  addParticipant(careTeamParticipant: CareTeamParticipant): this;
  addParticipant(careTeamParticipant?: CareTeamParticipant): CareTeamParticipant | this {
    if (careTeamParticipant !== undefined) {
      return this.addFieldValue('participant', careTeamParticipant);
    }
    const createdCareTeamParticipant = new CareTeamParticipant();
    this.addFieldValue('participant', createdCareTeamParticipant);
    return createdCareTeamParticipant;
  }

  /** The first CareTeamParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): CareTeamParticipant {
    const firstCareTeamParticipant = this.getParticipant()[0];
    return firstCareTeamParticipant === undefined
      ? this.addParticipant()
      : firstCareTeamParticipant;
  }

  /** Why the care team exists (0..*) Never undefined; an empty list is created when absent. */
  getReason(): CodeableReference[] {
    if (this.reason === undefined) {
      this.reason = [];
    }
    return this.reason;
  }

  setReason(reason: CodeableReference[] | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }

  /** Appends a new, empty CodeableReference to `reason` and returns it so it can be filled in. */
  addReason(): CodeableReference;
  /** Appends the given CodeableReference to `reason` and returns this object for chaining. */
  addReason(codeableReference: CodeableReference): this;
  addReason(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('reason', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('reason', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `reason`. One is added when the list is empty. */
  getReasonFirstRep(): CodeableReference {
    const firstCodeableReference = this.getReason()[0];
    return firstCodeableReference === undefined ? this.addReason() : firstCodeableReference;
  }

  /** Organization responsible for the care team (0..*) Never undefined; an empty list is created when absent. */
  getManagingOrganization(): Reference[] {
    if (this.managingOrganization === undefined) {
      this.managingOrganization = [];
    }
    return this.managingOrganization;
  }

  setManagingOrganization(managingOrganization: Reference[] | undefined): this {
    return this.setFieldValue('managingOrganization', managingOrganization);
  }

  hasManagingOrganization(): boolean {
    return this.hasFieldValue('managingOrganization');
  }

  /** Appends a new, empty Reference to `managingOrganization` and returns it so it can be filled in. */
  addManagingOrganization(): Reference;
  /** Appends the given Reference to `managingOrganization` and returns this object for chaining. */
  addManagingOrganization(reference: Reference): this;
  addManagingOrganization(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('managingOrganization', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('managingOrganization', createdReference);
    return createdReference;
  }

  /** The first Reference of `managingOrganization`. One is added when the list is empty. */
  getManagingOrganizationFirstRep(): Reference {
    const firstReference = this.getManagingOrganization()[0];
    return firstReference === undefined ? this.addManagingOrganization() : firstReference;
  }

  /** A contact detail for the care team (that applies to all members) (0..*) Never undefined; an empty list is created when absent. */
  getTelecom(): ContactPoint[] {
    if (this.telecom === undefined) {
      this.telecom = [];
    }
    return this.telecom;
  }

  setTelecom(telecom: ContactPoint[] | undefined): this {
    return this.setFieldValue('telecom', telecom);
  }

  hasTelecom(): boolean {
    return this.hasFieldValue('telecom');
  }

  /** Appends a new, empty ContactPoint to `telecom` and returns it so it can be filled in. */
  addTelecom(): ContactPoint;
  /** Appends the given ContactPoint to `telecom` and returns this object for chaining. */
  addTelecom(contactPoint: ContactPoint): this;
  addTelecom(contactPoint?: ContactPoint): ContactPoint | this {
    if (contactPoint !== undefined) {
      return this.addFieldValue('telecom', contactPoint);
    }
    const createdContactPoint = new ContactPoint();
    this.addFieldValue('telecom', createdContactPoint);
    return createdContactPoint;
  }

  /** The first ContactPoint of `telecom`. One is added when the list is empty. */
  getTelecomFirstRep(): ContactPoint {
    const firstContactPoint = this.getTelecom()[0];
    return firstContactPoint === undefined ? this.addTelecom() : firstContactPoint;
  }

  /** Comments made about the CareTeam (0..*) Never undefined; an empty list is created when absent. */
  getNote(): Annotation[] {
    if (this.note === undefined) {
      this.note = [];
    }
    return this.note;
  }

  setNote(note: Annotation[] | undefined): this {
    return this.setFieldValue('note', note);
  }

  hasNote(): boolean {
    return this.hasFieldValue('note');
  }

  /** Appends a new, empty Annotation to `note` and returns it so it can be filled in. */
  addNote(): Annotation;
  /** Appends the given Annotation to `note` and returns this object for chaining. */
  addNote(annotation: Annotation): this;
  addNote(annotation?: Annotation): Annotation | this {
    if (annotation !== undefined) {
      return this.addFieldValue('note', annotation);
    }
    const createdAnnotation = new Annotation();
    this.addFieldValue('note', createdAnnotation);
    return createdAnnotation;
  }

  /** The first Annotation of `note`. One is added when the list is empty. */
  getNoteFirstRep(): Annotation {
    const firstAnnotation = this.getNote()[0];
    return firstAnnotation === undefined ? this.addNote() : firstAnnotation;
  }
}

modelTypeRegistry.register('CareTeam', CareTeam, true);

/** True when the value is a CareTeam model instance. */
export function isCareTeam(candidate: unknown): candidate is CareTeam {
  return candidate instanceof CareTeam;
}

/**
 * Members of the team
 */
export class CareTeamParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'role',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'role', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'member',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'member',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
    {
      elementName: 'onBehalfOf',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onBehalfOf', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'coverage',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'coveragePeriod', typeCode: 'Period' },
        { jsonKey: 'coverageTiming', typeCode: 'Timing' },
      ],
    },
  ];

  /** Type of involvement (0..1) */
  role?: CodeableConcept;

  /** Who is involved (0..1) */
  member?: Reference;

  /** Organization of the practitioner (0..1) */
  onBehalfOf?: Reference;

  /** When the member is generally available within this care team (0..1) */
  coveragePeriod?: Period;
  /** When the member is generally available within this care team (0..1) */
  coverageTiming?: Timing;

  override fhirType(): string {
    return 'CareTeam.participant';
  }

  /** FHIR JSON for this CareTeamParticipant, typed as the plain `CareTeamParticipant` data type. */
  override toJSON(): plainTypes.CareTeamParticipant {
    return this.serialize() as plainTypes.CareTeamParticipant;
  }

  /** Type of involvement (0..1) Created when absent. */
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

  /** Who is involved (0..1) Created when absent. */
  getMember(): Reference {
    if (this.member === undefined) {
      this.member = new Reference();
    }
    return this.member;
  }

  setMember(member: Reference | undefined): this {
    return this.setFieldValue('member', member);
  }

  hasMember(): boolean {
    return this.hasFieldValue('member');
  }

  /** Organization of the practitioner (0..1) Created when absent. */
  getOnBehalfOf(): Reference {
    if (this.onBehalfOf === undefined) {
      this.onBehalfOf = new Reference();
    }
    return this.onBehalfOf;
  }

  setOnBehalfOf(onBehalfOf: Reference | undefined): this {
    return this.setFieldValue('onBehalfOf', onBehalfOf);
  }

  hasOnBehalfOf(): boolean {
    return this.hasFieldValue('onBehalfOf');
  }

  /** When the member is generally available within this care team (0..1) Whichever type of `coverage[x]` is set. */
  getCoverage(): Period | Timing | undefined {
    return this.getChoiceValue<Period | Timing>('coverage');
  }

  /** True when any type of `coverage[x]` is set. */
  hasCoverage(): boolean {
    return this.hasChoiceValue('coverage');
  }

  getCoveragePeriod(): Period | undefined {
    return this.coveragePeriod;
  }

  /** Sets `coverage[x]` as Period and clears every other type of it. */
  setCoveragePeriod(coveragePeriod: Period | undefined): this {
    return this.setFieldValue('coveragePeriod', coveragePeriod);
  }

  hasCoveragePeriod(): boolean {
    return this.hasFieldValue('coveragePeriod');
  }

  getCoverageTiming(): Timing | undefined {
    return this.coverageTiming;
  }

  /** Sets `coverage[x]` as Timing and clears every other type of it. */
  setCoverageTiming(coverageTiming: Timing | undefined): this {
    return this.setFieldValue('coverageTiming', coverageTiming);
  }

  hasCoverageTiming(): boolean {
    return this.hasFieldValue('coverageTiming');
  }
}

modelTypeRegistry.register('CareTeamParticipant', CareTeamParticipant, false);
