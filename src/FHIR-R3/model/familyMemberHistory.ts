/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Age } from './age';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Range } from './range';
import { Reference } from './reference';

/**
 * Base StructureDefinition for FamilyMemberHistory Resource
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
      elementName: 'definition',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'definition',
          typeCode: 'Reference',
          targetResourceTypes: ['PlanDefinition', 'Questionnaire'],
        },
      ],
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
      elementName: 'notDone',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notDone', typeCode: 'boolean' }],
    },
    {
      elementName: 'notDoneReason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notDoneReason', typeCode: 'CodeableConcept' }],
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
      elementName: 'gender',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'gender', typeCode: 'code', allowedCodes: valueSetCodes.AdministrativeGender },
      ],
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
      elementName: 'reasonCode',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonCode', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reasonReference',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'reasonReference',
          typeCode: 'Reference',
          targetResourceTypes: [
            'AllergyIntolerance',
            'Condition',
            'Observation',
            'QuestionnaireResponse',
          ],
        },
      ],
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
  ];

  readonly resourceType = 'FamilyMemberHistory';

  /** External Id(s) for this record (0..*) */
  identifier?: Identifier[];

  /** Instantiates protocol or definition (0..*) */
  definition?: Reference[];

  /** partial | completed | entered-in-error | health-unknown (1..1) */
  status?: valueSetCodes.FamilyHistoryStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The taking of a family member's history did not occur (0..1) */
  notDone?: boolean;
  /** Id and extensions of the primitive `notDone`. */
  _notDone?: Element;

  /** subject-unknown | withheld | unable-to-obtain | deferred (0..1) */
  notDoneReason?: CodeableConcept;

  /** Patient history is about (1..1) */
  patient?: Reference;

  /** When history was captured/updated (0..1) */
  date?: string;
  /** Id and extensions of the primitive `date`. */
  _date?: Element;

  /** The family member described (0..1) */
  name?: string;
  /** Id and extensions of the primitive `name`. */
  _name?: Element;

  /** Relationship to the subject (1..1) */
  relationship?: CodeableConcept;

  /** male | female | other | unknown (0..1) */
  gender?: valueSetCodes.AdministrativeGender;
  /** Id and extensions of the primitive `gender`. */
  _gender?: Element;

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
  reasonCode?: CodeableConcept[];

  /** Why was family member history performed? (0..*) */
  reasonReference?: Reference[];

  /** General note about related person (0..*) */
  note?: Annotation[];

  /** Condition that the related person had (0..*) */
  condition?: FamilyMemberHistoryCondition[];

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

  /** Instantiates protocol or definition (0..*) Never undefined; an empty list is created when absent. */
  getDefinition(): Reference[] {
    if (this.definition === undefined) {
      this.definition = [];
    }
    return this.definition;
  }

  setDefinition(definition: Reference[] | undefined): this {
    return this.setFieldValue('definition', definition);
  }

  hasDefinition(): boolean {
    return this.hasFieldValue('definition');
  }

  /** Appends a new, empty Reference to `definition` and returns it so it can be filled in. */
  addDefinition(): Reference;
  /** Appends the given Reference to `definition` and returns this object for chaining. */
  addDefinition(reference: Reference): this;
  addDefinition(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('definition', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('definition', createdReference);
    return createdReference;
  }

  /** The first Reference of `definition`. One is added when the list is empty. */
  getDefinitionFirstRep(): Reference {
    const firstReference = this.getDefinition()[0];
    return firstReference === undefined ? this.addDefinition() : firstReference;
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

  /** The taking of a family member's history did not occur (0..1) */
  getNotDone(): boolean | undefined {
    return this.notDone;
  }

  /** Sets `notDone`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNotDone(notDone: boolean | undefined): this {
    return this.setFieldValue('notDone', notDone);
  }

  hasNotDone(): boolean {
    return this.hasFieldValue('notDone');
  }

  /** The element carrying the id and extensions of `notDone`. Created when absent. */
  getNotDoneElement(): Element {
    if (this._notDone === undefined) {
      this._notDone = new Element();
    }
    return this._notDone;
  }

  setNotDoneElement(notDoneElement: Element | undefined): this {
    this._notDone = notDoneElement;
    return this;
  }

  /** subject-unknown | withheld | unable-to-obtain | deferred (0..1) Created when absent. */
  getNotDoneReason(): CodeableConcept {
    if (this.notDoneReason === undefined) {
      this.notDoneReason = new CodeableConcept();
    }
    return this.notDoneReason;
  }

  setNotDoneReason(notDoneReason: CodeableConcept | undefined): this {
    return this.setFieldValue('notDoneReason', notDoneReason);
  }

  hasNotDoneReason(): boolean {
    return this.hasFieldValue('notDoneReason');
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

  /** When history was captured/updated (0..1) */
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

  /** male | female | other | unknown (0..1) */
  getGender(): valueSetCodes.AdministrativeGender | undefined {
    return this.gender;
  }

  /** Sets `gender`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setGender(gender: valueSetCodes.AdministrativeGender | undefined): this {
    return this.setFieldValue('gender', gender);
  }

  hasGender(): boolean {
    return this.hasFieldValue('gender');
  }

  /** The element carrying the id and extensions of `gender`. Created when absent. */
  getGenderElement(): Element {
    if (this._gender === undefined) {
      this._gender = new Element();
    }
    return this._gender;
  }

  setGenderElement(genderElement: Element | undefined): this {
    this._gender = genderElement;
    return this;
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
  getReasonCode(): CodeableConcept[] {
    if (this.reasonCode === undefined) {
      this.reasonCode = [];
    }
    return this.reasonCode;
  }

  setReasonCode(reasonCode: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonCode', reasonCode);
  }

  hasReasonCode(): boolean {
    return this.hasFieldValue('reasonCode');
  }

  /** Appends a new, empty CodeableConcept to `reasonCode` and returns it so it can be filled in. */
  addReasonCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonCode` and returns this object for chaining. */
  addReasonCode(codeableConcept: CodeableConcept): this;
  addReasonCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonCode', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonCode', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonCode`. One is added when the list is empty. */
  getReasonCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonCode()[0];
    return firstCodeableConcept === undefined ? this.addReasonCode() : firstCodeableConcept;
  }

  /** Why was family member history performed? (0..*) Never undefined; an empty list is created when absent. */
  getReasonReference(): Reference[] {
    if (this.reasonReference === undefined) {
      this.reasonReference = [];
    }
    return this.reasonReference;
  }

  setReasonReference(reasonReference: Reference[] | undefined): this {
    return this.setFieldValue('reasonReference', reasonReference);
  }

  hasReasonReference(): boolean {
    return this.hasFieldValue('reasonReference');
  }

  /** Appends a new, empty Reference to `reasonReference` and returns it so it can be filled in. */
  addReasonReference(): Reference;
  /** Appends the given Reference to `reasonReference` and returns this object for chaining. */
  addReasonReference(reference: Reference): this;
  addReasonReference(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('reasonReference', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('reasonReference', createdReference);
    return createdReference;
  }

  /** The first Reference of `reasonReference`. One is added when the list is empty. */
  getReasonReferenceFirstRep(): Reference {
    const firstReference = this.getReasonReference()[0];
    return firstReference === undefined ? this.addReasonReference() : firstReference;
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
}

modelTypeRegistry.register('FamilyMemberHistory', FamilyMemberHistory, true);

/** True when the value is a FamilyMemberHistory model instance. */
export function isFamilyMemberHistory(candidate: unknown): candidate is FamilyMemberHistory {
  return candidate instanceof FamilyMemberHistory;
}

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

  /** deceased | permanent disability | etc. (0..1) */
  outcome?: CodeableConcept;

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

  /** deceased | permanent disability | etc. (0..1) Created when absent. */
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
