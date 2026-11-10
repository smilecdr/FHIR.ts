/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { Age } from './age';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';

/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export class FamilyMemberHistory extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'instantiatesCanonical',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesCanonical', typeCode: 'canonical' }],
    },
    {
      elementName: 'instantiatesUri',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'instantiatesUri', typeCode: 'uri' }],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.FamilyHistoryStatus },
      ],
    },
    {
      elementName: 'dataAbsentReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dataAbsentReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'date',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'date', typeCode: 'dateTime' }],
    },
    {
      elementName: 'participant',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'participant', typeCode: 'FamilyMemberHistoryParticipant' }],
    },
    {
      elementName: 'name',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'name', typeCode: 'string' }],
    },
    {
      elementName: 'relationship',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'relationship', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'sex',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'sex', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'born',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'bornPeriod', typeCode: 'Period' },
        { jsonKey: 'bornDate', typeCode: 'date' },
        { jsonKey: 'bornString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'age',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'ageAge', typeCode: 'Age' },
        { jsonKey: 'ageRange', typeCode: 'Range' },
        { jsonKey: 'ageString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'estimatedAge',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'estimatedAge', typeCode: 'boolean' }],
    },
    {
      elementName: 'deceased',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'deceasedBoolean', typeCode: 'boolean' },
        { jsonKey: 'deceasedAge', typeCode: 'Age' },
        { jsonKey: 'deceasedRange', typeCode: 'Range' },
        { jsonKey: 'deceasedDate', typeCode: 'date' },
        { jsonKey: 'deceasedString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
    {
      elementName: 'condition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'condition', typeCode: 'FamilyMemberHistoryCondition' }],
    },
    {
      elementName: 'procedure',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'procedure', typeCode: 'FamilyMemberHistoryProcedure' }],
    },
  ];

  readonly resourceType = 'FamilyMemberHistory';

  /** External Id(s) for this record (0..*) */
  identifier?: Identifier[];

  /** Instantiates FHIR protocol or definition (0..*) */
  instantiatesCanonical?: string[];
  /** Id and extensions of the primitive `instantiatesCanonical`. */
  _instantiatesCanonical?: (Element | null)[];

  /** Instantiates external protocol or definition (0..*) */
  instantiatesUri?: string[];
  /** Id and extensions of the primitive `instantiatesUri`. */
  _instantiatesUri?: (Element | null)[];

  /** partial | completed | entered-in-error | health-unknown (1..1) */
  status?: valueSetCodes.FamilyHistoryStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** subject-unknown | withheld | unable-to-obtain | deferred (0..1) */
  dataAbsentReason?: CodeableConcept;

  /** Patient history is about (1..1) */
  patient?: Reference;

  /** When history was recorded or last updated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** Who or what participated in the activities related to the family member history and how they were involved (0..*) */
  participant?: FamilyMemberHistoryParticipant[];

  /** The family member described (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Relationship to the subject (1..1) */
  relationship?: CodeableConcept;

  /** male | female | other | unknown (0..1) */
  sex?: CodeableConcept;

  /** (approximate) date of birth (0..1) */
  bornPeriod?: Period;
  /** (approximate) date of birth (0..1) */
  bornDate?: string;
  /** Id and extensions of the primitive `bornDate`. */
  _bornDate?: Element;
  /** (approximate) date of birth (0..1) */
  bornString?: string;
  /** Id and extensions of the primitive `bornString`. */
  _bornString?: Element;

  /** (approximate) age (0..1) */
  ageAge?: Age;
  /** (approximate) age (0..1) */
  ageRange?: Range;
  /** (approximate) age (0..1) */
  ageString?: string;
  /** Id and extensions of the primitive `ageString`. */
  _ageString?: Element;

  /** Age is estimated? (0..1) */
  estimatedAge?: boolean;
  /** Id and extensions of the primitive `estimatedAge`. */
  _estimatedAge?: Element;

  /** Dead? How old/when? (0..1) */
  deceasedBoolean?: boolean;
  /** Id and extensions of the primitive `deceasedBoolean`. */
  _deceasedBoolean?: Element;
  /** Dead? How old/when? (0..1) */
  deceasedAge?: Age;
  /** Dead? How old/when? (0..1) */
  deceasedRange?: Range;
  /** Dead? How old/when? (0..1) */
  deceasedDate?: string;
  /** Id and extensions of the primitive `deceasedDate`. */
  _deceasedDate?: Element;
  /** Dead? How old/when? (0..1) */
  deceasedString?: string;
  /** Id and extensions of the primitive `deceasedString`. */
  _deceasedString?: Element;

  /** Why was family member history performed? (0..*) */
  reason?: CodeableReference[];

  /** General note about related person (0..*) */
  note?: Annotation[];

  /** Condition that the related person had (0..*) */
  condition?: FamilyMemberHistoryCondition[];

  /** Procedures that the related person had (0..*) */
  procedure?: FamilyMemberHistoryProcedure[];

  override fhirType(): string {
    return 'FamilyMemberHistory';
  }

  /** FHIR JSON for this FamilyMemberHistory, typed as the plain `FamilyMemberHistory` data type. */
  override toJSON(): plainTypes.FamilyMemberHistory {
    return this.serialize() as plainTypes.FamilyMemberHistory;
  }

  /** External Id(s) for this record (0..*) Never undefined; an empty list is created when absent. */
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

  /** Instantiates FHIR protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesCanonical(): string[] {
    if (this.instantiatesCanonical === undefined) {
      this.instantiatesCanonical = [];
    }
    return this.instantiatesCanonical;
  }

  setInstantiatesCanonical(instantiatesCanonical: string[] | undefined): this {
    return this.setFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  hasInstantiatesCanonical(): boolean {
    return this.hasFieldValue('instantiatesCanonical');
  }

  /** Appends one value to `instantiatesCanonical`. Throws a FhirModelError when it is not a valid FHIR canonical. */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addFieldValue('instantiatesCanonical', instantiatesCanonical);
  }

  /** Instantiates external protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getInstantiatesUri(): string[] {
    if (this.instantiatesUri === undefined) {
      this.instantiatesUri = [];
    }
    return this.instantiatesUri;
  }

  setInstantiatesUri(instantiatesUri: string[] | undefined): this {
    return this.setFieldValue('instantiatesUri', instantiatesUri);
  }

  hasInstantiatesUri(): boolean {
    return this.hasFieldValue('instantiatesUri');
  }

  /** Appends one value to `instantiatesUri`. Throws a FhirModelError when it is not a valid FHIR uri. */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addFieldValue('instantiatesUri', instantiatesUri);
  }

  /** partial | completed | entered-in-error | health-unknown (1..1) */
  getStatus(): valueSetCodes.FamilyHistoryStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.FamilyHistoryStatus | undefined): this {
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

  /** subject-unknown | withheld | unable-to-obtain | deferred (0..1) Created when absent. */
  getDataAbsentReason(): CodeableConcept {
    if (this.dataAbsentReason === undefined) {
      this.dataAbsentReason = new CodeableConcept();
    }
    return this.dataAbsentReason;
  }

  setDataAbsentReason(dataAbsentReason: CodeableConcept | undefined): this {
    return this.setFieldValue('dataAbsentReason', dataAbsentReason);
  }

  hasDataAbsentReason(): boolean {
    return this.hasFieldValue('dataAbsentReason');
  }

  /** Patient history is about (1..1) Created when absent. */
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

  /** When history was recorded or last updated (0..1) */
  getDate(): string | undefined {
    return this.date;
  }

  /** Sets `date`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDate(date: string | undefined): this {
    return this.setFieldValue('date', date);
  }

  hasDate(): boolean {
    return this.hasFieldValue('date');
  }

  /** The element carrying the id and extensions of `date`. Created when absent. */
  getDateElement(): Element {
    if (this._date === undefined) {
      this._date = new Element();
    }
    return this._date;
  }

  setDateElement(dateElement: Element | undefined): this {
    this._date = dateElement;
    return this;
  }

  /** Who or what participated in the activities related to the family member history and how they were involved (0..*) Never undefined; an empty list is created when absent. */
  getParticipant(): FamilyMemberHistoryParticipant[] {
    if (this.participant === undefined) {
      this.participant = [];
    }
    return this.participant;
  }

  setParticipant(participant: FamilyMemberHistoryParticipant[] | undefined): this {
    return this.setFieldValue('participant', participant);
  }

  hasParticipant(): boolean {
    return this.hasFieldValue('participant');
  }

  /** Appends a new, empty FamilyMemberHistoryParticipant to `participant` and returns it so it can be filled in. */
  addParticipant(): FamilyMemberHistoryParticipant;
  /** Appends the given FamilyMemberHistoryParticipant to `participant` and returns this object for chaining. */
  addParticipant(familyMemberHistoryParticipant: FamilyMemberHistoryParticipant): this;
  addParticipant(
    familyMemberHistoryParticipant?: FamilyMemberHistoryParticipant
  ): FamilyMemberHistoryParticipant | this {
    if (familyMemberHistoryParticipant !== undefined) {
      return this.addFieldValue('participant', familyMemberHistoryParticipant);
    }
    const createdFamilyMemberHistoryParticipant = new FamilyMemberHistoryParticipant();
    this.addFieldValue('participant', createdFamilyMemberHistoryParticipant);
    return createdFamilyMemberHistoryParticipant;
  }

  /** The first FamilyMemberHistoryParticipant of `participant`. One is added when the list is empty. */
  getParticipantFirstRep(): FamilyMemberHistoryParticipant {
    const firstFamilyMemberHistoryParticipant = this.getParticipant()[0];
    return firstFamilyMemberHistoryParticipant === undefined
      ? this.addParticipant()
      : firstFamilyMemberHistoryParticipant;
  }

  /** The family member described (0..1) */
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

  /** Relationship to the subject (1..1) Created when absent. */
  getRelationship(): CodeableConcept {
    if (this.relationship === undefined) {
      this.relationship = new CodeableConcept();
    }
    return this.relationship;
  }

  setRelationship(relationship: CodeableConcept | undefined): this {
    return this.setFieldValue('relationship', relationship);
  }

  hasRelationship(): boolean {
    return this.hasFieldValue('relationship');
  }

  /** male | female | other | unknown (0..1) Created when absent. */
  getSex(): CodeableConcept {
    if (this.sex === undefined) {
      this.sex = new CodeableConcept();
    }
    return this.sex;
  }

  setSex(sex: CodeableConcept | undefined): this {
    return this.setFieldValue('sex', sex);
  }

  hasSex(): boolean {
    return this.hasFieldValue('sex');
  }

  /** (approximate) date of birth (0..1) Whichever type of `born[x]` is set. */
  getBorn(): Period | string | undefined {
    return this.getChoiceValue<Period | string>('born');
  }

  /** True when any type of `born[x]` is set. */
  hasBorn(): boolean {
    return this.hasChoiceValue('born');
  }

  getBornPeriod(): Period | undefined {
    return this.bornPeriod;
  }

  /** Sets `born[x]` as Period and clears every other type of it. */
  setBornPeriod(bornPeriod: Period | undefined): this {
    return this.setFieldValue('bornPeriod', bornPeriod);
  }

  hasBornPeriod(): boolean {
    return this.hasFieldValue('bornPeriod');
  }

  getBornDate(): string | undefined {
    return this.bornDate;
  }

  /** Sets `born[x]` as date and clears every other type of it. */
  setBornDate(bornDate: string | undefined): this {
    return this.setFieldValue('bornDate', bornDate);
  }

  hasBornDate(): boolean {
    return this.hasFieldValue('bornDate');
  }

  getBornString(): string | undefined {
    return this.bornString;
  }

  /** Sets `born[x]` as string and clears every other type of it. */
  setBornString(bornString: string | undefined): this {
    return this.setFieldValue('bornString', bornString);
  }

  hasBornString(): boolean {
    return this.hasFieldValue('bornString');
  }

  /** (approximate) age (0..1) Whichever type of `age[x]` is set. */
  getAge(): Age | Range | string | undefined {
    return this.getChoiceValue<Age | Range | string>('age');
  }

  /** True when any type of `age[x]` is set. */
  hasAge(): boolean {
    return this.hasChoiceValue('age');
  }

  getAgeAge(): Age | undefined {
    return this.ageAge;
  }

  /** Sets `age[x]` as Age and clears every other type of it. */
  setAgeAge(ageAge: Age | undefined): this {
    return this.setFieldValue('ageAge', ageAge);
  }

  hasAgeAge(): boolean {
    return this.hasFieldValue('ageAge');
  }

  getAgeRange(): Range | undefined {
    return this.ageRange;
  }

  /** Sets `age[x]` as Range and clears every other type of it. */
  setAgeRange(ageRange: Range | undefined): this {
    return this.setFieldValue('ageRange', ageRange);
  }

  hasAgeRange(): boolean {
    return this.hasFieldValue('ageRange');
  }

  getAgeString(): string | undefined {
    return this.ageString;
  }

  /** Sets `age[x]` as string and clears every other type of it. */
  setAgeString(ageString: string | undefined): this {
    return this.setFieldValue('ageString', ageString);
  }

  hasAgeString(): boolean {
    return this.hasFieldValue('ageString');
  }

  /** Age is estimated? (0..1) */
  getEstimatedAge(): boolean | undefined {
    return this.estimatedAge;
  }

  /** Sets `estimatedAge`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setEstimatedAge(estimatedAge: boolean | undefined): this {
    return this.setFieldValue('estimatedAge', estimatedAge);
  }

  hasEstimatedAge(): boolean {
    return this.hasFieldValue('estimatedAge');
  }

  /** The element carrying the id and extensions of `estimatedAge`. Created when absent. */
  getEstimatedAgeElement(): Element {
    if (this._estimatedAge === undefined) {
      this._estimatedAge = new Element();
    }
    return this._estimatedAge;
  }

  setEstimatedAgeElement(estimatedAgeElement: Element | undefined): this {
    this._estimatedAge = estimatedAgeElement;
    return this;
  }

  /** Dead? How old/when? (0..1) Whichever type of `deceased[x]` is set. */
  getDeceased(): boolean | Age | Range | string | undefined {
    return this.getChoiceValue<boolean | Age | Range | string>('deceased');
  }

  /** True when any type of `deceased[x]` is set. */
  hasDeceased(): boolean {
    return this.hasChoiceValue('deceased');
  }

  getDeceasedBoolean(): boolean | undefined {
    return this.deceasedBoolean;
  }

  /** Sets `deceased[x]` as boolean and clears every other type of it. */
  setDeceasedBoolean(deceasedBoolean: boolean | undefined): this {
    return this.setFieldValue('deceasedBoolean', deceasedBoolean);
  }

  hasDeceasedBoolean(): boolean {
    return this.hasFieldValue('deceasedBoolean');
  }

  getDeceasedAge(): Age | undefined {
    return this.deceasedAge;
  }

  /** Sets `deceased[x]` as Age and clears every other type of it. */
  setDeceasedAge(deceasedAge: Age | undefined): this {
    return this.setFieldValue('deceasedAge', deceasedAge);
  }

  hasDeceasedAge(): boolean {
    return this.hasFieldValue('deceasedAge');
  }

  getDeceasedRange(): Range | undefined {
    return this.deceasedRange;
  }

  /** Sets `deceased[x]` as Range and clears every other type of it. */
  setDeceasedRange(deceasedRange: Range | undefined): this {
    return this.setFieldValue('deceasedRange', deceasedRange);
  }

  hasDeceasedRange(): boolean {
    return this.hasFieldValue('deceasedRange');
  }

  getDeceasedDate(): string | undefined {
    return this.deceasedDate;
  }

  /** Sets `deceased[x]` as date and clears every other type of it. */
  setDeceasedDate(deceasedDate: string | undefined): this {
    return this.setFieldValue('deceasedDate', deceasedDate);
  }

  hasDeceasedDate(): boolean {
    return this.hasFieldValue('deceasedDate');
  }

  getDeceasedString(): string | undefined {
    return this.deceasedString;
  }

  /** Sets `deceased[x]` as string and clears every other type of it. */
  setDeceasedString(deceasedString: string | undefined): this {
    return this.setFieldValue('deceasedString', deceasedString);
  }

  hasDeceasedString(): boolean {
    return this.hasFieldValue('deceasedString');
  }

  /** Why was family member history performed? (0..*) Never undefined; an empty list is created when absent. */
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

  /** General note about related person (0..*) Never undefined; an empty list is created when absent. */
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

  /** Condition that the related person had (0..*) Never undefined; an empty list is created when absent. */
  getCondition(): FamilyMemberHistoryCondition[] {
    if (this.condition === undefined) {
      this.condition = [];
    }
    return this.condition;
  }

  setCondition(condition: FamilyMemberHistoryCondition[] | undefined): this {
    return this.setFieldValue('condition', condition);
  }

  hasCondition(): boolean {
    return this.hasFieldValue('condition');
  }

  /** Appends a new, empty FamilyMemberHistoryCondition to `condition` and returns it so it can be filled in. */
  addCondition(): FamilyMemberHistoryCondition;
  /** Appends the given FamilyMemberHistoryCondition to `condition` and returns this object for chaining. */
  addCondition(familyMemberHistoryCondition: FamilyMemberHistoryCondition): this;
  addCondition(
    familyMemberHistoryCondition?: FamilyMemberHistoryCondition
  ): FamilyMemberHistoryCondition | this {
    if (familyMemberHistoryCondition !== undefined) {
      return this.addFieldValue('condition', familyMemberHistoryCondition);
    }
    const createdFamilyMemberHistoryCondition = new FamilyMemberHistoryCondition();
    this.addFieldValue('condition', createdFamilyMemberHistoryCondition);
    return createdFamilyMemberHistoryCondition;
  }

  /** The first FamilyMemberHistoryCondition of `condition`. One is added when the list is empty. */
  getConditionFirstRep(): FamilyMemberHistoryCondition {
    const firstFamilyMemberHistoryCondition = this.getCondition()[0];
    return firstFamilyMemberHistoryCondition === undefined
      ? this.addCondition()
      : firstFamilyMemberHistoryCondition;
  }

  /** Procedures that the related person had (0..*) Never undefined; an empty list is created when absent. */
  getProcedure(): FamilyMemberHistoryProcedure[] {
    if (this.procedure === undefined) {
      this.procedure = [];
    }
    return this.procedure;
  }

  setProcedure(procedure: FamilyMemberHistoryProcedure[] | undefined): this {
    return this.setFieldValue('procedure', procedure);
  }

  hasProcedure(): boolean {
    return this.hasFieldValue('procedure');
  }

  /** Appends a new, empty FamilyMemberHistoryProcedure to `procedure` and returns it so it can be filled in. */
  addProcedure(): FamilyMemberHistoryProcedure;
  /** Appends the given FamilyMemberHistoryProcedure to `procedure` and returns this object for chaining. */
  addProcedure(familyMemberHistoryProcedure: FamilyMemberHistoryProcedure): this;
  addProcedure(
    familyMemberHistoryProcedure?: FamilyMemberHistoryProcedure
  ): FamilyMemberHistoryProcedure | this {
    if (familyMemberHistoryProcedure !== undefined) {
      return this.addFieldValue('procedure', familyMemberHistoryProcedure);
    }
    const createdFamilyMemberHistoryProcedure = new FamilyMemberHistoryProcedure();
    this.addFieldValue('procedure', createdFamilyMemberHistoryProcedure);
    return createdFamilyMemberHistoryProcedure;
  }

  /** The first FamilyMemberHistoryProcedure of `procedure`. One is added when the list is empty. */
  getProcedureFirstRep(): FamilyMemberHistoryProcedure {
    const firstFamilyMemberHistoryProcedure = this.getProcedure()[0];
    return firstFamilyMemberHistoryProcedure === undefined
      ? this.addProcedure()
      : firstFamilyMemberHistoryProcedure;
  }
}

