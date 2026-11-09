/**
 * FHIR R3 model classes generated from hl7.fhir.r3.core@3.0.2.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r3';
import { Annotation } from './annotation';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';

/**
 * Base StructureDefinition for MedicationAdministration Resource
 */
export class MedicationAdministration extends DomainResource {
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
          targetResourceTypes: ['ActivityDefinition', 'PlanDefinition'],
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
          targetResourceTypes: ['MedicationAdministration', 'Procedure'],
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
          allowedCodes: valueSetCodes.MedicationAdministrationStatus,
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
      elementName: 'subject',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'subject', typeCode: 'Reference', targetResourceTypes: ['Group', 'Patient'] },
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
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
    },
    {
      elementName: 'effective',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'effectiveDateTime', typeCode: 'dateTime' },
        { jsonKey: 'effectivePeriod', typeCode: 'Period' },
      ],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'MedicationAdministrationPerformer' }],
    },
    {
      elementName: 'notGiven',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'notGiven', typeCode: 'boolean' }],
    },
    {
      elementName: 'reasonNotGiven',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reasonNotGiven', typeCode: 'CodeableConcept' }],
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
      elementName: 'prescription',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'prescription',
          typeCode: 'Reference',
          targetResourceTypes: ['MedicationRequest'],
        },
      ],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
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
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dosage', typeCode: 'MedicationAdministrationDosage' }],
    },
    {
      elementName: 'eventHistory',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        { jsonKey: 'eventHistory', typeCode: 'Reference', targetResourceTypes: ['Provenance'] },
      ],
    },
  ];

  readonly resourceType = 'MedicationAdministration';

  /** External identifier (0..*) */
  identifier?: Identifier[];

  /** Instantiates protocol or definition (0..*) */
  definition?: Reference[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** in-progress | on-hold | completed | entered-in-error | stopped | unknown (1..1) */
  status?: valueSetCodes.MedicationAdministrationStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Type of medication usage (0..1) */
  category?: CodeableConcept;

  /** What was administered (1..1) */
  medicationCodeableConcept?: CodeableConcept;
  /** What was administered (1..1) */
  medicationReference?: Reference;

  /** Who received medication (1..1) */
  subject?: Reference;

  /** Encounter or Episode of Care administered as part of (0..1) */
  context?: Reference;

  /** Additional information to support administration (0..*) */
  supportingInformation?: Reference[];

  /** Start and end time of administration (1..1) */
  effectiveDateTime?: string;
  /** Id and extensions of the primitive `effectiveDateTime`. */
  _effectiveDateTime?: Element;
  /** Start and end time of administration (1..1) */
  effectivePeriod?: Period;

  /** Who administered substance (0..*) */
  performer?: MedicationAdministrationPerformer[];

  /** True if medication not administered (0..1) */
  notGiven?: boolean;
  /** Id and extensions of the primitive `notGiven`. */
  _notGiven?: Element;

  /** Reason administration not performed (0..*) */
  reasonNotGiven?: CodeableConcept[];

  /** Reason administration performed (0..*) */
  reasonCode?: CodeableConcept[];

  /** Condition or Observation that supports why the medication was administered (0..*) */
  reasonReference?: Reference[];

  /** Request administration performed against (0..1) */
  prescription?: Reference;

  /** Device used to administer (0..*) */
  device?: Reference[];

  /** Information about the administration (0..*) */
  note?: Annotation[];

  /** Details of how medication was taken (0..1) */
  dosage?: MedicationAdministrationDosage;

  /** A list of events of interest in the lifecycle (0..*) */
  eventHistory?: Reference[];

  override fhirType(): string {
    return 'MedicationAdministration';
  }

  /** FHIR JSON for this MedicationAdministration, typed as the plain `MedicationAdministration` data type. */
  override toJSON(): plainTypes.MedicationAdministration {
    return this.serialize() as plainTypes.MedicationAdministration;
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

  /** in-progress | on-hold | completed | entered-in-error | stopped | unknown (1..1) */
  getStatus(): valueSetCodes.MedicationAdministrationStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationAdministrationStatus | undefined): this {
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

  /** What was administered (1..1) Whichever type of `medication[x]` is set. */
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

  /** Who received medication (1..1) Created when absent. */
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

  /** Encounter or Episode of Care administered as part of (0..1) Created when absent. */
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

  /** Additional information to support administration (0..*) Never undefined; an empty list is created when absent. */
  getSupportingInformation(): Reference[] {
    if (this.supportingInformation === undefined) {
      this.supportingInformation = [];
    }
    return this.supportingInformation;
  }

  setSupportingInformation(supportingInformation: Reference[] | undefined): this {
    return this.setFieldValue('supportingInformation', supportingInformation);
  }

  hasSupportingInformation(): boolean {
    return this.hasFieldValue('supportingInformation');
  }

  /** Appends a new, empty Reference to `supportingInformation` and returns it so it can be filled in. */
  addSupportingInformation(): Reference;
  /** Appends the given Reference to `supportingInformation` and returns this object for chaining. */
  addSupportingInformation(reference: Reference): this;
  addSupportingInformation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('supportingInformation', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('supportingInformation', createdReference);
    return createdReference;
  }

  /** The first Reference of `supportingInformation`. One is added when the list is empty. */
  getSupportingInformationFirstRep(): Reference {
    const firstReference = this.getSupportingInformation()[0];
    return firstReference === undefined ? this.addSupportingInformation() : firstReference;
  }

  /** Start and end time of administration (1..1) Whichever type of `effective[x]` is set. */
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

  /** Who administered substance (0..*) Never undefined; an empty list is created when absent. */
  getPerformer(): MedicationAdministrationPerformer[] {
    if (this.performer === undefined) {
      this.performer = [];
    }
    return this.performer;
  }

  setPerformer(performer: MedicationAdministrationPerformer[] | undefined): this {
    return this.setFieldValue('performer', performer);
  }

  hasPerformer(): boolean {
    return this.hasFieldValue('performer');
  }

  /** Appends a new, empty MedicationAdministrationPerformer to `performer` and returns it so it can be filled in. */
  addPerformer(): MedicationAdministrationPerformer;
  /** Appends the given MedicationAdministrationPerformer to `performer` and returns this object for chaining. */
  addPerformer(medicationAdministrationPerformer: MedicationAdministrationPerformer): this;
  addPerformer(
    medicationAdministrationPerformer?: MedicationAdministrationPerformer
  ): MedicationAdministrationPerformer | this {
    if (medicationAdministrationPerformer !== undefined) {
      return this.addFieldValue('performer', medicationAdministrationPerformer);
    }
    const createdMedicationAdministrationPerformer = new MedicationAdministrationPerformer();
    this.addFieldValue('performer', createdMedicationAdministrationPerformer);
    return createdMedicationAdministrationPerformer;
  }

  /** The first MedicationAdministrationPerformer of `performer`. One is added when the list is empty. */
  getPerformerFirstRep(): MedicationAdministrationPerformer {
    const firstMedicationAdministrationPerformer = this.getPerformer()[0];
    return firstMedicationAdministrationPerformer === undefined
      ? this.addPerformer()
      : firstMedicationAdministrationPerformer;
  }

  /** True if medication not administered (0..1) */
  getNotGiven(): boolean | undefined {
    return this.notGiven;
  }

  /** Sets `notGiven`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setNotGiven(notGiven: boolean | undefined): this {
    return this.setFieldValue('notGiven', notGiven);
  }

  hasNotGiven(): boolean {
    return this.hasFieldValue('notGiven');
  }

  /** The element carrying the id and extensions of `notGiven`. Created when absent. */
  getNotGivenElement(): Element {
    if (this._notGiven === undefined) {
      this._notGiven = new Element();
    }
    return this._notGiven;
  }

  setNotGivenElement(notGivenElement: Element | undefined): this {
    this._notGiven = notGivenElement;
    return this;
  }

  /** Reason administration not performed (0..*) Never undefined; an empty list is created when absent. */
  getReasonNotGiven(): CodeableConcept[] {
    if (this.reasonNotGiven === undefined) {
      this.reasonNotGiven = [];
    }
    return this.reasonNotGiven;
  }

  setReasonNotGiven(reasonNotGiven: CodeableConcept[] | undefined): this {
    return this.setFieldValue('reasonNotGiven', reasonNotGiven);
  }

  hasReasonNotGiven(): boolean {
    return this.hasFieldValue('reasonNotGiven');
  }

  /** Appends a new, empty CodeableConcept to `reasonNotGiven` and returns it so it can be filled in. */
  addReasonNotGiven(): CodeableConcept;
  /** Appends the given CodeableConcept to `reasonNotGiven` and returns this object for chaining. */
  addReasonNotGiven(codeableConcept: CodeableConcept): this;
  addReasonNotGiven(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('reasonNotGiven', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('reasonNotGiven', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `reasonNotGiven`. One is added when the list is empty. */
  getReasonNotGivenFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getReasonNotGiven()[0];
    return firstCodeableConcept === undefined ? this.addReasonNotGiven() : firstCodeableConcept;
  }

  /** Reason administration performed (0..*) Never undefined; an empty list is created when absent. */
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

  /** Condition or Observation that supports why the medication was administered (0..*) Never undefined; an empty list is created when absent. */
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

  /** Request administration performed against (0..1) Created when absent. */
  getPrescription(): Reference {
    if (this.prescription === undefined) {
      this.prescription = new Reference();
    }
    return this.prescription;
  }

  setPrescription(prescription: Reference | undefined): this {
    return this.setFieldValue('prescription', prescription);
  }

  hasPrescription(): boolean {
    return this.hasFieldValue('prescription');
  }

  /** Device used to administer (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): Reference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: Reference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty Reference to `device` and returns it so it can be filled in. */
  addDevice(): Reference;
  /** Appends the given Reference to `device` and returns this object for chaining. */
  addDevice(reference: Reference): this;
  addDevice(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('device', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('device', createdReference);
    return createdReference;
  }

  /** The first Reference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): Reference {
    const firstReference = this.getDevice()[0];
    return firstReference === undefined ? this.addDevice() : firstReference;
  }

  /** Information about the administration (0..*) Never undefined; an empty list is created when absent. */
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

  /** Details of how medication was taken (0..1) Created when absent. */
  getDosage(): MedicationAdministrationDosage {
    if (this.dosage === undefined) {
      this.dosage = new MedicationAdministrationDosage();
    }
    return this.dosage;
  }

  setDosage(dosage: MedicationAdministrationDosage | undefined): this {
    return this.setFieldValue('dosage', dosage);
  }

  hasDosage(): boolean {
    return this.hasFieldValue('dosage');
  }

  /** A list of events of interest in the lifecycle (0..*) Never undefined; an empty list is created when absent. */
  getEventHistory(): Reference[] {
    if (this.eventHistory === undefined) {
      this.eventHistory = [];
    }
    return this.eventHistory;
  }

  setEventHistory(eventHistory: Reference[] | undefined): this {
    return this.setFieldValue('eventHistory', eventHistory);
  }

  hasEventHistory(): boolean {
    return this.hasFieldValue('eventHistory');
  }

  /** Appends a new, empty Reference to `eventHistory` and returns it so it can be filled in. */
  addEventHistory(): Reference;
  /** Appends the given Reference to `eventHistory` and returns this object for chaining. */
  addEventHistory(reference: Reference): this;
  addEventHistory(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('eventHistory', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('eventHistory', createdReference);
    return createdReference;
  }

  /** The first Reference of `eventHistory`. One is added when the list is empty. */
  getEventHistoryFirstRep(): Reference {
    const firstReference = this.getEventHistory()[0];
    return firstReference === undefined ? this.addEventHistory() : firstReference;
  }
}

modelTypeRegistry.register('MedicationAdministration', MedicationAdministration, true);

/** True when the value is a MedicationAdministration model instance. */
export function isMedicationAdministration(
  candidate: unknown
): candidate is MedicationAdministration {
  return candidate instanceof MedicationAdministration;
}

/**
 * Who administered substance
 */
export class MedicationAdministrationPerformer extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'actor',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'actor',
          typeCode: 'Reference',
          targetResourceTypes: ['Device', 'Patient', 'Practitioner', 'RelatedPerson'],
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
  ];

  /** Individual who was performing (1..1) */
  actor?: Reference;

  /** Organization organization was acting for (0..1) */
  onBehalfOf?: Reference;

  override fhirType(): string {
    return 'MedicationAdministration.performer';
  }

  /** FHIR JSON for this MedicationAdministrationPerformer, typed as the plain `MedicationAdministrationPerformer` data type. */
  override toJSON(): plainTypes.MedicationAdministrationPerformer {
    return this.serialize() as plainTypes.MedicationAdministrationPerformer;
  }

  /** Individual who was performing (1..1) Created when absent. */
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

  /** Organization organization was acting for (0..1) Created when absent. */
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
}

modelTypeRegistry.register(
  'MedicationAdministrationPerformer',
  MedicationAdministrationPerformer,
  false
);

/**
 * Details of how medication was taken
 */
export class MedicationAdministrationDosage extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'text',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'text', typeCode: 'string' }],
    },
    {
      elementName: 'site',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'site', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'route',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'route', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'method',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'method', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'dose',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'dose', typeCode: 'Quantity' }],
    },
    {
      elementName: 'rate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'rateRatio', typeCode: 'Ratio' },
        { jsonKey: 'rateQuantity', typeCode: 'Quantity' },
      ],
    },
  ];

  /** Free text dosage instructions e.g. SIG (0..1) */
  text?: string;
  /** Id and extensions of the primitive `text`. */
  _text?: Element;

  /** Body site administered to (0..1) */
  site?: CodeableConcept;

  /** Path of substance into body (0..1) */
  route?: CodeableConcept;

  /** How drug was administered (0..1) */
  method?: CodeableConcept;

  /** Amount of medication per dose (0..1) */
  dose?: Quantity;

  /** Dose quantity per unit of time (0..1) */
  rateRatio?: Ratio;
  /** Dose quantity per unit of time (0..1) */
  rateQuantity?: Quantity;

  override fhirType(): string {
    return 'MedicationAdministration.dosage';
  }

  /** FHIR JSON for this MedicationAdministrationDosage, typed as the plain `MedicationAdministrationDosage` data type. */
  override toJSON(): plainTypes.MedicationAdministrationDosage {
    return this.serialize() as plainTypes.MedicationAdministrationDosage;
  }

  /** Free text dosage instructions e.g. SIG (0..1) */
  getText(): string | undefined {
    return this.text;
  }

  /** Sets `text`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setText(text: string | undefined): this {
    return this.setFieldValue('text', text);
  }

  hasText(): boolean {
    return this.hasFieldValue('text');
  }

  /** The element carrying the id and extensions of `text`. Created when absent. */
  getTextElement(): Element {
    if (this._text === undefined) {
      this._text = new Element();
    }
    return this._text;
  }

  setTextElement(textElement: Element | undefined): this {
    this._text = textElement;
    return this;
  }

  /** Body site administered to (0..1) Created when absent. */
  getSite(): CodeableConcept {
    if (this.site === undefined) {
      this.site = new CodeableConcept();
    }
    return this.site;
  }

  setSite(site: CodeableConcept | undefined): this {
    return this.setFieldValue('site', site);
  }

  hasSite(): boolean {
    return this.hasFieldValue('site');
  }

  /** Path of substance into body (0..1) Created when absent. */
  getRoute(): CodeableConcept {
    if (this.route === undefined) {
      this.route = new CodeableConcept();
    }
    return this.route;
  }

  setRoute(route: CodeableConcept | undefined): this {
    return this.setFieldValue('route', route);
  }

  hasRoute(): boolean {
    return this.hasFieldValue('route');
  }

  /** How drug was administered (0..1) Created when absent. */
  getMethod(): CodeableConcept {
    if (this.method === undefined) {
      this.method = new CodeableConcept();
    }
    return this.method;
  }

  setMethod(method: CodeableConcept | undefined): this {
    return this.setFieldValue('method', method);
  }

  hasMethod(): boolean {
    return this.hasFieldValue('method');
  }

  /** Amount of medication per dose (0..1) Created when absent. */
  getDose(): Quantity {
    if (this.dose === undefined) {
      this.dose = new Quantity();
    }
    return this.dose;
  }

  setDose(dose: Quantity | undefined): this {
    return this.setFieldValue('dose', dose);
  }

  hasDose(): boolean {
    return this.hasFieldValue('dose');
  }

  /** Dose quantity per unit of time (0..1) Whichever type of `rate[x]` is set. */
  getRate(): Ratio | Quantity | undefined {
    return this.getChoiceValue<Ratio | Quantity>('rate');
  }

  /** True when any type of `rate[x]` is set. */
  hasRate(): boolean {
    return this.hasChoiceValue('rate');
  }

  getRateRatio(): Ratio | undefined {
    return this.rateRatio;
  }

  /** Sets `rate[x]` as Ratio and clears every other type of it. */
  setRateRatio(rateRatio: Ratio | undefined): this {
    return this.setFieldValue('rateRatio', rateRatio);
  }

  hasRateRatio(): boolean {
    return this.hasFieldValue('rateRatio');
  }

  getRateQuantity(): Quantity | undefined {
    return this.rateQuantity;
  }

  /** Sets `rate[x]` as Quantity and clears every other type of it. */
  setRateQuantity(rateQuantity: Quantity | undefined): this {
    return this.setFieldValue('rateQuantity', rateQuantity);
  }

  hasRateQuantity(): boolean {
    return this.hasFieldValue('rateQuantity');
  }
}

modelTypeRegistry.register('MedicationAdministrationDosage', MedicationAdministrationDosage, false);
