/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { Annotation } from './annotation';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';
import { Timing } from './timing';

/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement extends DomainResource {
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
        {
          jsonKey: 'status',
          typeCode: 'code',
          allowedCodes: valueSetCodes.DeviceUseStatementStatus,
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
      elementName: 'recordedOn',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'recordedOn', typeCode: 'dateTime' }],
    },
    {
      elementName: 'source',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        {
          jsonKey: 'source',
          typeCode: 'Reference',
          targetResourceTypes: ['Patient', 'Practitioner', 'PractitionerRole', 'RelatedPerson'],
        },
      ],
    },
    {
      elementName: 'device',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'device', typeCode: 'Reference', targetResourceTypes: ['Device'] }],
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
            'Condition',
            'DiagnosticReport',
            'DocumentReference',
            'Media',
            'Observation',
          ],
        },
      ],
    },
    {
      elementName: 'bodySite',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'bodySite', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'note',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'note', typeCode: 'Annotation' }],
    },
  ];

  readonly resourceType = 'DeviceUseStatement';

  /** External identifier for this record (0..*) */
  identifier?: Identifier[];

  /** Fulfills plan, proposal or order (0..*) */
  basedOn?: Reference[];

  /** active | completed | entered-in-error + (1..1) */
  status?: valueSetCodes.DeviceUseStatementStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Patient using device (1..1) */
  subject?: Reference;

  /** Supporting information (0..*) */
  derivedFrom?: Reference[];

  /** How often the device was used (0..1) */
  timingTiming?: Timing;
  /** How often the device was used (0..1) */
  timingPeriod?: Period;
  /** How often the device was used (0..1) */
  timingDateTime?: string;
  /** Id and extensions of the primitive `timingDateTime`. */
  _timingDateTime?: Element;

  /** When statement was recorded (0..1) */
  recordedOn?: string;
  /** Id and extensions of the primitive `recordedOn`. */
  _recordedOn?: Element;

  /** Who made the statement (0..1) */
  source?: Reference;

  /** Reference to device used (1..1) */
  device?: Reference;

  /** Why device was used (0..*) */
  reasonCode?: CodeableConcept[];

  /** Why was DeviceUseStatement performed? (0..*) */
  reasonReference?: Reference[];

  /** Target body site (0..1) */
  bodySite?: CodeableConcept;

  /** Addition details (comments, instructions) (0..*) */
  note?: Annotation[];

  override fhirType(): string {
    return 'DeviceUseStatement';
  }

  /** FHIR JSON for this DeviceUseStatement, typed as the plain `DeviceUseStatement` data type. */
  override toJSON(): plainTypes.DeviceUseStatement {
    return this.serialize() as plainTypes.DeviceUseStatement;
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

  /** active | completed | entered-in-error + (1..1) */
  getStatus(): valueSetCodes.DeviceUseStatementStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.DeviceUseStatementStatus | undefined): this {
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

  /** Patient using device (1..1) Created when absent. */
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

  /** When statement was recorded (0..1) */
  getRecordedOn(): string | undefined {
    return this.recordedOn;
  }

  /** Sets `recordedOn`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setRecordedOn(recordedOn: string | undefined): this {
    return this.setFieldValue('recordedOn', recordedOn);
  }

  hasRecordedOn(): boolean {
    return this.hasFieldValue('recordedOn');
  }

  /** The element carrying the id and extensions of `recordedOn`. Created when absent. */
  getRecordedOnElement(): Element {
    if (this._recordedOn === undefined) {
      this._recordedOn = new Element();
    }
    return this._recordedOn;
  }

  setRecordedOnElement(recordedOnElement: Element | undefined): this {
    this._recordedOn = recordedOnElement;
    return this;
  }

  /** Who made the statement (0..1) Created when absent. */
  getSource(): Reference {
    if (this.source === undefined) {
      this.source = new Reference();
    }
    return this.source;
  }

  setSource(source: Reference | undefined): this {
    return this.setFieldValue('source', source);
  }

  hasSource(): boolean {
    return this.hasFieldValue('source');
  }

  /** Reference to device used (1..1) Created when absent. */
  getDevice(): Reference {
    if (this.device === undefined) {
      this.device = new Reference();
    }
    return this.device;
  }

  setDevice(device: Reference | undefined): this {
    return this.setFieldValue('device', device);
  }

  hasDevice(): boolean {
    return this.hasFieldValue('device');
  }

  /** Why device was used (0..*) Never undefined; an empty list is created when absent. */
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

  /** Why was DeviceUseStatement performed? (0..*) Never undefined; an empty list is created when absent. */
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

  /** Target body site (0..1) Created when absent. */
  getBodySite(): CodeableConcept {
    if (this.bodySite === undefined) {
      this.bodySite = new CodeableConcept();
    }
    return this.bodySite;
  }

  setBodySite(bodySite: CodeableConcept | undefined): this {
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

modelTypeRegistry.register('DeviceUseStatement', DeviceUseStatement, true);

/** True when the value is a DeviceUseStatement model instance. */
export function isDeviceUseStatement(candidate: unknown): candidate is DeviceUseStatement {
  return candidate instanceof DeviceUseStatement;
}