modelTypeRegistry.register('FamilyMemberHistory', FamilyMemberHistory, true);

/** True when the value is a FamilyMemberHistory model instance. */
export function isFamilyMemberHistory(candidate: unknown): candidate is FamilyMemberHistory {
  return candidate instanceof FamilyMemberHistory;
}

/**
 * Who or what participated in the activities related to the family member history and how they were involved
 */
export class FamilyMemberHistoryParticipant extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'function',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'function', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CareTeam',
            'Device',
            'Organization',
            'Patient',
            'Practitioner',
            'PractitionerRole',
            'RelatedPerson',
          ],
        },
      ],
    },
  ];

  /** Type of involvement (0..1) */
  function?: CodeableConcept;

  /** Who or what participated in the activities related to the family member history (1..1) */
  actor?: Reference;

  override fhirType(): string {
    return 'FamilyMemberHistory.participant';
  }

  /** FHIR JSON for this FamilyMemberHistoryParticipant, typed as the plain `FamilyMemberHistoryParticipant` data type. */
  override toJSON(): plainTypes.FamilyMemberHistoryParticipant {
    return this.serialize() as plainTypes.FamilyMemberHistoryParticipant;
  }

  /** Type of involvement (0..1) Created when absent. */
  getFunction(): CodeableConcept {
    if (this.function === undefined) {
      this.function = new CodeableConcept();
    }
    return this.function;
  }

  setFunction(functionValue: CodeableConcept | undefined): this {
    return this.setFieldValue('function', functionValue);
  }

  hasFunction(): boolean {
    return this.hasFieldValue('function');
  }

  /** Who or what participated in the activities related to the family member history (1..1) Created when absent. */
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

