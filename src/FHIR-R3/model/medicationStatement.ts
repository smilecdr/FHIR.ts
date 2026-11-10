/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Dosage } from './dosage';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * Base StructureDefinition for MedicationStatement Resource
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
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'basedOn',
          typeCode: 'Reference',
          targetResourceTypes: [
            'CarePlan',
            'MedicationRequest',
            'ProcedureRequest',
            'ReferralRequest',
          ],
        },
      ],
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
          targetResourceTypes: [
            'MedicationAdministration',
            'MedicationDispense',
            'MedicationStatement',
            'Observation',
            'Procedure',
          ],
        },
      ],
    },
    {
      elementName: 'context',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'context',
          typeCode: 'Reference',
          targetResourceTypes: ['Encounter', 'EpisodeOfCare'],
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
          allowedCodes: valueSetCodes.MedicationStatementStatus,
        },
      ],
    },
    {
      elementName: 'category',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'category', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'medication',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'medicationCodeableConcept', typeCode: 'CodeableConcept' },
        {
          jsonKey: 'medicationReference',
          typeCode: 'Reference',
          targetResourceTypes: ['Medication'],
        },
      ],
    },
    {
      elementName: 'effective',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'effectiveDateTime', typeCode: 'dateTime' },
        { jsonKey: 'effectivePeriod', typeCode: 'Period' },
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
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'informationSource',
          typeCode: 'Reference',
          targetResourceTypes: ['Organization', 'Patient', 'Practitioner', 'RelatedPerson'],
        },
      ],
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
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'derivedFrom', typeCode: 'Reference' }],
    },
    {
      elementName: 'taken',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'taken',
          typeCode: 'code',
          allowedCodes: valueSetCodes.MedicationStatementTaken,
        },
      ],
    },
    {
      elementName: 'reasonNotTaken',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonNotTaken', typeCode: 'CodeableConcept' }],
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
          targetResourceTypes: ['Condition', 'Observation'],
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
      elementName: 'dosage',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'dosage', typeCode: 'Dosage' }],
    },
  ];

  readonly resourceType = 'MedicationStatement';

  /** External identifier (0..*) */
  identifier?: Identifier[];

  /** Fulfils plan, proposal or order (0..*) */
  basedOn?: Reference[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** Encounter / Episode associated with MedicationStatement (0..1) */
  context?: Reference;

  /** active | completed | entered-in-error | intended | stopped | on-hold (1..1) */
  status?: valueSetCodes.MedicationStatementStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Type of medication usage (0..1) */
  category?: CodeableConcept;

  /** What medication was taken (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** What medication was taken (1..1) */
  medicationReference?: Reference;

  /** The date/time or interval when the medication was taken (0..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** The date/time or interval when the medication was taken (0..1) */
  effectivePeriod?: Period;

  /** When the statement was asserted? (0..1) */
  dateAsserted?: string;
  /** Id and extensions of the primitive `dateAsserted`. */
  _dateAsserted?: Element;

  /** Person or organization that provided the information about the taking of this medication (0..1) */
  informationSource?: Reference;

  /** Who is/was taking the medication (1..1) */
  subject?: Reference;

  /** Additional supporting information (0..*) */
  derivedFrom?: Reference[];

  /** y | n | unk | na (1..1) */
  taken?: valueSetCodes.MedicationStatementTaken;
  /** Id and extensions of the primitive `taken`. */
  _taken?: Element;

  /** True if asserting medication was not given (0..*) */
  reasonNotTaken?: CodeableConcept[];

  /** Reason for why the medication is being/was taken (0..*) */
  reasonCode?: CodeableConcept[];

  /** Condition or observation that supports why the medication is being/was taken (0..*) */
  reasonReference?: Reference[];

  /** Further information about the statement (0..*) */
  note?: Annotation[];

  /** Details of how medication is/was taken or should be taken (0..*) */
  dosage?: Dosage[];

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

  /** Fulfils plan, proposal or order (0..*) Never undefined; an empty list is created when absent. */
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

  /** Encounter / Episode associated with MedicationStatement (0..1) Created when absent. */
  getContext(): Reference {
    if (this.context === undefined) {
      this.context = new Reference();
    }
    return this.context;
  }

  setContext(context: Reference | undefined): this {
    return this.setFieldValue('context', context);
  }

  hasContext(): boolean {
    return this.hasFieldValue('context');
  }

  /** active | completed | entered-in-error | intended | stopped | on-hold (1..1) */
  getStatus(): valueSetCodes.MedicationStatementStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationStatementStatus | undefined): this {
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

  /** Type of medication usage (0..1) Created when absent. */
  getCategory(): CodeableConcept {
    if (this.category === undefined) {
      this.category = new CodeableConcept();
    }
    return this.category;
  }

  setCategory(category: CodeableConcept | undefined): this {
    return this.setFieldValue('category', category);
  }

  hasCategory(): boolean {
    return this.hasFieldValue('category');
  }

  /** What medication was taken (1..1) Whichever type of `medication[x]` is set. */
  getMedication(): CodeableConcept | Reference | undefined {
    return this.getChoiceValue<CodeableConcept | Reference>('medication');
  }

  /** True when any type of `medication[x]` is set. */
  hasMedication(): boolean {
    return this.hasChoiceValue('medication');
  }

  getMedicationCodeableConcept(): CodeableConcept | undefined {
    return this.medicationCodeableConcept;
  }

  /** Sets `medication[x]` as CodeableConcept and clears every other type of it. */
  setMedicationCodeableConcept(medicationCodeableConcept: CodeableConcept | undefined): this {
    return this.setFieldValue('medicationCodeableConcept', medicationCodeableConcept);
  }

  hasMedicationCodeableConcept(): boolean {
    return this.hasFieldValue('medicationCodeableConcept');
  }

  getMedicationReference(): Reference | undefined {
    return this.medicationReference;
  }

  /** Sets `medication[x]` as Reference and clears every other type of it. */
  setMedicationReference(medicationReference: Reference | undefined): this {
    return this.setFieldValue('medicationReference', medicationReference);
  }

  hasMedicationReference(): boolean {
    return this.hasFieldValue('medicationReference');
  }

  /** The date/time or interval when the medication was taken (0..1) Whichever type of `effective[x]` is set. */
  getEffective(): string | Period | undefined {
    return this.getChoiceValue<string | Period>('effective');
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

  /** When the statement was asserted? (0..1) */
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

  /** Person or organization that provided the information about the taking of this medication (0..1) Created when absent. */
  getInformationSource(): Reference {
    if (this.informationSource === undefined) {
      this.informationSource = new Reference();
    }
    return this.informationSource;
  }

  setInformationSource(informationSource: Reference | undefined): this {
    return this.setFieldValue('informationSource', informationSource);
  }

  hasInformationSource(): boolean {
    return this.hasFieldValue('informationSource');
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

  /** Additional supporting information (0..*) Never undefined; an empty list is created when absent. */
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

  /** y | n | unk | na (1..1) */
  getTaken(): valueSetCodes.MedicationStatementTaken | undefined {
    return this.taken;
  }

  /** Sets `taken`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setTaken(taken: valueSetCodes.MedicationStatementTaken | undefined): this {
    return this.setFieldValue('taken', taken);
  }

  hasTaken(): boolean {
    return this.hasFieldValue('taken');
  }

  /** The element carrying the id and extensions of `taken`. Created when absent. */
  getTakenElement(): Element {
    if (this._taken === undefined) {
      this._taken = new Element();
    }
    return this._taken;
  }

  setTakenElement(takenElement: Element | undefined): this {
    this._taken = takenElement;
    return this;
  }

  /** True if asserting medication was not given (0..*) Never undefined; an empty list is created when absent. */
  getReasonNotTaken(): CodeableConcept[] {
    if (this.reasonNotTaken === undefined) {
      this.reasonNotTaken = [];
    }
    return this.reasonNotTaken;
  }

  setReasonNotTaken(reasonNotTaken: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonNotTaken', reasonNotTaken);
  }

  hasReasonNotTaken(): boolean {
    return this.hasFieldValue('reasonNotTaken');
  }

  /** Appends a new, empty CodeableConcept to `reasonNotTaken` and returns it so it can be filled in. */
  addReasonNotTaken(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonNotTaken` and returns this object for chaining. */
  addReasonNotTaken(codeableConcept: CodeableConcept): this;
  addReasonNotTaken(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonNotTaken', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonNotTaken', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonNotTaken`. One is added when the list is empty. */
  getReasonNotTakenFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonNotTaken()[0];
    return firstCodeableConcept === undefined ? this.addReasonNotTaken() : firstCodeableConcept;
  }

  /** Reason for why the medication is being/was taken (0..*) Never undefined; an empty list is created when absent. */
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

  /** Condition or observation that supports why the medication is being/was taken (0..*) Never undefined; an empty list is created when absent. */
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

  /** Further information about the statement (0..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('MedicationStatement', MedicationStatement, true);

/** True when the value is a MedicationStatement model instance. */
export function isMedicationStatement(candidate: unknown): candidate is MedicationStatement {
  return candidate instanceof MedicationStatement;
}
