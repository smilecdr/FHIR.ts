/**
 * FHIR R5 model classes generated from hl7.fhir.r5.core@5.0.0.
 * Do not edit by hand. Change tools/generator and run `npm run generate` instead.
 */

import type { FieldDefinition } from '../../library/model';
import { modelTypeRegistry } from './modelTypeRegistry';
import type * as plainTypes from '../models';
import { Availability } from './availability';
import { CodeableConcept } from './codeableConcept';
import { DomainResource } from './domainResource';
import { Element } from './element';
import { ExtendedContactDetail } from './extendedContactDetail';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform, or has performed at an organization during a period of time.
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
      elementName: 'contact',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'contact', typeCode: 'ExtendedContactDetail' }],
    },
    {
      elementName: 'characteristic',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'characteristic', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'communication',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'communication', typeCode: 'CodeableConcept' }],
    },
    {
      elementName: 'availability',
      minimum: 0,
      maximum: Infinity,
      isList: true,
      types: [{ jsonKey: 'availability', typeCode: 'Availability' }],
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

  /** Identifiers for a role/location (0..*) */
  identifier?: Identifier[];

  /** Whether this practitioner role record is in active use (0..1) */
  active?: boolean;
  /** Id and extensions of the primitive `active`. */
  _active?: Element;

  /** The period during which the practitioner is authorized to perform in these role(s) (0..1) */
  period?: Period;

  /** Practitioner that provides services for the organization (0..1) */
  practitioner?: Reference;

  /** Organization where the roles are available (0..1) */
  organization?: Reference;

  /** Roles which this practitioner may perform (0..*) */
  code?: CodeableConcept[];

  /** Specific specialty of the practitioner (0..*) */
  specialty?: CodeableConcept[];

  /** Location(s) where the practitioner provides care (0..*) */
  location?: Reference[];

  /** Healthcare services provided for this role's Organization/Location(s) (0..*) */
  healthcareService?: Reference[];

  /** Official contact details relating to this PractitionerRole (0..*) */
  contact?: ExtendedContactDetail[];

  /** Collection of characteristics (attributes) (0..*) */
  characteristic?: CodeableConcept[];

  /** A language the practitioner (in this role) can use in patient communication (0..*) */
  communication?: CodeableConcept[];

  /** Times the Practitioner is available at this location and/or healthcare service (including exceptions) (0..*) */
  availability?: Availability[];

  /** Endpoints for interacting with the practitioner in this role (0..*) */
  endpoint?: Reference[];

  override fhirType(): string {
    return 'PractitionerRole';
  }

  /** FHIR JSON for this PractitionerRole, typed as the plain `PractitionerRole` data type. */
  override toJSON(): plainTypes.PractitionerRole {
    return this.serialize() as plainTypes.PractitionerRole;
  }

  /** Identifiers for a role/location (0..*) Never undefined; an empty list is created when absent. */
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

  /** Practitioner that provides services for the organization (0..1) Created when absent. */
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

  /** Location(s) where the practitioner provides care (0..*) Never undefined; an empty list is created when absent. */
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

  /** Healthcare services provided for this role's Organization/Location(s) (0..*) Never undefined; an empty list is created when absent. */
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

  /** Official contact details relating to this PractitionerRole (0..*) Never undefined; an empty list is created when absent. */
  getContact(): ExtendedContactDetail[] {
    if (this.contact === undefined) {
      this.contact = [];
    }
    return this.contact;
  }

  setContact(contact: ExtendedContactDetail[] | undefined): this {
    return this.setFieldValue('contact', contact);
  }

  hasContact(): boolean {
    return this.hasFieldValue('contact');
  }

  /** Appends a new, empty ExtendedContactDetail to `contact` and returns it so it can be filled in. */
  addContact(): ExtendedContactDetail;
  /** Appends the given ExtendedContactDetail to `contact` and returns this object for chaining. */
  addContact(extendedContactDetail: ExtendedContactDetail): this;
  addContact(extendedContactDetail?: ExtendedContactDetail): ExtendedContactDetail | this {
    if (extendedContactDetail !== undefined) {
      return this.addFieldValue('contact', extendedContactDetail);
    }
    const createdExtendedContactDetail = new ExtendedContactDetail();
    this.addFieldValue('contact', createdExtendedContactDetail);
    return createdExtendedContactDetail;
  }

  /** The first ExtendedContactDetail of `contact`. One is added when the list is empty. */
  getContactFirstRep(): ExtendedContactDetail {
    const firstExtendedContactDetail = this.getContact()[0];
    return firstExtendedContactDetail === undefined
      ? this.addContact()
      : firstExtendedContactDetail;
  }

  /** Collection of characteristics (attributes) (0..*) Never undefined; an empty list is created when absent. */
  getCharacteristic(): CodeableConcept[] {
    if (this.characteristic === undefined) {
      this.characteristic = [];
    }
    return this.characteristic;
  }

  setCharacteristic(characteristic: CodeableConcept[] | undefined): this {
    return this.setFieldValue('characteristic', characteristic);
  }

  hasCharacteristic(): boolean {
    return this.hasFieldValue('characteristic');
  }

  /** Appends a new, empty CodeableConcept to `characteristic` and returns it so it can be filled in. */
  addCharacteristic(): CodeableConcept;
  /** Appends the given CodeableConcept to `characteristic` and returns this object for chaining. */
  addCharacteristic(codeableConcept: CodeableConcept): this;
  addCharacteristic(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('characteristic', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('characteristic', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `characteristic`. One is added when the list is empty. */
  getCharacteristicFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCharacteristic()[0];
    return firstCodeableConcept === undefined ? this.addCharacteristic() : firstCodeableConcept;
  }

  /** A language the practitioner (in this role) can use in patient communication (0..*) Never undefined; an empty list is created when absent. */
  getCommunication(): CodeableConcept[] {
    if (this.communication === undefined) {
      this.communication = [];
    }
    return this.communication;
  }

  setCommunication(communication: CodeableConcept[] | undefined): this {
    return this.setFieldValue('communication', communication);
  }

  hasCommunication(): boolean {
    return this.hasFieldValue('communication');
  }

  /** Appends a new, empty CodeableConcept to `communication` and returns it so it can be filled in. */
  addCommunication(): CodeableConcept;
  /** Appends the given CodeableConcept to `communication` and returns this object for chaining. */
  addCommunication(codeableConcept: CodeableConcept): this;
  addCommunication(codeableConcept?: CodeableConcept): CodeableConcept | this {
    if (codeableConcept !== undefined) {
      return this.addFieldValue('communication', codeableConcept);
    }
    const createdCodeableConcept = new CodeableConcept();
    this.addFieldValue('communication', createdCodeableConcept);
    return createdCodeableConcept;
  }

  /** The first CodeableConcept of `communication`. One is added when the list is empty. */
  getCommunicationFirstRep(): CodeableConcept {
    const firstCodeableConcept = this.getCommunication()[0];
    return firstCodeableConcept === undefined ? this.addCommunication() : firstCodeableConcept;
  }

  /** Times the Practitioner is available at this location and/or healthcare service (including exceptions) (0..*) Never undefined; an empty list is created when absent. */
  getAvailability(): Availability[] {
    if (this.availability === undefined) {
      this.availability = [];
    }
    return this.availability;
  }

  setAvailability(availability: Availability[] | undefined): this {
    return this.setFieldValue('availability', availability);
  }

  hasAvailability(): boolean {
    return this.hasFieldValue('availability');
  }

  /** Appends a new, empty Availability to `availability` and returns it so it can be filled in. */
  addAvailability(): Availability;
  /** Appends the given Availability to `availability` and returns this object for chaining. */
  addAvailability(availability: Availability): this;
  addAvailability(availability?: Availability): Availability | this {
    if (availability !== undefined) {
      return this.addFieldValue('availability', availability);
    }
    const createdAvailability = new Availability();
    this.addFieldValue('availability', createdAvailability);
    return createdAvailability;
  }

  /** The first Availability of `availability`. One is added when the list is empty. */
  getAvailabilityFirstRep(): Availability {
    const firstAvailability = this.getAvailability()[0];
    return firstAvailability === undefined ? this.addAvailability() : firstAvailability;
  }

  /** Endpoints for interacting with the practitioner in this role (0..*) Never undefined; an empty list is created when absent. */
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
