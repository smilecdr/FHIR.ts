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
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Quantity } from './quantity';
import { Ratio } from './ratio';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * Describes the event of a patient consuming or otherwise being administered a medication. This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. This event can also be used to record waste using a status of not-done and the appropriate statusReason.
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
      elementName: 'basedOn',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'basedOn', typeCode: 'Reference', targetResourceTypes: ['CarePlan'] }],
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
          targetResourceTypes: ['MedicationAdministration', 'MedicationDispense', 'Procedure'],
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
          allowedCodes: valueSetCodes.MedicationAdministrationStatusCodes,
        },
      ],
    },
    {
      elementName: 'statusReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'statusReason', typeCode: 'CodeableConcept' }],
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
      elementName: 'supportingInformation',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'supportingInformation', typeCode: 'Reference' }],
    },
    {
      elementName: 'occurence',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'occurenceDateTime', typeCode: 'dateTime' },
        { jsonKey: 'occurencePeriod', typeCode: 'Period' },
        { jsonKey: 'occurenceTiming', typeCode: 'Timing' },
      ],
    },
    {
      elementName: 'recorded',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recorded', typeCode: 'dateTime' }],
    },
    {
      elementName: 'isSubPotent',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'isSubPotent', typeCode: 'boolean' }],
    },
    {
      elementName: 'subPotentReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'subPotentReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'performer',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'performer', typeCode: 'MedicationAdministrationPerformer' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'request',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'request', typeCode: 'Reference', targetResourceTypes: ['MedicationRequest'] },
      ],
    },
    {
      elementName: 'device',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'device', typeCode: 'CodeableReference' }],
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

  /** Plan this is fulfilled by this administration (0..*) */
  basedOn?: Reference[];

  /** Part of referenced event (0..*) */
  partOf?: Reference[];

  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown (1..1) */
  status?: valueSetCodes.MedicationAdministrationStatusCodes;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Reason administration not performed (0..*) */
  statusReason?: CodeableConcept[];

  /** Type of medication administration (0..*) */
  category?: CodeableConcept[];

  /** What was administered (1..1) */
  medication?: CodeableReference;

  /** Who received medication (1..1) */
  subject?: Reference;

  /** Encounter administered as part of (0..1) */
  encounter?: Reference;

  /** Additional information to support administration (0..*) */
  supportingInformation?: Reference[];

  /** Specific date/time or interval of time during which the administration took place (or did not take place) (1..1) */
  occurenceDateTime?: string;
  /** Id and extensions of the primitive `occurenceDateTime`. */
  _occurenceDateTime?: Element;
  /** Specific date/time or interval of time during which the administration took place (or did not take place) (1..1) */
  occurencePeriod?: Period;
  /** Specific date/time or interval of time during which the administration took place (or did not take place) (1..1) */
  occurenceTiming?: Timing;

  /** When the MedicationAdministration was first captured in the subject's record (0..1) */
  recorded?: string;
  /** Id and extensions of the primitive `recorded`. */
  _recorded?: Element;

  /** Full dose was not administered (0..1) */
  isSubPotent?: boolean;
  /** Id and extensions of the primitive `isSubPotent`. */
  _isSubPotent?: Element;

  /** Reason full dose was not administered (0..*) */
  subPotentReason?: CodeableConcept[];

  /** Who or what performed the medication administration and what type of performance they did (0..*) */
  performer?: MedicationAdministrationPerformer[];

  /** Concept, condition or observation that supports why the medication was administered (0..*) */
  reason?: CodeableReference[];

  /** Request administration performed against (0..1) */
  request?: Reference;

  /** Device used to administer (0..*) */
  device?: CodeableReference[];

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

  /** Plan this is fulfilled by this administration (0..*) Never undefined; an empty list is created when absent. */
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

  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown (1..1) */
  getStatus(): valueSetCodes.MedicationAdministrationStatusCodes | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.MedicationAdministrationStatusCodes | undefined): this {
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

  /** Reason administration not performed (0..*) Never undefined; an empty list is created when absent. */
  getStatusReason(): CodeableConcept[] {
    if (this.statusReason === undefined) {
      this.statusReason = [];
    }
    return this.statusReason;
  }

  setStatusReason(statusReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('statusReason', statusReason);
  }

  hasStatusReason(): boolean {
    return this.hasFieldValue('statusReason');
  }

  /** Appends a new, empty CodeableConcept to `statusReason` and returns it so it can be filled in. */
  addStatusReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `statusReason` and returns this object for chaining. */
  addStatusReason(codeableConcept: CodeableConcept): this;
  addStatusReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('statusReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('statusReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `statusReason`. One is added when the list is empty. */
  getStatusReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getStatusReason()[0];
    return firstCodeableConcept === undefined ? this.addStatusReason() : firstCodeableConcept;
  }

  /** Type of medication administration (0..*) Never undefined; an empty list is created when absent. */
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

  /** What was administered (1..1) Created when absent. */
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

  /** Encounter administered as part of (0..1) Created when absent. */
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

  /** Specific date/time or interval of time during which the administration took place (or did not take place) (1..1) Whichever type of `occurence[x]` is set. */
  getOccurence(): string | Period | Timing | undefined {
    return this.getChoiceValue<string | Period | Timing>('occurence');
  }

  /** True when any type of `occurence[x]` is set. */
  hasOccurence(): boolean {
    return this.hasChoiceValue('occurence');
  }

  getOccurenceDateTime(): string | undefined {
    return this.occurenceDateTime;
  }

  /** Sets `occurence[x]` as dateTime and clears every other type of it. */
  setOccurenceDateTime(occurenceDateTime: string | undefined): this {
    return this.setFieldValue('occurenceDateTime', occurenceDateTime);
  }

  hasOccurenceDateTime(): boolean {
    return this.hasFieldValue('occurenceDateTime');
  }

  getOccurencePeriod(): Period | undefined {
    return this.occurencePeriod;
  }

  /** Sets `occurence[x]` as Period and clears every other type of it. */
  setOccurencePeriod(occurencePeriod: Period | undefined): this {
    return this.setFieldValue('occurencePeriod', occurencePeriod);
  }

  hasOccurencePeriod(): boolean {
    return this.hasFieldValue('occurencePeriod');
  }

  getOccurenceTiming(): Timing | undefined {
    return this.occurenceTiming;
  }

  /** Sets `occurence[x]` as Timing and clears every other type of it. */
  setOccurenceTiming(occurenceTiming: Timing | undefined): this {
    return this.setFieldValue('occurenceTiming', occurenceTiming);
  }

  hasOccurenceTiming(): boolean {
    return this.hasFieldValue('occurenceTiming');
  }

  /** When the MedicationAdministration was first captured in the subject's record (0..1) */
  getRecorded(): string | undefined {
    return this.recorded;
  }

  /** Sets `recorded`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRecorded(recorded: string | undefined): this {
    return this.setFieldValue('recorded', recorded);
  }

  hasRecorded(): boolean {
    return this.hasFieldValue('recorded');
  }

  /** The element carrying the id and extensions of `recorded`. Created when absent. */
  getRecordedElement(): Element {
    if (this._recorded === undefined) {
      this._recorded = new Element();
    }
    return this._recorded;
  }

  setRecordedElement(recordedElement: Element | undefined): this {
    this._recorded = recordedElement;
    return this;
  }

  /** Full dose was not administered (0..1) */
  getIsSubPotent(): boolean | undefined {
    return this.isSubPotent;
  }

  /** Sets `isSubPotent`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setIsSubPotent(isSubPotent: boolean | undefined): this {
    return this.setFieldValue('isSubPotent', isSubPotent);
  }

  hasIsSubPotent(): boolean {
    return this.hasFieldValue('isSubPotent');
  }

  /** The element carrying the id and extensions of `isSubPotent`. Created when absent. */
  getIsSubPotentElement(): Element {
    if (this._isSubPotent === undefined) {
      this._isSubPotent = new Element();
    }
    return this._isSubPotent;
  }

  setIsSubPotentElement(isSubPotentElement: Element | undefined): this {
    this._isSubPotent = isSubPotentElement;
    return this;
  }

  /** Reason full dose was not administered (0..*) Never undefined; an empty list is created when absent. */
  getSubPotentReason(): CodeableConcept[] {
    if (this.subPotentReason === undefined) {
      this.subPotentReason = [];
    }
    return this.subPotentReason;
  }

  setSubPotentReason(subPotentReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('subPotentReason', subPotentReason);
  }

  hasSubPotentReason(): boolean {
    return this.hasFieldValue('subPotentReason');
  }

  /** Appends a new, empty CodeableConcept to `subPotentReason` and returns it so it can be filled in. */
  addSubPotentReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `subPotentReason` and returns this object for chaining. */
  addSubPotentReason(codeableConcept: CodeableConcept): this;
  addSubPotentReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('subPotentReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('subPotentReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `subPotentReason`. One is added when the list is empty. */
  getSubPotentReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSubPotentReason()[0];
    return firstCodeableConcept === undefined ? this.addSubPotentReason() : firstCodeableConcept;
  }

  /** Who or what performed the medication administration and what type of performance they did (0..*) Never undefined; an empty list is created when absent. */
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

  /** Concept, condition or observation that supports why the medication was administered (0..*) Never undefined; an empty list is created when absent. */
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

  /** Request administration performed against (0..1) Created when absent. */
  getRequest(): Reference {
    if (this.request === undefined) {
      this.request = new Reference();
    }
    return this.request;
  }

  setRequest(request: Reference | undefined): this {
    return this.setFieldValue('request', request);
  }

  hasRequest(): boolean {
    return this.hasFieldValue('request');
  }

  /** Device used to administer (0..*) Never undefined; an empty list is created when absent. */
  getDevice(): CodeableReference[] {
    if (this.device === undefined) {
      this.device = [];
    }
    return this.device;
  }

  setDevice(device: CodeableReference[] | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Appends a new, empty CodeableReference to `device` and returns it so it can be filled in. */
  addDevice(): CodeableReference;
  /** Appends the given CodeableReference to `device` and returns this object for chaining. */
  addDevice(codeableReference: CodeableReference): this;
  addDevice(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('device', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('device', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `device`. One is added when the list is empty. */
  getDeviceFirstRep(): CodeableReference {
    const firstCodeableReference = this.getDevice()[0];
    return firstCodeableReference === undefined ? this.addDevice() : firstCodeableReference;
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
 * Who or what performed the medication administration and what type of performance they did
 */
export class MedicationAdministrationPerformer extends BackboneElement {
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
      types: [{ jsonKey: 'actor', typeCode: 'CodeableReference' }],
    },
  ];

  /** Type of performance (0..1) */
  function?: CodeableConcept;

  /** Who or what performed the medication administration (1..1) */
  actor?: CodeableReference;

  override fhirType(): string {
    return 'MedicationAdministration.performer';
  }

  /** FHIR JSON for this MedicationAdministrationPerformer, typed as the plain `MedicationAdministrationPerformer` data type. */
  override toJSON(): plainTypes.MedicationAdministrationPerformer {
    return this.serialize() as plainTypes.MedicationAdministrationPerformer;
  }

  /** Type of performance (0..1) Created when absent. */
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

  /** Who or what performed the medication administration (1..1) Created when absent. */
  getActor(): CodeableReference {
    if (this.actor === undefined) {
      this.actor = new CodeableReference();
    }
    return this.actor;
  }

  setActor(actor: CodeableReference | undefined): this {
    return this.setFieldValue('actor', actor);
  }

  hasActor(): boolean {
    return this.hasFieldValue('actor');
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
