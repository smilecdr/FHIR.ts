/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../models';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { DomainResource } from './domainResource';
import { Duration } from './duration';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A record of significant events/milestones key data throughout the history of an Encounter
 */
export class EncounterHistory extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'encounter',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'encounter', typeCode: 'Reference', targetResourceTypes: ['Encounter'] }],
    },
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
      types: [{ jsonKey: 'status', typeCode: 'code', allowedCodes: valueSetCodes.EncounterStatus }],
    },
    {
      elementName: 'class',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'class', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'type',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'type', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'serviceType',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'serviceType', typeCode: 'CodeableReference' }],
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
      elementName: 'subjectStatus',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'subjectStatus', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'actualPeriod',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'actualPeriod', typeCode: 'Period' }],
    },
    {
      elementName: 'plannedStartDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'plannedStartDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'plannedEndDate',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'plannedEndDate', typeCode: 'dateTime' }],
    },
    {
      elementName: 'length',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'length', typeCode: 'Duration' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'location', typeCode: 'EncounterHistoryLocation' }],
    },
  ];

  readonly resourceType = 'EncounterHistory';

  /** The Encounter associated with this set of historic values (0..1) */
  encounter?: Reference;

  /** Identifier(s) by which this encounter is known (0..*) */
  identifier?: Identifier[];

  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown (1..1) */
  status?: valueSetCodes.EncounterStatus;
  /** Id and extensions of the primitive `status`. */
  _status?: Element;

  /** Classification of patient encounter (1..1) */
  class?: CodeableConcept;

  /** Specific type of encounter (0..*) */
  type?: CodeableConcept[];

  /** Specific type of service (0..*) */
  serviceType?: CodeableReference[];

  /** The patient or group related to this encounter (0..1) */
  subject?: Reference;

  /** The current status of the subject in relation to the Encounter (0..1) */
  subjectStatus?: CodeableConcept;

  /** The actual start and end time associated with this set of values associated with the encounter (0..1) */
  actualPeriod?: Period;

  /** The planned start date/time (or admission date) of the encounter (0..1) */
  plannedStartDate?: string;
  /** Id and extensions of the primitive `plannedStartDate`. */
  _plannedStartDate?: Element;

  /** The planned end date/time (or discharge date) of the encounter (0..1) */
  plannedEndDate?: string;
  /** Id and extensions of the primitive `plannedEndDate`. */
  _plannedEndDate?: Element;

  /** Actual quantity of time the encounter lasted (less time absent) (0..1) */
  length?: Duration;

  /** Location of the patient at this point in the encounter (0..*) */
  location?: EncounterHistoryLocation[];

  override fhirType(): string {
    return 'EncounterHistory';
  }

  /** FHIR JSON for this EncounterHistory, typed as the plain `EncounterHistory` data type. */
  override toJSON(): plainTypes.EncounterHistory {
    return this.serialize() as plainTypes.EncounterHistory;
  }

  /** The Encounter associated with this set of historic values (0..1) Created when absent. */
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

  /** Identifier(s) by which this encounter is known (0..*) Never undefined; an empty list is created when absent. */
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

  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown (1..1) */
  getStatus(): valueSetCodes.EncounterStatus | undefined {
    return this.status;
  }

  /** Sets `status`. Throws a FhirModelError when the value is not a valid FHIR code or is outside the required value set. */
  setStatus(status: valueSetCodes.EncounterStatus | undefined): this {
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

  /** Classification of patient encounter (1..1) Created when absent. */
  getClass(): CodeableConcept {
    if (this.class === undefined) {
      this.class = new CodeableConcept();
    }
    return this.class;
  }

  setClass(classValue: CodeableConcept | undefined): this {
    return this.setFieldValue('class', classValue);
  }

  hasClass(): boolean {
    return this.hasFieldValue('class');
  }

  /** Specific type of encounter (0..*) Never undefined; an empty list is created when absent. */
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

  /** Specific type of service (0..*) Never undefined; an empty list is created when absent. */
  getServiceType(): CodeableReference[] {
    if (this.serviceType === undefined) {
      this.serviceType = [];
    }
    return this.serviceType;
  }

  setServiceType(serviceType: CodeableReference[] | undefined): this {
    return this.setFieldValue('serviceType', serviceType);
  }

  hasServiceType(): boolean {
    return this.hasFieldValue('serviceType');
  }

  /** Appends a new, empty CodeableReference to `serviceType` and returns it so it can be filled in. */
  addServiceType(): CodeableReference;
  /** Appends the given CodeableReference to `serviceType` and returns this object for chaining. */
  addServiceType(codeableReference: CodeableReference): this;
  addServiceType(codeableReference?: CodeableReference): CodeableReference | this {
    if (codeableReference !== undefined) {
      return this.addFieldValue('serviceType', codeableReference);
    }
    const createdCodeableReference = new CodeableReference();
    this.addFieldValue('serviceType', createdCodeableReference);
    return createdCodeableReference;
  }

  /** The first CodeableReference of `serviceType`. One is added when the list is empty. */
  getServiceTypeFirstRep(): CodeableReference {
    const firstCodeableReference = this.getServiceType()[0];
    return firstCodeableReference === undefined ? this.addServiceType() : firstCodeableReference;
  }

  /** The patient or group related to this encounter (0..1) Created when absent. */
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

  /** The current status of the subject in relation to the Encounter (0..1) Created when absent. */
  getSubjectStatus(): CodeableConcept {
    if (this.subjectStatus === undefined) {
      this.subjectStatus = new CodeableConcept();
    }
    return this.subjectStatus;
  }

  setSubjectStatus(subjectStatus: CodeableConcept | undefined): this {
    return this.setFieldValue('subjectStatus', subjectStatus);
  }

  hasSubjectStatus(): boolean {
    return this.hasFieldValue('subjectStatus');
  }

  /** The actual start and end time associated with this set of values associated with the encounter (0..1) Created when absent. */
  getActualPeriod(): Period {
    if (this.actualPeriod === undefined) {
      this.actualPeriod = new Period();
    }
    return this.actualPeriod;
  }

  setActualPeriod(actualPeriod: Period | undefined): this {
    return this.setFieldValue('actualPeriod', actualPeriod);
  }

  hasActualPeriod(): boolean {
    return this.hasFieldValue('actualPeriod');
  }

  /** The planned start date/time (or admission date) of the encounter (0..1) */
  getPlannedStartDate(): string | undefined {
    return this.plannedStartDate;
  }

  /** Sets `plannedStartDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPlannedStartDate(plannedStartDate: string | undefined): this {
    return this.setFieldValue('plannedStartDate', plannedStartDate);
  }

  hasPlannedStartDate(): boolean {
    return this.hasFieldValue('plannedStartDate');
  }

  /** The element carrying the id and extensions of `plannedStartDate`. Created when absent. */
  getPlannedStartDateElement(): Element {
    if (this._plannedStartDate === undefined) {
      this._plannedStartDate = new Element();
    }
    return this._plannedStartDate;
  }

  setPlannedStartDateElement(plannedStartDateElement: Element | undefined): this {
    this._plannedStartDate = plannedStartDateElement;
    return this;
  }

  /** The planned end date/time (or discharge date) of the encounter (0..1) */
  getPlannedEndDate(): string | undefined {
    return this.plannedEndDate;
  }

  /** Sets `plannedEndDate`. Throws a FhirModelError when the value is not a valid FHIR dateTime. */
  setPlannedEndDate(plannedEndDate: string | undefined): this {
    return this.setFieldValue('plannedEndDate', plannedEndDate);
  }

  hasPlannedEndDate(): boolean {
    return this.hasFieldValue('plannedEndDate');
  }

  /** The element carrying the id and extensions of `plannedEndDate`. Created when absent. */
  getPlannedEndDateElement(): Element {
    if (this._plannedEndDate === undefined) {
      this._plannedEndDate = new Element();
    }
    return this._plannedEndDate;
  }

  setPlannedEndDateElement(plannedEndDateElement: Element | undefined): this {
    this._plannedEndDate = plannedEndDateElement;
    return this;
  }

  /** Actual quantity of time the encounter lasted (less time absent) (0..1) Created when absent. */
  getLength(): Duration {
    if (this.length === undefined) {
      this.length = new Duration();
    }
    return this.length;
  }

  setLength(length: Duration | undefined): this {
    return this.setFieldValue('length', length);
  }

  hasLength(): boolean {
    return this.hasFieldValue('length');
  }

  /** Location of the patient at this point in the encounter (0..*) Never undefined; an empty list is created when absent. */
  getLocation(): EncounterHistoryLocation[] {
    if (this.location === undefined) {
      this.location = [];
    }
    return this.location;
  }

  setLocation(location: EncounterHistoryLocation[] | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Appends a new, empty EncounterHistoryLocation to `location` and returns it so it can be filled in. */
  addLocation(): EncounterHistoryLocation;
  /** Appends the given EncounterHistoryLocation to `location` and returns this object for chaining. */
  addLocation(encounterHistoryLocation: EncounterHistoryLocation): this;
  addLocation(
    encounterHistoryLocation?: EncounterHistoryLocation
  ): EncounterHistoryLocation | this {
    if (encounterHistoryLocation !== undefined) {
      return this.addFieldValue('location', encounterHistoryLocation);
    }
    const createdEncounterHistoryLocation = new EncounterHistoryLocation();
    this.addFieldValue('location', createdEncounterHistoryLocation);
    return createdEncounterHistoryLocation;
  }

  /** The first EncounterHistoryLocation of `location`. One is added when the list is empty. */
  getLocationFirstRep(): EncounterHistoryLocation {
    const firstEncounterHistoryLocation = this.getLocation()[0];
    return firstEncounterHistoryLocation === undefined
      ? this.addLocation()
      : firstEncounterHistoryLocation;
  }
}

modelTypeRegistry.register('EncounterHistory', EncounterHistory, true);

/** True when the value is a EncounterHistory model instance. */
export function isEncounterHistory(candidate: unknown): candidate is EncounterHistory {
  return candidate instanceof EncounterHistory;
}

/**
 * Location of the patient at this point in the encounter
 */
export class EncounterHistoryLocation extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'location',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'form',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'form', typeCode: 'CodeableConcept' }],
    },
  ];

  /** Location the encounter takes place (1..1) */
  location?: Reference;

  /** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.) (0..1) */
  form?: CodeableConcept;

  override fhirType(): string {
    return 'EncounterHistory.location';
  }

  /** FHIR JSON for this EncounterHistoryLocation, typed as the plain `EncounterHistoryLocation` data type. */
  override toJSON(): plainTypes.EncounterHistoryLocation {
    return this.serialize() as plainTypes.EncounterHistoryLocation;
  }

  /** Location the encounter takes place (1..1) Created when absent. */
  getLocation(): Reference {
    if (this.location === undefined) {
      this.location = new Reference();
    }
    return this.location;
  }

  setLocation(location: Reference | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.) (0..1) Created when absent. */
  getForm(): CodeableConcept {
    if (this.form === undefined) {
      this.form = new CodeableConcept();
    }
    return this.form;
  }

  setForm(form: CodeableConcept | undefined): this {
    return this.setFieldValue('form', form);
  }

  hasForm(): boolean {
    return this.hasFieldValue('form');
  }
}

modelTypeRegistry.register('EncounterHistoryLocation', EncounterHistoryLocation, false);
