/**
 * FHIR R4 model classes generated from hl7.fhir.r4.core@4.0.1.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import * as valueSetCodes from './valueSetCodes';
import type * as plainTypes from '../classes/models-r4';
import { BackboneElement } from './backboneElement';
import { CodeableConcept } from './codeableConcept';
import { ContactPoint } from './contactPoint';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export class PractitionerRole extends DomainResource {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'identifier',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'identifier', typeCode: 'Identifier' }],
    },
    {
      elementName: 'active',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'active', typeCode: 'boolean' }],
    },
    {
      elementName: 'period',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'period', typeCode: 'Period' }],
    },
    {
      elementName: 'practitioner',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'practitioner', typeCode: 'Reference', targetResourceTypes: ['Practitioner'] },
      ],
    },
    {
      elementName: 'organization',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [
        { jsonKey: 'organization', typeCode: 'Reference', targetResourceTypes: ['Organization'] },
      ],
    },
    {
      elementName: 'code',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'code', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'specialty',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'specialty', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'location',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'location', typeCode: 'Reference', targetResourceTypes: ['Location'] }],
    },
    {
      elementName: 'healthcareService',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [
        {
          jsonKey: 'healthcareService',
          typeCode: 'Reference',
          targetResourceTypes: ['HealthcareService'],
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
      elementName: 'availableTime',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'availableTime', typeCode: 'PractitionerRoleAvailableTime' }],
    },
    {
      elementName: 'notAvailable',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'notAvailable', typeCode: 'PractitionerRoleNotAvailable' }],
    },
    {
      elementName: 'availabilityExceptions',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availabilityExceptions', typeCode: 'string' }],
    },
    {
      elementName: 'endpoint',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'endpoint', typeCode: 'Reference', targetResourceTypes: ['Endpoint'] }],
    },
  ];

  readonly resourceType = 'PractitionerRole';

  /** Business Identifiers that are specific to a role/location (0..*) */
  identifier?: Identifier[];

  /** Whether this practitioner role record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** The period during which the practitioner is authorized to perform in these role(s) (0..1) */
  period?: Period;

  /** Practitioner that is able to provide the defined services for the organization (0..1) */
  practitioner?: Reference;

  /** Organization where the roles are available (0..1) */
  organization?: Reference;

  /** Roles which this practitioner may perform (0..*) */
  code?: CodeableConcept[];

  /** Specific specialty of the practitioner (0..*) */
  specialty?: CodeableConcept[];

  /** The location(s) at which this practitioner provides care (0..*) */
  location?: Reference[];

  /** The list of healthcare services that this worker provides for this role's Organization/Location(s) (0..*) */
  healthcareService?: Reference[];

  /** Contact details that are specific to the role/location/service (0..*) */
  telecom?: ContactPoint[];

  /** Times the Service Site is available (0..*) */
  availableTime?: PractitionerRoleAvailableTime[];

  /** Not available during this time due to provided reason (0..*) */
  notAvailable?: PractitionerRoleNotAvailable[];

  /** Description of availability exceptions (0..1) */
  availabilityExceptions?: string;
  /** Id and extensions of the primitive `availabilityExceptions`. */
  _availabilityExceptions?: Element;

  /** Technical endpoints providing access to services operated for the practitioner with this role (0..*) */
  endpoint?: Reference[];

  override fhirType(): string {
    return 'PractitionerRole';
  }

  /** FHIR JSON for this PractitionerRole, typed as the plain `PractitionerRole` data type. */
  override toJSON(): plainTypes.PractitionerRole {
    return this.serialize() as plainTypes.PractitionerRole;
  }

  /** Business Identifiers that are specific to a role/location (0..*) Never undefined; an empty list is created when absent. */
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

  /** Whether this practitioner role record is in active use (0..1) */
  getActive(): boolean | undefined {
    return this.active;
  }

  /** Sets `active`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setActive(active: boolean | undefined): this {
    return this.setFieldValue('active', active);
  }

  hasActive(): boolean {
    return this.hasFieldValue('active');
  }

  /** The element carrying the id and extensions of `active`. Created when absent. */
  getActiveElement(): Element {
    if (this._active === undefined) {
      this._active = new Element();
    }
    return this._active;
  }

  setActiveElement(activeElement: Element | undefined): this {
    this._active = activeElement;
    return this;
  }

  /** The period during which the practitioner is authorized to perform in these role(s) (0..1) Created when absent. */
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

  /** Practitioner that is able to provide the defined services for the organization (0..1) Created when absent. */
  getPractitioner(): Reference {
    if (this.practitioner === undefined) {
      this.practitioner = new Reference();
    }
    return this.practitioner;
  }

  setPractitioner(practitioner: Reference | undefined): this {
    return this.setFieldValue('practitioner', practitioner);
  }

  hasPractitioner(): boolean {
    return this.hasFieldValue('practitioner');
  }

  /** Organization where the roles are available (0..1) Created when absent. */
  getOrganization(): Reference {
    if (this.organization === undefined) {
      this.organization = new Reference();
    }
    return this.organization;
  }

  setOrganization(organization: Reference | undefined): this {
    return this.setFieldValue('organization', organization);
  }

  hasOrganization(): boolean {
    return this.hasFieldValue('organization');
  }

  /** Roles which this practitioner may perform (0..*) Never undefined; an empty list is created when absent. */
  getCode(): CodeableConcept[] {
    if (this.code === undefined) {
      this.code = [];
    }
    return this.code;
  }

  setCode(code: CodeableConcept[] | undefined): this {
    return this.setFieldValue('code', code);
  }

  hasCode(): boolean {
    return this.hasFieldValue('code');
  }

  /** Appends a new, empty CodeableConcept to `code` and returns it so it can be filled in. */
  addCode(): CodeableConcept;
  /** Appends the given CodeableConcept to `code` and returns this object for chaining. */
  addCode(codeableConcept: CodeableConcept): this;
  addCode(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('code', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('code', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `code`. One is added when the list is empty. */
  getCodeFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCode()[0];
    return firstCodeableConcept === undefined ? this.addCode() : firstCodeableConcept;
  }

  /** Specific specialty of the practitioner (0..*) Never undefined; an empty list is created when absent. */
  getSpecialty(): CodeableConcept[] {
    if (this.specialty === undefined) {
      this.specialty = [];
    }
    return this.specialty;
  }

  setSpecialty(specialty: CodeableConcept[] | undefined): this {
    return this.setFieldValue('specialty', specialty);
  }

  hasSpecialty(): boolean {
    return this.hasFieldValue('specialty');
  }

  /** Appends a new, empty CodeableConcept to `specialty` and returns it so it can be filled in. */
  addSpecialty(): CodeableConcept;
  /** Appends the given CodeableConcept to `specialty` and returns this object for chaining. */
  addSpecialty(codeableConcept: CodeableConcept): this;
  addSpecialty(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('specialty', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('specialty', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `specialty`. One is added when the list is empty. */
  getSpecialtyFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getSpecialty()[0];
    return firstCodeableConcept === undefined ? this.addSpecialty() : firstCodeableConcept;
  }

  /** The location(s) at which this practitioner provides care (0..*) Never undefined; an empty list is created when absent. */
  getLocation(): Reference[] {
    if (this.location === undefined) {
      this.location = [];
    }
    return this.location;
  }

  setLocation(location: Reference[] | undefined): this {
    return this.setFieldValue('location', location);
  }

  hasLocation(): boolean {
    return this.hasFieldValue('location');
  }

  /** Appends a new, empty Reference to `location` and returns it so it can be filled in. */
  addLocation(): Reference;
  /** Appends the given Reference to `location` and returns this object for chaining. */
  addLocation(reference: Reference): this;
  addLocation(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('location', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('location', createdReference);
    return createdReference;
  }

  /** The first Reference of `location`. One is added when the list is empty. */
  getLocationFirstRep(): Reference {
    const firstReference = this.getLocation()[0];
    return firstReference === undefined ? this.addLocation() : firstReference;
  }

  /** The list of healthcare services that this worker provides for this role's Organization/Location(s) (0..*) Never undefined; an empty list is created when absent. */
  getHealthcareService(): Reference[] {
    if (this.healthcareService === undefined) {
      this.healthcareService = [];
    }
    return this.healthcareService;
  }

  setHealthcareService(healthcareService: Reference[] | undefined): this {
    return this.setFieldValue('healthcareService', healthcareService);
  }

  hasHealthcareService(): boolean {
    return this.hasFieldValue('healthcareService');
  }

  /** Appends a new, empty Reference to `healthcareService` and returns it so it can be filled in. */
  addHealthcareService(): Reference;
  /** Appends the given Reference to `healthcareService` and returns this object for chaining. */
  addHealthcareService(reference: Reference): this;
  addHealthcareService(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('healthcareService', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('healthcareService', createdReference);
    return createdReference;
  }

  /** The first Reference of `healthcareService`. One is added when the list is empty. */
  getHealthcareServiceFirstRep(): Reference {
    const firstReference = this.getHealthcareService()[0];
    return firstReference === undefined ? this.addHealthcareService() : firstReference;
  }

  /** Contact details that are specific to the role/location/service (0..*) Never undefined; an empty list is created when absent. */
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

  /** Times the Service Site is available (0..*) Never undefined; an empty list is created when absent. */
  getAvailableTime(): PractitionerRoleAvailableTime[] {
    if (this.availableTime === undefined) {
      this.availableTime = [];
    }
    return this.availableTime;
  }

  setAvailableTime(availableTime: PractitionerRoleAvailableTime[] | undefined): this {
    return this.setFieldValue('availableTime', availableTime);
  }

  hasAvailableTime(): boolean {
    return this.hasFieldValue('availableTime');
  }

  /** Appends a new, empty PractitionerRoleAvailableTime to `availableTime` and returns it so it can be filled in. */
  addAvailableTime(): PractitionerRoleAvailableTime;
  /** Appends the given PractitionerRoleAvailableTime to `availableTime` and returns this object for chaining. */
  addAvailableTime(practitionerRoleAvailableTime: PractitionerRoleAvailableTime): this;
  addAvailableTime(
    practitionerRoleAvailableTime?: PractitionerRoleAvailableTime
  ): PractitionerRoleAvailableTime | this {
    if (practitionerRoleAvailableTime !== undefined) {
      return this.addFieldValue('availableTime', practitionerRoleAvailableTime);
    }
    const createdPractitionerRoleAvailableTime = new PractitionerRoleAvailableTime();
    this.addFieldValue('availableTime', createdPractitionerRoleAvailableTime);
    return createdPractitionerRoleAvailableTime;
  }

  /** The first PractitionerRoleAvailableTime of `availableTime`. One is added when the list is empty. */
  getAvailableTimeFirstRep(): PractitionerRoleAvailableTime {
    const firstPractitionerRoleAvailableTime = this.getAvailableTime()[0];
    return firstPractitionerRoleAvailableTime === undefined
      ? this.addAvailableTime()
      : firstPractitionerRoleAvailableTime;
  }

  /** Not available during this time due to provided reason (0..*) Never undefined; an empty list is created when absent. */
  getNotAvailable(): PractitionerRoleNotAvailable[] {
    if (this.notAvailable === undefined) {
      this.notAvailable = [];
    }
    return this.notAvailable;
  }

  setNotAvailable(notAvailable: PractitionerRoleNotAvailable[] | undefined): this {
    return this.setFieldValue('notAvailable', notAvailable);
  }

  hasNotAvailable(): boolean {
    return this.hasFieldValue('notAvailable');
  }

  /** Appends a new, empty PractitionerRoleNotAvailable to `notAvailable` and returns it so it can be filled in. */
  addNotAvailable(): PractitionerRoleNotAvailable;
  /** Appends the given PractitionerRoleNotAvailable to `notAvailable` and returns this object for chaining. */
  addNotAvailable(practitionerRoleNotAvailable: PractitionerRoleNotAvailable): this;
  addNotAvailable(
    practitionerRoleNotAvailable?: PractitionerRoleNotAvailable
  ): PractitionerRoleNotAvailable | this {
    if (practitionerRoleNotAvailable !== undefined) {
      return this.addFieldValue('notAvailable', practitionerRoleNotAvailable);
    }
    const createdPractitionerRoleNotAvailable = new PractitionerRoleNotAvailable();
    this.addFieldValue('notAvailable', createdPractitionerRoleNotAvailable);
    return createdPractitionerRoleNotAvailable;
  }

  /** The first PractitionerRoleNotAvailable of `notAvailable`. One is added when the list is empty. */
  getNotAvailableFirstRep(): PractitionerRoleNotAvailable {
    const firstPractitionerRoleNotAvailable = this.getNotAvailable()[0];
    return firstPractitionerRoleNotAvailable === undefined
      ? this.addNotAvailable()
      : firstPractitionerRoleNotAvailable;
  }

  /** Description of availability exceptions (0..1) */
  getAvailabilityExceptions(): string | undefined {
    return this.availabilityExceptions;
  }

  /** Sets `availabilityExceptions`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setAvailabilityExceptions(availabilityExceptions: string | undefined): this {
    return this.setFieldValue('availabilityExceptions', availabilityExceptions);
  }

  hasAvailabilityExceptions(): boolean {
    return this.hasFieldValue('availabilityExceptions');
  }

  /** The element carrying the id and extensions of `availabilityExceptions`. Created when absent. */
  getAvailabilityExceptionsElement(): Element {
    if (this._availabilityExceptions === undefined) {
      this._availabilityExceptions = new Element();
    }
    return this._availabilityExceptions;
  }

  setAvailabilityExceptionsElement(availabilityExceptionsElement: Element | undefined): this {
    this._availabilityExceptions = availabilityExceptionsElement;
    return this;
  }

  /** Technical endpoints providing access to services operated for the practitioner with this role (0..*) Never undefined; an empty list is created when absent. */
  getEndpoint(): Reference[] {
    if (this.endpoint === undefined) {
      this.endpoint = [];
    }
    return this.endpoint;
  }

  setEndpoint(endpoint: Reference[] | undefined): this {
    return this.setFieldValue('endpoint', endpoint);
  }

  hasEndpoint(): boolean {
    return this.hasFieldValue('endpoint');
  }

  /** Appends a new, empty Reference to `endpoint` and returns it so it can be filled in. */
  addEndpoint(): Reference;
  /** Appends the given Reference to `endpoint` and returns this object for chaining. */
  addEndpoint(reference: Reference): this;
  addEndpoint(reference?: Reference): Reference | this {
    if (reference !== undefined) {
      return this.addFieldValue('endpoint', reference);
    }
    const createdReference = new Reference();
    this.addFieldValue('endpoint', createdReference);
    return createdReference;
  }

  /** The first Reference of `endpoint`. One is added when the list is empty. */
  getEndpointFirstRep(): Reference {
    const firstReference = this.getEndpoint()[0];
    return firstReference === undefined ? this.addEndpoint() : firstReference;
  }
}

modelTypeRegistry.register('PractitionerRole', PractitionerRole, true);

/** True when the value is a PractitionerRole model instance. */
export function isPractitionerRole(candidate: unknown): candidate is PractitionerRole {
  return candidate instanceof PractitionerRole;
}

/**
 * Times the Service Site is available
 */
export class PractitionerRoleAvailableTime extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'daysOfWeek',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'daysOfWeek', typeCode: 'code', allowedCodes: valueSetCodes.DaysOfWeek }],
    },
    {
      elementName: 'allDay',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'allDay', typeCode: 'boolean' }],
    },
    {
      elementName: 'availableStartTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availableStartTime', typeCode: 'time' }],
    },
    {
      elementName: 'availableEndTime',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'availableEndTime', typeCode: 'time' }],
    },
  ];

  /** mon | tue | wed | thu | fri | sat | sun (0..*) */
  daysOfWeek?: valueSetCodes.DaysOfWeek[];
  /** Id and extensions of the primitive `daysOfWeek`. */
  _daysOfWeek?: (Element | null)[];

  /** Always available? e.g. 24 hour service (0..1) */
  allDay?: boolean;
  /** Id and extensions of the primitive `allDay`. */
  _allDay?: Element;

  /** Opening time of day (ignored if allDay = true) (0..1) */
  availableStartTime?: string;
  /** Id and extensions of the primitive `availableStartTime`. */
  _availableStartTime?: Element;

  /** Closing time of day (ignored if allDay = true) (0..1) */
  availableEndTime?: string;
  /** Id and extensions of the primitive `availableEndTime`. */
  _availableEndTime?: Element;

  override fhirType(): string {
    return 'PractitionerRole.availableTime';
  }

  /** FHIR JSON for this PractitionerRoleAvailableTime, typed as the plain `PractitionerRoleAvailableTime` data type. */
  override toJSON(): plainTypes.PractitionerRoleAvailableTime {
    return this.serialize() as plainTypes.PractitionerRoleAvailableTime;
  }

  /** mon | tue | wed | thu | fri | sat | sun (0..*) Never undefined; an empty list is created when absent. */
  getDaysOfWeek(): valueSetCodes.DaysOfWeek[] {
    if (this.daysOfWeek === undefined) {
      this.daysOfWeek = [];
    }
    return this.daysOfWeek;
  }

  setDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek[] | undefined): this {
    return this.setFieldValue('daysOfWeek', daysOfWeek);
  }

  hasDaysOfWeek(): boolean {
    return this.hasFieldValue('daysOfWeek');
  }

  /** Appends one value to `daysOfWeek`. Throws a FhirModelError when it is not a valid FHIR code. */
  addDaysOfWeek(daysOfWeek: valueSetCodes.DaysOfWeek): this {
    return this.addFieldValue('daysOfWeek', daysOfWeek);
  }

  /** Always available? e.g. 24 hour service (0..1) */
  getAllDay(): boolean | undefined {
    return this.allDay;
  }

  /** Sets `allDay`. Throws a FhirModelError when the value is not a valid FHIR boolean. */
  setAllDay(allDay: boolean | undefined): this {
    return this.setFieldValue('allDay', allDay);
  }

  hasAllDay(): boolean {
    return this.hasFieldValue('allDay');
  }

  /** The element carrying the id and extensions of `allDay`. Created when absent. */
  getAllDayElement(): Element {
    if (this._allDay === undefined) {
      this._allDay = new Element();
    }
    return this._allDay;
  }

  setAllDayElement(allDayElement: Element | undefined): this {
    this._allDay = allDayElement;
    return this;
  }

  /** Opening time of day (ignored if allDay = true) (0..1) */
  getAvailableStartTime(): string | undefined {
    return this.availableStartTime;
  }

  /** Sets `availableStartTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setAvailableStartTime(availableStartTime: string | undefined): this {
    return this.setFieldValue('availableStartTime', availableStartTime);
  }

  hasAvailableStartTime(): boolean {
    return this.hasFieldValue('availableStartTime');
  }

  /** The element carrying the id and extensions of `availableStartTime`. Created when absent. */
  getAvailableStartTimeElement(): Element {
    if (this._availableStartTime === undefined) {
      this._availableStartTime = new Element();
    }
    return this._availableStartTime;
  }

  setAvailableStartTimeElement(availableStartTimeElement: Element | undefined): this {
    this._availableStartTime = availableStartTimeElement;
    return this;
  }

  /** Closing time of day (ignored if allDay = true) (0..1) */
  getAvailableEndTime(): string | undefined {
    return this.availableEndTime;
  }

  /** Sets `availableEndTime`. Throws a FhirModelError when the value is not a valid FHIR time. */
  setAvailableEndTime(availableEndTime: string | undefined): this {
    return this.setFieldValue('availableEndTime', availableEndTime);
  }

  hasAvailableEndTime(): boolean {
    return this.hasFieldValue('availableEndTime');
  }

  /** The element carrying the id and extensions of `availableEndTime`. Created when absent. */
  getAvailableEndTimeElement(): Element {
    if (this._availableEndTime === undefined) {
      this._availableEndTime = new Element();
    }
    return this._availableEndTime;
  }

  setAvailableEndTimeElement(availableEndTimeElement: Element | undefined): this {
    this._availableEndTime = availableEndTimeElement;
    return this;
  }
}