modelTypeRegistry.register('FamilyMemberHistoryParticipant', FamilyMemberHistoryParticipant, false);

/**
 * Condition that the related person had
 */
export class FamilyMemberHistoryCondition extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contributedToDeath',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contributedToDeath', typeCode: 'boolean' }],
    },
    {
      elementName: 'onset',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'onsetAge', typeCode: 'Age' },
        { jsonKey: 'onsetRange', typeCode: 'Range' },
        { jsonKey: 'onsetPeriod', typeCode: 'Period' },
        { jsonKey: 'onsetString', typeCode: 'string' },
      ],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  /** Condition suffered by relation (1..1) */
  code?: CodeableConcept;

  /** deceased | permanent disability | etc (0..1) */
  outcome?: CodeableConcept;

  /** Whether the condition contributed to the cause of death (0..1) */
  contributedToDeath?: boolean;
  /** Id and extensions of the primitive `contributedToDeath`. */
  _contributedToDeath?: Element;

  /** When condition first manifested (0..1) */
  onsetAge?: Age;
  /** When condition first manifested (0..1) */
  onsetRange?: Range;
  /** When condition first manifested (0..1) */
  onsetPeriod?: Period;
  /** When condition first manifested (0..1) */
  onsetString?: string;
  /** Id and extensions of the primitive `onsetString`. */
  _onsetString?: Element;

  /** Extra information about condition (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'FamilyMemberHistory.condition';
  }

  /** FHIR JSON for this FamilyMemberHistoryCondition, typed as the plain `FamilyMemberHistoryCondition` data type. */
  override toJSON(): plainTypes.FamilyMemberHistoryCondition {
    return this.serialize() as plainTypes.FamilyMemberHistoryCondition;
  }

  /** Condition suffered by relation (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** deceased | permanent disability | etc (0..1) Created when absent. */
  getOutcome(): CodeableConcept {
    if (this.outcome === undefined) {
      this.outcome = new CodeableConcept();
    }
    return this.outcome;
  }

  setOutcome(outcome: CodeableConcept | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** Whether the condition contributed to the cause of death (0..1) */
  getContributedToDeath(): boolean | undefined {
    return this.contributedToDeath;
  }

  /** Sets `contributedToDeath`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setContributedToDeath(contributedToDeath: boolean | undefined): this {
    return this.setFieldValue('contributedToDeath', contributedToDeath);
  }

  hasContributedToDeath(): boolean {
    return this.hasFieldValue('contributedToDeath');
  }

  /** The element carrying the id and extensions of `contributedToDeath`. Created when absent. */
  getContributedToDeathElement(): Element {
    if (this._contributedToDeath === undefined) {
      this._contributedToDeath = new Element();
    }
    return this._contributedToDeath;
  }

  setContributedToDeathElement(contributedToDeathElement: Element | undefined): this {
    this._contributedToDeath = contributedToDeathElement;
    return this;
  }

  /** When condition first manifested (0..1) Whichever type of `onset[x]` is set. */
  getOnset(): Age | Range | Period | string | undefined {
    return this.getChoiceValue<Age | Range | Period | string>('onset');
  }

  /** True when any type of `onset[x]` is set. */
  hasOnset(): boolean {
    return this.hasChoiceValue('onset');
  }

  getOnsetAge(): Age | undefined {
    return this.onsetAge;
  }

  /** Sets `onset[x]` as Age and clears every other type of it. */
  setOnsetAge(onsetAge: Age | undefined): this {
    return this.setFieldValue('onsetAge', onsetAge);
  }

  hasOnsetAge(): boolean {
    return this.hasFieldValue('onsetAge');
  }

  getOnsetRange(): Range | undefined {
    return this.onsetRange;
  }

  /** Sets `onset[x]` as Range and clears every other type of it. */
  setOnsetRange(onsetRange: Range | undefined): this {
    return this.setFieldValue('onsetRange', onsetRange);
  }

  hasOnsetRange(): boolean {
    return this.hasFieldValue('onsetRange');
  }

  getOnsetPeriod(): Period | undefined {
    return this.onsetPeriod;
  }

  /** Sets `onset[x]` as Period and clears every other type of it. */
  setOnsetPeriod(onsetPeriod: Period | undefined): this {
    return this.setFieldValue('onsetPeriod', onsetPeriod);
  }

  hasOnsetPeriod(): boolean {
    return this.hasFieldValue('onsetPeriod');
  }

  getOnsetString(): string | undefined {
    return this.onsetString;
  }

  /** Sets `onset[x]` as string and clears every other type of it. */
  setOnsetString(onsetString: string | undefined): this {
    return this.setFieldValue('onsetString', onsetString);
  }

  hasOnsetString(): boolean {
    return this.hasFieldValue('onsetString');
  }

  /** Extra information about condition (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('FamilyMemberHistoryCondition', FamilyMemberHistoryCondition, false);

/**
 * Procedures that the related person had
 */
export class FamilyMemberHistoryProcedure extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'outcome',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'outcome', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'contributedToDeath',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'contributedToDeath', typeCode: 'boolean' }],
    },
    {
      elementName: 'performed',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'performedAge', typeCode: 'Age' },
        { jsonKey: 'performedRange', typeCode: 'Range' },
        { jsonKey: 'performedPeriod', typeCode: 'Period' },
        { jsonKey: 'performedString', typeCode: 'string' },
        { jsonKey: 'performedDateTime', typeCode: 'dateTime' },
      ],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  /** Procedures performed on the related person (1..1) */
  code?: CodeableConcept;

  /** What happened following the procedure (0..1) */
  outcome?: CodeableConcept;

  /** Whether the procedure contributed to the cause of death (0..1) */
  contributedToDeath?: boolean;
  /** Id and extensions of the primitive `contributedToDeath`. */
  _contributedToDeath?: Element;

  /** When the procedure was performed (0..1) */
  performedAge?: Age;
  /** When the procedure was performed (0..1) */
  performedRange?: Range;
  /** When the procedure was performed (0..1) */
  performedPeriod?: Period;
  /** When the procedure was performed (0..1) */
  performedString?: string;
  /** Id and extensions of the primitive `performedString`. */
  _performedString?: Element;
  /** When the procedure was performed (0..1) */
  performedDateTime?: string;
  /** Id and extensions of the primitive `performedDateTime`. */
  _performedDateTime?: Element;

  /** Extra information about the procedure (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'FamilyMemberHistory.procedure';
  }

  /** FHIR JSON for this FamilyMemberHistoryProcedure, typed as the plain `FamilyMemberHistoryProcedure` data type. */
  override toJSON(): plainTypes.FamilyMemberHistoryProcedure {
    return this.serialize() as plainTypes.FamilyMemberHistoryProcedure;
  }

  /** Procedures performed on the related person (1..1) Created when absent. */
  getCode(): CodeableConcept {
    if (this.code === undefined) {
      this.code = new CodeableConcept();
    }
    return this.code;
  }

  setCode(code: CodeableConcept | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** What happened following the procedure (0..1) Created when absent. */
  getOutcome(): CodeableConcept {
    if (this.outcome === undefined) {
      this.outcome = new CodeableConcept();
    }
    return this.outcome;
  }

  setOutcome(outcome: CodeableConcept | undefined): this {
    return this.setFieldValue('outcome', outcome);
  }

  hasOutcome(): boolean {
    return this.hasFieldValue('outcome');
  }

  /** Whether the procedure contributed to the cause of death (0..1) */
  getContributedToDeath(): boolean | undefined {
    return this.contributedToDeath;
  }

  /** Sets `contributedToDeath`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setContributedToDeath(contributedToDeath: boolean | undefined): this {
    return this.setFieldValue('contributedToDeath', contributedToDeath);
  }

  hasContributedToDeath(): boolean {
    return this.hasFieldValue('contributedToDeath');
  }

  /** The element carrying the id and extensions of `contributedToDeath`. Created when absent. */
  getContributedToDeathElement(): Element {
    if (this._contributedToDeath === undefined) {
      this._contributedToDeath = new Element();
    }
    return this._contributedToDeath;
  }

  setContributedToDeathElement(contributedToDeathElement: Element | undefined): this {
    this._contributedToDeath = contributedToDeathElement;
    return this;
  }

  /** When the procedure was performed (0..1) Whichever type of `performed[x]` is set. */
  getPerformed(): Age | Range | Period | string | undefined {
    return this.getChoiceValue<Age | Range | Period | string>('performed');
  }

  /** True when any type of `performed[x]` is set. */
  hasPerformed(): boolean {
    return this.hasChoiceValue('performed');
  }

  getPerformedAge(): Age | undefined {
    return this.performedAge;
  }

  /** Sets `performed[x]` as Age and clears every other type of it. */
  setPerformedAge(performedAge: Age | undefined): this {
    return this.setFieldValue('performedAge', performedAge);
  }

  hasPerformedAge(): boolean {
    return this.hasFieldValue('performedAge');
  }

  getPerformedRange(): Range | undefined {
    return this.performedRange;
  }

  /** Sets `performed[x]` as Range and clears every other type of it. */
  setPerformedRange(performedRange: Range | undefined): this {
    return this.setFieldValue('performedRange', performedRange);
  }

  hasPerformedRange(): boolean {
    return this.hasFieldValue('performedRange');
  }

  getPerformedPeriod(): Period | undefined {
    return this.performedPeriod;
  }

  /** Sets `performed[x]` as Period and clears every other type of it. */
  setPerformedPeriod(performedPeriod: Period | undefined): this {
    return this.setFieldValue('performedPeriod', performedPeriod);
  }

  hasPerformedPeriod(): boolean {
    return this.hasFieldValue('performedPeriod');
  }

  getPerformedString(): string | undefined {
    return this.performedString;
  }

  /** Sets `performed[x]` as string and clears every other type of it. */
  setPerformedString(performedString: string | undefined): this {
    return this.setFieldValue('performedString', performedString);
  }

  hasPerformedString(): boolean {
    return this.hasFieldValue('performedString');
  }

  getPerformedDateTime(): string | undefined {
    return this.performedDateTime;
  }

  /** Sets `performed[x]` as dateTime and clears every other type of it. */
  setPerformedDateTime(performedDateTime: string | undefined): this {
    return this.setFieldValue('performedDateTime', performedDateTime);
  }

  hasPerformedDateTime(): boolean {
    return this.hasFieldValue('performedDateTime');
  }

  /** Extra information about the procedure (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('FamilyMemberHistoryProcedure', FamilyMemberHistoryProcedure, false);
