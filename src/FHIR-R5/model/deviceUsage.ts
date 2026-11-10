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
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.
 */
export class DeviceUsage extends DomainResource {
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
        { jsonKey: 'basedOn', typeCode: 'Reference', targetResourceTypes: ['ServiceRequest'] },
      ],
    },
    {
      elementName: 'status',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.DeviceUsageStatus },
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
      elementName: 'patient',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'patient', typeCode: 'Reference', targetResourceTypes: ['Patient'] }],
    },
    {
      elementName: 'derivedFrom',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'derivedFrom',
          typeCode: 'Reference',
          targetResourceTypes: [
            'Claim',
            'DocumentReference',
            'Observation',
            'Procedure',
            'QuestionnaireResponse',
            'ServiceRequest',
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
      elementName: 'timing',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'timingTiming', typeCode: 'Timing' },
        { jsonKey: 'timingPeriod', typeCode: 'Period' },
        { jsonKey: 'timingDateTime', typeCode: 'dateTime' },
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
      elementName: 'usageStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'usageStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'usageReason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'usageReason', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'adherence',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'adherence', typeCode: 'DeviceUsageAdherence' }],
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
      elementName: 'device',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'device', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'reason',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableReference' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'DeviceUsage';

  /** External identifier for this record (0..*) */
  identifier?: Identifier[];

  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Reference[];

  /** active | completed | not-done | entered-in-error + (1..1) */
  status?: valueSetCodes.DeviceUsageStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** The category of the statement - classifying how the statement is made (0..*) */
  category?: CodeableConcept[];

  /** Patient using device (1..1) */
  patient?: Reference;

  /** Supporting information (0..*) */
  derivedFrom?: Reference[];

  /** The encounter or episode of care that establishes the context for this device use statement (0..1) */
  context?: Reference;

  /** How often the device was used (0..1) */
  timingTiming?: Timing;
  /** How often the device was used (0..1) */
  timingPeriod?: Period;
  /** How often the device was used (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;

  /** When the statement was made (and recorded) (0..1) */
  dateAsserted?: string;
  /** Id and extensions of the primitive `dateAsserted`. */
  _dateAsserted?: Element;

  /** The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement (0..1) */
  usageStatus?: CodeableConcept;

  /** The reason for asserting the usage status - for example forgot, lost, stolen, broken (0..*) */
  usageReason?: CodeableConcept[];

  /** How device is being used (0..1) */
  adherence?: DeviceUsageAdherence;

  /** Who made the statement (0..1) */
  informationSource?: Reference;

  /** Code or Reference to device used (1..1) */
  device?: CodeableReference;

  /** Why device was used (0..*) */
  reason?: CodeableReference[];

  /** Target body site (0..1) */
  bodySite?: CodeableReference;

  /** Addition details (comments, instructions) (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'DeviceUsage';
  }

  /** FHIR JSON for this DeviceUsage, typed as the plain `DeviceUsage` data type. */
  override toJSON(): plainTypes.DeviceUsage {
    return this.serialize() as plainTypes.DeviceUsage;
  }

  /** External identifier for this record (0..*) Never undefined; an empty list is created when absent. */
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

  /** Fulfills plan, proposal or order (0..*) Never undefined; an empty list is created when absent. */
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

  /** active | completed | not-done | entered-in-error + (1..1) */
  getStatus(): valueSetCodes.DeviceUsageStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.DeviceUsageStatus | undefined): this {
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

  /** The category of the statement - classifying how the statement is made (0..*) Never undefined; an empty list is created when absent. */
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

  /** Patient using device (1..1) Created when absent. */
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

  /** Supporting information (0..*) Never undefined; an empty list is created when absent. */
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

  /** The encounter or episode of care that establishes the context for this device use statement (0..1) Created when absent. */
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

  /** How often the device was used (0..1) Whichever type of `timing[x]` is set. */
  getTiming(): Timing | Period | string | undefined {
    return this.getChoiceValue<Timing | Period | string>('timing');
  }

  /** True when any type of `timing[x]` is set. */
  hasTiming(): boolean {
    return this.hasChoiceValue('timing');
  }

  getTimingTiming(): Timing | undefined {
    return this.timingTiming;
  }

  /** Sets `timing[x]` as Timing and clears every other type of it. */
  setTimingTiming(timingTiming: Timing | undefined): this {
    return this.setFieldValue('timingTiming', timingTiming);
  }

  hasTimingTiming(): boolean {
    return this.hasFieldValue('timingTiming');
  }

  getTimingPeriod(): Period | undefined {
    return this.timingPeriod;
  }

  /** Sets `timing[x]` as Period and clears every other type of it. */
  setTimingPeriod(timingPeriod: Period | undefined): this {
    return this.setFieldValue('timingPeriod', timingPeriod);
  }

  hasTimingPeriod(): boolean {
    return this.hasFieldValue('timingPeriod');
  }

  getTimingDateTime(): string | undefined {
    return this.timingDateTime;
  }

  /** Sets `timing[x]` as dateTime and clears every other type of it. */
  setTimingDateTime(timingDateTime: string | undefined): this {
    return this.setFieldValue('timingDateTime', timingDateTime);
  }

  hasTimingDateTime(): boolean {
    return this.hasFieldValue('timingDateTime');
  }

  /** When the statement was made (and recorded) (0..1) */
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

  /** The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement (0..1) Created when absent. */
  getUsageStatus(): CodeableConcept {
    if (this.usageStatus === undefined) {
      this.usageStatus = new CodeableConcept();
    }
    return this.usageStatus;
  }

  setUsageStatus(usageStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('usageStatus', usageStatus);
  }

  hasUsageStatus(): boolean {
    return this.hasFieldValue('usageStatus');
  }

  /** The reason for asserting the usage status - for example forgot, lost, stolen, broken (0..*) Never undefined; an empty list is created when absent. */
  getUsageReason(): CodeableConcept[] {
    if (this.usageReason === undefined) {
      this.usageReason = [];
    }
    return this.usageReason;
  }

  setUsageReason(usageReason: CodeableConcept[] | undefined): this {
    return this.setFieldValue('usageReason', usageReason);
  }

  hasUsageReason(): boolean {
    return this.hasFieldValue('usageReason');
  }

  /** Appends a new, empty CodeableConcept to `usageReason` and returns it so it can be filled in. */
  addUsageReason(): CodeableConcept;
  /** Appends the given CodeableConcept to `usageReason` and returns this object for chaining. */
  addUsageReason(codeableConcept: CodeableConcept): this;
  addUsageReason(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('usageReason', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('usageReason', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `usageReason`. One is added when the list is empty. */
  getUsageReasonFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getUsageReason()[0];
    return firstCodeableConcept === undefined ? this.addUsageReason() : firstCodeableConcept;
  }

  /** How device is being used (0..1) Created when absent. */
  getAdherence(): DeviceUsageAdherence {
    if (this.adherence === undefined) {
      this.adherence = new DeviceUsageAdherence();
    }
    return this.adherence;
  }

  setAdherence(adherence: DeviceUsageAdherence | undefined): this {
    return this.setFieldValue('adherence', adherence);
  }

  hasAdherence(): boolean {
    return this.hasFieldValue('adherence');
  }

  /** Who made the statement (0..1) Created when absent. */
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

  /** Code or Reference to device used (1..1) Created when absent. */
  getDevice(): CodeableReference {
    if (this.device === undefined) {
      this.device = new CodeableReference();
    }
    return this.device;
  }

  setDevice(device: CodeableReference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Why device was used (0..*) Never undefined; an empty list is created when absent. */
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

  /** Target body site (0..1) Created when absent. */
  getBodySite(): CodeableReference {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableReference();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableReference | undefined): this {
    return this.setFieldValue('bodySite', bodySite);
  }

  hasBodySite(): boolean {
    return this.hasFieldValue('bodySite');
  }

  /** Addition details (comments, instructions) (0..*) Never undefined; an empty list is created when absent. */
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

modelTypeRegistry.register('DeviceUsage', DeviceUsage, true);

/** True when the value is a DeviceUsage model instance. */
export function isDeviceUsage(candidate: unknown): candidate is DeviceUsage {
  return candidate instanceof DeviceUsage;
}

/**
 * How device is being used
 */
export class DeviceUsageAdherence extends BackboneElement {
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
      minimum: 1,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'reason', typeCode: 'CodeableConcept' }],
    },
  ];

  /** always | never | sometimes (1..1) */
  code?: CodeableConcept;

  /** lost | stolen | prescribed | broken | burned | forgot (1..*) */
  reason?: CodeableConcept[];

  override fhirType(): string {
    return 'DeviceUsage.adherence';
  }

  /** FHIR JSON for this DeviceUsageAdherence, typed as the plain `DeviceUsageAdherence` data type. */
  override toJSON(): plainTypes.DeviceUsageAdherence {
    return this.serialize() as plainTypes.DeviceUsageAdherence;
  }

  /** always | never | sometimes (1..1) Created when absent. */
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

  /** lost | stolen | prescribed | broken | burned | forgot (1..*) Never undefined; an empty list is created when absent. */
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
}

modelTypeRegistry.register('DeviceUsageAdherence', DeviceUsageAdherence, false);
