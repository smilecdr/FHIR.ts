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
import { DomainResource } from './domainResource';
import { Dosage } from './dosage';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * A record of a medication that is being consumed by a patient. A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future. The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician. A common scenario where this information is captured is during the history taking process during a patient visit or stay. The medication information may come from sources such as the patient's memory, from a prescription bottle, or from a list of medications the patient, clinician or other party maintains. The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication. A medicationstatement is often, if not always, less specific. There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise. As stated earlier, the Medication Statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains. Medication administration is more formal and is not missing detailed information.
 */
export class MedicationStatement extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'partOf',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'partOf',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationStatement', 'Procedure'],
        },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationStatementStatusCodes,
        },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'medication',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'medication', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
      ],
    },
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
    {
      elementName: 'effective',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'effectiveDateTime', typeCode: 'dateTime' },
        { jsonKey: 'effectivePeriod', typeCode: 'Period' },
        { jsonKey: 'effectiveTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'dateAsserted',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dateAsserted', typeCode: 'dateTime' }],
    },
    {
      elementName: 'informationSource',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'informationSource',
          typeCode: 'Reference',
          targetResourceTypes: [
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
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFrom', typeCode: 'Reference' }],
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
      elementName: 'relatedClinicalInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'relatedClinicalInformation',
          typeCode: 'Reference',
          targetResourceTypes: ['Condition', 'Observation'],
        },
      ],
    },
    {
      elementName: 'renderedDosageInstruction',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'renderedDosageInstruction', typeCode: 'markdown' }],
    },
    {
      elementName: 'dosage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosage', typeCode: 'Dosage' }],
    },
    {
      elementName: 'adherence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'adherence', typeCode: 'MedicationStatementAdherence' }],
    },
  ];

  readonly resourceType = 'MedicationStatement';

  /** External identifier (0..*) */
  identifier?: Identifier[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** recorded | entered-in-error | draft (1..1) */
  status?: valueSetCodes.MedicationStatementStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Type of medication statement (0..*) */
  category?: CodeableConcept[];

  /** What medication was taken (1..1) */
  medication?: CodeableReference;

  /** Who is/was taking the medication (1..1) */
  subject?: Reference;

  /** Encounter associated with MedicationStatement (0..1) */
  encounter?: Reference;

  /** The date/time or interval when the medication is/was/will be taken (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** The date/time or interval when the medication is/was/will be taken (0..1) */
  effectivePeriod?: Period;
  /** The date/time or interval when the medication is/was/will be taken (0..1) */
  effectiveTiming?: Timing;

  /** When the usage was asserted? (0..1) */
  dateAsserted?: string;
  /** Id and extensions of the primitive `dateAsserted`. */
  _dateAsserted?: Element;

  /** Person or organization that provided the information about the taking of this medication (0..*) */
  informationSource?: Reference[];

  /** Link to information used to derive the MedicationStatement (0..*) */
  derivedFrom?: Reference[];

  /** Reason for why the medication is being/was taken (0..*) */
  reason?: CodeableReference[];

  /** Further information about the usage (0..*) */
  note?: Annotation[];

  /** Link to information relevant to the usage of a medication (0..*) */
  relatedClinicalInformation?: Reference[];

  /** Full representation of the dosage instructions (0..1) */
  renderedDosageInstruction?: string;
  /** Id and extensions of the primitive `renderedDosageInstruction`. */
  _renderedDosageInstruction?: Element;

  /** Details of how medication is/was taken or should be taken (0..*) */
  dosage?: Dosage[];

  /** Indicates whether the medication is or is not being consumed or administered (0..1) */
  adherence?: MedicationStatementAdherence;

  override fhirType(): string {
    return 'MedicationStatement';
  }

  /** FHIR JSON for this MedicationStatement, typed as the plain `MedicationStatement` data type. */
  override toJSON(): plainTypes.MedicationStatement {
    return this.serialize() as plainTypes.MedicationStatement;
  }

  /** External identifier (0..*) Never undefined; an empty list is created when absent. */
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

  /** Part of referenced event (0..*) Never undefined; an empty list is created when absent. */
  getPartOf(): Reference[] {
    if (this.partOf === undefined) {
      this.partOf = [];
    }
    return this.partOf;
  }

  setPartOf(partOf: Reference[] | undefined): this {
    return this.setFieldValue('partOf', partOf);
  }

  hasPartOf(): boolean {
    return this.hasFieldValue('partOf');
  }

  /** Appends a new, empty Reference to `partOf` and returns it so it can be filled in. */
  addPartOf(): Reference;
  /** Appends the given Reference to `partOf` and returns this object for chaining. */
  addPartOf(reference: Reference): this;
  addPartOf(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('partOf', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('partOf', createdReference);
    return createdReference;
  }

  /** The first Reference of `partOf`. One is added when the list is empty. */
  getPartOfFirstRep(): Reference {
    const firstReference = this.getPartOf()[0];
    return firstReference === undefined ? this.addPartOf() : firstReference;
  }

  /** recorded | entered-in-error | draft (1..1) */
  getStatus(): valueSetCodes.MedicationStatementStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationStatementStatusCodes | undefined): this {
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

  /** Type of medication statement (0..*) Never undefined; an empty list is created when absent. */
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

  /** What medication was taken (1..1) Created when absent. */
  getMedication(): CodeableReference {
    if (this.medication === undefined) {
      this.medication = new CodeableReference();
    }
    return this.medication;
  }

  setMedication(medication: CodeableReference | undefined): this {
    return this.setFieldValue('medication', medication);
  }

  hasMedication(): boolean {
    return this.hasFieldValue('medication');
  }

  /** Who is/was taking the medication (1..1) Created when absent. */
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

  /** Encounter associated with MedicationStatement (0..1) Created when absent. */
  getEncounter(): Reference {
    if (this.encounter === undefined) {
      this.encounter = new Reference();
    }
    return this.encounter;
  }

  setEncounter(encounter: Reference | undefined): this {
    return this.setFieldValue('encounter', encounter);
  }

  hasEncounter(): boolean {
    return this.hasFieldValue('encounter');
  }

  /** The date/time or interval when the medication is/was/will be taken (0..1) Whichever type of `effective[x]` is set. */
  getEffective(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('effective');
  }

  /** True when any type of `effective[x]` is set. */
  hasEffective(): boolean {
    return this.hasChoiceValue('effective');
  }

  getEffectiveDateTime(): string | undefined {
    return this.effectiveDateTime;
  }

  /** Sets `effective[x]` as dateTime and clears every other type of it. */
  setEffectiveDateTime(effectiveDateTime: string | undefined): this {
    return this.setFieldValue('effectiveDateTime', effectiveDateTime);
  }

  hasEffectiveDateTime(): boolean {
    return this.hasFieldValue('effectiveDateTime');
  }

  getEffectivePeriod(): Period | undefined {
    return this.effectivePeriod;
  }

  /** Sets `effective[x]` as Period and clears every other type of it. */
  setEffectivePeriod(effectivePeriod: Period | undefined): this {
    return this.setFieldValue('effectivePeriod', effectivePeriod);
  }

  hasEffectivePeriod(): boolean {
    return this.hasFieldValue('effectivePeriod');
  }

  getEffectiveTiming(): Timing | undefined {
    return this.effectiveTiming;
  }

  /** Sets `effective[x]` as Timing and clears every other type of it. */
  setEffectiveTiming(effectiveTiming: Timing | undefined): this {
    return this.setFieldValue('effectiveTiming', effectiveTiming);
  }

  hasEffectiveTiming(): boolean {
    return this.hasFieldValue('effectiveTiming');
  }

  /** When the usage was asserted? (0..1) */
  getDateAsserted(): string | undefined {
    return this.dateAsserted;
  }

  /** Sets `dateAsserted`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setDateAsserted(dateAsserted: string | undefined): this {
    return this.setFieldValue('dateAsserted', dateAsserted);
  }

  hasDateAsserted(): boolean {
    return this.hasFieldValue('dateAsserted');
  }

  /** The element carrying the id and extensions of `dateAsserted`. Created when absent. */
  getDateAssertedElement(): Element {
    if (this._dateAsserted === undefined) {
      this._dateAsserted = new Element();
    }
    return this._dateAsserted;
  }

  setDateAssertedElement(dateAssertedElement: Element | undefined): this {
    this._dateAsserted = dateAssertedElement;
    return this;
  }

  /** Person or organization that provided the information about the taking of this medication (0..*) Never undefined; an empty list is created when absent. */
  getInformationSource(): Reference[] {
    if (this.informationSource === undefined) {
      this.informationSource = [];
    }
    return this.informationSource;
  }

  setInformationSource(informationSource: Reference[] | undefined): this {
    return this.setFieldValue('informationSource', informationSource);
  }

  hasInformationSource(): boolean {
    return this.hasFieldValue('informationSource');
  }

  /** Appends a new, empty Reference to `informationSource` and returns it so it can be filled in. */
  addInformationSource(): Reference;
  /** Appends the given Reference to `informationSource` and returns this object for chaining. */
  addInformationSource(reference: Reference): this;
  addInformationSource(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('informationSource', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('informationSource', createdReference);
    return createdReference;
  }

  /** The first Reference of `informationSource`. One is added when the list is empty. */
  getInformationSourceFirstRep(): Reference {
    const firstReference = this.getInformationSource()[0];
    return firstReference === undefined ? this.addInformationSource() : firstReference;
  }

  /** Link to information used to derive the MedicationStatement (0..*) Never undefined; an empty list is created when absent. */
  getDerivedFrom(): Reference[] {
    if (this.derivedFrom === undefined) {
      this.derivedFrom = [];
    }
    return this.derivedFrom;
  }

  setDerivedFrom(derivedFrom: Reference[] | undefined): this {
    return this.setFieldValue('derivedFrom', derivedFrom);
  }

  hasDerivedFrom(): boolean {
    return this.hasFieldValue('derivedFrom');
  }

  /** Appends a new, empty Reference to `derivedFrom` and returns it so it can be filled in. */
  addDerivedFrom(): Reference;
  /** Appends the given Reference to `derivedFrom` and returns this object for chaining. */
  addDerivedFrom(reference: Reference): this;
  addDerivedFrom(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('derivedFrom', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('derivedFrom', createdReference);
    return createdReference;
  }

  /** The first Reference of `derivedFrom`. One is added when the list is empty. */
  getDerivedFromFirstRep(): Reference {
    const firstReference = this.getDerivedFrom()[0];
    return firstReference === undefined ? this.addDerivedFrom() : firstReference;
  }

  /** Reason for why the medication is being/was taken (0..*) Never undefined; an empty list is created when absent. */
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

  /** Further information about the usage (0..*) Never undefined; an empty list is created when absent. */
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

  /** Link to information relevant to the usage of a medication (0..*) Never undefined; an empty list is created when absent. */
  getRelatedClinicalInformation(): Reference[] {
    if (this.relatedClinicalInformation === undefined) {
      this.relatedClinicalInformation = [];
    }
    return this.relatedClinicalInformation;
  }

  setRelatedClinicalInformation(relatedClinicalInformation: Reference[] | undefined): this {
    return this.setFieldValue('relatedClinicalInformation', relatedClinicalInformation);
  }

  hasRelatedClinicalInformation(): boolean {
    return this.hasFieldValue('relatedClinicalInformation');
  }

  /** Appends a new, empty Reference to `relatedClinicalInformation` and returns it so it can be filled in. */
  addRelatedClinicalInformation(): Reference;
  /** Appends the given Reference to `relatedClinicalInformation` and returns this object for chaining. */
  addRelatedClinicalInformation(reference: Reference): this;
  addRelatedClinicalInformation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('relatedClinicalInformation', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('relatedClinicalInformation', createdReference);
    return createdReference;
  }

  /** The first Reference of `relatedClinicalInformation`. One is added when the list is empty. */
  getRelatedClinicalInformationFirstRep(): Reference {
    const firstReference = this.getRelatedClinicalInformation()[0];
    return firstReference === undefined ? this.addRelatedClinicalInformation() : firstReference;
  }

  /** Full representation of the dosage instructions (0..1) */
  getRenderedDosageInstruction(): string | undefined {
    return this.renderedDosageInstruction;
  }

  /** Sets `renderedDosageInstruction`. Throws a FhirModelError when the value is not a valid FHIR markdown. */
  setRenderedDosageInstruction(renderedDosageInstruction: string | undefined): this {
    return this.setFieldValue('renderedDosageInstruction', renderedDosageInstruction);
  }

  hasRenderedDosageInstruction(): boolean {
    return this.hasFieldValue('renderedDosageInstruction');
  }

  /** The element carrying the id and extensions of `renderedDosageInstruction`. Created when absent. */
  getRenderedDosageInstructionElement(): Element {
    if (this._renderedDosageInstruction === undefined) {
      this._renderedDosageInstruction = new Element();
    }
    return this._renderedDosageInstruction;
  }

  setRenderedDosageInstructionElement(renderedDosageInstructionElement: Element | undefined): this {
    this._renderedDosageInstruction = renderedDosageInstructionElement;
    return this;
  }

  /** Details of how medication is/was taken or should be taken (0..*) Never undefined; an empty list is created when absent. */
  getDosage(): Dosage[] {
    if (this.dosage === undefined) {
      this.dosage = [];
    }
    return this.dosage;
  }

  setDosage(dosage: Dosage[] | undefined): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** Appends a new, empty Dosage to `dosage` and returns it so it can be filled in. */
  addDosage(): Dosage;
  /** Appends the given Dosage to `dosage` and returns this object for chaining. */
  addDosage(dosage: Dosage): this;
  addDosage(dosage?: Dosage): Dosage | this {
    if (dosage !== undefined) {
      return this.addFieldValue('dosage', dosage);
    }
    const createdDosage = new Dosage();
    this.addFieldValue('dosage', createdDosage);
    return createdDosage;
  }

  /** The first Dosage of `dosage`. One is added when the list is empty. */
  getDosageFirstRep(): Dosage {
    const firstDosage = this.getDosage()[0];
    return firstDosage === undefined ? this.addDosage() : firstDosage;
  }

  /** Indicates whether the medication is or is not being consumed or administered (0..1) Created when absent. */
  getAdherence(): MedicationStatementAdherence {
    if (this.adherence === undefined) {
      this.adherence = new MedicationStatementAdherence();
    }
    return this.adherence;
  }

  setAdherence(adherence: MedicationStatementAdherence | undefined): this {
    return this.setFieldValue('adherence', adherence);
  }

  hasAdherence(): boolean {
    return this.hasFieldValue('adherence');
  }
}

modelTypeRegistry.register('MedicationStatement', MedicationStatement, true);

/** True when the value is a MedicationStatement model instance. */
export function isMedicationStatement(candidate: unknown): candidate is MedicationStatement {
  return candidate instanceof MedicationStatement;
}

/**
 * Indicates whether the medication is or is not being consumed or administered
 */
export class MedicationStatementAdherence extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'code',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Type of adherence (1..1) */
  code?: CodeableConcept;

  /** Details of the reason for the current use of the medication (0..1) */
  reason?: CodeableConcept;

  override fhirType(): string {
    return 'MedicationStatement.adherence';
  }

  /** FHIR JSON for this MedicationStatementAdherence, typed as the plain `MedicationStatementAdherence` data type. */
  override toJSON(): plainTypes.MedicationStatementAdherence {
    return this.serialize() as plainTypes.MedicationStatementAdherence;
  }

  /** Type of adherence (1..1) Created when absent. */
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

  /** Details of the reason for the current use of the medication (0..1) Created when absent. */
  getReason(): CodeableConcept {
    if (this.reason === undefined) {
      this.reason = new CodeableConcept();
    }
    return this.reason;
  }

  setReason(reason: CodeableConcept | undefined): this {
    return this.setFieldValue('reason', reason);
  }

  hasReason(): boolean {
    return this.hasFieldValue('reason');
  }
}

modelTypeRegistry.register('MedicationStatementAdherence', MedicationStatementAdherence, false);