modelTypeRegistry.register('PractitionerRoleAvailableTime', PractitionerRoleAvailableTime, false);

/**
 * Not available during this time due to provided reason
 */
export class PractitionerRoleNotAvailable extends BackboneElement {
  static override readonly ownFields: readonly FieldDefinition[] = [
    {
      elementName: 'description',
      minimum: 1,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'description', typeCode: 'string' }],
    },
    {
      elementName: 'during',
      minimum: 0,
      maximum: 1,
      isList: false,
      types: [{ jsonKey: 'during', typeCode: 'Period' }],
    },
  ];

  /** Reason presented to the user explaining why time not available (1..1) */
  description?: string;
  /** Id and extensions of the primitive `description`. */
  _description?: Element;

  /** Service not available from this date (0..1) */
  during?: Period;

  override fhirType(): string {
    return 'PractitionerRole.notAvailable';
  }

  /** FHIR JSON for this PractitionerRoleNotAvailable, typed as the plain `PractitionerRoleNotAvailable` data type. */
  override toJSON(): plainTypes.PractitionerRoleNotAvailable {
    return this.serialize() as plainTypes.PractitionerRoleNotAvailable;
  }

  /** Reason presented to the user explaining why time not available (1..1) */
  getDescription(): string | undefined {
    return this.description;
  }

  /** Sets `description`. Throws a FhirModelError when the value is not a valid FHIR string. */
  setDescription(description: string | undefined): this {
    return this.setFieldValue('description', description);
  }

  hasDescription(): boolean {
    return this.hasFieldValue('description');
  }

  /** The element carrying the id and extensions of `description`. Created when absent. */
  getDescriptionElement(): Element {
    if (this._description === undefined) {
      this._description = new Element();
    }
    return this._description;
  }

  setDescriptionElement(descriptionElement: Element | undefined): this {
    this._description = descriptionElement;
    return this;
  }

  /** Service not available from this date (0..1) Created when absent. */
  getDuring(): Period {
    if (this.during === undefined) {
      this.during = new Period();
    }
    return this.during;
  }

  setDuring(during: Period | undefined): this {
    return this.setFieldValue('during', during);
  }

  hasDuring(): boolean {
    return this.hasFieldValue('during');
  }
}

modelTypeRegistry.register('PractitionerRoleNotAvailable', PractitionerRoleNotAvailable, false);
